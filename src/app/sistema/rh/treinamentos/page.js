"use client"

import Filter from "@/component/Filter";
import React, {useState} from "react";
import CardVacancy from "@/component/Vacancy/CardVacancy";
import NormalButton from "@/component/Element/NormalButton";
import {faPlus, faFilter, faPenToSquare, faTrashCan, faGripLines} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimpleModal from "@/component/SimpleModal";
import HandleVacancy from "@/component/Vacancy/Handle";
import Calendar from "@/component/Calendar";
import HandleProcessSelective from "@/component/Selection/NewSelection";
import Card from "@/component/Simple/Card";
import {AccordionItem} from "@/component/Accordion";
import {CheckboxIcon} from "@radix-ui/react-icons";
import {Checkbox} from "@/component/ui/checkbox";
// import { Metadata } from 'next'
//
// export const metadata = {
//   title: 'Dashboard'
// }
export default function TrainingPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleModalHandleVacancy, setVisibleModalHandleVacancy] = useState(false);
  const data = [
    {
      n: 10,
      text: "Vagas",
      description: "Vagas disponíveis",
      icon: faPlus,
      color: "green-500"
    },
    {
      n: 2,
      text: "Processos",
      description: "Processos seletivos em andamento",
      icon: faFilter,
      color: "blue-500"
    },
    {
      n: 5,
      text: "Processos",
      description: "Processos seletivos finalizados",
      icon: faFilter,
      color: "red-500"
    },
    {
      n: 1,
      text: "Processo",
      description: "Processo seletivo em andamento",
      icon: faFilter,
      color: "blue-500"
    },
    {
      n: 1,
      text: "Processo",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500"
    },
    {
      n: 1,
      text: "Processo",
      description: "<p>Processo seletivo em andamento</p>",
      icon: faFilter,
      color: "blue-500"
    },
    {
      n: 1,
      text: "Processo",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500"
    },
  ]


  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <section className={"max-w-full w-[87rem] gap-6 flex flex-col items-center"}>
        <section className={"flex justify-end w-full gap-3"}>
          <NormalButton

            className={"flex items-center gap-2 bg-gray-300 px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faFilter} />}
            text={<p>Filtrar</p>}
            onClick={() => setVisibleFilter(!visibleFilter)}/>

          <NormalButton

            className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faPlus} />}
            text={<p>Novo Processo</p>}
            onClick={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)}/>
        </section>
        {
          visibleFilter && (
            <Filter className={""} />
          )
        }

        <SimpleModal
          content={<HandleProcessSelective />}
          isOpen={visibleModalHandleVacancy}
          setIsOpen={setVisibleModalHandleVacancy}/>

        <section className={"grid grid-cols-1 gap-4 w-full"}>
          {
            data.map((item, i) => (
              <Card key={i} className={`border-[var(--principal-color)] p-2`} classNameContent={`flex-wrap`}>
                <section className={"flex gap-8 justify-center w-full items-center"}>
                  <FontAwesomeIcon icon={faGripLines} className={`text-[${item.color}] text-2xl`}/>

                    <Checkbox />

                  <section className={"flex items-start flex-wrap"}>
                    <h2 className={"text-xl w-full text-start"}>{item.text}
                    </h2>
                    {/*<p className={"text-sm"}>{item.description}</p>*/}
                  </section>

                  <section className={"flex justify-end w-full gap-3"}>
                    <NormalButton
                      className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
                      icon={<FontAwesomeIcon icon={faPenToSquare}/>}
                      text={<p>Editar</p>}
                      onClick={() => alert("Por enquanto nao faço nada!")}/>

                    <NormalButton
                      className={"flex items-center gap-2 bg-red-600 text-white px-2 max-h-[33px]"}
                      icon={<FontAwesomeIcon icon={faTrashCan}/>}
                      text={<p>Excluir</p>}
                      onClick={() => alert("Por enquanto nao faço nada!")}/>
                  </section>
                </section>

                <AccordionItem  title={item.text} className={`w-full bg-white border-t`} content={<>
                  <p>Vagas disponíveis para seleção</p>
                  <p>Vagas disponíveis para seleção</p>
                  <p>Vagas disponíveis para seleção</p>
                </>} />
              </Card>
            ))
          }
        </section>

        {/*<Calendar eventClick={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}

        {/*<CardVacancy setIsOpenEdit={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}
        {/*<CardVacancy setIsOpenEdit={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}
      </section>
    </main>
  );
}
