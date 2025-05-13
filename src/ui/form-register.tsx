import Link from "next/link";
import Button from "./button";

export default function FormRegister() {
  return (
    <div className="w-[350px] h-[550px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] box-border px-[30px] py-[20px] my-10">
      <div className="form-container">
        <p className="text-center font-sans font-extrabold text-[28px] my-[10px] mb-[30px]">
          Crea tu cuenta
        </p>
        <form className="w-full flex flex-col gap-[18px] mb-[15px]">
          <input
            type="text"
            className="rounded-[20px] border border-[#c0c0c0] outline-none box-border px-[15px] py-[12px]"
            placeholder="Nombre"
          />
          <input
            type="email"
            className="rounded-[20px] border border-[#c0c0c0] outline-none box-border px-[15px] py-[12px]"
            placeholder="Email"
          />
          <input
            type="password"
            className="rounded-[20px] border border-[#c0c0c0] outline-none box-border px-[15px] py-[12px]"
            placeholder="Contraseña"
          />
          <div className="flex w-full justify-center">
            <Button text="Crear cuenta" />
          </div>
        </form>
        <p className="m-0 text-[12px] text-[#747474] font-sans">
          Ya tienes una cuenta?
          <Link
            href="/login"
            className="ml-[1px] text-[14px] underline decoration-teal-600 text-teal-600 cursor-pointer font-extrabold"
          >
            Inicia sesión
          </Link>
        </p>
        <div className="w-full flex flex-col justify-start mt-6">
          <div className="rounded-[20px] box-border px-[15px] py-[10px] shadow-[0_10px_36px_rgba(0,0,0,0.16),_0_0_0_1px_rgba(0,0,0,0.06)] cursor-pointer flex justify-center items-center font-sans text-sm gap-[5px] border-[2px] border-[#747474]">
            <img src="/google.webp" alt="Logo-Google" className="size-8" />
            <span>Iniciar con Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
