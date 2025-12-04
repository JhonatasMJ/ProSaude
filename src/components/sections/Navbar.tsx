import { useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-scroll"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "@/assets/Logo.svg?react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: "Início", to: "home" },
    { name: "Serviços", to: "services" },
    { name: "Sobre", to: "about" },
    { name: "Treinamentos", to: "trainings" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 max-w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      
      <div className="bg-marca1 flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm font-medium py-1.5  text-center w-full">
        <p className="max-w-full break-words px-2">Av. Marechal Deodoro da Fonseca, 1104 Jardim Paraíso - Monte Alto-SP</p>
      </div>

     
      <div className="shadow-sm bg-white">
        <nav className="py-4 max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 ">
       
          <Link to="home" smooth offset={-120} duration={500} onSetActive={() => setActiveLink("home")}>
            <Logo className="cursor-pointer w-36 sm:w-48 text-marca1" />
          </Link>

      
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
              <Link
                to="contact"
                smooth
                offset={-120}
                duration={500}          
              >
            <Button className="bg-marca2 hover:bg-marca2 hover:ring-3 hover:ring-marca2/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-6 relative overflow-hidden">
                Contato
            </Button>
              </Link>
          </ul>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-marca2 hover:bg-marca1/10">
                <Menu size={24} />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
              <div className="flex flex-col h-full">
               
                <div className="flex items-center p-6 border-b border-gray-200">
                  <Logo className="w-32 text-marca1" />
                </div>

               
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {links.map((link, index) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      smooth
                      offset={-120}
                      duration={500}
                      spy
                      onSetActive={() => setActiveLink(link.to)}
                      onClick={() => setIsMenuOpen(false)}
                      className="block"
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                          activeLink === link.to
                            ? "bg-marca1/10 text-marca1"
                            : "text-texto hover:bg-marca1/5"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.span
                          className="w-2 h-2 bg-marca1 rounded-full flex-shrink-0"
                          animate={{
                            opacity: activeLink === link.to ? 1 : 0,
                            scale: activeLink === link.to ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="font-semibold text-base">{link.name}</span>
                      </motion.div>
                    </Link>
                  ))}
                </nav>

               
                <div className="p-6 border-t border-gray-200">
                  <Link
                    to="contact"
                    smooth
                    offset={-120}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <Button className="bg-marca2 hover:bg-marca2 hover:ring-3 hover:ring-marca2/50 hover:scale-[1.02] transform transition duration-300 border-none text-white w-full py-6 text-base font-semibold relative overflow-hidden">
                      Contato
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  )
}
