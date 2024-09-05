"use client"

import Filter from "@/component/Filter";
import React, {useState} from "react";
import CardVacancy from "@/component/Vacancy/CardVacancy";
import NormalButton from "@/component/Element/NormalButton";
import {
  faPlus,
  faFilter,
  faPenToSquare,
  faTrashCan,
  faGripLines,
  faUserGroup,
  faCircle, faArrowUpRightFromSquare, faCubes
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimpleModal from "@/component/SimpleModal";
import HandleVacancy from "@/component/Vacancy/Handle";
import Calendar from "@/component/Calendar";
import HandleProcessSelective from "@/component/Selection/NewSelection";
import Card from "@/component/Simple/Card";
import {AccordionItem} from "@/component/Accordion";
import {CheckboxIcon} from "@radix-ui/react-icons";
import {Checkbox} from "@/component/ui/checkbox";
import HoverCardShadcn, {HoverCard, HoverCardContent, HoverCardTrigger} from "@/component/ui/hover-card";
import Line from "@/component/Simple/Line";
import HandleProduct from "@/component/Stock/HandleProduct";
import Image from "next/image";
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
      n: 2,
      text: "Arroz",
      description: "Processos seletivos em andamento",
      icon: faFilter,
      color: "blue-500",
      inventory: "Alimentos",
      price: "R$ 46,40",
      image: "abobora.jpg",
    },
    {
      n: 10,
      text: "Café",
      description: "Vagas disponíveis",
      icon: faPlus,
      color: "green-500",
      inventory: "Alimentos",
      price: "R$ 46,40",
      image: "trigo.jpg",
    },
    {
      n: 5,
      text: "Feijão",
      description: "Processos seletivos finalizados",
      icon: faFilter,
      color: "red-500",
      inventory: "Alimentos",
      price: "R$ 69,40",
      image: "alho.jpg",
    },
    {
      n: 1,
      text: "Açúcar",
      description: "Processo seletivo em andamento",
      icon: faFilter,
      color: "blue-500",
      inventory: "Alimentos",
      price: "R$ 38,30",
      image: "morango.jpg",
    },
    {
      n: 1,
      text: "Óleo",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500",
      inventory: "Alimentos",
      price: "R$ 90,40",
      image: "kit-comida.jpg",
    },
    {
      n: 1,
      text: "Sal",
      description: "<p>Processo seletivo em andamento</p>",
      icon: faFilter,
      color: "blue-500",
      inventory: "Alimentos",
      price: "R$ 46,40",
      image: "cenoura.jpg",
    },
    {
      n: 1,
      text: "Macarrão",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500",
      inventory: "Alimentos",
      price: "R$ 46,40",
      image: "banana-verde.jpg"
    }
  ];


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
            text={<p>Novo Produto</p>}
            onClick={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)}/>
        </section>
        {
          visibleFilter && (
            <Filter className={""} />
          )
        }

        <SimpleModal
          content={<HandleProduct />}
          isOpen={visibleModalHandleVacancy}
          setIsOpen={setVisibleModalHandleVacancy}/>

        <section className={"grid gap-4 w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}>
          {
            data.map((item, i) => (
              <Card key={i} className={`border-[var(--principal-color)] p-2`} classNameContent={`flex-wrap`}>
                <section className={"flex gap-6 w-full min-h-40 items-center relative"}>
                  <Image
                    src={`/stock/${item.image}`}
                    alt="Descrição da imagem"
                    layout="fill" // Preenche o contêiner
                    objectFit="cover" // Ajuste a imagem para cobrir o contêiner
                  />
                </section>
                <section className={"flex gap-8 justify-center flex-wrap sm:flex-nowrap sm:justify-between w-full items-center d"}>
                  <section className={"flex gap-6 w-full items-center relative"}>
                    {/*<FontAwesomeIcon icon={faCubes} className={`text-[${item.color}] text-xl`}/>*/}
                    <Checkbox />

                    <section className={"flex items-start flex-wrap"}>
                      <h2 className={"text-xl w-full text-start"}>{item.text}</h2>
                    </section>
                  </section>

                  <section className={"flex justify-end w-1/2 gap-3"}>
                    <NormalButton
                      className={"flex items-center gap-2 hover:bg-[var(--principal-color)] hover:text-white bg-white border-solid border border-[var(--principal-color)] p-2 text-[var(--principal-color)] px-2 max-h-[33px]"}
                      icon={<FontAwesomeIcon icon={faPenToSquare}/>}
                      text={<p>Editar</p>}
                      onClick={() => alert("Por enquanto nao faço nada!")}/>

                    <NormalButton
                      className={"flex items-center gap-2 hover:bg-red-600 text-red-600 border-red-600 border hover:text-white px-2 max-h-[33px]"}
                      icon={<FontAwesomeIcon icon={faTrashCan}/>}
                      text={<p>Excluir</p>}
                      onClick={() => alert("Por enquanto nao faço nada!")}/>
                  </section>
                </section>
                <section className={"flex justify-between w-full"}>
                  {/*<section>*/}
                  {/*  <p>Inventario: <span className={"text-xl"}>{item.inventory}</span></p>*/}
                  {/*</section>*/}

                  <section>

                    <p className={"text-start text-sm"}>De: <span className={"text-red-600 line-through"}>{item.price}</span></p>
                    <p>Por: <span className={"text-2xl text-emerald-700"}>{item.price}</span></p>
                  </section>
                </section>
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
