import { LoaderFunctionArgs } from "@remix-run/node";
import { authLoader } from "../auth.server";

export async function loader(args: LoaderFunctionArgs) {
  return authLoader(args, () => {
    return { isLoggedIn: true };
  });
}

export default function Index() {
  return <div>x</div>;
}
