import React from "react";

const NavItem: React.FunctionComponent<{}> = ({ children }) => (
  <div
    className="px-5 py-3 
    font-light font-sans text-lg text-center text-white block"
    style={{ backgroundColor: "222629" }}
  >
    {children}
  </div>
);

export default NavItem;
