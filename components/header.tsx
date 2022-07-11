import React, { useState } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { siteName } from "../constants/site_constants";
import NavLink from "./navigation/nav-link";
import NavDropdown from "./navigation/nav-dropdown";
import DropdownLink from "./navigation/dropdown-link";

type HeaderProps = {
  latestSlug: string;
};

config.autoAddCss = false;

const Header: React.FunctionComponent<HeaderProps> = ({ latestSlug }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="bg-gray-dark">
      <div
        className="tb:inline-flex tb:flex-row tb:justify-between
      tb:h-150 w-1/2 tb:w-full"
      >
        <Link href="/" passHref>
          <p
            className="cursor-pointer inline-block p-16
            font-semibold text-grass-green font-monospace
            text-4xl tb:text-3xl "
          >
            {siteName}
          </p>
        </Link>

        <nav
          className={`${
            collapsed
              ? "hidden tb:!inline-flex tb:pr-16 tb:justify-end tb:items-center"
              : "flex flex-col flex-wrap tb:items-center"
          } tb:hidden
      `}
        >
          <NavLink address="/" text="Home" />
          <NavLink address="/about" text="About" />
          <NavDropdown address="/all-journals" text="Journals">
            <DropdownLink address={`/posts/${latestSlug}`} text="Latest Post" />
            <DropdownLink address="/all-journals" text="All Posts" />
          </NavDropdown>
          <NavLink address="/contact" text="Contact" />
        </nav>
      </div>
      <FontAwesomeIcon icon={faBars} onClick={() => setCollapsed(!collapsed)} />
      {
        // TODO: make 2 fa hamburger icons intead of 1
      }
    </div>
  );
};

export default Header;
