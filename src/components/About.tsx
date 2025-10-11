import AboutImg from "@/assets/About.png";
import Decorator from "@/assets/bottom-left.svg?react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      id="home"
      className=" relative flex items-center pt-52  pb-36"
    >
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-2/5 h-full"
         initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{amount: 0.3 }}
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
          <span className="text-marca1 font-semibold text-lg">Sempre </span>
          <h1 className="text-6xl font-bold text-texto">
            Cuidando de <span className="text-marca1">Pessoas, </span> <span className="text-marca1">Protegendo</span> o Futuro.
          </h1>
          <p className="text-desc mt-8">
            Unimos ética, responsabilidade e inovação para promover ambientes de
            trabalho mais seguros, saudáveis e produtivos.{" "}
          </p>
          <div className="flex items-center gap-2">

          
          <span className="bg-marca1 w-2 h-14 mt-8  content-[''] block rounded-sm "></span>
          <p className='text-desc mt-8  '>
            Atuamos com excelência no atendimento, respeito à vida e compromisso
            com a melhoria contínua, garantindo qualidade e confiança para
            empresas e trabalhadores.
          </p>
          </div>
          <div className="flex gap-4 mt-20">
            <Button className="flex-1 bg-marca2 text-md">Cursos e Palestras</Button>
            <Button className="flex-1 bg-marca1 text-md">Contato</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
