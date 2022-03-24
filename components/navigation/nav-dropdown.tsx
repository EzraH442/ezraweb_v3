import Link from "next/link";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import NavItem from "./nav-item";

import * as styles from "./navbar-links.module.css";
import { dropdownContainer, dropdownClosed } from "./dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavDropdownProps = {
    address: string,
    text: string,
    children: any,
}

export default function NavDropdown(props: NavDropdownProps) {
    const [closed, setClosed] = useState(true);
    const { address, text, children } = props;

    return (
        <div onMouseEnter={() => { setClosed(false); }} onMouseLeave={() => { setClosed(true); }}>
            <NavItem>
                <div className={styles.navLink}>
                <Link href={`../../${address}`} >
                    {text}
                </Link>
                </div>
                <FontAwesomeIcon icon={faAngleDown}
                    className={styles.navDropdownIcon}
                    onClick={() => { setClosed(!closed); }}
                 ></FontAwesomeIcon>
            </NavItem>
            <div className={(closed ? dropdownClosed : dropdownContainer)}>
                {children}
            </div>
        </div>
    );
}
