import Link from "next/link";
import React from "react";

interface INavLinkProps {
  href: string;
  text: React.ReactNode;
  className?: string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({
  href: address,
  text,
  className = "",
}) => (
  <Link
    href={address}
    className={`text-lg text-center text-white ${className}`}
  >
    {text}
  </Link>
);

export default NavLink;
