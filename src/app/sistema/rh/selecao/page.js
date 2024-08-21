"use client"

import Filter from "@/component/Filter";
import {useState} from "react";
import CardVacancy from "@/component/CardVacancy";
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
        <Filter className={"max-h-10"} />

        <CardVacancy />
        <CardVacancy />
      </section>
    </main>
  );
}
