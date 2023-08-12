import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";
import NavLink from "./navigation/NavLink";

config.autoAddCss = false;

const Header: React.FunctionComponent = () => {
  return (
    <div className="bg-background w-full">
      <div className="flex tb:justify-start tb:h-24 w-full items-center">
        <Link href="/">
          <p
            className="cursor-pointer font-monospace
            text-4xl tb:text-3xl text-accent my-auto mx-8"
          >
            ~
          </p>
        </Link>

        <NavLink address="/about" text="man" />
        <NavLink address="/blog" text="blog" />
        <NavLink address="/contact" text="contact" />
      </div>
    </div>
  );
};

export default Header;
