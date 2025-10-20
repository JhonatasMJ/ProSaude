import { Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marca2 text-white text-center py-3  ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div>
          <p>&copy; {year} Pró Saúde. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="" className="bg-[#d9d9d9]/10 px-0.2 py-2 rounded-md block">
            <Instagram className="mx-2 cursor-pointer size-5" />
          </a>

          <a href="" className="bg-[#d9d9d9]/10 px-0.2 py-2 rounded-md block">
            <Instagram className="mx-2 cursor-pointer size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
