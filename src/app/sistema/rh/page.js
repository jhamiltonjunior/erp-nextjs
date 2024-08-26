"use client"

import Filter from "@/component/Filter";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCheck, faFilter, faLockOpen, faPercent, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import Card from "@/component/Simple/Card";
import dynamic from "next/dynamic";
// import ApexChart from "@/component/Graphic/Basic";

// metadata.title = 'Gerenciamento de RH'

const ApexChart = dynamic(() => import('@/component/Graphic/Basic'),   { ssr: false })
export default function RHPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const series = {
    monthDataSeries1: {
      prices: [7.85, 8.0, 8.9, 8.5, 8.7, 8.7],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    },
    monthDataSeries2: {
      prices: [7.0, 8.5, 8.8, 8.4, 8.9, 8.0],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    }
  };
  const series2 = {
    monthDataSeries1: {
      prices: [85, 80, 89, 85, 87, 87],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    },
    monthDataSeries2: {
      prices: [70, 85, 88, 84, 89, 80],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    }
  };
  const series3 = {
    monthDataSeries1: {
      prices: [785, 800, 809, 850, 870, 807],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    },
    monthDataSeries2: {
      prices: [760, 850, 880, 804, 809, 800],
      dates: [
        "2024-01-01",
        "2024-02-01",
        "2024-03-01",
        "2024-04-01",
        "2024-05-01",
        "2024-06-01",
      ]
    }
  };

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
    // {
    //   n: '39%',
    //   text: '',
    //   description: 'Porcentagem de contratacoes',
    //   color: 'var(--principal-color)',
    //   icon: faPercent,
    // },
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

        <main className={"w-full flex flex-col gap-8"}>
          <section className={"w-full bg-white"}>
            <section className={"flex gap-8 justify-start w-full items-center px-10 pt-10"}>
              <FontAwesomeIcon icon={faPercent} className={`text-[var(--principal-color)] text-2xl`}/>
              <section className={"flex items-start flex-wrap"}>
                <h2 className={"text-xl w-full text-start"}>Taxa de Admissoes</h2>
                <p className={"text-sm"}>Visualize aqui</p>
              </section>
            </section>
            <Card className={`border-[var(--principal-color)] w-full`}>
              <section className={"w-full flex items-start flex-wrap"}>

                {
                  (typeof window !== 'undefined') &&
                  <ApexChart seriesData={series}/>
                }
              </section>
            </Card>
          </section>

          <section className={"w-full bg-white"}>
            <section className={"flex gap-8 justify-start w-full items-center px-10 pt-10"}>
              <FontAwesomeIcon icon={faPercent} className={`text-[var(--principal-color)] text-2xl`}/>
              <section className={"flex items-start flex-wrap"}>
                <h2 className={"text-xl w-full text-start"}>Turnover</h2>
                <p className={"text-sm"}>Visualize aqui</p>
              </section>
            </section>
            <Card className={`border-[var(--principal-color)] w-full`}>
              <section className={"w-full flex items-start flex-wrap"}>

                {
                  (typeof window !== 'undefined') &&
                  <ApexChart seriesData={series2}/>
                }
              </section>
            </Card>
          </section>

          <section className={"w-full bg-white"}>
            <section className={"flex gap-8 justify-start w-full items-center px-10 pt-10"}>
              <FontAwesomeIcon icon={faPercent} className={`text-[var(--principal-color)] text-2xl`}/>
              <section className={"flex items-start flex-wrap"}>
                <h2 className={"text-xl w-full text-start"}><span className={"text-2xl"}>87</span> Grafico Bonito</h2>
                <p className={"text-sm"}>Visualize aqui</p>
              </section>
            </section>
            <Card className={`border-[var(--principal-color)] w-full`}>
              <section className={"w-full flex items-start flex-wrap"}>

                {
                  (typeof window !== 'undefined') &&
                  <ApexChart seriesData={series3}/>
                }
              </section>
            </Card>
          </section>


        </main>


      </section>
    </main>
  );
}
