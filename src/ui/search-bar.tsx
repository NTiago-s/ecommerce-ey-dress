import { IconSearch } from "@tabler/icons-react";

export default function SearchBar() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="¿Qué estás buscando?"
        className="border border-gray-300 rounded-l-md p-2 placeholder:text-sm w-full sm:w-96"
      />
      <button className="bg-gray-300 p-2 rounded-r-md">
        <IconSearch className="size-5 text-lg stroke-1" />
      </button>
    </div>
  );
}
