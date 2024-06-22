import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "./ui/button";
import React, { useEffect } from "react";
import clsx from "clsx";
import { toast } from "sonner";

type Props = React.ComponentProps<typeof Card> & {
  error: {
    message: string;
    formattedErrors?: {
      field: string;
      errors: string[];
    }[];
  };
};

const GenericCardServerErrors = (props: Props) => {
  const { error, className, ...rest } = props;
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    toast.error(error.message, {
      description: error.formattedErrors
        ? error.formattedErrors.map((issue) => (
            <>
              <h5>{issue.field}</h5>
              <ul>
                {issue.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </>
          ))
        : null,
    });
  }, []);

  if (!show) return null;

  return (
    <Card {...rest} className={clsx("mb-10 mt-10", className)}>
      <CardHeader>
        <h3 className="text-xl font-semibold tracking-tight">
          Error: {error.message}
        </h3>
      </CardHeader>
      {error.formattedErrors ? (
        <CardContent>
          {error.formattedErrors.map((issue) => (
            <Alert variant="destructive" className="mb-2" key={issue.field}>
              <AlertTitle>{issue.field}</AlertTitle>
              <AlertDescription>{issue.errors.join(", ")}</AlertDescription>
            </Alert>
          ))}
        </CardContent>
      ) : null}
      <CardFooter>
        <div className="ml-auto">
          <Button variant="destructive" onClick={handleClose}>
            Close
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GenericCardServerErrors;
