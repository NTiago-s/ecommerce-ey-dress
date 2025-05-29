import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function Contact() {
  return (
    <aside className="flex w-full justify-center gap-4 p-6 bg-slate-100 ">
      <Link
        href="https://www.instagram.com/ey_dress25?igsh=dnJzaGtzdGlkd2Y="
        className="flex w-full max-w-xl p-2 gap-2 justify-center items-center text-black shadow shadow-black"
      >
        <IconBrandInstagram className="size-12 md:size-20 stroke-1" />
        <div className="flex flex-col  text-xs md:text-lg">
          <span>Seguinos en Instagram</span>
          <span>@ey_dress25</span>
        </div>
      </Link>
      <Link
        href="https://www.instagram.com/ey_dress25?igsh=dnJzaGtzdGlkd2Y="
        className="flex w-full max-w-xl gap-2 p-2 justify-center items-center text-black shadow shadow-black"
      >
        <IconBrandWhatsapp className="size-12 md:size-20 stroke-1" />
        <div className="flex flex-col text-xs md:text-lg">
          <span>Hablanos al Whatsapp</span>
        </div>
      </Link>
    </aside>
  );
}
