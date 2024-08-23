"use client"

import {useState} from "react";

export default function Card({children, className}) {
  const [visibleFilter, setVisibleFilter] = useState(false);

  return (
    <section className={"w-full bg-white shadow rounded border-b-4  p-10 " + className}>
      <main className={"flex gap-8 justify-center w-full items-center"}>
        {children}
      </main>
    </section>
  );
}

