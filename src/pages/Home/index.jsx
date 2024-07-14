import React, { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Buttons";
import TextInput from "../../components/TextInput";
import Select from "../../components/TextInput/Select";
import DatePicker from "../../components/TextInput/DatePicker";
import Layout from "../../molecules/Layout";

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
    <Layout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Textfield type="h1">This is a Heading 1</Textfield>
        <Textfield type="h2">This is a Heading 2</Textfield>
        <Textfield type="h3">This is a Heading 3</Textfield>
        <Textfield type="h4">This is a Heading 4</Textfield>
        <Textfield type="h5">This is a Heading 5</Textfield>
        <Textfield type="h6">This is a Heading 6</Textfield>

        <Textfield type="h1" colorType="blue">
          This is a Heading 1
        </Textfield>
        <Textfield type="h2" colorType="blue">
          This is a Heading 2
        </Textfield>
        <Textfield type="h3" colorType="blue">
          This is a Heading 3
        </Textfield>
        <Textfield type="h4" colorType="blue">
          This is a Heading 4
        </Textfield>
        <Textfield type="h5" colorType="blue">
          This is a Heading 5
        </Textfield>
        <Textfield type="h6" colorType="blue">
          This is a Heading 6
        </Textfield>

        <Textfield type="h1" colorType="grey">
          This is a Heading 1
        </Textfield>
        <Textfield type="h2" colorType="grey">
          This is a Heading 2
        </Textfield>
        <Textfield type="h3" colorType="grey">
          This is a Heading 3
        </Textfield>
        <Textfield type="h4" colorType="grey">
          This is a Heading 4
        </Textfield>
        <Textfield type="h5" colorType="grey">
          This is a Heading 5
        </Textfield>
        <Textfield type="h6" colorType="grey">
          This is a Heading 6
        </Textfield>

        <Textfield type="p">This is a paragraph</Textfield>
        <Textfield type="span">This is a span</Textfield>
        <Button>Filled Button</Button>
        <Button type={"outline"}>Oulined Button</Button>
        <div
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#c9e2ff",
          }}
        >
          <TextInput label="Name" placeholder="Enter Name"></TextInput>
          <DatePicker
            label="Pick a Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            error={!date && "Date is required"}
          />

          <Select
            label="Choose an Option"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            options={options}
            error={!selectedOption && "Option is required"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
