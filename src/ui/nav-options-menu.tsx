import { NavOption } from "@/types";
import Link from "next/link";
import SearchBar from "./search-bar";
import Button from "./button";
import { IconLogin2 } from "@tabler/icons-react";

interface NavOptionsMenuProps {
  data: NavOption[];
  onClick: () => void;
}

export default function NavOptionsMenu({ data, onClick }: NavOptionsMenuProps) {
  return (
    <div className="flex flex-col gap-4 w-full left-0 absolute top-[72px] bg-background p-6 rounded-b-xl shadow-lg z-20 md:hidden">
      <SearchBar />
      {data.map((option) => (
        <Link
          key={option.title}
          href={option.href}
          aria-label={option.title}
          title={option.title}
          className="text-primary-txt text-sm md:text-base hover:bg-primary/10 px-4 py-2 flex items-center gap-2 rounded-xl transition"
          onClick={onClick}
        >
          <option.icon /> {option.title}
        </Link>
      ))}

      <Link href="/login" className="flex" onClick={onClick}>
        <Button icon={<IconLogin2 />} text="Iniciar Sesión " />
      </Link>
    </div>
  );
}
