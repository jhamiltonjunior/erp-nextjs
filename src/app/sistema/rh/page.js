import Filter from "@/component/Filter";

export const metadata = {
  title: 'Gerenciamento de RH',
}

export default function RHPage() {
  return (
    <main className="flex w-full min-h-screen text-center justify-center bg-[var(--default-bg-dark)] p-4">
      <Filter className={"max-h-10"} />
    </main>
  );
}
