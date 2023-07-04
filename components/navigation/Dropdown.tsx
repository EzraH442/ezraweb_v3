import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { dropdownContainer } from "./dropdown.module.css";
import NavItem from "./NavItem";

interface IDropdownProps {
  address: string;
  text: string;
  children: any;
}

const Dropdown: React.FunctionComponent<IDropdownProps> = (props) => {
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
        <Link href={address} legacyBehavior>{text}</Link>
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

export default Dropdown;
