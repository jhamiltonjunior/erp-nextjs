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
        <CreatableSelect
          placeholder={props.placeholder}
          className={`${props.className} border-red-600`}
          defaultValue={value || props.defaultValue}
          onChange={setValue}
          options={props.options}
          isMulti={!!props.isMulti}
          isClearable={props.isClearable}
          classNames={{
            // control: (state) =>
            // state.isFocused ? 'border-red-600' : 'border-red-300',
          }}

          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,

              // borderColor: state.isFocused ? 'border-red-600' : 'border-grey-300',
            }),
          }}

        />
      ) : (
        <SelectUI className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label={props.placeholder}
          >
            <SelectValue placeholder={props.placeholder} />
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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

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
