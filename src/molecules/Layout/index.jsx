import React from "react";
import Header from "../Header";
import Topnav from "../../components/TopNav";
import Navbar from "../../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Topnav />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
