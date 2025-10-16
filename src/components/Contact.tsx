import Decorator from "@/assets/bottom-left.svg?react";
import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";




export default function Contact() {

  return (
    <section id="home" className="relative flex items-center py-40">
      <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
        <Decorator className="absolute -top-1/5 w-12 h-12" />
        <span className="text-marca1 font-semibold text-lg">Dúvidas?</span>
        <h1 className="text-5xl font-bold text-texto max-w-lg">
          Entre em <span className="text-marca1">contato</span> conosco
        </h1>
        <p className="max-w-lg text-desc mt-8">
          Contate-nos para esclarecer dúvidas ou obter mais informações sobre
          nossos serviços.
        </p>

        <div>
          <ContactForm />
        </div>
      </div>

      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-full bg-marca1"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
      />
    </section>
  );
}
