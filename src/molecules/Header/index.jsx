import React from "react";
import styles from "./Header.module.css";
import Textfield from "../../components/Textfield";
import Button from "../../components/Buttons";
import { IoPlay } from "react-icons/io5";
import { WiDirectionLeft, WiDirectionRight } from "react-icons/wi";

const Header = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <Textfield colorType="white" type="h1" style={{ fontSize: 42 }}>
          Learn and Master <br />
          Digital Workflows <br />
          with DGA
        </Textfield>
        <Textfield
          colorType="grey"
          type="h5"
          style={{ fontWeight: 300, marginTop: 10, marginRight: 120 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores
          est, quisquam obcaecati quos modi iure nulla veniam odit, aspernatur
          possimus ab fuga numquam corporis id quia omnis dolores molestiae?
        </Textfield>
        <div className={styles.btnMain}>
          <Button type="allBlue">Contact Us</Button>
          <div className={styles.playBtn}>
            <Textfield colorType="white" style={{ fontWeight: 400 }}>
              Watch the Video
            </Textfield>
            <div className={styles.circle}>
              <IoPlay color="#023a65" size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.banner}>
          <img
            src="https://target.scene7.com/is/image/Target/GUEST_9e9d5418-6cd8-41ef-8143-a03f945c730a?fmt=webp&qlt=80&wid=600"
            alt="banner"
          />
          <div className={styles.bannerText}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Textfield colorType="blue" type="h5">
                Tooth Daycare.
              </Textfield>
              <Textfield colorType="blue" type="h6" style={{ fontWeight: 400 }}>
                Beautiful Smile
              </Textfield>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <WiDirectionLeft color="#023a65" size={24} />
              <WiDirectionRight color="#023a65" size={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
