import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => (
  <div className="min-h-screen text-primary bg-background">
    <div className="max-w-3xl mx-auto">
      <Header />
      <div className={`min-h-[calc(100vh)]}`}>
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
