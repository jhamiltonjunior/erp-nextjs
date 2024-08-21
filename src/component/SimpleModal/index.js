'use client'

import React, {useEffect, useState} from 'react';
import './style.css';
import Accordion from "@/component/Accordion";
import HamburguerToXButton from "@/component/Element/HamburguerToXButton";

const Modal = ({isOpen, setIsOpen} ) => {

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className={`flex items-center overflow-hidden justify-center cursor-pointer h-screen w-screen fixed modal shadow-ambr-500 ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleModal}
      >
      </section>


      <nav className={`bg-white p-4 w-[98%] h-[99%] max-h-[50rem] shadow-ambr-500 modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>
        <HamburguerToXButton onClick={toggleModal} isOpen={isOpen} classNameSpan={"span-modal"} />
        <section className={"overflow-auto bg-white p-4 h-full max-h-screen max-w-screen"}>
          <h2 className={"text-center h-[200%]"}>s</h2>
        </section>


        {/*<section className={""}>*/}
        {/*  <Accordion state={isOpen} setState={toggleModal}/>*/}
        {/*</section>*/}
      </nav>
    </>
  );
};

export default Modal;
{/*<nav className={`bg-white p-4 h-[99%] w-[98%] max-h-[50rem] max-w-4xl shadow-2xl modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>*/}

// useEffect(() => {
//   const contentModal = document.querySelector(".content-modal");
//
//   isOpen ? document.querySelectorAll('section').forEach(function(el) {
//     if(el.classList.contains('content-modal') || contentModal.contains(el))
//       return
//
//     console.log(el)
//
//     el.style.overflow = 'hidden';
//   }): document.querySelectorAll('*').forEach(function(el) {
//     el.style.overflow = 'auto';
//   });
// }, [isOpen]);