import React from "react";

export default function HamburguerToXButton(props) {
  return (
    <button
      className="w-10 h-10 focus:outline-none modal-toggle"
      onClick={props.onClick}
    >
        <span
          className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${props.isOpen ? 'rotate-45 open' : '-translate-y-2'}`}
        ></span>
      <span
        className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${props.isOpen ? 'opacity-0 open' : 'opacity-100'}`}
      ></span>
      <span
        className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${props.isOpen ? '-rotate-45 open' : 'translate-y-2'}`}
      ></span>
    </button>
  )
}