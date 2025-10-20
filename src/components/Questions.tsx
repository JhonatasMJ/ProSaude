"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Decorator from "@/assets/DecoratorSoluctions.svg?react";
import { motion } from "framer-motion";

export default function Questions() {
  return (
    <section className="bg-marca2">
      <div className="flex flex-col items-center justify-center py-20 max-w-[1200px] mx-auto relative overflow-hidden">
        {/* Decoradores animados */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 90 }}
          transition={{ duration: 1 }}
          className="absolute top-10 right-0"
        >
          <Decorator className="w-12 h-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-0"
        >
          <Decorator className="w-12 h-12" />
        </motion.div>

        {/* Cabeçalho animado */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-marca1 font-bold text-lg"
        >
          Dúvidas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-white max-w-1/3 text-center"
        >
          Perguntas frequentes{" "}
          <span className="text-marca1">sobre nossa clínica.</span>
        </motion.h1>

        {/* Conteúdo */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Coluna 1 */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {["Sugerir alguma pergunta 01", "Sugerir alguma pergunta 03", "Sugerir alguma pergunta 05"].map(
              (title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <AccordionItem value={`item-${i + 1}`}>
                    <AccordionTrigger className="text-white text-xl">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                      <p>
                        Nosso produto combina tecnologia de ponta com design
                        moderno. Construído com materiais de alta qualidade,
                        oferece desempenho e confiabilidade excepcionais.
                      </p>
                      <p>
                        Conta com interface intuitiva e recursos avançados que
                        tornam o uso simples e eficiente.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )
            )}
          </Accordion>

          {/* Coluna 2 */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {["Sugerir alguma pergunta 02", "Sugerir alguma pergunta 04", "Sugerir alguma pergunta 06"].map(
              (title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <AccordionItem value={`item-${i + 4}`}>
                    <AccordionTrigger className="text-white text-xl">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                      <p>
                        Nosso produto combina tecnologia de ponta com design
                        moderno. Construído com materiais de alta qualidade,
                        oferece desempenho e confiabilidade excepcionais.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
