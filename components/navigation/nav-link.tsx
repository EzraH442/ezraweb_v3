import React from 'react';

import Link from 'next/link';

import { navLink } from './navbar-links.module.css';
import NavItem from './nav-item';

type NavLinkProps = {
    address: string,
    text: string,
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ address, text }) => (
  <NavItem>
    <div className={navLink}>
      <Link href={`../../${address}`}>{text}</Link>
    </div>
  </NavItem>
);

export default NavLink;
