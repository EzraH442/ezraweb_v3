import React from "react";
import Body from "./containers/Body";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  latestSlug: string;
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  latestSlug,
  children,
}) => (
  <>
    <Header latestSlug={latestSlug} />
    <Body>{children}</Body>
    <Footer />
  </>
);

export default Layout;
