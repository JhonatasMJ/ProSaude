import { motion } from "motion/react";
import Logo from "@/assets/logo.svg?react"

export default function Navbar() {
  return (
    <motion.header
    className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
    >
      <div className="  bg-marca1 flex items-center justify-center text-white text-lg font-semibold py-2">
        <p>
          Av. Marechal Deodoro da Fonseca, 1104 Jardim Paraíso - Monte Alto-SP
        </p>
      </div>
      <div className="shadow-sm  ">
      <nav className=" py-4 max-w-[1380px] mx-auto  ">
        <Logo className="w-44  " />
        <ul>
            <li>
                
            </li>
        </ul>
      </nav>
        </div>
    </motion.header>
  );
}
