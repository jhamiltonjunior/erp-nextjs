import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircle,
  faGripLines,
  faPenToSquare,
  faTrashCan, faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import {Checkbox} from "@/component/ui/checkbox";
import NormalButton from "@/component/Element/NormalButton";
import HoverCardShadcn from "@/component/ui/hover-card";
import React from "react";

export default function Line({ content, key }) {
  return (
    <section className={"flex gap-8 justify-between w-full items-center group"} key={key}>
      <section className={"flex gap-5 items-center py-4"}>
        <FontAwesomeIcon icon={faGripLines} className={`text-[${content.color}] text-sm `}/>

        <Checkbox/>

        <section className={"flex items-start flex-wrap"}>
          <h2 className={"text-md w-full text-start"}>{content.text}</h2>
          {/*<p className={"text-sm"}>{item.description}</p>*/}
        </section>
      </section>

      <section className={"justify-start w-1/3 text-gray-800 gap-3 hidden group-hover:flex"}>
        <HoverCardShadcn className={`flex gap-2 items-center`} hoverContent={"Visualizar"}>
          <NormalButton
            className={"flex items-center p-2 px-2 shadow-none max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>}
            onClick={() => alert("Por enquanto nao faço nada!")}/>
        </HoverCardShadcn>

        <HoverCardShadcn className={`flex gap-2 items-center`} hoverContent={"Editar"}>
          <NormalButton
            className={"flex items-center p-2 px-2 shadow-none max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faPenToSquare}/>}
            onClick={() => alert("Por enquanto nao faço nada!")}/>
        </HoverCardShadcn>

        <HoverCardShadcn className={`flex gap-2 items-center`} hoverContent={"Excluir"}>
          <NormalButton
            className={"flex items-center gap-2 shadow-none px-2 max-h-[33px]"}
            icon={<FontAwesomeIcon icon={faTrashCan}/>}
            onClick={() => alert("Por enquanto nao faço nada!")}/>
        </HoverCardShadcn>
      </section>

      <section>
        <HoverCardShadcn className={`flex gap-2 items-center`} hoverContent={"Quantidade nessa etapa"}>
          {content.quantityUsers || 0}
          <FontAwesomeIcon className={`text-[0.4rem] text-gray-400`} icon={faCircle}/>
          <FontAwesomeIcon className={` text-gray-400`} icon={faUserGroup}/>
        </HoverCardShadcn>
      </section>
    </section>
  )
}