import { NavLink } from "@remix-run/react";
import React from "react";
import Edit from "../icons/Edit";

const EditNavLink = (props: React.ComponentProps<typeof NavLink>) => {
  const { children, ...rest } = props;
  return (
    <NavLink {...rest} preventScrollReset>
      <Edit />
    </NavLink>
  );
};

export default EditNavLink;
