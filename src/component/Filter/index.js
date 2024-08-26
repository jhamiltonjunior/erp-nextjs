"use client"
import './style.css'
import SelectCustom from "@/component/Element/SelectCustom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faSearch} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "@/component/Element/NormalButton";
import React from "react";

export default function Filter(props) {
  const classNameInput = "border p-0.5 rounded px-2 focus:border-[var(--principal-color) focus:outline-none]"

  const options = [
    { value: 'chocolate', label: 'Ambev' },
    { value: 'strawberry', label: 'Google' },
    { value: 'vanilla', label: 'Amazon' },
  ];

  const optionsC = [
    { value: 'chocolate', label: 'Tecnologia' },
    { value: 'strawberry', label: 'Automacao' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const optionsArrow = [
    { value: 'chocolate', label: 'A a Z' },
    { value: 'strawberry', label: 'Z a A' },
    { value: 'vanilla', label: 'Mais antiga' },
    { value: 'vanilla', label: 'Mais recente' },
  ];

  return (
    <section
      className={`filter bg-[var(--default-bg-rgb)]
       z-[100] box-border grid xl:grid-cols-7 
       lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ${props.className}
       transition-all duration-1000 ease-in-out
       `}>
      <input type={"text"} className={"filter-input w-full " + classNameInput}/>

      <input type={"date"} className={"filter-input w-full " + classNameInput}/>
      <input type={"date"} className={"filter-input w-full " + classNameInput}/>

      <SelectCustom className={"h-full max-w-[178px] min-w-full"} placeholder={"Todas empresas"} options={options} isMulti />
      <SelectCustom className={"h-full max-w-[175px] min-w-full"} placeholder={"Todas as areas"} options={optionsC} isMulti />
      <SelectCustom className={"h-full max-w-[175px] min-w-full"} placeholder={"Ordem"} options={optionsArrow} isClearable />

      <NormalButton
        type={"submit"}
        className={"flex h-full items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px] xl:col-span-1 lg:col-span-3 md:col-span-2 sm:col-span-1"}
        icon={<FontAwesomeIcon icon={faSearch}/>}
        text={<p>Aplicar</p>}
        onClick={() => console.log("Pesquisar")}/>


    </section>
  )
}