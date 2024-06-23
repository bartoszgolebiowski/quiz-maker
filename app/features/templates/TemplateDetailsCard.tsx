import React from "react";
import InputControll from "~/components/input/InputControll";
import TextAreaControll from "~/components/input/TextAreaControll";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

type Props = {
  readOnly?: boolean;
  children?: React.ReactNode;
  title: string;
  description: string;
  disabled?: boolean;
  onChange?: (key: "title" | "description", value: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const TemplateDetailsCard = (props: Props) => {
  const {
    title,
    description,
    children,
    onChange = noop,
    readOnly = false,
    disabled = false,
  } = props;

  return (
    <Card className="mb-10">
      <fieldset disabled={disabled}>
        <CardHeader>
          <h3 className="text-xl font-semibold tracking-tight">Details</h3>
        </CardHeader>
        <CardContent>
          <InputControll
            type="text"
            id="title"
            value={title}
            onChange={(e) => onChange("title", e.target.value)}
            label="Title *"
            required
            innerProps={{
              wrapperProps: {
                className: "flex-grow mb-2",
              },
            }}
            disabled={readOnly}
            maxLength={255}
          />
          <TextAreaControll
            id="description"
            label="Description"
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
            className="h-24"
            disabled={readOnly}
            maxLength={255}
          />
          {children}
        </CardContent>
      </fieldset>
    </Card>
  );
};

export default React.memo(
  TemplateDetailsCard,
  (prev, next) =>
    prev.title === next.title &&
    prev.description === next.description &&
    prev.disabled === next.disabled
);
