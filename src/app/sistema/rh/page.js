"use client"

import Filter from "@/component/Filter";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
// import {metadata} from "@/app/sistema/layout";

// metadata.title = 'Gerenciamento de RH'


export default function RHPage() {
  const [visibleFilter, setVisibleFilter] = useState(false);
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
            <Filter className={"max-h-10"}/>
          )
        }


      </section>
    </main>
  );
}
