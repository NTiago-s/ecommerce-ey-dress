import ButtonLogin from "@/ui/button";
import SearchBar from "@/ui/search-bar";
import Link from "next/link";
import { IconLogin2 } from "@tabler/icons-react";
export default function Header() {
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
        <SearchBar />
        <Link href="/login">
          <ButtonLogin icon={<IconLogin2 />} text="Login" />
        </Link>
      </div>
    </header>
  );
}
