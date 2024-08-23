"use client"

import Filter from "@/component/Filter";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCheck, faFilter, faLockOpen, faPercent, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Card from "@/component/Simple/Card";
// import {metadata} from "@/app/sistema/layout";

// metadata.title = 'Gerenciamento de RH'


export default function RHPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const data = [
    {
      n: 78,
      text: 'Candidaturas',
      description: 'Quantidade de candidaturas',
      color: 'var(--principal-color)',
      icon: faBriefcase,
    },
    {
      n: 40,
      text: '',
      description: 'Quantidade de Vagas Ativas',
      color: 'var(--principal-color)',
      icon: faLockOpen,
    },
    {
      n: 37,
      text: '',
      description: 'Quantidade de contratacoes',
      color: 'var(--principal-color)',
      icon: faCheck,
    },
    {
      n: '39%',
      text: '',
      description: 'Porcentagem de contratacoes',
      color: 'var(--principal-color)',
      icon: faPercent,
    },
  ]

  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <section className={"max-w-full w-[87rem] gap-6 flex flex-col items-center"}>
        <section className={"flex justify-end w-full gap-3"}>
          <NormalButton

            className={"flex items-center gap-2 bg-gray-300 p-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faFilter}/>}
            text={<p>Filtrar</p>}
            onClick={() => setVisibleFilter(!visibleFilter)}/>

        </section>
        {
          visibleFilter && (
            <Filter className={""}/>
          )
        }

        <header
          className={`grid xl:grid-cols-4 
           lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3
           transition-all duration-1000 ease-in-out
           `}>

          {
            data.map((item, i) => (
              <Card key={i} className={`border-[${item.color}]`}>
                <FontAwesomeIcon icon={item.icon} className={`text-[${item.color}] text-2xl`} />
                <section className={"flex items-start flex-wrap"}>
                  <h2 className={"text-xl w-full text-start"}><span className={"text-2xl"}>{item.n}</span> {item.text}</h2>
                  <p className={"text-sm"}>{item.description}</p>
                </section>
              </Card>
            ))
          }


        </header>


      </section>
    </main>
  );
}
