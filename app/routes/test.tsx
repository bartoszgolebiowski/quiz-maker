import { LoaderFunctionArgs } from "@remix-run/node";
import { authLoader } from "../auth.server";
import { useLoaderData } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  return authLoader(args, () => {
    return { isLoggedIn: true };
  });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  if (data.isLoggedIn) {
    return <div>You are logged in</div>;
  }
  return <div>Redirecting...</div>;
}
