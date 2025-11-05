import { motion } from "motion/react";
import Decorator from "@/assets/bottom-left.svg?react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "prosaudemontealto@gmail.com",
      href: "mailto:contato@empresa.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value:
        "Av. Marechal Deodoro da Fonseca, 1104 Jardim Paraíso - Monte Alto-SP",
      href:"https://www.google.com/maps?q=Av.+Marechal+Deodoro+da+Fonseca,+1104+Jardim+Paraíso+-+Monte+Alto,+SP"

    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@prosaudemontealto",
      href: "https://www.instagram.com/prosaudemontealto/",
    },
  ];

  return (
    <section
      id="contato"
      className="relative grid md:grid-cols-2 gap-12 pt-40 pb-30 px-4 max-w-[1200px] mx-auto"
    >

      <div className="relative">
        <Decorator className="absolute -top-20 left-0 w-12 h-12" />
        <span className="text-marca1 font-semibold text-lg">Dúvidas?</span>
        <h1 className="text-4xl md:text-5xl font-bold text-texto max-w-lg">
          Entre em <span className="text-marca1">contato</span> conosco
        </h1>
        <p className="max-w-lg text-desc mt-6">
          Contate-nos para esclarecer dúvidas ou obter mais informações sobre
          nossos serviços.
        </p>

        <div className="space-y-6 mt-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 6 }}
            >
              <div className="bg-marca1 p-3 rounded-sm text-white">
                <link.icon className="size-5" />
              </div>
              <div>
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
        className="border-1 border-gray-200 rounded-lg p-8  bg-white"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
