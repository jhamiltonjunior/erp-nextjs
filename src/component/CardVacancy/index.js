"use client"

import Filter from "@/component/Filter";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "@/component/NormalButton";
import SelectCustom from "@/component/SelectCustom";

export default function CardVacancy() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const info = [
    {
      text: 'Candidatos - 37',
    },
    {
      text: 'Triagem - 26',
    },
    {
      text: 'Teste Pratico - 19',
    },
  ]

  const options = [
    {
      value: 'publicada',
      label: 'Publicada'
    },
    {
      value: 'arquivada',
      label: 'Arquivada'
    },
    {
      value: 'congelada',
      label: 'Congelada'
    },
  ]

  console.log(options[0].value)

  return (
      <section className={"w-full bg-white p-4 shadow rounded border-b-4 border-[var(--principal-color)] grid grid-cols-1 gap-2 grid-rows-3"}>
        <header className={"flex justify-between"}>
          <section className={"flex gap-4"}>
            <h3>Titulo da vaga</h3>
            <h3>Empresa: Amazon</h3>
          </section>

          <nav className={"flex gap-4"}>
            <SelectCustom placeholder={"Status"} options={options} defaultValue={options[0].value} />
            <NormalButton text={'Editar'} className={"bg-gray-300 p-1 px-2 max-h-[33px]"} />
          </nav>
        </header>

        <main className={"flex flex-wrap flex-row gap-2.5 justify-center w-full  items-center"}>
          <NormalButton text={'Candidaturas - 56'} className={"bg-green-300 p-4 txt-white"} />
          <FontAwesomeIcon icon={faArrowRight} />

          <section className={"flex flex-wrap flex-row gap-2.5 justify-center items-center"}>
            {
              info.map((item, index) => {
                return (
                <>
                  <NormalButton {...item} key={index} className={"p-4"} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )})
            }
          </section>

          <NormalButton text={'Contratacoes - 10'}  className={"bg-[var(--principal-color)] p-4 text-white"} />

        </main>

        <footer className={"flex items-end gap-3 text-sm justify-start overflow-x-auto"}>
          <section className={"flex items-center justify-start gap-1"}>
            <FontAwesomeIcon icon={faClock}/>
            <p>Vaga aberta a 2 meses</p>
          </section>

          <section className={"flex items-center justify-start gap-1 min-w-[195px]"}>
            <FontAwesomeIcon icon={faCircleXmark}/>
            <p>Fechar com 60 candidaturas</p>
          </section>
        </footer>

      </section>
  );
}

