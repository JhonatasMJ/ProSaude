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

export default function Soluctions() {
  return (
    <section
      id="solucoes"
      className="min-h-screen relative flex items-center pb-32 pt-42 bg-marca2 "
    >
      <div className="bg-marca2 absolute left-1/2 -translate-x-1/2 -top-6  rounded-full p-4">
        <MoveDown className="size-7 text-white animate-bounce mt-2" />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
         <Decorator className='absolute -top-[10%] w-12 h-12 '/>
        <span className="text-marca1 font-bold text-lg ">Conheça nossas</span>
        <h1 className="text-5xl font-bold text-marca3 max-w-2xl mt-2">
          Soluções completas em{" "}
          <span className="text-marca1">Medicina Ocupacional.</span>{" "}
        </h1>
        <p className="max-w-lg text-marca3 mt-8">
          Especialistas em Medicina Ocupacional, promovendo bem-estar, segurança
          e produtividade nas empresas
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {cards.map((card, index) => {
              const isOdd = index % 2 === 0;
              const Icon = card.icon;
              return (

                <Card
                  key={index}
                  className={`${isOdd ? "bg-marca1" : "bg-white"
                    } rounded-lg shadow-md p-6 border-none`}
                >
                  <CardHeader>
                    <Icon />
                    <CardTitle
                      className={`font-bold text-xl ${isOdd ? "text-white" : "text-marca1"
                        }`}
                    >
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-md ${isOdd ? "text-white" : "text-marca1"
                        }`}
                    >
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
