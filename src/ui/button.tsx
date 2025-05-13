import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
};

export default function Button({ text, icon }: ButtonProps) {
  return (
    <button className="flex w-full justify-center items-center gap-2 border-none text-white bg-gradient-to-tr from-blue-700 to-cyan-300 rounded-full text-[17px] px-6 py-2 font-sans cursor-pointer hover:animate-pulse-custom transition-all bg-[length:100%_auto] hover:bg-[length:200%_auto]">
      {icon && icon}
      {text}
    </button>
  );
}
