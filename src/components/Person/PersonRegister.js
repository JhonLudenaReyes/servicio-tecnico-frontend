import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { getLocations } from "../../actions/locationActions";

const PersonRegister = () => {
  const dispatch = useDispatch();
  //const locations = useSelector((state) => state.location.locations);

  useEffect(() => {
    dispatch(getLocations());
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption({
      ...selectedOption,
      selectedOption,
    });
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </>
  );
};

export default PersonRegister;
