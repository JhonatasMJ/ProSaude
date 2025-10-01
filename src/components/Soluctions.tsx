import { MoveDown } from "lucide-react";

export default function Soluctions() {  
    return (
        <section id="solucoes" className="min-h-screen relative flex items-center py-32 bg-marca2 relative">
            <div className="bg-marca2 absolute left-1/2 -translate-x-1/2 -top-6  rounded-full p-4">
                <MoveDown className="size-7 text-white animate-bounce mt-2"/>
            </div>
            <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
                <span className="text-marca1 font-semibold text-lg">Soluções</span>
                <h1 className="text-6xl font-bold text-texto max-w-2xl">Desenvolvimento de soluções para o seu negócio</h1>
                <p className='max-w-2xl text-desc mt-8'>Desenvolvimento de soluções para o seu negócio</p>
            </div>
        </section>
    )
}