'use client'

import React, { useState } from 'react';
import './menu.css';
import Accordion from "@/component/Accordion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

              // className="menu-toggle"
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="relative w-10 h-10 focus:outline-none menu-toggle"
        onClick={toggleMenu}
      >
        <span
          className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 open' : '-translate-y-2'}`}
        ></span>
        <span
          className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0 open' : 'opacity-100'}`}
        ></span>
        <span
          className={`block absolute h-[0.18rem] w-5 bg-black transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 open' : 'translate-y-2'}`}
        ></span>
      </button>
      <nav className={`menu shadow-ambr-500 ${isOpen ? 'open' : 'closed'}`}>
        <section className={"bg-[var(--principal-color)] p-10"}>
          <h2 className={"text-center"}>ERP</h2>
        </section>
        <section className={""}>
          <Accordion />
        </section>
      </nav>
    </div>
  );
};

export default Menu;
