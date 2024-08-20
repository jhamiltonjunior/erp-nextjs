import Filter from "@/component/Filter";

export const metadata = {
  title: 'Gerenciamento de RH',
}

export default function SelectionPage() {
  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <section className={"max-w-[83rem]" +
        ""}>
        <Filter className={"max-h-10"} />

        fazer um componente de card para cada vaga
      </section>
    </main>
  );
}
