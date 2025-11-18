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
import { Link } from "react-scroll";

export default function Trainings() {
  return (
    <section
      id="trainings"
      className="flex items-center py-20 md:py-32 bg-marca2 px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1200px] mx-auto relative z-10 gap-16 lg:gap-24">
        
        <Decorator className="absolute -top-[5%] w-10 h-10 sm:w-12 sm:h-12 left-2 sm:left-0 opacity-70 -mt-4 md:mt-0" />

       
        <div className="flex-1 lg:text-left w-full">
          <motion.span
            className="text-marca1 font-semibold text-base sm:text-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Saiba sobre
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-marca3 max-w-2xl mt-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nossos <span className="text-marca1">Treinamentos</span> e{" "}
            <span className="text-marca1">Palestras</span>.
          </motion.h1>

          <motion.p
            className="max-w-lg text-white mt-6 sm:mt-8 text-sm sm:text-base"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Especialistas em Medicina Ocupacional, promovendo bem-estar,
            segurança e produtividade nas empresas.
          </motion.p>

      
          <motion.div
            className="hidden sm:flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="mt-8 bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-[1.02] transform transition duration-300 border-none text-white px-10 py-5 text-sm sm:text-base relative overflow-hidden">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="relative z-10 flex items-center justify-center gap-2"
              >
                Entrar em contato
                <motion.div
                  variants={{
                    hover: { x: 5, transition: { duration: 0.6 } },
                  }}
                >
                 
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </div>

       
        <motion.div
          className="flex-1 relative w-full max-w-lg mx-auto lg:ml-16"
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
            className="w-full"
          >
            <CarouselContent>
              {carrousels.map((carrousel, index) => {
                const Icon = carrousel.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-3/4 md:basis-2/3"
                  >
                    <motion.div
                      className="p-1"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="rounded-xl shadow-md border-none py-8">
                        <CardHeader>
                          <motion.div
                            className="bg-marca2 p-3 rounded-md w-fit border-blue-100 border-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-white size-6 sm:size-7" />
                          </motion.div>
                          <CardTitle className="font-bold text-desc text-xl sm:text-2xl mt-4">
                            {carrousel.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm sm:text-base">
                            {carrousel.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="relative mt-4 ">
              <CarouselPrevious  />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
        <motion.div
          className="block sm:hidden w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button className="w-full bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-[1.02] transform transition duration-300 border-none text-white py-5 text-sm relative overflow-hidden">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="relative z-10 flex items-center justify-center gap-2"
            >
              Entrar em contato
              <motion.div
                variants={{
                  hover: { x: 5, transition: { duration: 0.6 } },
                }}
              >
              
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
