import { ProductsType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: (ProductsType & {
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
  })[];
  addItem: (
    data: ProductsType,
    selectedSize: string,
    selectedColor: string
  ) => void;
  updateQuantity: (
    id: string,
    selectedSize: string,
    selectedColor: string,
    quantity: number
  ) => void;
  removeItem: (id: string, selectedSize: string, selectedColor: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (
        data: ProductsType,
        selectedSize: string,
        selectedColor: string
      ) => {
        const currentsItems = get().items;

        const existingItem = currentsItems.find(
          (item) =>
            item.productID === data.productID &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
        );

        if (existingItem) {
          set({
            items: currentsItems.map((item) =>
              item.productID === data.productID &&
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...currentsItems,
              { ...data, quantity: 1, selectedSize, selectedColor },
            ],
          });
        }
      },

      removeItem: (id: string, color: string, size: string) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === id &&
                item.selectedColor === color &&
                item.selectedSize === size
              )
          ),
        }));
      },

      removeAll: () => set({ items: [] }),

      updateQuantity: (
        id: string,
        selectedSize: string,
        selectedColor: string,
        quantity: number
      ) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
