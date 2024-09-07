'use client'

import React, { useState } from 'react';
import Link from "next/link";
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

export const AccordionItem = ({ title, content, className, classContentShow}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentShow = title ? (
    <>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <span className="text-xl text-slate-950">
            {isOpen ? '-' : '+'}
          </span>
    </>
  ) : (
    <span className={`text-xl text-slate-950 transform duration-500 ${isOpen ? "-rotate-180" : ""}`}>
      <FontAwesomeIcon icon={faChevronUp} />
    </span>
  )

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        onClick={toggleAccordion}
        className={`w-full text-left bg-gray-100 hover:bg-gray-200 focus:outline-none ${title ? `p-4` : `p-2`}`}
      >
        <div className={`flex items-center ${title ? `justify-between` : `justify-center`}`}>
          {contentShow}
        </div>
      </button>
      <div className={`content-accordion bg-white text-slate-950 ${isOpen ? "open py-4" : ""}`}>
        {content}
      </div>
    </div>
  );
};

const Accordion = (props) => {
  const rh = [
    "Painel",
    "Recrutamento",
    "Seleção & Contratação",
    "Treinamentos & Desenvolvimento de programas",
  ];
  const rhLink = [
    "",
    "recrutamento",
    "selecao",
    "treinamentos",
  ];

  const estoque = [
    "Painel",
    "Produtos",
    "Entrada e Saída",
    "Controle Financeiro",
    "Controle Total",
    "Realizar contagens físicas regulares",
    "Organizar o local de armazenamento",
    "Recepcionar as mercadorias",
    "Distribuir produtos e preparar volumes"
  ];

  const estoqueLink = [
    "",
    "produtos",
    "entrada-e-saida",
    "controle-financeiro",
    "controle-total",
    "Realizar contagens físicas regulares",
    "Organizar o local de armazenamento",
    "Recepcionar as mercadorias",
    "Distribuir produtos e preparar volumes"
  ];

  const financeiro = [
    "Planejamento",
    "Gestão dos recursos",
    "Controle",
    "Tesouraria",
    "Gestão dos impostos",
    "Gestão de fluxo de caixa"
  ];

  const financeiroLink = [
    "Planejamento",
    "Gestão dos recursos",
    "Controle",
    "Tesouraria",
    "Gestão dos impostos",
    "Gestão de fluxo de caixa"
  ];

  const vendas = [
    "Realizar atendimento a clientes",
    "Negociar preço e descontos da venda",
    "Orientar quanto às especificações dos produtos/serviços",
    "Controlar os pedidos dos clientes",
    "Informar sobre qualidades dos produtos e prazo de entrega estabelecido",
    "Auxiliar nas dúvidas dos clientes"
  ];

  const vendasLink = [
    "Realizar atendimento a clientes",
    "Negociar preço e descontos da venda",
    "Orientar quanto às especificações dos produtos/serviços",
    "Controlar os pedidos dos clientes",
    "Informar sobre qualidades dos produtos e prazo de entrega estabelecido",
    "Auxiliar nas dúvidas dos clientes"
  ];


  return (
    <div className="max-w-lg mx-auto mt-8">

      {/*<AccordionItem*/}
      {/*  title="Dashboard"*/}
      {/*  content={rh.map((item, i) =>*/}
      {/*    <Link className={*/}
      {/*      "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"*/}
      {/*    } key={i} href={`/sistema/rh${rhLink[i]}`}>*/}
      {/*      {item}*/}
      {/*    </Link>*/}
      {/*  )}*/}
      {/*/>*/}

      <Link className={
        "menu-item-a block p-4 transform transition-transform text-slate-950 duration-500 hover:translate-x-2 hover:text-white"
        } href={`/sistema`}
        onClick={() => props.setState(!props.state)}
      >
        Dashboard
      </Link>
      
      <AccordionItem
        title="RH"
        content={rh.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/sistema/rh/${rhLink[i]}`}
                onClick={() => props.setState(!props.state)}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Estoque"
        content={estoque.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/sistema/estoque/${estoqueLink[i]}`}
                onClick={() => props.setState(!props.state)}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Financeiro"
        content={financeiro.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/sistema/financeiro/${financeiroLink[i]}`}
                onClick={() => props.setState(!props.state)}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Vendas"
        content={vendas.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/sistema/vendas/${vendasLink[i]}`}
                onClick={() => props.setState(!props.state)}>
            {item}
          </Link>
        )}
      />
    </div>
  );
};

export default Accordion;
