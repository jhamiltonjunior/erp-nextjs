import SelectCustom from "@/component/Element/SelectCustom";
import CustomInput from "@/component/Element/CustomInput";
import Divider from "@/component/Element/Divider";
import CustomTextArea from "@/component/Element/CustomTextArea";
import NormalButton from "@/component/Element/NormalButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function HandleVacancy(props) {
  return (
    <form className={"overflow-auto bg-white p-4 h-full max-h-screen max-w-screen"}>
      <h2 className={"text-center text-2xl font-bold font-secundary']"}>Seu Portal de Vagas</h2>
      {/*

          Esse modal será apenas um component que terá outro component dentro
          Então devo remover as linhas abaixo e inserir {content}

          */}
      <h2 className={"text-xl text-start my-5"}>1 - Informacoes da empresa</h2>
      <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
        <label className={"text-start"}> Empresa
          <SelectCustom isClearable isCreatable className={"Crie ou Pesquise"} placeholder={"Pesquise pela empresa"} options={[
            {
              value: 'google',
              label: 'Google'
            },
            {
              value: 'google',
              label: 'Amazon'
            },
            {
              value: 'google',
              label: 'Microsoft'
            },
          ]}/>
        </label>

        <CustomInput classNameContainer={"text-start"} label={"Estado"}/>

        <CustomInput classNameContainer={"text-start"} label={"Cidade"}/>

        <CustomInput classNameContainer={"text-start"} label={"Telefone"}/>
      </section>

      <Divider/>

      <h2 className={"text-xl text-start mb-5"}>2 - Informacoes da vaga</h2>
      <section className={"grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-2"}>
        <label className={"text-start"}> Nome da vaga
          <SelectCustom isClearable isCreatable className={""} options={[
            {
              value: 'google',
              label: 'Auxiliar Administrativo'
            },
            {
              value: 'google',
              label: 'Desenvolvedor Web'
            },
            {
              value: 'google',
              label: 'Engenheiro de Software'
            },
          ]}/>
        </label>

        <label className={"text-start"}> Localidade
          <SelectCustom isClearable className={""} options={[
            {
              value: 'google',
              label: 'Remoto'
            },
            {
              value: 'google',
              label: 'Híbrido'
            },
            {
              value: 'google',
              label: 'Presencial'
            },
          ]}/>
        </label>

        <CustomInput classNameContainer={"text-start"} label={"Remuneração mínima"}/>

        <CustomInput classNameContainer={"text-start"} label={"Remuneração máxima"}/>
      </section>

      <Divider/>

      <h2 className={"text-xl text-start mb-5"}>3 - Sessões adicionais</h2>
      <section id={"aditional-session"}
               className={"grid grid-cols-1 md:grid-cols-1 justify-center items-start gap-2"}>
        <CustomInput classNameContainer={"text-start"} label={"Titulo da sessão"} placeholder={"Ex: Quem somos!"}/>

        <CustomTextArea/>


      </section>

      <section className={"w-full flex justiy-center my-5"}>
        <NormalButton

          className={"flex items-center gap-2 bg-gray-300 p-2 px-2 max-h-[33px]"}
          icon={<FontAwesomeIcon icon={faPlus}/>}
          text={<p>Nova Sessão</p>}
          onClick={() => console.log("adiciona uma nova sessao")}/>
      </section>

      <section className={"w-full flex justify-center mt-5"}>
        <NormalButton
          type={"submit"}
          className={"flex items-center gap-2 bg-[var(--principal-color)] p-2 text-white px-2 max-h-[33px]"}
          icon={<FontAwesomeIcon icon={faCheck}/>}
          text={<p>Salvar</p>}
          onClick={() => console.log("Salvar")}/>
      </section>

    </form>
  )
}