import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import Logo from "@/assets/logo.svg?react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const links = [
    { name: "Início", to: "home" },
    { name: "Serviços", to: "services" },
    { name: "Sobre", to: "about" },
    { name: "Estrutura", to: "structure" },
  ];

  
  const [activeLink, setActiveLink] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
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
          <Link
            to="home"
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={() => setActiveLink("home")}
          >
            <Logo className="cursor-pointer w-48" />
          </Link>

          {/* Menu links */}
          <ul className="flex items-center">
            <li className="flex gap-8 mr-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveLink(link.to)}
                >
                  {/* Quando passo o mause em cima seta o hover */}
                  <motion.div
                    className="relative flex items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Bolinha */}
                    <motion.span
                      className="w-2 h-2 bg-marca1 rounded-full"
                      animate={{
                        opacity:
                          activeLink === link.to || hoveredLink === link.to? 1 : 0,
                        scale:
                          activeLink === link.to || hoveredLink === link.to? 1 : 0,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />

                    {/* Texto */}
                    <span
                      className={`text-md font-bold transition-colors duration-300 ${
                        activeLink === link.to ? "text-marca2 transform   " : "text-texto"
                      }`}
                    >
                      {link.name}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </li>

            <Button className="bg-marca2 px-6">Contato</Button>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
