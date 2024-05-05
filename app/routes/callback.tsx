import { LoaderFunctionArgs } from "@remix-run/node";
import { loginRequiredLoader } from "../auth.server";
import { useLoaderData } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  const user = await loginRequiredLoader(args);
  if (user) {
    return { isLoggedIn: true };
  }
  return { isLoggedIn: false };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  if (data.isLoggedIn) {
    return <div>You are logged in</div>;
  }
  return <div>Redirecting...</div>;
}
