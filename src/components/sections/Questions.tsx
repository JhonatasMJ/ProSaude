import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { questionsLeft, questionsRight } from "@/utils/questions";

export default function Questions() {
  return (
    <section className="bg-marca2 w-full">
      <div className="flex flex-col items-center justify-center py-20 max-w-[1200px] mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">
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
          className="text-xl  md:text-4xl font-bold mb-12 text-white md:max-w-1/3 text-center"
        >
          Perguntas frequentes{" "}
          <span className="text-marca1">sobre nossa clínica.</span>
        </motion.h1>

    
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    
          <Accordion type="single" collapsible className="w-full space-y-3 ">
            {questionsLeft.map(
              (question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <AccordionItem value={`item-${i + 1}`}>
                    <AccordionTrigger className="text-white text-md md:text-xl">
                      {question.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                      {question.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )
            )}
          </Accordion>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {questionsRight.map(
              (question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <AccordionItem value={`item-${i + 4}`}>
                    <AccordionTrigger className="text-white text-md md:text-xl">
                      {question.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                      {question.content}
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
