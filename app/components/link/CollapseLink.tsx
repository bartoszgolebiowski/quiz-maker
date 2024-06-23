import { NavLink } from "@remix-run/react";
import React from "react";
import Up from "../icons/Up";

const CollapseLink = (props: React.ComponentProps<typeof NavLink>) => {
  const { children, ...rest } = props;
  return (
    <NavLink {...rest} preventScrollReset>
      <Up />
    </NavLink>
  );
};

export default CollapseLink;
