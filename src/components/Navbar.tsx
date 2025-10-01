import { motion } from "motion/react";
import Logo from "@/assets/logo.svg?react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const links = [
    { name: "Início", to: "#home" },
    { name: "Serviços", to: "#services" },
    { name: "Sobre", to: "#about" },
    { name: "Estrutura", to: "#structure" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
    >
      <div className="bg-marca1 flex items-center justify-center text-white text-lg font-semibold py-2">
        <p>
          Av. Marechal Deodoro da Fonseca, 1104 Jardim Paraíso - Monte Alto-SP
        </p>
      </div>

      <div className="shadow-sm bg-white">
        <nav className="py-4 max-w-[1200px] mx-auto flex items-center justify-between bg-white">
          <Link to="#home">
            <Logo className="cursor-pointer w-48" />
          </Link>

          <ul className="flex items-center">
            <li className="flex gap-8 mr-8">
              {links.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="relative flex items-center gap-2"
                >
                  <motion.span
                    variants={{
                      rest: { opacity: 0, scale: 0 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="w-2 h-2 bg-marca1 rounded-full"
                  />

                  <Link
                    to={link.to}
                    className="text-texto font-bold text-md cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </li>

            <Button className="bg-marca2 px-6">Contato</Button>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
