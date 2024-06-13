import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";
import NavLink from "./navigation/NavLink";

config.autoAddCss = false;

const Header: React.FunctionComponent = () => {
  return (
    <div className="flex tb:justify-start tb:h-24 items-center mx-4">
      <NavLink address="/" text="Ezra Huang" />
      <NavLink
        address="/#about"
        text="ABOUT"
        className="ml-auto pr-2 tb:pr-5 brightness-75 hover:underline"
      />
      <NavLink
        address="/#projects"
        text="PROJECTS"
        className="pr-2 tb:pr-5 brightness-75 hover:underline"
      />
      <NavLink
        address="/#contact"
        text="CONTACT"
        className="pr-2 tb:pr-5 brightness-75 hover:underline"
      />
    </div>
  );
};

export default Header;
