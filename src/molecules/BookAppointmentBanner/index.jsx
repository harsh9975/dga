import React from "react";
import styles from "./Banner.module.css";
import Textfield from "../../components/Textfield";
import Button from "../../components/Buttons";

const BookAppointmentBanner = () => {
  return (
    <div className={styles.banner}>
      <Textfield colorType="white" type="h5" style={{ fontWeight: 500 }}>
        Ready to become part of modern world.
      </Textfield>
      <Button type="allBlue">Book Appointment</Button>
    </div>
  );
};

export default BookAppointmentBanner;
