"use client"

import AuthForm from "@/component/HandleUserNotLogged";
import './globals.css'
import {usePathname} from "next/navigation";
import RH from "@/app/sistema/rh/page";

export default function Home() {
  const pathname  = usePathname();

  // const { id } = router.query
  // console.log(id)
  // console.log(router.query)

  return (
    <>
      {pathname === "/" && <Auth />}
      {pathname === "/auth" && <Auth />}
      {pathname === "/rrr" && <RH />}
    </>
  )
}


function Auth () {
  return (
    <main className="flex items-center pt-8 justify-center h-[100%] bg-gray-100">
      <section className={"h-3/5"}>
        <AuthForm/>
      </section>
    </main>
  )
}