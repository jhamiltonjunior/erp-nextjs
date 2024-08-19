"use client"

import AuthForm from "@/component/HandleUserNotLogged";
import '../globals.css'
import {usePathname} from "next/navigation";
import RH from "@/app/sistema/rh/page";

export default function Home() {
  const pathname  = usePathname();

  console.log(pathname)

  // const { id } = router.query
  // console.log(id)
  // console.log(router.query)

  return (
    <>
      muitos graficos bonitos
    </>
    )
}