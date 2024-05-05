/* eslint-disable no-undef */
import { redirect, createCookie } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
const cognitoDomain = process.env.COGNITO_DOMAIN;
const clientId = process.env.COGNITO_USER_POOL_CLIENT_ID;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
if (!cognitoDomain) {
  throw new Error("COGNITO_DOMAIN must be set");
}
if (!clientId) {
  throw new Error("CLIENT_ID must be set");
}

const cookieSettings = {
  maxAge: 60 * 60 * 30,
  secure: process.env.NODE_ENV === "production",
  secrets: [sessionSecret],
  httpOnly: true,
};

const cookieAccessToken = createCookie("cognitoAccessToken", cookieSettings);
const cookieIdToken = createCookie("cognitoIdToken", cookieSettings);
const cookieRefreshToken = createCookie("cognitoRefreshToken", cookieSettings);

async function authenticate(request) {
  const url = new URL(request.url);
  const redirectUri = url.origin + "/callback";
  const currentLocation = url.origin + url.pathname;
  const code = url.searchParams.get("code");

  const headers = new Headers();
  let user = null;
  if (code) {
    //If the url has a code, we redirected the user to the cognito and they were authenticated
    const tokenResponse = await getToken(code, redirectUri);
    if (tokenResponse.status === 200) {
      const json = await tokenResponse.json();
      const { access_token, id_token, refresh_token } = json;
      user = await getUser(access_token);
      headers.append(
        "Set-cookie",
        await cookieAccessToken.serialize({
          access_token,
        })
      );
      headers.append(
        "Set-cookie",
        await cookieIdToken.serialize({
          id_token,
        })
      );
      headers.append(
        "Set-cookie",
        await cookieRefreshToken.serialize({
          refresh_token,
        })
      );
    }
  }
  //The url does not have a code, so this is the first time we are hitting the login page
  //First try to get a user from an access token saved as a cookie
  if (!user) {
    user = await hasValidAccessToken(request);
    if (!user) {
      //Then try to refresh the access token from a refresh token saved as a cookie
      const { accessToken, idToken, refreshToken } = await refreshAccessToken(
        request
      );
      if (accessToken) {
        user = await getUser(accessToken);
        if (user) {
          headers.append(
            "Set-cookie",
            await cookieAccessToken.serialize({
              access_token: accessToken,
            })
          );
          headers.append(
            "Set-cookie",
            await cookieIdToken.serialize({
              id_token: idToken,
            })
          );
          headers.append(
            "Set-cookie",
            await cookieRefreshToken.serialize({
              refresh_token: refreshToken,
            })
          );

          const state = url.searchParams.get("state");
          if (state) {
            const finalRedirectTo = decodeURIComponent(state);
            console.log("finalRedirectTo :>> ", finalRedirectTo);
            return redirect(finalRedirectTo, { headers });
          }
          return null;
        }
      }
    }
    if (!user) {
      //if we still have no user then send them to the cognito login page
      const uri = `http://${cognitoDomain}/login?client_id=${clientId}&response_type=code&scope=email+openid&redirect_uri=${redirectUri}&state=${currentLocation}`;
      return redirect(uri);
    }
  }
  if (user) {
    //TODO Persist the user in the session
    const state = url.searchParams.get("state");
    if (state) {
      const finalRedirectTo = decodeURIComponent(state);
      console.log("finalRedirectTo :>> ", finalRedirectTo);
      return redirect(finalRedirectTo, { headers });
    }
    return null;
  }

  throw new Error("User not authenticated");
}

//Make the call to cognito to get the token
async function getToken(code, redirectUri) {
  const uri = `https://${cognitoDomain}/oauth2/token`;
  const body = {
    grant_type: "authorization_code",
    client_id: clientId,
    redirect_uri: redirectUri,
    code,
  };
  return (response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body),
  }));
}

//Get the user info. If this call succeeds, the user is authenticated
async function getUser(access_token) {
  const uri = `https://${cognitoDomain}/oauth2/userInfo`;

  const response = await fetch(uri, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    return null;
  }
}

//Does the user have a valid access token? If so, return the user info
async function hasValidAccessToken(request) {
  const cookieHeaders = request.headers.get("Cookie");
  if (cookieHeaders) {
    const cookieAccessTokenValue = await (cookieAccessToken.parse(
      cookieHeaders
    ) || {});
    if (cookieAccessTokenValue.access_token) {
      return await getUser(cookieAccessTokenValue.access_token);
    }
  }
  return null;
}

async function refreshAccessToken(request) {
  const url = new URL(request.url);
  const redirectUri = url.origin + "/callback";

  const ret = {
    accessToken: undefined,
    idToken: undefined,
    refreshToken: undefined,
  };

  const cookieHeaders = request.headers.get("Cookie");
  if (cookieHeaders) {
    const cookieRefreshTokenValue = await (cookieRefreshToken.parse(
      cookieHeaders
    ) || {});
    if (cookieRefreshTokenValue.refresh_token) {
      const uri = `https://${cognitoDomain}/oauth2/token`;
      const body = {
        grant_type: "refresh_token",
        client_id: clientId,
        redirect_uri: redirectUri,
        refresh_token: cookieRefreshTokenValue.refresh_token,
      };
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
      });
      if (response.status === 200) {
        const json = await response.json();
        const { access_token, id_token, refresh_token } = json;
        ret.accessToken = access_token;
        ret.idToken = id_token;
        ret.refreshToken = refresh_token;
      }
    }
  }
  return ret;
}

/**

 * @param {import('@remix-run/node').LoaderFunctionArgs} input - The input arguments.
 * @param {import('@remix-run/node').LoaderFunction} callback - The callback function.
 * @returns {ReturnType<import('@remix-run/node').LoaderFunction>} - The redirect URI or the result of the callback.
 */
export const authLoader = async (input, callback) => {
  const redirectUri = await authenticate(input.request);
  if (redirectUri) {
    return redirectUri;
  }
  return callback(input);
};
