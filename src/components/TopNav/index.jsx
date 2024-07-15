import React from "react";
import styles from "./Topnav.module.css";
import Textfield from "../Textfield";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegClock,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
const Topnav = ({ type = "dark" }) => {
  let color = type === "light" ? "#9f9f9f" : "#9f9f9f";
  return (
    <div
      className={styles.topnav}
      style={{
        borderBottom: `1px solid ${color}`,
        backgroundColor: type === "light" ? "#fff" : "transparent",
      }}
    >
      <div className={styles.left}>
        <div className={styles.social}>
          <FaFacebook fontSize={12} color={color} />
          <Textfield type="h6" style={{ color: color }}>
            Facebook
          </Textfield>
        </div>
        <div className={styles.social}>
          <FaInstagram fontSize={12} color={color} />
          <Textfield type="h6" style={{ color: color }}>
            Instagram
          </Textfield>
        </div>
        <div className={styles.social}>
          <BsTwitterX fontSize={12} color={color} />
          <Textfield type="h6" style={{ color: color }}>
            Twitter
          </Textfield>
        </div>
        <div className={styles.social}>
          <FaLinkedin fontSize={12} color={color} />
          <Textfield type="h6" style={{ color: color }}>
            Linked
          </Textfield>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.social}>
          <div className={styles.iconButton} style={{ background: color }}>
            <FaRegClock fontSize={12} color={"#fff"} />
          </div>
          <Textfield type="h6" style={{ color: color }}>
            Monday to Friday 9AM-10PM
          </Textfield>
        </div>
        <div className={styles.social}>
          <div className={styles.iconButton} style={{ background: color }}>
            <IoMdCall fontSize={12} color={"#fff"} />
          </div>
          <Textfield type="h6" style={{ color: color }}>
            Call us +919919191991
          </Textfield>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
