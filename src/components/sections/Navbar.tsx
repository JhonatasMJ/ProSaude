"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-scroll"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Logo from "@/assets/logo.svg?react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")

  const links = [
    { name: "Início", to: "home" },
    { name: "Serviços", to: "services" },
    { name: "Sobre", to: "about" },
    { name: "Treinamentos", to: "trainings" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      {/* Faixa superior */}
      <div className="bg-marca1 flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm font-medium py-1.5 px-2 text-center">
        <p>Av. Marechal Deodoro da Fonseca, 1104 Jardim Paraíso - Monte Alto-SP</p>
      </div>

      {/* Navbar principal */}
      <div className="shadow-sm bg-white">
        <nav className="py-4 max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="home" smooth offset={-120} duration={500} onSetActive={() => setActiveLink("home")}>
            <Logo className="cursor-pointer w-36 sm:w-48 text-marca1" />
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                offset={-120}
                duration={500}
                spy
                onSetActive={() => setActiveLink(link.to)}
              >
                <div className="relative flex items-center gap-2 cursor-pointer">
                  <motion.span
                    className="w-2 h-2 bg-marca1 rounded-full"
                    animate={{
                      opacity: activeLink === link.to ? 1 : 0,
                      scale: activeLink === link.to ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <span
                    className={`font-semibold text-sm lg:text-base transition-colors ${
                      activeLink === link.to ? "text-marca1" : "text-texto hover:text-marca1"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <Button className="bg-marca2 hover:bg-marca2/90 px-6 text-white">Contato</Button>
          </ul>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-marca2 hover:bg-marca1/10">
                <Menu size={24} />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {links.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link
                    to={link.to}
                    smooth
                    offset={-120}
                    duration={500}
                    spy
                    onSetActive={() => setActiveLink(link.to)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2 w-full py-1">
                      <motion.span
                        className="w-2 h-2 bg-marca1 rounded-full"
                        animate={{
                          opacity: activeLink === link.to ? 1 : 0,
                          scale: activeLink === link.to ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className={`font-medium ${activeLink === link.to ? "text-marca1" : "text-texto"}`}>
                        {link.name}
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Button className="bg-marca2 hover:bg-marca2/90 w-full text-white mt-2">Contato</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </motion.header>
  )
}
