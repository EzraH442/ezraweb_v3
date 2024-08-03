import "../../styles/globals.css";

import React, { PropsWithChildren } from "react";
import { Metadata } from "next";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openSans, robotoSlab } from "../../lib/fonts";
import NavLink from "../../components/navigation/NavLink";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Ezra",
  description: "Ezra's website",
};

const RootLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <div className="flex items-center h-24 sticky top-0 sm:static bg-background text-primary border-b border-0 border-secondary">
          <div className="px-4 max-w-3xl md:mx-auto flex items-center w-full">
            <label className="sm:hidden peer group mr-5 cursor-pointer">
              <input type="checkbox" className="hidden" id="hamburger" />
              <FontAwesomeIcon
                className="group-has-[:checked]:hidden"
                icon={faBars}
                width={20}
              />
              <FontAwesomeIcon
                className="hidden group-has-[:checked]:block"
                icon={faXmark}
                width={20}
              />
            </label>
            <hgroup className={`${robotoSlab.className}`}>
              <h1>
                <NavLink href="/" text="Ezra Huang" />
              </h1>
              <p>ezra.huang@mail.mcgill.ca</p>
            </hgroup>

            <div className={`${robotoSlab.className} ml-auto hidden sm:block`}>
              <NavLink
                href="/#about"
                text="ABOUT"
                className="pr-2 tb:pr-5 brightness-75 hover:underline"
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
            <div className="fixed top-0 right-0 z-20 h-full w-full -translate-x-full transition duration-500 peer-has-[:checked]:translate-x-0 backdrop-blur">
              <div className="float-left min-h-full px-6 pt-12 bg-background shadow-md shadow-secondary w-150">
                <label
                  htmlFor="hamburger"
                  className="flex items-center justify-center w-full mb-8 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXmark} width={20} />
                </label>
                <menu
                  className={`${robotoSlab.className} flex flex-col items-center justify-start space-y-4`}
                >
                  <NavLink href="/#" text="HOME" className="brightness-75" />
                  <NavLink
                    href="/#about"
                    text="ABOUT"
                    className="brightness-75"
                  />
                  <NavLink
                    href="/#projects"
                    text="PROJECTS"
                    className="brightness-75"
                  />
                  <NavLink
                    href="/#contact"
                    text="CONTACT"
                    className="brightness-75"
                  />
                </menu>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen text-primary bg-background pt-4">
          <div className="mx-4 max-w-3xl md:mx-auto min-h-screen">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
