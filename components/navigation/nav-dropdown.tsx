import React, { useState } from "react";

import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./nav-item";

import { dropdownContainer } from "./dropdown.module.css";

type NavDropdownProps = {
  address: string;
  text: string;
  children: any;
};

const NavDropdown: React.FunctionComponent<NavDropdownProps> = (props) => {
  const [closed, setClosed] = useState(true);
  const { address, text, children } = props;

  return (
    <div
      onMouseEnter={() => {
        setClosed(false);
      }}
      onMouseLeave={() => {
        setClosed(true);
      }}
    >
      <NavItem>
        <Link href={address}>{text}</Link>
        &nbsp;&nbsp;&nbsp;
        <div className="tb:hidden">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-white inline"
            style={{
              margin: "-5px 1px",
            }}
            width="16"
            onClick={() => {
              setClosed(!closed);
            }}
          />
        </div>
      </NavItem>
      <div className={closed ? "hidden" : dropdownContainer}>{children}</div>
    </div>
  );
};

export default NavDropdown;
