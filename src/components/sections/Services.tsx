import { MoveDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cards } from "@/utils/card";
import Decorator from "@/assets/DecoratorSoluctions.svg?react";
import { motion } from "motion/react";

export default function Soluctions() {
  return (
    <section
      id="services"
      className="relative flex items-center py-32 bg-marca2 w-full"
    >
      <div className="bg-marca2 absolute left-1/2 -translate-x-1/2 -top-6 rounded-full p-4">
        <MoveDown className="size-7 text-white animate-bounce mt-2" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
        <Decorator className="absolute -top-[10%] w-12 h-12" />

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-marca1 font-bold text-lg">
              Conheça nossas
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-marca3 max-w-2xl mt-2">
              Soluções completas em{" "}
              <span className="text-marca1">Medicina Ocupacional.</span>
            </h1>
            <p className="max-w-lg text-white mt-8">
              Especialistas em Medicina Ocupacional, promovendo bem-estar,
              segurança e produtividade nas empresas.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {cards.slice(0, 2).map((card, index) => {
              const isOdd = index % 2 === 0;
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card
                    className={`${
                      isOdd ? "bg-marca1" : "bg-white"
                    } rounded-lg shadow-md border-none h-full`}
                  >
                    <CardHeader>
                      <Icon />
                      <CardTitle
                        className={`font-bold text-xl ${
                          isOdd ? "text-white" : "text-marca1"
                        }`}
                      >
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription
                        className={`text-md ${
                          isOdd ? "text-white" : "text-marca1"
                        }`}
                      >
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.slice(2).map((card, index) => {
            const isOdd = index % 2 === 0;
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full"
              >
                <Card
                  className={`${
                    isOdd ? "bg-marca1" : "bg-white"
                  } rounded-lg shadow-md border-none h-full`}
                >
                  <CardHeader>
                    <Icon />
                    <CardTitle
                      className={`font-bold text-xl ${
                        isOdd ? "text-white" : "text-marca1"
                      }`}
                    >
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-md ${
                        isOdd ? "text-white" : "text-marca1"
                      }`}
                    >
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}