import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import NavLink from "./navigation/NavLink";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="min-h-screen text-primary bg-background">
    <div className="mx-4 max-w-3xl md:mx-auto min-h-screen overflow-x-scroll">
      <div className="flex tb:justify-start tb:h-24 items-center">
        <NavLink href="/" text="Ezra Huang" />
        <NavLink
          href="/#about"
          text="ABOUT"
          className="ml-auto pr-2 tb:pr-5 brightness-75 hover:underline"
        />
        <NavLink
          href="/#projects"
          text="PROJECTS"
          className="pr-2 tb:pr-5 brightness-75 hover:underline"
        />
        <NavLink
          href="/#contact"
          text="CONTACT"
          className="pr-2 tb:pr-5 brightness-75 hover:underline"
        />
      </div>
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
