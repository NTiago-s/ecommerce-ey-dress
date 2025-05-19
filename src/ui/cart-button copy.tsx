"use client";
import { useState } from "react";
// import ButtonUI from "@/components/button-ui";
// import { RulerIcon } from "@/icons/icons";
// import ColorsEffect from "@/components/colors-effect";
// import Modal from "./modal";
import { useCart } from "@/hooks/use-cart";
import { IconRuler3 } from "@tabler/icons-react";
interface CartButtonProps {
  product: any;
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}

export default function CartButton({
  product,
  selectedColor,
  setSelectedColor,
}: CartButtonProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uniqueColors = Array.from(
    new Set(product.stock.map((s: any) => s.color))
  );

  const filteredSizes = selectedColor
    ? product.stock.filter((s: any) => s.color === selectedColor)
    : product.stock;

  const uniqueSizes = Array.from(
    new Map(filteredSizes.map((s: any) => [s.size_stock.name, s])).values()
  );

  const handleSizeSelection = (sizeName: string) => {
    setSelectedSize((prevSize) => (prevSize === sizeName ? null : sizeName));
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    setSelectedSize(null);
  };

  // const handleAddToCart = () => {
  //   if (!selectedColor) {
  //     alert("Por favor, selecciona un color antes de agregar al carrito.");
  //     return;
  //   }
  //   if (!selectedSize) {
  //     alert("Por favor, selecciona un talle antes de agregar al carrito.");
  //     return;
  //   }
  //   addItem(product, selectedSize, selectedColor);
  // };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {uniqueColors.map((color) => (
          <button
            key={color as string}
            onClick={() => handleColorSelection(color as string)}
            className={`flex items-center gap-3 py-1 rounded-lg transition text-sm duration-300 ${
              selectedColor === color
                ? "shadow-lg border-blue-400"
                : "shadow-black/10"
            }`}
          >
            {/* <ColorsEffect color={color as string} /> */}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        {uniqueSizes.map((size: any) => (
          <button
            key={size.size_stock.name}
            onClick={() => handleSizeSelection(size.size_stock.name)}
            className={`${
              size.quantity === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer opacity-100"
            } border-[2px] px-2 py-1 rounded-lg transition text-sm duration-300 ${
              selectedSize === size.size_stock.name
                ? "border-blue-400"
                : "border-black/10"
            }`}
            disabled={size.quantity === 0}
          >
            {size.size_stock.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="flex underline justify-center items-center text-blue-500 gap-1 my-2 text-sm cursor-pointer"
      >
        <IconRuler3 /> Guía de talles
      </button>

      {/* <ButtonUI
        click={handleAddToCart}
        bgClassName="bg-black"
        className="text-white"
      >
        Agregar al carrito
      </ButtonUI>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Guía de Talles"
      /> */}
    </div>
  );
}
