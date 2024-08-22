'use client'

import React from 'react';
import './style.css';
import HamburguerToXButton from "@/component/Element/HamburguerToXButton";
import CustomInput from "@/component/Element/CustomInput";
import SelectCustom from "@/component/SelectCustom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "@/component/NormalButton";
import Divider from "@/component/Element/Divider";
import CustomTextArea from "@/component/Element/CustomTextArea";

const Modal = ({isOpen, setIsOpen, content} ) => {

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


      <nav className={`bg-white p-4 pr-0 w-[98%] max-w-4xl h-[99%] md:h-[95%] max-h-[50rem] shadow-2xl rounded modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>
        <HamburguerToXButton onClick={toggleModal} isOpen={isOpen} classNameSpan={"span-modal"} />

        {content}


      </nav>
    </>
  );
};

export default Modal;
{/*<nav className={`bg-white p-4 h-[99%] w-[98%] max-h-[50rem] max-w-4xl shadow-2xl modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>*/
}

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