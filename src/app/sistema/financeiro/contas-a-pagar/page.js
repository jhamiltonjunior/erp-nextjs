"use client"

import Filter from "@/component/Filter";
import React, {useEffect, useRef, useState} from "react";
import NormalButton from "@/component/Element/NormalButton";
import {faChevronRight, faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimpleModal from "@/component/SimpleModal";
import {Checkbox} from "@/component/ui/checkbox";
import HandleProduct from "@/component/Stock/HandleProduct";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/component/ui/table";
import {
  Pagination,
  PaginationContent, PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/component/ui/pagination";
import {moneyMask} from "@/lib/moneyMask";
import SelectCustom from "@/component/Element/SelectCustom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/component/ui/collapsible"
import './styles.css';
import {AnimatePresence, motion} from "framer-motion";
import HoverCardShadcn from "@/component/ui/hover-card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/component/ui/accordion";

const lowStatusClass = "bg-red-200 text-red-600"
const mediumStatusClass = "bg-orange-100 text-orange-700"
const highStatusClass = "bg-blue-100 text-blue-600"

function dateString(date) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate.toLocaleDateString("pt-br");
}

export default function EntriesAndExitsPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleModalHandleVacancy, setVisibleModalHandleVacancy] = useState(false);
  const [table, setTable] = useState('entrada');


  const data = [
    {
      dataVenda: dateString("2024-09-01"),
      cliente: "Cliente A",
      descricaoVenda: "Venda de produto X",
      valorParcelaReceberMes: 150.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Crédito",
        dataPrevistaRecebimento: dateString("2024-09-15"),
        numeroParcelaMes: 1,
        numeroTotalParcelas: 12,
        dataRecebimentoCaixaBancos: dateString("2024-09-16")
      }
    },
    {
      dataVenda: dateString("2024-09-05"),
      cliente: "Cliente B",
      descricaoVenda: "Venda de serviço Y",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Boleto",
        dataPrevistaRecebimento: dateString("2024-09-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-09-21")
      }
    },
    {
      dataVenda: dateString("2024-10-05"),
      cliente: "Cliente C",
      descricaoVenda: "Cimento",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Debito",
        dataPrevistaRecebimento: dateString("2024-10-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-10-21")
      }
    },
    {
      dataVenda: dateString("2024-09-01"),
      cliente: "Cliente A",
      descricaoVenda: "Venda de produto X",
      valorParcelaReceberMes: 150.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Crédito",
        dataPrevistaRecebimento: dateString("2024-09-15"),
        numeroParcelaMes: 1,
        numeroTotalParcelas: 12,
        dataRecebimentoCaixaBancos: dateString("2024-09-16")
      }
    },
    {
      dataVenda: dateString("2024-10-05"),
      cliente: "Cliente C",
      descricaoVenda: "Cimento",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Debito",
        dataPrevistaRecebimento: dateString("2024-10-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-10-21")
      }
    },{
      dataVenda: dateString("2024-09-01"),
      cliente: "Cliente A",
      descricaoVenda: "Venda de produto X",
      valorParcelaReceberMes: 150.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Crédito",
        dataPrevistaRecebimento: dateString("2024-09-15"),
        numeroParcelaMes: 1,
        numeroTotalParcelas: 12,
        dataRecebimentoCaixaBancos: dateString("2024-09-16")
      }
    },
    {
      dataVenda: dateString("2024-09-05"),
      cliente: "Cliente B",
      descricaoVenda: "Venda de serviço Y",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Boleto",
        dataPrevistaRecebimento: dateString("2024-09-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-09-21")
      }
    },
    {
      dataVenda: dateString("2024-10-05"),
      cliente: "Cliente C",
      descricaoVenda: "Cimento",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Debito",
        dataPrevistaRecebimento: dateString("2024-10-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-10-21")
      }
    },
    {
      dataVenda: dateString("2024-09-01"),
      cliente: "Cliente A",
      descricaoVenda: "Venda de produto X",
      valorParcelaReceberMes: 150.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Crédito",
        dataPrevistaRecebimento: dateString("2024-09-15"),
        numeroParcelaMes: 1,
        numeroTotalParcelas: 12,
        dataRecebimentoCaixaBancos: dateString("2024-09-16")
      }
    },
    {
      dataVenda: dateString("2024-10-05"),
      cliente: "Cliente C",
      descricaoVenda: "Cimento",
      valorParcelaReceberMes: 200.00,
      condicoesRecebimento: {
        tipoRecebimento: "Cartão de Debito",
        dataPrevistaRecebimento: dateString("2024-10-20"),
        numeroParcelaMes: 3,
        numeroTotalParcelas: 6,
        dataRecebimentoCaixaBancos: dateString("2024-10-21")
      }
    },
  ];

  const optionsTables = [
    { value: 'todas', label: 'Todas' },
    { value: 'entrada', label: 'Entrada' },
    { value: 'saida', label: 'Saida' },
  ];

  const entries = [
    "Todos",
    "Vendas",
    "Serviços",
    "Boletos",
    "Cartão de Crédito",
    "Outros",
  ]

  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <section className={"max-w-full w-[87rem] gap-6 flex flex-col items-center"}>
        <section className={"flex justify-end w-full gap-3"}>
          <section>
          <SelectCustom
            setSelectedOption={setTable}
            className={"h-full max-w-[175px] min-w-full"} defaultValue={table} options={optionsTables} isMulti />

          </section>

          <NormalButton

            className={"flex items-center gap-2 bg-gray-300 px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faFilter} />}
            text={<p>Filtrar</p>}
            onClick={() => setVisibleFilter(!visibleFilter)}/>

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
          <Accordion type="multiple" collapsible className="w-full gap-2" defaultValue={["item-0"]}>
              {
                entries.map((entrie, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className={"bg-white overflow-y-auto max-h-[88vh]"}>
                      <AccordionTrigger className={"p-4"}>{entrie}</AccordionTrigger>
                      <AccordionContent className={"p-4"}>
                        {TableComponent(data)}
                      </AccordionContent>
                    </AccordionItem>
                ))
              }
          </Accordion>

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

      </section>
    </main>
  );
}

function TableComponent(data) {
  const [openRow, setOpenRow] = useState(null); // Guarda o índice da linha aberta

  const toggleRow = (index) => {
    setOpenRow(openRow === index ? null : index); // Alterna entre abrir e fechar a linha
  };

  const year = new Date().getFullYear();

  const headers = [
    "Data da Venda",
    "Cliente",
    "Descrição da Venda",
    (
      <HoverCardShadcn key={0} hoverContent={"Valor da Parcela a Receber neste Mês"}>
        Valor Parcela
      </HoverCardShadcn>
    ),

    (
      <HoverCardShadcn key={0} hoverContent={"Tipo de Recebimento, Ex: Boleto"}>
        Tipo
      </HoverCardShadcn>
    ),
    (
      <HoverCardShadcn key={0} hoverContent={"Data de Prevista de Recebimento da Parcela deste Mês"}>
        Previsão do Recebimento
      </HoverCardShadcn>
    ),
    "Parcela Atual",
    (
      <HoverCardShadcn key={0} hoverContent={"Data de Recebimento em Caixa/Bancos"}>
        Recebimento
      </HoverCardShadcn>
    ),
  ];

  return (
    <Table>
      <TableHeader className="sticky z-10 top-0 bg-white">
        <TableRow>
          {
            headers.map((month, i) => (
              <TableHead className="min-w-[150px] text-center" key={i}>{month}</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((venda, i) => (
          <React.Fragment key={i}>
            <TableRow
              className={`cursor-pointer sticky top-10 z-[${i + 1}] hover:bg-[var(--default-bg-light)] ${i % 2 ===0 ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => toggleRow(i)} // Você pode definir o que acontece ao clicar na linha
            >
              <TableCell>{venda.dataVenda}</TableCell>
              <TableCell>{venda.cliente}</TableCell>
              <TableCell>{venda.descricaoVenda}</TableCell>
              <TableCell>{moneyMask(venda.valorParcelaReceberMes.toFixed(2))}</TableCell>
              <TableCell>{venda.condicoesRecebimento.tipoRecebimento}</TableCell>
              <TableCell>{venda.condicoesRecebimento.dataPrevistaRecebimento}</TableCell>
              <TableCell>{venda.condicoesRecebimento.numeroParcelaMes}/{venda.condicoesRecebimento.numeroTotalParcelas}</TableCell>
              <TableCell>{venda.condicoesRecebimento.dataRecebimentoCaixaBancos}</TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  )
}
