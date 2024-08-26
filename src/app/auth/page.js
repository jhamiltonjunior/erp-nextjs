"use client"

import AuthForm from "@/component/HandleUserNotLogged";
import '../globals.css'

export default function Auth () {
  return (
    <main className="flex items-center pt-8 justify-center h-[100%] bg-gray-100">
      <section className={"h-3/5"}>
        <AuthForm/>
      </section>
    </main>
  )
}