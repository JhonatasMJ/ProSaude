import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Decorator from '@/assets/DecoratorSoluctions.svg?react'

export default function Questions() {
  return (
    <section className="bg-marca2">
      <div className="flex flex-col items-center justify-center py-20 max-w-[1200px] mx-auto  relative">
        <Decorator className='absolute top-1/12 right-0  w-12 h-12 rotate-90'/>
        <Decorator className='absolute top-1/12 left-0  w-12 h-12'/>
        <span className="text-marca1 font-bold text-lg">Dúvidas</span>
        <h1 className="text-4xl font-bold mb-12 text-white max-w-1/3 text-center">
          Perguntas frequentes{" "}
          <span className="text-marca1">sobre nossa clínica.</span>
        </h1>
        
        <div className="w-full grid grid-cols-2 gap-4">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 01
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 03
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>

                <AccordionItem value="item-5">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 05
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

    
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 02
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 04
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="item-6">
              <AccordionTrigger className="text-white text-xl">
                Sugerir alguma pergunta 06
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          
          
        </div>
      </div>
    </section>
  );
}