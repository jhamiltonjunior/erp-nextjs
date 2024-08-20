import React, { useState } from "react";
import Select, { components } from "react-select";

const SelectCustom = (props) => {
  const [value, setValue] = useState("");

  return (
      <Select
        placeholder={props.placeholder}
        className={`${props.className}`}
        defaultValue={value}
        onChange={setValue}
        options={props.options}
        isMulti={!!props.isMulti}
        isClearable={props.isClearable}

      />
  );
};

export default SelectCustom;


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];