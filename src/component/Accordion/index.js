'use client'

import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
          <span className="text-xl text-slate-950">
            {isOpen ? '-' : '+'}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-slate-950">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const rh = [
    "Seleção",
    "Recrutamento",
    "Treinamentos",
    "Desenvolvimento de programas",
    "Organizar entrevistas",
    "Coordenar a contratação"
  ];

  const estoque = [
    "Fiscalizar a entrada e saída das mercadorias",
    "Verificar a validade e o estoque dos produtos",
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

  const vendas = [
    "Realizar atendimento a clientes",
    "Negociar preço e descontos da venda",
    "Orientar quanto às especificações dos produtos/serviços",
    "Controlar os pedidos dos clientes",
    "Informar sobre qualidades dos produtos e prazo de entrega estabelecido",
    "Auxiliar nas dúvidas dos clientes"
  ];


  return (
    <div className="max-w-lg mx-auto mt-8">

      <AccordionItem
        title="RH"
        content={rh.map((item, i) => <p key={i}>{item}</p>)}
      />
      <AccordionItem
        title="Estoque"
        content={estoque.map((item, i) => <p key={i}>{item}</p>)}
      />
      <AccordionItem
        title="Financeiro"
        content={financeiro.map((item, i) => <p key={i}>{item}</p>)}
      />
      <AccordionItem
        title="Vendas"
        content={vendas.map((item, i) => <p key={i}>{item}</p>)}
      />
    </div>
  );
};

export default Accordion;
