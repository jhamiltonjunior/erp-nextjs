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
  faCircle, faArrowUpRightFromSquare
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
      text: "Sou novo(a) na empresa, o que fazer?",
      description: "Processos seletivos em andamento",
      icon: faFilter,
      color: "blue-500",
      content: [
        {
          n: 10,
          text: "Por onde começar?",
          description: "Primeiros passos na empresa",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Conhecendo a equipe",
          description: "Apresentação e integração",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 10,
      text: "Como armazenar alimentos?",
      description: "Vagas disponíveis",
      icon: faPlus,
      color: "green-500",
      content: [
        {
          n: 10,
          text: "Dicas de armazenamento",
          description: "Melhores práticas para conservação",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Organização do estoque",
          description: "Como organizar corretamente",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 5,
      text: "Onde encontrar os produtos?",
      description: "Processos seletivos finalizados",
      icon: faFilter,
      color: "red-500",
      content: [
        {
          n: 10,
          text: "Localizando produtos no estoque",
          description: "Dicas para uma busca eficiente",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Mapeamento das prateleiras",
          description: "Organização visual",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 1,
      text: "Onde encontrar minhas EPIs?",
      description: "Processo seletivo em andamento",
      icon: faFilter,
      color: "blue-500",
      content: [
        {
          n: 10,
          text: "Localizando suas EPIs",
          description: "Guia de localização",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Checklist de EPIs",
          description: "Verificação de itens",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 1,
      text: "Como fazer o controle de estoque?",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500",
      content: [
        {
          n: 10,
          text: "Métodos de controle de estoque",
          description: "Estratégias eficazes",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Ferramentas de controle",
          description: "Recursos disponíveis",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 1,
      text: "Como atender os clientes?",
      description: "<p>Processo seletivo em andamento</p>",
      icon: faFilter,
      color: "blue-500",
      content: [
        {
          n: 10,
          text: "Boas práticas no atendimento",
          description: "Como encantar o cliente",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Resolução de problemas",
          description: "Gerenciamento de situações",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    },
    {
      n: 1,
      text: "Como ser bem sucedido na empresa?",
      description: "Processo seletivo finalizado",
      icon: faFilter,
      color: "red-500",
      content: [
        {
          n: 10,
          text: "Planejamento de carreira",
          description: "Construindo seu futuro",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        },
        {
          n: 10,
          text: "Desenvolvimento de habilidades",
          description: "Aprimorando competências",
          icon: faPlus,
          color: "green-500",
          quantityUsers: 10
        }
      ]
    }
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
                <section className={"flex gap-8 justify-between w-full items-center d"}>
                  <section className={"flex gap-6 w-full items-center"}>
                    <FontAwesomeIcon icon={faGripLines} className={`text-[${item.color}] text-2xl`}/>

                    <Checkbox />

                    <section className={"flex items-start flex-wrap"}>
                      <h2 className={"text-xl w-full text-start"}>{item.text}</h2>
                    </section>
                  </section>

                  <section className={"flex justify-end w-1/2 gap-3"}>
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

                <AccordionItem classContentShow={`py-4`} className={`w-full bg-white border-t`}

                 content={
                  item.content.map((content, i) => (
                    <Line content={content} key={i}/>
                  ))}
                />
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
