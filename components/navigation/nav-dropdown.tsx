import React, { useState } from 'react';

import Link from 'next/link';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from './nav-item';

import * as styles from './navbar-links.module.css';
import { dropdownContainer, dropdownClosed } from './dropdown.module.css';

type NavDropdownProps = {
    address: string,
    text: string,
    children: any,
}

const NavDropdown: React.FunctionComponent<NavDropdownProps> = (props) => {
  const [closed, setClosed] = useState(true);
  const { address, text, children } = props;

  return (
    <div onMouseEnter={() => { setClosed(false); }} onMouseLeave={() => { setClosed(true); }}>
      <NavItem>
        <div className={styles.navLink}>
          <Link href={`../../${address}`}>
            {text}
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={styles.navDropdownIcon}
          onClick={() => { setClosed(!closed); }}
        />
      </NavItem>
      <div className={(closed ? dropdownClosed : dropdownContainer)}>
        {children}
      </div>
    </div>
  );
};

export default NavDropdown;
