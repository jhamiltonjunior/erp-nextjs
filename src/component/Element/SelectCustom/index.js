"use client"

import React, { useState } from "react";
import Select, { components } from "react-select";
import CreatableSelect from 'react-select/creatable';
import {Select as SelectUI, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/component/ui/select";

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/component/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/component/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/component/ui/popover"


const SelectCustom = (props) => {
  const [value, setValue] = useState("");
  const isCreatable = props?.isCreatable

  return (
      isCreatable ? (
        <ComboboxDemo id={props.id} classNameContent={props.classNameContent} placeholder={props.placeholder} options={props.options} />
      ) : (
        <SelectUI
          onValueChange={(value) => {
            props?.setSelectedOption(value)
          }}
          id={props.id} className={`border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}>
          <SelectTrigger
            className={`w-[160px] rounded-lg sm:ml-auto ${props.className}`}
            aria-label={props.placeholder}
          >
            <SelectValue defaultValue={props.defaultValue || undefined} placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent className="rounded-xl">

            {
              props.options.map((option, i) => (
                <SelectItem value={`${option.value}`} key={i} className="rounded-lg">
                  {option.label}
                </SelectItem>
              ))
            }

          </SelectContent>
        </SelectUI>
      )

  );
};

export default SelectCustom;

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboboxDemo(props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen} className={"z-[1002]"}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? props.options.find((option) => option.value === value)?.label
            : props.placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`p-0 ${props.classNameContent}`}>
        <Command>
          <CommandInput placeholder={props.placeholder} />
          <CommandList>
            <CommandEmpty>Sem Resultados.</CommandEmpty>
            <CommandGroup>
              {props.options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


// <CreatableSelect
//   placeholder={props.placeholder}
//   className={`${props.className} border-red-600`}
//   defaultValue={value || props.defaultValue}
//   onChange={setValue}
//   options={props.options}
//   isMulti={!!props.isMulti}
//   isClearable={props.isClearable}
//   classNames={{
//     // control: (state) =>
//     // state.isFocused ? 'border-red-600' : 'border-red-300',
//   }}
//
//   styles={{
//     control: (baseStyles, state) => ({
//       ...baseStyles,
//
//       // borderColor: state.isFocused ? 'border-red-600' : 'border-grey-300',
//     }),
//   }}
//
// />

// <Select
//   placeholder={props.placeholder}
//   className={`${props.className} border-red-600`}
//   defaultValue={value || props.defaultValue}
//   onChange={setValue}
//   options={props.options}
//   isMulti={!!props.isMulti}
//   isClearable={props.isClearable}
//   classNames={{
//     // control: (state) =>
//     // state.isFocused ? 'border-red-600' : 'border-red-300',
//   }}
//
//   styles={{
//     control: (baseStyles, state) => ({
//       ...baseStyles,
//
//       // borderColor: state.isFocused ? 'border-red-600' : 'border-grey-300',
//     }),
//   }}
//
// />

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     background: 'transparent',
//     display: 'flex',
//     flexWrap: 'nowrap',
//     borderColor: 'hsl(0deg 78.56% 55.56%);',
//
//     // width: '7em'
//   }),
//   menu: (provided) => ({
//     ...provided,
//     background: 'transparent',
//     // width: '4em'
//   }),
// };
