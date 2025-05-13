import Link from "next/link";
import Button from "./button";

export default function FormLogin() {
  return (
    <div className="w-[350px] h-[500px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] box-border p-[20px_30px] my-10">
      <div className="form-container">
        <p className="text-center font-sans mt-2 mb-8 text-xl font-extrabold">
          Bienvenido a Ey-Dress
        </p>
        <form className="flex flex-col gap-[18px] mb-[15px]">
          <input
            type="email"
            className="rounded-[20px] border border-gray-400 outline-none p-[12px_15px] box-border"
            placeholder="Email"
          />
          <input
            type="password"
            className="rounded-[20px] border border-gray-400 outline-none p-[12px_15px] box-border"
            placeholder="Contraseña"
          />
          <p className="underline text-right text-gray-500 text-xs font-bold hover:text-black cursor-pointer">
            Restablecer contraseña?
          </p>
          <div className="flex w-full justify-center">
            <Button text="Iniciar Sesión" />
          </div>
        </form>
        <p className="text-xs text-gray-500 font-sans">
          No tienes cuenta?
          <Link
            href="/register"
            className="ml-1 text-sm underline underline-offset-2 text-teal-600 font-extrabold cursor-pointer"
          >
            Crear cuenta
          </Link>
        </p>
        <div className="flex flex-col justify-start mt-10">
          <div className="rounded-[20px] p-[10px_15px] shadow-md cursor-pointer flex justify-center items-center text-sm gap-1 border-2 border-gray-500">
            <img src="/google.webp" alt="Logo-Google" className="size-8" />
            <span>Iniciar con Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
