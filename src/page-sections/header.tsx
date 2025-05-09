import ButtonLogin from "@/ui/button-login";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex bg-secondary-bg justify-between items-center mx-auto p-4">
        <Link href="/" className="hover:opacity-40">
          <img
            src="/Ey-Dress-Blanco.webp"
            alt="Logo"
            className="rounded-full size-20 aspect-square object-cover"
          />
        </Link>
        <ButtonLogin />
      </div>
    </header>
  );
}
