"use client";
import Button from "@/ui/button";
import SearchBar from "@/ui/search-bar";
import Link from "next/link";
import { IconLogin2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import NavButton from "@/ui/nav-mobile-button";
import NavOptionsMenu from "@/ui/nav-options-menu";
import { navOptions } from "@/utils/nav-options";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target;
      if (target.closest("nav") || target.closest("#nav-button")) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header>
      <div className="flex bg-secondary-bg justify-between items-center mx-auto py-2 px-8">
        <Link href="/" className="hover:opacity-40">
          <img
            src="/Ey-Dress-Blanco.webp"
            alt="Logo"
            className="rounded-full size-16 aspect-square object-cover border-1 p-1"
          />
        </Link>
        <div className="hidden md:flex">
          <SearchBar />
        </div>
        <Link href="/login" className="hidden md:flex">
          <Button icon={<IconLogin2 />} text="Iniciar Sesión" />
        </Link>

        <div id="nav-button" className="absolute right-4 mt-4 md:hidden">
          <NavButton
            isOpen={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        {isOpen && (
          <NavOptionsMenu data={navOptions} onSelect={() => setIsOpen(false)} />
        )}
      </div>
      <div className=" hidden md:flex justify-center items-center gap-4">
        {navOptions.map((option, index) => (
          <Link
            key={index}
            href={option.href}
            className="flex text-sm font-light items-center p-2 gap-1 hover:underline"
          >
            {option.icon && <option.icon className="size-5" />}
            {option.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
