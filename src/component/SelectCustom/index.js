import React, { useState } from "react";
import Select, { components } from "react-select";
import CreatableSelect from 'react-select/creatable';
const SelectCustom = (props) => {
  const [value, setValue] = useState("");
  const isCreatable = props?.isCreatable

  return (
      isCreatable ? (
        <CreatableSelect
          placeholder={props.placeholder}
          className={`${props.className} border-red-600`}
          defaultValue={value || props.defaultValue}
          onChange={setValue}
          options={props.options}
          isMulti={!!props.isMulti}
          isClearable={props.isClearable}
          classNames={{
            // control: (state) =>
            // state.isFocused ? 'border-red-600' : 'border-red-300',
          }}

          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,

              // borderColor: state.isFocused ? 'border-red-600' : 'border-grey-300',
            }),
          }}

        />
      ) : (
        <Select
          placeholder={props.placeholder}
          className={`${props.className} border-red-600`}
          defaultValue={value || props.defaultValue}
          onChange={setValue}
          options={props.options}
          isMulti={!!props.isMulti}
          isClearable={props.isClearable}
          classNames={{
            // control: (state) =>
            // state.isFocused ? 'border-red-600' : 'border-red-300',
          }}

          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,

              // borderColor: state.isFocused ? 'border-red-600' : 'border-grey-300',
            }),
          }}

        />
      )

  );
};

export default SelectCustom;


// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     background: 'transparent',
//     display: 'flex',
//     flexWrap: 'nowrap',
//     borderColor: 'hsl(0deg 78.56% 55.56%);',
//
//     // width: '7em'
//   }),
//   menu: (provided) => ({
//     ...provided,
//     background: 'transparent',
//     // width: '4em'
//   }),
// };
