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


export default function Trainings() {

  return (
    <section
      id="trainings"
      className=" flex items-center py-32 bg-marca2 overflow-x-hidden"
    >
      <div className=" flex flex-col lg:flex-row items-center  w-full max-w-[1200px] mx-auto   relative z-10 ">
        <Decorator className="absolute -top-[10%] w-12 h-12 left-0" />

        <div className="flex-1">
          <span className="text-marca1 font-bold text-lg">Saiba sobre</span>
          <h1 className="text-5xl font-bold text-marca3 max-w-2xl mt-2">
            Nossos <span className="text-marca1">Treinamentos</span> e{" "}
            <span className="text-marca1">Palestras.</span>
          </h1>
          <p className="max-w-lg text-white mt-8">
            Especialistas em Medicina Ocupacional, promovendo bem-estar,
            segurança e produtividade nas empresas
          </p>
          <Button className="mt-8 bg-marca1 hover:bg-marca3 border-none text-white px-12">
            Entrar em contato
          </Button>
        </div>

        <div className="flex-1 relative lg:ml-16 lg:-mr-[10vw]">
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
                    <div className="p-1">
                      <Card className="rounded-lg shadow-md  border-none py-8">
                        <CardHeader>
                          <div className="bg-marca2 p-2 rounded-md w-fit border-blue-100 border-3">
                            <Icon className="text-white size-6" />
                          </div>
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
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="relative">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
