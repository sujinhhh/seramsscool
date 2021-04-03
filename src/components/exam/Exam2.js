import React from "react";
import Select from "react-select";

const Exam2 = ({ question }) => {
  const [selectedOption, setSelectedOption] = React.useState("none");
  const [selectedOption2, setSelectedOption2] = React.useState("none");
  const options1 = [
    { value: "none", label: "Empty" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
    {
      value: "tilt,left",
      label: "Tilf and Open Left",
    },
    {
      value: "tilt,right",
      label: "Tilf and Open Right",
    },
  ];
  const options2 = [
    { value: "haha", label: "Empty" },
    { value: "nono", label: "Open Left" },
    { value: "right", label: "Open Right" },
    {
      value: "tilt,left",
      label: "Tilf and Open Left",
    },
    {
      value: "tilt,right",
      label: "Tilf and Open Right",
    },
  ];
  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <div>
      <div>
        <form>
          <Select
            options={options1}
            onChange={handleTypeSelect}
            value={options1.filter(function (option) {
              return option.value === selectedOption;
            })}
            label="Single select"
          />
          <h1>{selectedOption}?</h1>
        </form>
      </div>
      <div>
        <form>
          <Select
            options={options2}
            onChange={handleTypeSelect}
            value={options2.filter(function (option) {
              return option.value === selectedOption;
            })}
            label="Single select"
          />
          <h1>{selectedOption2}?</h1>
        </form>
      </div>
    </div>
  );
};

export default Exam2;
