import React, { useEffect, useState } from "react";
import Header from "../Header";
import Topnav from "../../components/TopNav";
import Navbar from "../../components/Navbar";
import styles from "./Layout.module.css";
import Footer from "../Footer";
import BookAppointmentBanner from "../BookAppointmentBanner";
import ContactBanner from "../ContactBanner";
const Layout = ({ children, isHome = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Scrolled", scrolled);
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <Topnav type={isHome ? (scrolled ? "light" : "dark") : "light"} />
        <Navbar theme={isHome ? (scrolled ? "light" : "dark") : "light"} />
      </div>

      {isHome ? (
        <div style={{ backgroundColor: "#cdebff" }}>
          <div className={styles.header}>
            <Header />
          </div>
        </div>
      ) : null}
      <div className={styles.main}>{children}</div>
      <ContactBanner />
      <BookAppointmentBanner />
      <Footer />
    </div>
  );
};

export default Layout;
