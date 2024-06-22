import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <div>
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Exam Expired
      </h1>
      <p>Sorry, this exam has expired. Please contact your teacher.</p>
      <Link to="/join">
        <Button>Join </Button>
      </Link>
    </div>
  );
}
