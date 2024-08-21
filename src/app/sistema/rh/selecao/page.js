"use client"

import Filter from "@/component/Filter";
import {useState} from "react";
import CardVacancy from "@/component/CardVacancy";
import NormalButton from "@/component/NormalButton";
import {faPlus, faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { Metadata } from 'next'
//
// export const metadata = {
//   title: 'Dashboard'
// }
export default function SelectionPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);

  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <section className={"max-w-full w-[87rem] gap-6 flex flex-col items-center"}>
        <section className={"flex justify-end w-full gap-3"}>
          <NormalButton

            className={"flex items-center gap-2 bg-gray-300 px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faFilter} />}
            text={<p>Filtrar</p>}
            onClick={() => setVisibleFilter(!visibleFilter)}/>

          <NormalButton

            className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faPlus} />}
            text={<p>Nova Vaga</p>}
            onClick={() => setVisibleFilter(!visibleFilter)}/>
        </section>
        {
          visibleFilter && (
            <Filter className={"max-h-10"} />
          )
        }

        <CardVacancy />
        <CardVacancy />
      </section>
    </main>
  );
}
