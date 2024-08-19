'use client'

import React, { useState } from 'react';
import Link from "next/link";
import './style.css'

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
        <div className="bg-white text-slate-950">
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
  const rhLink = [
    "selecao",
    "recrutamento",
    "treinamentos",
    "desenvolvimento-de-programas",
    "organizar-entrevistas",
    "coordenar-a-contratacao"
  ];

  const estoque = [
    "Fiscalizar a entrada e saída das mercadorias",
    "Verificar a validade e o estoque dos produtos",
    "Realizar contagens físicas regulares",
    "Organizar o local de armazenamento",
    "Recepcionar as mercadorias",
    "Distribuir produtos e preparar volumes"
  ];

  const estoqueLink = [
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
      } href={`/sistema`}>
        Dashboard
      </Link>
      
      <AccordionItem
        title="RH"
        content={rh.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/sistema/rh/${rhLink[i]}`}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Estoque"
        content={estoque.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/estoque/${estoqueLink[i]}`}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Financeiro"
        content={financeiro.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/financeiro/${financeiroLink[i]}`}>
            {item}
          </Link>
        )}
      />
      <AccordionItem
        title="Vendas"
        content={vendas.map((item, i) =>
          <Link className={
            "menu-item-a block p-4 transform transition-transform duration-500 hover:translate-x-2 hover:text-white"
          } key={i} href={`/vendas/${vendasLink[i]}`}>
            {item}
          </Link>
        )}
      />
    </div>
  );
};

export default Accordion;

// uso do link

// import { useRouter } from 'next/router';
//
// const Content = () => {
//   const router = useRouter();
//   const { pathname } = router;
//
//   return (
//     <div>
//       {pathname === '/page1' && <Page1 />}
//       {pathname === '/page2' && <Page2 />}
//       {/* Adicione mais condições conforme necessário */}
//     </div>
//   );
// };
//
// const Page1 = () => <div>Conteúdo da Página 1</div>;
// const Page2 = () => <div>Conteúdo da Página 2</div>;
//
// export default Content;
