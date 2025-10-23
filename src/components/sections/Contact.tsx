import Decorator from "@/assets/bottom-left.svg?react";
import { motion } from "motion/react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const Links = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@empresa.com",
      href: "mailto:contato@empresa.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "São Paulo, SP - Brasil",
      href: "#"
    },
       {
      icon: Instagram,
      label: "Instagram",
      value: "Instagram.com/empresa",
      href: "#"
    }
  ];

  return (
    <section
      id="home"
      className="relative flex justify-between py-40 px-4 max-w-[1200px] mx-auto"
    >
      <div className="w-1/2 relative">
        <Decorator className="absolute -top-1/5 w-12 h-12" />
        <span className="text-marca1 font-semibold text-lg">Dúvidas?</span>
        <h1 className="text-4xl md:text-5xl font-bold text-texto max-w-lg">
          Entre em <span className="text-marca1">contato</span> conosco
        </h1>
        <p className="max-w-lg text-desc mt-8">
          Contate-nos para esclarecer dúvidas ou obter mais informações sobre
          nossos serviços.
        </p>
        
     
        <div className="space-y-6 mt-8">
          {Links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <div className="relative">
                <div className="bg-marca1 p-3 rounded-sm text-white ">
                  <link.icon className="size-5" />
                </div>
              
              </div>
              
              <div className="flex-1">
                <p className="text-xs text-desc uppercase tracking-wider mb-1">
                  {link.label}
                </p>
                <p className="font-semibold text-texto group-hover:text-marca1 transition-colors duration-300">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="w-1/2 border border-marca1 rounded-lg p-8 shadow-lg bg-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}