import React from "react";
import './style.css'

export default function CustomInput(props) {
  return (
    <div className={props.classNameContainer}>
      <label htmlFor={props.id} className="mb-2 text-md">{props.label}</label>
        <input
          id={props.id}
          type={props.type || "text"}
          style={{
            outline: "none !important",
          }}
          className={`custom-input w-full p-2 border-t-0 border-l-0 border-r-0 border-b
           border-[lightgray] border-solid fucus:outline-none focus:border-b-[var(--principal-color)] ${props.className}`}
          placeholder={props.placeholder || props.label}
        />

    </div>
  )
}