import Link from "next/link";
import React from "react";

interface INavLinkProps {
  address: string;
  text: string;
  className?: string
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({
  address,
  text,
  className=''
}) => (
  <Link
    href={address}
    className={`py-8 text-lg text-center text-white ${className}`}
  >
    {text}
  </Link>
);

export default NavLink;
