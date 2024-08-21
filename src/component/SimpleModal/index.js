'use client'

import React, {useEffect, useState} from 'react';
import './style.css';
import Accordion from "@/component/Accordion";
import HamburguerToXButton from "@/component/Element/HamburguerToXButton";

const   Modal = ({isOpen, setIsOpen} ) => {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className={`flex items-center justify-center cursor-pointer h-screen w-screen fixed modal shadow-ambr-500 ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleModal}
      >
      </section>


      <nav className={`shadow-ambr-500 modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>
        <HamburguerToXButton onClick={toggleModal} isOpen={isOpen} />
        <section className={"bg-[var(--principal-color)] p-10"}>
          <h2 className={"text-center"}>ERP</h2>
        </section>


        <section className={""}>
          <Accordion state={isOpen} setState={toggleModal}/>
        </section>
      </nav>
    </>
  );
};

export default Modal;
