import React, { useState } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { siteName } from '../constants/site_constants';
import NavbarLinks from './navigation/navbar-links';
import * as styles from './navigation/header.module.css';

type HeaderProps = {
  latestSlug: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ latestSlug }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.header}>
      <p className={styles.title}>{siteName}</p>

      <NavbarLinks hidden={collapsed} latestSlug={latestSlug} />
      <FontAwesomeIcon
        icon={faBars}
        width="16"
        className={`
        ${styles.navToggle} 
        ${collapsed
          ? styles.navToggleCollapsed
          : styles.navToggleOpen}`}
        onClick={() => setCollapsed(!collapsed)}
      />
    </div>
  );
};

export default Header;
