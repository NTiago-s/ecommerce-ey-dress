interface NavMobileProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function NavButton({ isOpen, toggle }: NavMobileProps) {
  return (
    <button
      onClick={toggle}
      className="flex flex-col gap-2 w-8 cursor-pointer active:opacity-25 transition relative z-50 md:hidden"
    >
      <div
        className={`rounded-2xl h-[3px] w-1/2 bg-primary duration-500 origin-right
            ${
              isOpen
                ? "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]"
                : ""
            }`}
      ></div>
      <div
        className={`rounded-2xl h-[3px] w-full bg-primary duration-500
            ${isOpen ? "-rotate-45" : ""}`}
      ></div>
      <div
        className={`rounded-2xl h-[3px] w-1/2 bg-primary duration-500 place-self-end origin-left
            ${
              isOpen
                ? "rotate-[225deg] translate-x-[12px] translate-y-[1px]"
                : ""
            }`}
      ></div>
    </button>
  );
}
