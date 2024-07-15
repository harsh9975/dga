import React, { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Buttons";
import TextInput from "../../components/TextInput";
import Select from "../../components/TextInput/Select";
import DatePicker from "../../components/TextInput/DatePicker";
import Layout from "../../molecules/Layout";
import styles from "./Home.module.css";

const Home = () => {
  const [date, setDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Layout isHome>
      <div className={styles.profesion}>
        <Textfield colorType="blue" type="h1">
          What is our Profession
        </Textfield>
        <Textfield
          colorType="blue"
          type="h5"
          style={{ marginTop: 10, fontWeight: 400 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          esse autem fugiat quos doloremque aspernatur nam vero et reprehenderit
          exercitationem praesentium ab suscipit voluptatibus rerum enim, ipsum
          saepe eligendi. Sequi. Sed dolore molestiae consequuntur quidem
          adipisci fuga nihil autem? Pariatur similique perferendis quas
          officiis ab illum ut, nulla labore, porro dolorem eos, hic accusamus?
          Obcaecati dolores quam pariatur! Rem, ipsam!
        </Textfield>
        <Button>Book Now</Button>
      </div>
    </Layout>
  );
};

export default Home;
