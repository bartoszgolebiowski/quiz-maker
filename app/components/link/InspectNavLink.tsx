import { NavLink } from "@remix-run/react";
import React from "react";
import Info from "../icons/Info";

const InspectNavLink = (props: React.ComponentProps<typeof NavLink>) => {
  const { children, ...rest } = props;
  return (
    <NavLink {...rest} preventScrollReset>
      <Info />
    </NavLink>
  );
};

export default InspectNavLink;
