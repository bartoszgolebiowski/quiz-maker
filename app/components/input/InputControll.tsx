import clsx from "clsx";
import * as React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  label?: string;
  innerProps?: {
    wrapperProps?: React.ComponentProps<"div">;
    labelProps?: React.ComponentProps<typeof Label>;
  };
};

const InputControll = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const {
      innerProps = {
        wrapperProps: {},
        labelProps: {},
      },
      className,
      errorText,
      label,
      ...rest
    } = props;

    return (
      <div {...innerProps.wrapperProps}>
        {label ? (
          <Label
            className={clsx(innerProps?.labelProps?.className, {
              ["text-red-600"]: errorText,
            })}
            htmlFor={rest.id}
          >
            {label}
          </Label>
        ) : null}
        <Input
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

InputControll.displayName = "InputControll";
export default InputControll;
