import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  className,
}) => (
  <div className="min-h-screen text-primary bg-background">
    <Header />
    <div className={`min-h-[calc(100vh-192px)] ${className ?? ""}`}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
