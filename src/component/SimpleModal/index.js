'use client'

import React from 'react';
import './style.css';
import HamburguerToXButton from "@/component/Element/HamburguerToXButton";
import CustomInput from "@/component/Element/CustomInput";
import SelectCustom from "@/component/SelectCustom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "@/component/NormalButton";

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


      <nav className={`bg-white p-4 pr-0 w-[98%] max-w-4xl h-[99%] md:h-[95%] max-h-[50rem] shadow-2xl rounded modal-no-close absolute top-[50%] left-[50%] content-modal ${isOpen ? 'open' : 'closed'}`}>
        <HamburguerToXButton onClick={toggleModal} isOpen={isOpen} classNameSpan={"span-modal"} />
        <section className={"overflow-auto bg-white p-4 h-full max-h-screen max-w-screen"}>
          <h2 className={"text-center text-2xl font-bold font-secundary']"}>Seu Portal de Vagas</h2>
          {/*

          Esse modal será apenas um component que terá outro component dentro
          Então devo remover as linhas abaixo e inserir {content}

          */}
          <h2 className={"text-xl text-start my-5"}>1 - Informacoes da empresa</h2>
          <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
            <label className={"text-start"}> Empresa
              <SelectCustom isClearable isCreatable className={""} placeholder={"Pesquise pela empresa"} options={[
                {
                  value: 'google',
                  label: 'Google'
                },
                {
                  value: 'google',
                  label: 'Amazon'
                },
                {
                  value: 'google',
                  label: 'Microsoft'
                },
              ]}/>
            </label>

            <CustomInput classNameContainer={"text-start"} label={"Estado"}/>

            <CustomInput classNameContainer={"text-start"} label={"Cidade"}/>

            <CustomInput classNameContainer={"text-start"} label={"Telefone"}/>
          </section>

          <h2 className={"text-xl text-start my-5"}>2 - Informacoes da vaga</h2>
          <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
            <label className={"text-start"}> Nome da vaga
              <SelectCustom isClearable isCreatable className={""} options={[
                {
                  value: 'google',
                  label: 'Auxiliar Administrativo'
                },
                {
                  value: 'google',
                  label: 'Desenvolvedor Web'
                },
                {
                  value: 'google',
                  label: 'Engenheiro de Software'
                },
              ]}/>
            </label>

            <label className={"text-start"}> Localidade
              <SelectCustom isClearable className={""} options={[
                {
                  value: 'google',
                  label: 'Remoto'
                },
                {
                  value: 'google',
                  label: 'Híbrido'
                },
                {
                  value: 'google',
                  label: 'Presencial'
                },
              ]}/>
            </label>

            <CustomInput classNameContainer={"text-start"} label={"Remuneração mínima"}/>

            <CustomInput classNameContainer={"text-start"} label={"Remuneração máxima"}/>
          </section>

          <h2 className={"text-xl text-start my-5"}>3 - Sessões adicionais</h2>
          <section id={"aditional-session"} className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
            <CustomInput classNameContainer={"text-start"} label={"Titulo da sessão"}/>



          </section>

          <NormalButton

            className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faPlus} />}
            text={<p>Nova Sessão</p>}
            onClick={() => console.log("adiciona um novo campo")}/>

        </section>


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