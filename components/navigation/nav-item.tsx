import React from 'react';

import * as styles from './navbar-links.module.css';

const NavItem: React.FunctionComponent<{}> = ({ children }) => (
  <div className={styles.navItem}>{children}</div>);

export default NavItem;
