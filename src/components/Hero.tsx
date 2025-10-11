import HeroImg from '@/assets/Hero.png'
import Decorator from '@/assets/bottom-left.svg?react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'

export default function Hero () {
    return (
        <section id="home" className="relative flex items-center py-74">
            <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
                <Decorator className='absolute -top-1/3  w-12 h-12'/>
                <span className="text-marca1 font-semibold text-lg">Buscamos</span>
                <h1 className="text-6xl font-bold text-texto max-w-2xl">Cuidar da sua  <span className='text-marca1'>saúde</span> no ambiente de trabalho.</h1>
                <p className='max-w-2xl text-desc mt-8'>Especialistas em Medicina Ocupacional, promovendo bem-estar, segurança e produtividade nas empresas por meio de exames, programas legais e ações preventivas.</p>
                <div className='flex gap-4 mt-8'>
                    <Button className='px-16 bg-marca1 text-md '>Serviços</Button>
                    <Button  className='px-16 bg-marca2  text-md'>Sobre</Button>
                </div>
            </div>
            <motion.div
             className='absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-full'
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
            >
                <img className='w-full h-full object-cover' src={HeroImg} alt="Imagem Hero" />
            </motion.div>
        </section>
    )
}