"use client"

import Filter from "@/component/Filter";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";



export default function CardVacancy() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const info = [
    {
      text: 'Candidatos',
      quantity: 37,
    },
    {
      text: 'Triagem',
      quantity: 37,
    },
    {
      text: 'Teste Pratico',
      quantity: 19,
    },
  ]

  return (
      <section className={"w-full bg-white p-4 shadow rounded border-b-4 border-[var(--principal-color)] grid grid-cols-1 gap-2 grid-rows-3"}>
        <header className={"flex justify-between"}>
          <h3>Titulo da vaga</h3>

          <nav>
            editar
          </nav>
        </header>

        <main className={"flex flex-wrap flex-row gap-2.5 justify-center w-full  items-center"}>
          <ListeInfo text={'Candidaturas'} quantity={56} className={"bg-green-300 txt-white"} />
          <FontAwesomeIcon icon={faArrowRight} />

          <section className={"flex flex-wrap flex-row gap-2.5 justify-center items-center"}>
            {
              info.map((item, index) => {
                return (
                <>
                  <ListeInfo {...item} key={index} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )})
            }
          </section>

          <ListeInfo text={'Contratacoes'} quantity={10} className={"bg-[var(--principal-color)] text-white"} />

        </main>

        <footer className={"flex items-end gap-3 text-sm justify-start overflow-x-auto"}>
          <section className={"flex items-center justify-start gap-1"}>
            <FontAwesomeIcon icon={faClock}/>
            <p>Vaga aberta a 2 meses</p>
          </section>

          <section className={"flex items-center justify-start gap-1 min-w-[195px]"}>
            <FontAwesomeIcon icon={faClock}/>
            <p>Fechar com 60 candidaturas</p>
          </section>
        </footer>

      </section>
  );
}

function ListeInfo(props) {
  return (
    <button
      className={`${props.className} shadow p-4 flex  justify-center font-[600] transition-all duration-500 hover:scale-110`}>
      {props.text} - {props.quantity}
    </button>
  )
}