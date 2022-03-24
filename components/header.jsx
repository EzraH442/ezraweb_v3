import React, { useState } from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { graphql, useStaticQuery } from "gatsby";
import NavbarLinks from "./navigation/navbar-links";
import * as styles from "./navigation/header.module.css";

export default function Header() {
    const [collapsed, setCollapsed] = useState(false);
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }       
                }
            }   
        `,
    );

    return (
        <div className={styles.header}>
            <p className={styles.title}>{data.site.siteMetadata.title}</p>

            <NavbarLinks style={styles.nav} hidden={collapsed} />
            <FaBars
                className={`${styles.navToggle} ${collapsed
                    ? styles.navToggleCollapsed
                    : styles.navToggleOpen}`}
                onClick={() => setCollapsed(!collapsed)}
            />
        </div>
    );
}
