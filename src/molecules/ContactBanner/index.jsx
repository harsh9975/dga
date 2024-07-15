import React, { useState } from "react";
import styles from "./Contact.module.css";
import Textfield from "../../components/Textfield";
import TextInput from "../../components/TextInput";
import Select from "../../components/TextInput/Select";
import DatePicker from "../../components/TextInput/DatePicker";
import Button from "../../components/Buttons";

const ContactBanner = () => {
  const [date, setDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className={styles.contactContainer}>
      <div className={styles.form}>
        <Textfield colorType="blue" type="h1">
          Take a chance for your future <br /> Book an online slot now.
        </Textfield>
        <Textfield
          colorType="blue"
          type="h5"
          style={{ marginTop: 10, fontWeight: 400 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Textfield>
        <div className={styles.formMain}>
          <div className={styles.flexform}>
            <TextInput
              style={{ width: "100%" }}
              label="Name*"
              placeholder="Enter Name"
            ></TextInput>
            <TextInput
              style={{ width: "100%" }}
              label="Phone*"
              placeholder="Enter Phone"
            ></TextInput>
          </div>
          <div className={styles.flexform}>
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              options={options}
              style={{ width: "100%" }}
            />
            <TextInput
              style={{ width: "100%" }}
              label="Phone*"
              placeholder="Enter Phone"
            ></TextInput>
          </div>
          <div className={styles.flexform}>
            <DatePicker
              label="Pick a Date"
              value={date}
              style={{ width: "100%" }}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
      <div className={styles.image}>
        <img
          alt="banner"
          src="https://target.scene7.com/is/image/Target/GUEST_9e9d5418-6cd8-41ef-8143-a03f945c730a?fmt=webp&qlt=80&wid=600"
        />
      </div>
    </div>
  );
};

export default ContactBanner;
