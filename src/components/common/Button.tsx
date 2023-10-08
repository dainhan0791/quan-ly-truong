import React from "react";
import Text from "./Text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {

  const ButtonBaseClass = `bg-stone-400 px-3 py-2 w-3/6 rounded-xl text-sm font-medium focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`

  return (
    <button
      {...props}
      className={`${props.className ?? ""} ${ButtonBaseClass}` }
    >
      <Text text={title} />
    </button>
  );
};

export default Button;
