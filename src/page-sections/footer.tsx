import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-2">
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/ey_dress25/" target="_blank">
              <IconBrandInstagram size={20} />
            </a>
          </div>
          <p>+54 2262654871</p>
        </div>

        <div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-1">Medios de pago</h3>
            <div className="flex flex-wrap gap-1">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-1">Medios de envío</h3>
            <img
              src="/correo-argentino.png"
              alt="Correo Argentino"
              className="h-6"
            />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 text-black rounded-l border placeholder:text-white placeholder:text-xs border-gray-300"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-r border border-gray-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-xs text-center space-y-2">
        <p>
          Defensa de las y los consumidores. Para reclamos{" "}
          <a href="#" className="underline">
            ingresá acá
          </a>{" "}
          /{" "}
          <a href="#" className="underline">
            Botón de arrepentimiento
          </a>
        </p>
      </div>
    </footer>
  );
}
