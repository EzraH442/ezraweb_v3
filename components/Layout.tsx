import React from "react";
import Body from "./containers/Body";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </>
);

export default Layout;
