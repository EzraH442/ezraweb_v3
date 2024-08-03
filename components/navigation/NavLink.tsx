import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface INavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: React.ReactNode;
  className?: string;
  href: string
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({
  text,
  className = "",
  ...rest
}) => (
  <Link className={`text-lg text-center text-white ${className}`} {...rest}>
    {text}
  </Link>
);

export default NavLink;
