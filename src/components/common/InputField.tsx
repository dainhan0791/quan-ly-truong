import { InputNameEnum } from "@/enums/input-name.enum";
import { PlaceholderEnum } from "@/enums/placeholder.enum";
import React from "react";

interface InputFieldProps {
  id: InputNameEnum;
  name: InputNameEnum;
  type: string;
  value: string;
  onChange: Function;
  placeholder: PlaceholderEnum;
  className?: string;
  required: boolean;
}

const InputField = (props: InputFieldProps) => {
  const InputBaseClass =
    "w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ";
  return (
    <input
      required={props.required}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={(event) => props.onChange(event)}
      placeholder={props.placeholder}
      className={`${props.className ?? ""} ${InputBaseClass} `}
    />
  );
};

export default InputField;
