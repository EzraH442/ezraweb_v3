import React, { useState } from 'react';
import Link from 'next/link';
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
      <Link href="/" passHref>
        <p className={styles.title}>{siteName}</p>
      </Link>

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
