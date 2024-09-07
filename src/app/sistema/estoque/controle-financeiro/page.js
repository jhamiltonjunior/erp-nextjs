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
      custoUnitario: '46.40', // custo unitário em R$
      custoTotal: (46.40 * 429).toFixed(2), // custo total = custo unitário * quantidade de entradas
      precoUnitario: '78.00', // preço unitário em R$
      precoTotal: (78.00 * 303).toFixed(2), // preço total = preço unitário * quantidade de saídas
      lucro: (78.00 * 303 - 46.40 * 429).toFixed(2), // lucro = preço total - custo total
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
      custoUnitario: '46.40',
      custoTotal: (46.40 * 500).toFixed(2),
      precoUnitario: '90.00',
      precoTotal: (90.00 * 300).toFixed(2),
      lucro: (90.00 * 300 - 46.40 * 500).toFixed(2),
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
      custoUnitario: '69.40',
      custoTotal: (69.40 * 600).toFixed(2),
      precoUnitario: '100.00',
      precoTotal: (100.00 * 400).toFixed(2),
      lucro: (100.00 * 400 - 69.40 * 600).toFixed(2),
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
      custoUnitario: '38.30',
      custoTotal: (38.30 * 300).toFixed(2),
      precoUnitario: '70.00',
      precoTotal: (70.00 * 200).toFixed(2),
      lucro: (70.00 * 200 - 38.30 * 300).toFixed(2),
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
      custoTotal: (90.40 * 200).toFixed(2),
      precoUnitario: '150.00',
      precoTotal: (150.00 * 100).toFixed(2),
      lucro: (150.00 * 100 - 90.40 * 200).toFixed(2),
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
      custoUnitario: '46.40', // custo unitário em R$
      custoTotal: (46.40 * 429).toFixed(2), // custo total = custo unitário * quantidade de entradas
      precoUnitario: '78.00', // preço unitário em R$
      precoTotal: (78.00 * 303).toFixed(2), // preço total = preço unitário * quantidade de saídas
      lucro: (78.00 * 303 - 46.40 * 429).toFixed(2), // lucro = preço total - custo total
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
      custoUnitario: '46.40',
      custoTotal: (46.40 * 500).toFixed(2),
      precoUnitario: '90.00',
      precoTotal: (90.00 * 300).toFixed(2),
      lucro: (90.00 * 300 - 46.40 * 500).toFixed(2),
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
      custoUnitario: '69.40',
      custoTotal: (69.40 * 600).toFixed(2),
      precoUnitario: '100.00',
      precoTotal: (100.00 * 400).toFixed(2),
      lucro: (100.00 * 400 - 69.40 * 600).toFixed(2),
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
      custoUnitario: '38.30',
      custoTotal: (38.30 * 300).toFixed(2),
      precoUnitario: '70.00',
      precoTotal: (70.00 * 200).toFixed(2),
      lucro: (70.00 * 200 - 38.30 * 300).toFixed(2),
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
      custoTotal: (90.40 * 200).toFixed(2),
      precoUnitario: '150.00',
      precoTotal: (150.00 * 100).toFixed(2),
      lucro: (150.00 * 100 - 90.40 * 200).toFixed(2),
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
      custoUnitario: '46.40', // custo unitário em R$
      custoTotal: (46.40 * 429).toFixed(2), // custo total = custo unitário * quantidade de entradas
      precoUnitario: '78.00', // preço unitário em R$
      precoTotal: (78.00 * 303).toFixed(2), // preço total = preço unitário * quantidade de saídas
      lucro: (78.00 * 303 - 46.40 * 429).toFixed(2), // lucro = preço total - custo total
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
      custoUnitario: '46.40',
      custoTotal: (46.40 * 500).toFixed(2),
      precoUnitario: '90.00',
      precoTotal: (90.00 * 300).toFixed(2),
      lucro: (90.00 * 300 - 46.40 * 500).toFixed(2),
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
      custoUnitario: '69.40',
      custoTotal: (69.40 * 600).toFixed(2),
      precoUnitario: '100.00',
      precoTotal: (100.00 * 400).toFixed(2),
      lucro: (100.00 * 400 - 69.40 * 600).toFixed(2),
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
      custoUnitario: '38.30',
      custoTotal: (38.30 * 300).toFixed(2),
      precoUnitario: '70.00',
      precoTotal: (70.00 * 200).toFixed(2),
      lucro: (70.00 * 200 - 38.30 * 300).toFixed(2),
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
      custoTotal: (90.40 * 200).toFixed(2),
      precoUnitario: '150.00',
      precoTotal: (150.00 * 100).toFixed(2),
      lucro: (150.00 * 100 - 90.40 * 200).toFixed(2),
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
      custoUnitario: '46.40', // custo unitário em R$
      custoTotal: (46.40 * 429).toFixed(2), // custo total = custo unitário * quantidade de entradas
      precoUnitario: '78.00', // preço unitário em R$
      precoTotal: (78.00 * 303).toFixed(2), // preço total = preço unitário * quantidade de saídas
      lucro: (78.00 * 303 - 46.40 * 429).toFixed(2), // lucro = preço total - custo total
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
      custoUnitario: '46.40',
      custoTotal: (46.40 * 500).toFixed(2),
      precoUnitario: '90.00',
      precoTotal: (90.00 * 300).toFixed(2),
      lucro: (90.00 * 300 - 46.40 * 500).toFixed(2),
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
      custoUnitario: '69.40',
      custoTotal: (69.40 * 600).toFixed(2),
      precoUnitario: '100.00',
      precoTotal: (100.00 * 400).toFixed(2),
      lucro: (100.00 * 400 - 69.40 * 600).toFixed(2),
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
      custoUnitario: '38.30',
      custoTotal: (38.30 * 300).toFixed(2),
      precoUnitario: '70.00',
      precoTotal: (70.00 * 200).toFixed(2),
      lucro: (70.00 * 200 - 38.30 * 300).toFixed(2),
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
      custoTotal: (90.40 * 200).toFixed(2),
      precoUnitario: '150.00',
      precoTotal: (150.00 * 100).toFixed(2),
      lucro: (150.00 * 100 - 90.40 * 200).toFixed(2),
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
      custoUnitario: '46.40', // custo unitário em R$
      custoTotal: (46.40 * 429).toFixed(2), // custo total = custo unitário * quantidade de entradas
      precoUnitario: '78.00', // preço unitário em R$
      precoTotal: (78.00 * 303).toFixed(2), // preço total = preço unitário * quantidade de saídas
      lucro: (78.00 * 303 - 46.40 * 429).toFixed(2), // lucro = preço total - custo total
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
      custoUnitario: '46.40',
      custoTotal: (46.40 * 500).toFixed(2),
      precoUnitario: '90.00',
      precoTotal: (90.00 * 300).toFixed(2),
      lucro: (90.00 * 300 - 46.40 * 500).toFixed(2),
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
      custoUnitario: '69.40',
      custoTotal: (69.40 * 600).toFixed(2),
      precoUnitario: '100.00',
      precoTotal: (100.00 * 400).toFixed(2),
      lucro: (100.00 * 400 - 69.40 * 600).toFixed(2),
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
      custoUnitario: '38.30',
      custoTotal: (38.30 * 300).toFixed(2),
      precoUnitario: '70.00',
      precoTotal: (70.00 * 200).toFixed(2),
      lucro: (70.00 * 200 - 38.30 * 300).toFixed(2),
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
      custoTotal: (90.40 * 200).toFixed(2),
      precoUnitario: '150.00',
      precoTotal: (150.00 * 100).toFixed(2),
      lucro: (150.00 * 100 - 90.40 * 200).toFixed(2),
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
                <TableHead className={"text-center"}>Produtos</TableHead>
                <TableHead className={"text-center"}>Entrada</TableHead>
                <TableHead className={"text-center"}>Saída</TableHead>
                <TableHead className={"text-center"}>Custo Unitario</TableHead>
                <TableHead className={"text-center"}>Preco Unitario</TableHead>
                <TableHead className={"text-center"}>Custo Atual</TableHead>
                <TableHead className={"text-center"}>Preço Total</TableHead>
                <TableHead className={"text-center"}>Lucro</TableHead>
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
                    <TableCell>{item.entrada}</TableCell> {/* Entrada */}
                    <TableCell>{item.saida}</TableCell> {/* Saída */}
                    <TableCell>{moneyMask(item.custoUnitario)}</TableCell> {/* Estoque Mínimo */}
                    <TableCell>{moneyMask(item.precoUnitario)}</TableCell> {/* Estoque Desejado */}
                    <TableCell className={"text-center"}>
                        R$ {moneyMask(item.custoTotal)}
                    </TableCell>
                    <TableCell className={"text-center"}>
                        {moneyMask(item.precoTotal)}
                    </TableCell>
                    <TableCell className={item.statusLucro() + ' text-center'}>{moneyMask(item.lucro)}</TableCell> {/* Lucro */}
                  </TableRow>
                ))
              }
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
