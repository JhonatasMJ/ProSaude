
import { motion } from "motion/react"
import { Link } from "react-scroll"
import { Mail, Phone, Instagram } from "lucide-react"
import LogoBranca from "@/assets/logoBranca.svg?react"

export default function Footer() {
  const year = new Date().getFullYear();

  const navigationLinks = [
    { name: "Início", to: "home" },
    { name: "Serviços", to: "services" },
    { name: "Sobre", to: "about" },
    { name: "Treinamentos", to: "trainings" },
    { name: "Contato", to: "contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prosaudemontealto@gmail.com",
      href: "mailto:prosaudemontealto@gmail.com",
    },
    {
      icon: Phone,
      label: "Agendamentos",
      value: "(16) 99639-5518",
      href: "https://wa.me/5516996395518?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20agendamento.",
    },
    {
      icon: Phone,
      label: "Comercial",
      value: "(16) 99733-6745",
      href: "https://wa.me/5516997336745?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es.",
    },
  
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/prosaudemontealto/",
    },
  ];

  return (
    <footer className="bg-marca2 text-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 border-b border-white/10">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="home" smooth offset={-120} duration={500}>
              <LogoBranca className="w-32 sm:w-40 mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    offset={-120}
                    duration={500}
                    className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-marca1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="bg-marca1 p-2 rounded-sm text-white flex-shrink-0">
                      <info.icon className="size-5" />
                    </div>
                    <div className="text-sm">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      <p className="leading-relaxed">{info.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="bg-marca1 p-2 rounded-sm text-white">
                    <social.icon className="size-5" />
                  </div>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="py-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white text-sm">
            &copy; {year} Pró Saúde. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
