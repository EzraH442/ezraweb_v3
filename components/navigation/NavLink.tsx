import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

interface INavLinkProps {
  address: string;
  text: string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({ address, text }) => (
  <NavItem>
    <Link href={address}>{text}</Link>
  </NavItem>
);

export default NavLink;
