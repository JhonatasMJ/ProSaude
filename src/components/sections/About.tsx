import AboutImg from "@/assets/About.jpg";
import Decorator from "@/assets/bottom-left.svg?react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Phone } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center pt-52 pb-36 w-full"
    >
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-2/5 h-full hidden md:block"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <img
          className="w-full h-full object-cover"
          src={AboutImg}
          alt="Imagem Hero"
        />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative ml-auto">
        <div className="ml-auto max-w-[620px]">
          <Decorator className="absolute -top-1/3 w-12 h-12" />
          <motion.span
            className="text-marca1 font-semibold text-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sempre{" "}
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-texto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Cuidando de <span className="text-marca1">Pessoas, </span>{" "}
            <span className="text-marca1">Protegendo</span> o Futuro.
          </motion.h1>
          <motion.p
            className="text-desc mt-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Unimos ética, responsabilidade e inovação para promover ambientes de
            trabalho mais seguros, saudáveis e produtivos.{" "}
          </motion.p>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="bg-marca1 w-2 h-14 mt-8  content-[''] block rounded-sm "></span>
            <p className="text-desc mt-8  ">
              Atuamos com excelência no atendimento, respeito à vida e compromisso
              com a melhoria contínua, garantindo qualidade e confiança para
              empresas e trabalhadores.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4 mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-marca2 hover:bg-marca2 hover:ring-3 hover:ring-marca2/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-10 py-5 text-sm sm:text-base relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Cursos e Palestras
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-marca2/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-10 py-5 text-sm sm:text-base relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Contato
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-marca1/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}