import React from 'react';
import NavDropdown from './nav-dropdown';
import NavLink from './nav-link';
import * as styles from './header.module.css';
import DropdownLink from './dropdown-link';

type NavbarLinksProps = {
    hidden: boolean,
    latestSlug: string,
}

const NavbarLinks: React.FunctionComponent<NavbarLinksProps> = ({ hidden, latestSlug }) => (
  <nav className={`${hidden ? styles.navbarHidden : styles.navbar} ${styles.nav}`}>
    <NavLink address="/" text="Home" />
    <NavLink address="/about" text="About" />
    <NavDropdown address="/all-journals" text="Journals">
      <DropdownLink address={`/posts/${latestSlug}`} text="Latest Post" />
      <DropdownLink address="/all-journals" text="All Posts" />
    </NavDropdown>
    <NavLink address="/contact" text="Contact" />
  </nav>
);

export default NavbarLinks;
