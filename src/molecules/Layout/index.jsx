import React from "react";
import Header from "../Header";
import Topnav from "../../components/TopNav";
import Navbar from "../../components/Navbar";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <Topnav />
        <Navbar />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
