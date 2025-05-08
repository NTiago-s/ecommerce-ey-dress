import ButtonLogin from "@/ui/button-login";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto p-4">
        <h1 className="text-3xl font-bold text-white">My Website</h1>
        <ButtonLogin />
      </div>
    </header>
  );
}
