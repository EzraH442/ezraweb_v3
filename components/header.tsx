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
    <div className="bg-gray-dark w-full">
      <div className="tb:flex tb:justify-between tb:h-150 w-full">
        <Link href="/" passHref>
          <p
            className="cursor-pointer inline-block p-16
            font-semibold text-grass-green font-monospace
            text-4xl tb:text-3xl "
          >
            {siteName}
          </p>
        </Link>
        <span
          className={`${
            collapsed ? "" : ""
          } absolute top-16 right-16 text-white tb:hidden`}
        >
          <FontAwesomeIcon
            icon={faBars}
            width={20}
            onClick={() => setCollapsed(!collapsed)}
          />
        </span>

        <nav
          className={`${
            collapsed
              ? "hidden tb:!inline-flex tb:pr-16 tb:justify-end"
              : "flex flex-col flex-wrap"
          } tb:hidden items-center
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
        <div
          className={`${
            collapsed ? "hidden" : ""
          } flex items-center justify-center text-white py-8 tb:hidden`}
        >
          <FontAwesomeIcon
            icon={faBars}
            width={20}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
