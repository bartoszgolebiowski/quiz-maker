import clsx from "clsx";
import * as React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = React.ComponentProps<typeof Select> & {
  errorText?: string;
  id?: string;
  children?: React.ReactNode;
  label?: string;
  innerProps?: {
    wrapperProps?: React.ComponentProps<"div">;
    labelProps?: React.ComponentProps<typeof Label>;
  };
};

const SelectControll = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const {
      innerProps = {
        wrapperProps: {},
        labelProps: {},
      },
      errorText,
      label,
      children,
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
        <Select {...rest}>
          <SelectTrigger
            ref={ref}
            id={rest.id}
            className={clsx({
              ["border-red-600 border-2"]: errorText,
            })}
          >
            <SelectValue placeholder="Pick one" />
          </SelectTrigger>
          <SelectContent>{children}</SelectContent>
        </Select>
        {errorText ? <p className="text-sm text-red-600">{errorText}</p> : null}
      </div>
    );
  }
);

SelectControll.displayName = "SelectControll";
export default SelectControll;
