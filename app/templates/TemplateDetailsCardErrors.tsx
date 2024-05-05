import React from "react";
import { Alert, AlertTitle } from "~/components/ui/alert";

type Props = {
  title: string;
};

const TemplateDetailsCardErrors = (props: Props) => {
  const { title } = props;

  if (title === "") {
    return (
      <Alert
        variant="destructive"
        className="mt-2"
        role="alert"
        aria-label={`title field`}
      >
        {" "}
        <AlertTitle>Title is required</AlertTitle>
      </Alert>
    );
  }

  return <></>;
};

export default React.memo(
  TemplateDetailsCardErrors,
  (prev, next) => prev.title === next.title
);
