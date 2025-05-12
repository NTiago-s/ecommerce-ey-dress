import { IconLogin2 } from "@tabler/icons-react";

export default function ButtonLogin() {
  return (
    <div>
      <button className="flex items-center gap-2 border-none text-white bg-gradient-to-tr from-blue-700 to-cyan-300 rounded-full text-[17px] px-6 py-2 font-sans cursor-pointer hover:animate-pulse-custom transition-all bg-[length:100%_auto] hover:bg-[length:200%_auto]">
        <IconLogin2 />
        Login
      </button>
    </div>
  );
}
