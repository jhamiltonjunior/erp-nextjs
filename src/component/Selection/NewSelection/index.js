import SelectCustom from "@/component/Element/SelectCustom";
import CustomInput from "@/component/Element/CustomInput";
import Divider from "@/component/Element/Divider";
import CustomTextArea from "@/component/Element/CustomTextArea";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRotateLeft, faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function HandleProcessSelective(props) {
  return (
    <form className={"overflow-auto bg-white p-4 h-full max-h-screen max-w-screen"}>
      <h2 className={"text-center text-2xl font-bold font-secundary']"}>Processo Seletivo</h2>
      {/*

          Esse modal será apenas um component que terá outro component dentro
          Então devo remover as linhas abaixo e inserir {content}

          */}
      <h2 className={"text-xl text-start my-5"}>1 - Informacoes da empresa</h2>
      <section className={"grid grid-cols-1 justify-center items-start gap-2"}>
        <label className={"text-start"}> Empresa
          <SelectCustom isClearable isCreatable classNameContent={"lg:w-[35.875rem] sm:max-w-full max-w-60 w-[21.375rem]"} placeholder={"Pesquise pela empresa"} options={[
            {
              value: 'Google',
              label: 'Google'
            },
            {
              value: 'Amazon',
              label: 'Amazon'
            },
            {
              value: 'Microsoft',
              label: 'Microsoft'
            },
          ]}/>
        </label>

      </section>

      <Divider/>

      <h2 className={"text-xl text-start mb-5"}>2 - Informacoes da vaga</h2>
      <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
        <label className={"text-start"}> Nome da vaga
          <SelectCustom isClearable isCreatable classNameContent={"lg:w-[25.875rem] sm:max-w-full max-w-60 w-[21.375rem]"} placeholder={"Digite o nome da vaga"} options={[
            {
              value: 'Auxiliar Administrativo',
              label: 'Auxiliar Administrativo'
            },
            {
              value: 'Desenvolvedor Web',
              label: 'Desenvolvedor Web'
            },
            {
              value: 'Engenheiro de Software',
              label: 'Engenheiro de Software'
            },
          ]}/>
        </label>

        <label className={"text-start"}>Etapa do Processo Seletivo
          <SelectCustom isClearable isCreatable
                        classNameContent={"lg:w-[25.875rem] sm:max-w-full max-w-60 w-[21.375rem]"}
                        placeholder={"Digite o nome da etapa"} options={[
            {
              value: 'Fit Cultural',
              label: 'Fit Cultural'
            },
            {
              value: 'Teste Tecnico',
              label: 'Teste Tecnico'
            },
            {
              value: 'Dinamica em Grupo',
              label: 'Dinamica em Grupo'
            },
          ]}/>
        </label>

      </section>

      <Divider/>

      <h2 className={"text-xl text-start mb-5"}>3 - Detalhes do email</h2>
      <section id={"aditional-session"}
               className={"grid grid-cols-1 md:grid-cols-1 justify-center items-start gap-2"}>


        <CustomInput classNameContainer={"text-start"} id={"email-title"} label={"Titulo do Email"} placeholder={"Ex: Voce esta convidado(a)!"}/>

        <label className={"text-start"} htmlFor={"email-body"}>Texto do Email
        </label>
        <CustomTextArea id={"email-body"}/>

      </section>

      <section className={"w-full flex justiy-center my-5"}>
        <NormalButton

          className={"flex items-center gap-2 bg-gray-300 p-2 px-2 max-h-[33px]"}
          icon={<FontAwesomeIcon icon={faArrowRotateLeft}/>}
          text={<p>Enviar e Criar Outro</p>}
          onClick={() => console.log("adiciona uma nova sessao")}/>
      </section>

      <section className={"w-full flex justify-center mt-5"}>
        <NormalButton
          type={"submit"}
          className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
          icon={<FontAwesomeIcon icon={faCheck}/>}
          text={<p>Enviar</p>}
          onClick={() => console.log("Enviar")}/>
      </section>

      <Divider/>


      Aqui eu devo ter algo para indicar quais candidatos aprovados podem participar da etapa
      E coisas desse tipo, poderia abrir outro modal para dizer para quantas pessoas, deve ser enviado o email,
      Isso poderia ser logo apois a pessoa selecionar a etapa do processo seletivo

    </form>
  )
}