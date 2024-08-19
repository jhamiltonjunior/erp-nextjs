"use client"
import './style.css'
import SelectCustom from "@/component/SelectCustom";

export default function Filter(props) {
  const classNameInput = "border p-0.5 focus:border-[var(--principal-color) focus:outline-none]"

  const options = [
    { value: 'chocolate', label: 'Ambev' },
    { value: 'strawberry', label: 'Google' },
    { value: 'vanilla', label: 'Amazon' },
  ];

  const optionsC = [
    { value: 'chocolate', label: 'Tecnologia' },
    { value: 'strawberry', label: 'Automacao' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const optionsArrow = [
    { value: 'chocolate', label: 'A a Z' },
    { value: 'strawberry', label: 'Z a A' },
    { value: 'vanilla', label: 'Mais antiga' },
    { value: 'vanilla', label: 'Mais recente' },
  ];

  return (
    <section className={`filter flex gap-3 ${props.className}`}>
      <input type={"text"} className={classNameInput}/>

      <input type={"date"} className={classNameInput}/>
      <input type={"date"} className={classNameInput}/>

      <SelectCustom className={"h-full"} placeholder={"Todas empresas"} options={options} isMulti />
      <SelectCustom className={"vazio"} placeholder={"Todas as areas"} options={optionsC} isMulti />
      <SelectCustom className={"vazio"} placeholder={"Ordem"} options={optionsArrow} isClearable />

    </section>
  )
}