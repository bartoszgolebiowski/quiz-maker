import {
  useRouteError,
  useRevalidator,
  isRouteErrorResponse,
  ErrorResponse,
} from "@remix-run/react";
import { Button } from "./ui/button";
import React from "react";

type Props = {
  Error400?: (props: { error: ErrorResponse }) => React.ReactElement;
};

function GenericErrorBoundary(props: Props) {
  const { Error400 } = props;
  const error = useRouteError();
  const revalidator = useRevalidator();
  const isSubmitting = revalidator.state !== "idle";
  const handleRetry = () => revalidator.revalidate();

  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      if (Error400) {
        return <Error400 error={error} />;
      }
    }
    if (error.status === 404) {
      return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {error.data?.message ?? "Not found"}
        </h2>
      );
    }
    if (error.status === 500) {
      return (
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {error.data?.message ?? "Something went wrong"}
          </h2>
          <Button onClick={handleRetry} disabled={isSubmitting}>
            Try again
          </Button>
        </div>
      );
    }
  }

  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Something went wrong
      </h2>
      <Button onClick={handleRetry} disabled={isSubmitting}>
        Try again
      </Button>
    </div>
  );
}

export default GenericErrorBoundary;
