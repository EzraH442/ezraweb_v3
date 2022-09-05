import React from "react";

import Header from "./header";
import Footer from "./footer";
import Body from "./containers/body";

type LayoutProps = { latestSlug: string };

const Layout: React.FunctionComponent<LayoutProps> = ({
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
