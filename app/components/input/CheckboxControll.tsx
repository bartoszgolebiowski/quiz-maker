import clsx from "clsx";
import * as React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

type Props = React.ComponentProps<typeof Checkbox> & {
  label?: string;
  innerProps?: {
    wrapperProps?: React.ComponentProps<"div">;
    labelProps?: React.ComponentProps<typeof Label>;
  };
};

const CheckboxControll = (props: Props) => {
  const {
    innerProps = {
      wrapperProps: {},
      labelProps: {},
    },
    label,
    ...rest
  } = props;

  return (
    <div
      {...innerProps.wrapperProps}
      className={clsx("w-full", innerProps?.wrapperProps?.className)}
    >
      {label ? (
        <Label {...innerProps.labelProps} htmlFor={rest.id}>
          {label}
        </Label>
      ) : null}
      <Checkbox {...rest} />
    </div>
  );
};

CheckboxControll.displayName = "CheckboxControll";
export default CheckboxControll;
