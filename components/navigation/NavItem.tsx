import React from "react";

interface INavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({ children }) => (
  <div className="px-5 py-3 font-light font-sans text-lg text-center text-white">
    {children}
  </div>
);

export default NavItem;
