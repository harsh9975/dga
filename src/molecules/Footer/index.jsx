import React from "react";
import styles from "./Footer.module.css";
import Textfield from "../../components/Textfield";
import { Link } from "react-router-dom";

const worktime = [
  "Monday-Friday: 8AM-8PM",
  "Saturday: 9AM-6PM",
  "Sunday: Closed",
];

const services = [
  { link: "Whitening", to: "/" },
  { link: "Implantology", to: "/" },
  { link: "Orthodontia", to: "/" },
  { link: "Whitening", to: "/" },
  { link: "Implantology", to: "/" },
  { link: "Orthodontia", to: "/" },
];

const outclinics = ["22-8 Fairview Ave, Lebenon, NH 03766, USA"];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.worktime}>
          <Textfield
            colorType="white"
            type="h4"
            style={{ fontWeight: 600, marginBottom: 25 }}
          >
            Working Time
          </Textfield>
          {worktime.map((item) => (
            <Textfield
              colorType="white"
              type="h5"
              style={{ fontWeight: 300, marginBottom: 15 }}
            >
              {item}
            </Textfield>
          ))}
        </div>
        <div className={styles.services}>
          <Textfield
            colorType="white"
            type="h4"
            style={{ fontWeight: 600, marginBottom: 25 }}
          >
            Our Services
          </Textfield>
          {services.map((item, idx) => (
            <Link to={item.to} key={idx}>
              <Textfield
                colorType="white"
                type="h5"
                style={{ fontWeight: 300, marginBottom: 15 }}
              >
                {item.link}
              </Textfield>
            </Link>
          ))}
        </div>
        <div className={styles.outclinics}>
          <Textfield
            colorType="white"
            type="h4"
            style={{ fontWeight: 600, marginBottom: 25 }}
          >
            Our Clinics
          </Textfield>
          {outclinics.map((item) => (
            <Textfield
              colorType="white"
              type="h5"
              style={{ fontWeight: 300, marginBottom: 15 }}
            >
              {item}
            </Textfield>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <Textfield type="h6" style={{ color: "#ffffff5c" }}>
          &copy; 2024 Qode Interactive, All rights reserved
        </Textfield>
      </div>
    </div>
  );
};

export default Footer;
