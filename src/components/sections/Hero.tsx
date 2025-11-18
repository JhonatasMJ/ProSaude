import HeroImg from "@/assets/Hero.jpg";
import Decorator from "@/assets/bottom-left.svg?react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center py-40 md:py-74 w-full">
      <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
        <Decorator className="absolute -top-1/3  w-12 h-12" />
        <motion.span
          className="text-marca1 font-semibold text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >
          Buscamos
        </motion.span>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-texto max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >
          Cuidar da sua <span className="text-marca1">saúde</span> no ambiente
          de trabalho.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-desc mt-8 text-sm md:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >
          Especialistas em Medicina Ocupacional, promovendo bem-estar, segurança
          e produtividade nas empresas por meio de exames, programas legais e
          ações preventivas.
        </motion.p>
        <motion.div
          className="flex gap-4 mt-8 w-full "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >
          <motion.div>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="relative z-10 flex items-center gap-2"
              >
            <Button className=" bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-12 group relative overflow-hidden flex-1">
                Serviços
                <motion.div
                  variants={{
                    hover: { x: 5, transition: { duration: 0.6 } },
                  }}
                >
              
                </motion.div>
            </Button>
              </Link>
          </motion.div>
       <motion.div>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="relative z-10 flex items-center gap-2 "
              >
            <Button className=" bg-marca2 hover:bg-marca2 hover:ring-3 hover:ring-marca2/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-12 group relative overflow-hidden flex-1 ">
                Sobre
                <motion.div
                  variants={{
                    hover: { x: 5, transition: { duration: 0.6 } },
                  }}
                >
                 
                </motion.div>
            </Button>
              </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-full hidden md:block"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
      >
        <img
          className="w-full h-full object-cover"
          src={HeroImg}
          alt="Imagem Hero"
        />
      </motion.div>
    </section>
  );
}
