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
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/component/ui/table";
import {
  Pagination,
  PaginationContent, PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/component/ui/pagination";
import Link from "next/link";
import {moneyMask} from "@/lib/moneyMask";
// import { Metadata } from 'next'
//
// export const metadata = {
//   title: 'Dashboard'
// }
export default function TrainingPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleModalHandleVacancy, setVisibleModalHandleVacancy] = useState(false);

  const lowStatusClass = "bg-red-200 text-red-600"
  const mediumStatusClass = "bg-orange-100 text-orange-700"
  const highStatusClass = "bg-blue-100 text-blue-600"

  const data = [
    {
      n: 2,
      text: "Arroz",
      entrada: 429,
      saida: 303,
      estoqueMinimo: 150,
      estoqueDesejado: 200,
      estoqueAtual: 182,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "10/10/2024",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 10,
      text: "Café",
      entrada: 500,
      saida: 300,
      estoqueMinimo: 100,
      estoqueDesejado: 200,
      estoqueAtual: 150,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "10/09/2024",
      estadoValidade: "Próximo",
      statusDataValidade: mediumStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 5,
      text: "Feijão",
      entrada: 600,
      saida: 400,
      estoqueMinimo: 200,
      estoqueDesejado: 300,
      estoqueAtual: 250,
      estadoEstoque: "Alto",
      status: highStatusClass,
      validade: "06/08/2024",
      estadoValidade: "Muito Próximo",
      statusDataValidade: lowStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Açúcar",
      entrada: 300,
      saida: 200,
      estoqueMinimo: 120,
      estoqueDesejado: 220,
      estoqueAtual: 180,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/12/2024",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Óleo",
      entrada: 200,
      saida: 100,
      estoqueMinimo: 80,
      estoqueDesejado: 150,
      estoqueAtual: 100,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      custoUnitario: '90.40',
      validade: "06/08/2024",
      estadoValidade: "Muito Próximo",
      statusDataValidade: lowStatusClass,
      unidade: "L",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 2,
      text: "Arroz",
      entrada: 429,
      saida: 303,
      estoqueMinimo: 150,
      estoqueDesejado: 200,
      estoqueAtual: 182,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 10,
      text: "Café",
      entrada: 500,
      saida: 300,
      estoqueMinimo: 100,
      estoqueDesejado: 200,
      estoqueAtual: 150,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 5,
      text: "Feijão",
      entrada: 600,
      saida: 400,
      estoqueMinimo: 200,
      estoqueDesejado: 300,
      estoqueAtual: 250,
      estadoEstoque: "Alto",
      status: highStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Açúcar",
      entrada: 300,
      saida: 200,
      estoqueMinimo: 120,
      estoqueDesejado: 220,
      estoqueAtual: 180,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Óleo",
      entrada: 200,
      saida: 100,
      estoqueMinimo: 80,
      estoqueDesejado: 150,
      estoqueAtual: 100,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "L",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 2,
      text: "Arroz",
      entrada: 429,
      saida: 303,
      estoqueMinimo: 150,
      estoqueDesejado: 200,
      estoqueAtual: 182,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 10,
      text: "Café",
      entrada: 500,
      saida: 300,
      estoqueMinimo: 100,
      estoqueDesejado: 200,
      estoqueAtual: 150,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 5,
      text: "Feijão",
      entrada: 600,
      saida: 400,
      estoqueMinimo: 200,
      estoqueDesejado: 300,
      estoqueAtual: 250,
      estadoEstoque: "Alto",
      status: highStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Açúcar",
      entrada: 300,
      saida: 200,
      estoqueMinimo: 120,
      estoqueDesejado: 220,
      estoqueAtual: 180,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Óleo",
      entrada: 200,
      saida: 100,
      estoqueMinimo: 80,
      estoqueDesejado: 150,
      estoqueAtual: 100,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "L",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 2,
      text: "Arroz",
      entrada: 429,
      saida: 303,
      estoqueMinimo: 150,
      estoqueDesejado: 200,
      estoqueAtual: 182,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 10,
      text: "Café",
      entrada: 500,
      saida: 300,
      estoqueMinimo: 100,
      estoqueDesejado: 200,
      estoqueAtual: 150,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 5,
      text: "Feijão",
      entrada: 600,
      saida: 400,
      estoqueMinimo: 200,
      estoqueDesejado: 300,
      estoqueAtual: 250,
      estadoEstoque: "Alto",
      status: highStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Açúcar",
      entrada: 300,
      saida: 200,
      estoqueMinimo: 120,
      estoqueDesejado: 220,
      estoqueAtual: 180,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Óleo",
      entrada: 200,
      saida: 100,
      estoqueMinimo: 80,
      estoqueDesejado: 150,
      estoqueAtual: 100,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "L",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 2,
      text: "Arroz",
      entrada: 429,
      saida: 303,
      estoqueMinimo: 150,
      estoqueDesejado: 200,
      estoqueAtual: 182,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 10,
      text: "Café",
      entrada: 500,
      saida: 300,
      estoqueMinimo: 100,
      estoqueDesejado: 200,
      estoqueAtual: 150,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 5,
      text: "Feijão",
      entrada: 600,
      saida: 400,
      estoqueMinimo: 200,
      estoqueDesejado: 300,
      estoqueAtual: 250,
      estadoEstoque: "Alto",
      status: highStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "KG",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Açúcar",
      entrada: 300,
      saida: 200,
      estoqueMinimo: 120,
      estoqueDesejado: 220,
      estoqueAtual: 180,
      estadoEstoque: "Médio",
      status: mediumStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "UN",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
    {
      n: 1,
      text: "Óleo",
      entrada: 200,
      saida: 100,
      estoqueMinimo: 80,
      estoqueDesejado: 150,
      estoqueAtual: 100,
      estadoEstoque: "Baixo",
      status: lowStatusClass,
      validade: "06/01/2025",
      estadoValidade: "OK",
      statusDataValidade: highStatusClass,
      unidade: "L",
      statusLucro: function() {
        return this.lucro > 0 ? highStatusClass : lowStatusClass
      }
    },
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

          {/*<NormalButton*/}

          {/*  className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}*/}
          {/*  icon={<FontAwesomeIcon icon={faPlus} />}*/}
          {/*  text={<p>Novo Produto</p>}*/}
          {/*  onClick={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)}/>*/}
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

        <section className={"grid gap-4 w-full grid-cols-1 overflow-y-auto max-h-[88vh] h-[88vh] relative"}>
          <Table className={"bg-white"}>
            <TableHeader className={"sticky z-10 top-0 bg-white"}>
              <TableRow>
                <TableHead> </TableHead>
                <TableHead className="text-center">Produtos</TableHead>
                <TableHead className="text-center">Un. Medida</TableHead>
                <TableHead className="text-center">Entrada</TableHead>
                <TableHead className="text-center">Saída</TableHead>
                <TableHead className="text-center">Estoque Mínimo</TableHead>
                <TableHead className="text-center">Estoque Desejado</TableHead>
                <TableHead className="text-center">Estoque Atual</TableHead>
                <TableHead className="text-center">Estado do Estoque</TableHead>
                <TableHead className="text-center">Validade</TableHead>
                <TableHead className="text-center">Estado Validade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {
                data.map((item, i) => (
                  <TableRow key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <TableCell className="font-medium">
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">{item.text}</TableCell> {/* Produto */}
                    <TableCell className="font-medium">{item.unidade}</TableCell> {/* Produto */}
                    <TableCell className="text-center">{item.entrada}</TableCell> {/* Entrada */}
                    <TableCell>{item.saida}</TableCell> {/* Saída */}
                    <TableCell>{item.estoqueMinimo}</TableCell> {/* Estoque Mínimo */}
                    <TableCell>{item.estoqueDesejado}</TableCell> {/* Estoque Desejado */}
                    <TableCell>{item.estoqueAtual}</TableCell> {/* Estoque Atual */}
                    <TableCell className={item.status}>{item.estadoEstoque}</TableCell> {/* Estado do Estoque */}
                    <TableCell>
                        {item.validade}
                    </TableCell>
                    <TableCell className={item.statusDataValidade}>
                        {item.estadoValidade}
                    </TableCell>
                    {/*<TableCell className={item.statusLucro()}>{item.statusDataValidade}</TableCell> /!* Lucro *!/*/}
                  </TableRow>
                ))
              }
              <TableRow className={"sticky z-10 bottom-0  bg-white"}>
                <TableCell className={' text-center'} colSpan={2}></TableCell>

                <TableCell className={' text-center'}>{"4.234,00"}</TableCell>
                <TableCell className={' text-center'}>{"3.090,00"}</TableCell>
                <TableCell className={' text-center'}>{"1.987,03"}</TableCell>
                <TableCell className={' text-center'}>{"1.293,02"}</TableCell>
                <TableCell className={' text-center'}>{"2.023,92"}</TableCell>
                <TableCell className={' text-center'}>{"6.092,09"}</TableCell>
                <TableCell className={' text-center'} colSpan={3}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Pagination className="flex justify-center items-end space-x-2 sticky bottom-0">
            <PaginationContent className="flex items-center space-x-1">
              <PaginationItem>
                <PaginationPrevious href="#" className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded">
                  Anterior
                </PaginationPrevious>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem >
                <PaginationLink href="#" className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={"sm:block hidden"}>
                <PaginationEllipsis className="px-3 py-1 text-gray-700" />
              </PaginationItem>
              <PaginationItem className={"sm:block hidden"}>
                <PaginationLink href="#" className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded">
                  Próximo
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>


        </section>

        {/*<Calendar eventClick={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}

        {/*<CardVacancy setIsOpenEdit={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}
        {/*<CardVacancy setIsOpenEdit={() => setVisibleModalHandleVacancy(!visibleModalHandleVacancy)} />*/}
      </section>
    </main>
  );
}
