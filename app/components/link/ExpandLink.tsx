import { NavLink } from "@remix-run/react";
import React from "react";
import Down from "../icons/Down";

const ExpandLink = (props: React.ComponentProps<typeof NavLink>) => {
  const { children, ...rest } = props;
  return (
    <NavLink {...rest} preventScrollReset>
      <Down />
    </NavLink>
  );
};

export default ExpandLink;
