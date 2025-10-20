import Decorator from "@/assets/DecoratorSoluctions.svg?react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carrousels } from "@/utils/carrousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-scroll";

export default function Trainings() {
  return (
    <section
      id="trainings"
      className="flex items-center py-32 bg-marca2 overflow-x-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1200px] mx-auto relative z-10">
        <Decorator className="absolute -top-[10%] w-12 h-12 left-0" />

        {/* ====== Texto e Botão ====== */}
        <div className="flex-1">
          <motion.span
            className="text-marca1 font-bold text-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Saiba sobre
          </motion.span>

          <motion.h1
            className="text-5xl font-bold text-marca3 max-w-2xl mt-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nossos <span className="text-marca1">Treinamentos</span> e{" "}
            <span className="text-marca1">Palestras.</span>
          </motion.h1>

          <motion.p
            className="max-w-lg text-white mt-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Especialistas em Medicina Ocupacional, promovendo bem-estar,
            segurança e produtividade nas empresas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
           
            >
              <Button className="mt-8 bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-105 transform transition duration-300 border-none text-white px-12 group relative overflow-hidden">
                <Link to="contact" smooth={true} duration={500} className="relative z-10 flex items-center gap-2">
                  Entrar em contato
                  <motion.div
                    variants={{
                      hover: { x: 5, transition: { duration: 0.6 } },
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.div>
                </Link>

             
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* ====== Carrossel ====== */}
        <motion.div
          className="flex-1 relative lg:ml-16 lg:-mr-[10vw]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {carrousels.map((carrousel, index) => {
                const Icon = carrousel.icon;
                return (
                  <CarouselItem key={index} className="md:basis-2/3">
                    <motion.div
                      className="p-1"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="rounded-lg shadow-md border-none py-8">
                        <CardHeader>
                          <motion.div
                            className="bg-marca2 p-2 rounded-md w-fit border-blue-100 border-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-white size-6" />
                          </motion.div>
                          <CardTitle className="font-bold text-desc text-2xl mt-4">
                            {carrousel.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-md">
                            {carrousel.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="relative">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
