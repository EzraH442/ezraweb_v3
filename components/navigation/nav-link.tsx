import React from 'react';

import Link from 'next/link';

import NavItem from './nav-item';

type NavLinkProps = {
    address: string,
    text: string,
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ address, text }) => (
  <NavItem>
    <Link href={address}>{text}</Link>
  </NavItem>
);

export default NavLink;
