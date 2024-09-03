import SelectCustom from "@/component/Element/SelectCustom";
import CustomInput from "@/component/Element/CustomInput";
import Divider from "@/component/Element/Divider";
import CustomTextArea from "@/component/Element/CustomTextArea";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRotateLeft, faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {mascaraMoeda, moneyMask} from "@/lib/moneyMask";
import {Switch} from "@/component/ui/switch";
import {DatePicker} from "@/component/ui/date-picker";

export default function HandleProduct(props) {
  return (
    <form className={"overflow-auto bg-white p-4 h-full max-h-screen max-w-screen"}>
      <h2 className={"text-center text-2xl font-bold font-secundary']"}>Produto</h2>
      {/*

          Esse modal será apenas um component que terá outro component dentro
          Então devo remover as linhas abaixo e inserir {content}

          */}
      <h2 className={"text-xl text-start my-5"}>1 - Informacoes do produto</h2>
      <section className={"grid grid-cols-1 justify-center items-start gap-2"}>
        <CustomInput classNameContainer={"text-start"} id={"product-name"} label={"Nome"}
                     placeholder={"Digite o nome do produto"}/>
      </section>

      <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2 mt-6 gap-y-6"}>
        <CustomInput classNameContainer={"text-start"} type={"number"} id={"min-level"} label={"Nivel Minimo"}
                     placeholder={"Quantidade minima aceitavel"}/>


        <CustomInput disabled={true} classNameContainer={"text-start"} type={"number"} id={"max-level"} label={"Nivel Desejavel (%)"}
                     placeholder={"Quantidade Desejavel (% a mais que a desejavel)"}/>

        <CustomInput classNameContainer={"text-start"} id={"unit-cost"} onChange={(e) => {
          e.target.value = moneyMask(e.target.value)
        }} label={"Custo Unitario"} placeholder={"R$ 46,40"}/>

        <CustomInput classNameContainer={"text-start"} id={"unit-price"} onChange={(e) => {
          e.target.value = moneyMask(e.target.value)
        }} label={"Preco Unitario"} placeholder={"R$ 90,97"}/>


      </section>

      <section id={"aditional-session"}
               className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2 mt-6"}>

        <label className={"flex items-center justify-start gap-2 cursor-pointer"}><Switch className={"w-10 h-3"} />Tem prazo de validade?</label>

        <label className={"flex flex-wrap"} htmlFor={"entry-date"}>Data da entrada
        </label>

        <DatePicker className={"w-full"} placeholder={"Data de Validade"} id={"validity-date"}/>

          <DatePicker className={"w-full"} placeholder={"Data da entrada"} id={"entry-date"}/>

      </section>

      <section id={"aditional-session"}
               className={"grid grid-cols-1 md:grid-cols-1 justify-center items-start gap-2 mt-6"}>

        <label className={"text-start"} htmlFor={"product-description"}>Descricao do Produto
        </label>
        <CustomTextArea id={"product-description"}/>

      </section>

      <section className={"w-full flex justify-center mt-5"}>
        <NormalButton
          type={"submit"}
          className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
          icon={<FontAwesomeIcon icon={faCheck}/>}
          text={<p>Salvar</p>}
          onClick={() => console.log("Enviar")}/>
      </section>
    </form>
  )
}