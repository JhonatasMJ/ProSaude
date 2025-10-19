import { Instagram } from "lucide-react";
import Whatsapp from "@/assets/icons/whatsapp.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marca2 text-white text-center py-4 mt-8 ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div>
          <p>&copy;{year} Pró Saúde. Todos os direitos reservados.</p>
        </div>
        <div>
          <a href="" className="k">
            <Instagram className="mx-2 cursor-pointer" />
          </a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </footer>
  );
}
