import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => (
  <div className="min-h-screen text-yellow-300">
    <Header />
    <div className="bg-gray-dark min-h-[calc(100vh-192px)]">{children}</div>
    <Footer />
  </div>
);

export default Layout;
