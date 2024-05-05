import clsx from "clsx";
import * as React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

type Props = React.ComponentProps<typeof Textarea> & {
  errorText?: string;
  label?: string;
  innerProps?: {
    wrapperProps?: React.ComponentProps<"div">;
    labelProps?: React.ComponentProps<typeof Label>;
  };
};

const TextAreaControll = React.forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => {
    const {
      innerProps = {
        wrapperProps: {},
        labelProps: {},
      },
      errorText,
      className,
      label,
      ...rest
    } = props;

    return (
      <div
        {...innerProps.wrapperProps}
        className={clsx("w-full", innerProps?.wrapperProps?.className)}
      >
        <Label
          className={clsx(innerProps?.wrapperProps?.className, {
            ["text-red-600"]: errorText,
          })}
          htmlFor={rest.id}
        >
          {label}
        </Label>
        <Textarea
          ref={ref}
          className={clsx(className, {
            ["border-red-600 border-2"]: errorText,
          })}
          {...rest}
        />
        {errorText ? <p className="text-sm text-red-600">{errorText}</p> : null}
      </div>
    );
  }
);

export default TextAreaControll;
