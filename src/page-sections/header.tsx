import ButtonLogin from "@/ui/button-login";
import SearchBar from "@/ui/search-bar";
import Link from "next/link";

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
        <ButtonLogin />
      </div>
    </header>
  );
}
