import HeroImg from '@/assets/Hero.png'
import Decorator from '@/assets/bottom-left.svg?react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Info } from 'lucide-react'

export default function Hero () {
    return (
        <section id="home" className="relative flex items-center py-74">
            <div className="max-w-[1200px] mx-auto px-4 z-10 w-full relative">
                <Decorator className='absolute -top-1/3  w-12 h-12'/>
                <motion.span 
                    className="text-marca1 font-semibold text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4 }}
                >
                    Buscamos
                </motion.span>
                <motion.h1 
                    className="text-6xl font-bold text-texto max-w-2xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4 }}
                >
                    Cuidar da sua  <span className='text-marca1'>saúde</span> no ambiente de trabalho.
                </motion.h1>
                <motion.p 
                    className='max-w-2xl text-desc mt-8'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4 }}
                >
                    Especialistas em Medicina Ocupacional, promovendo bem-estar, segurança e produtividade nas empresas por meio de exames, programas legais e ações preventivas.
                </motion.p>
                <motion.div 
                    className='flex gap-4 mt-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className='px-12 bg-marca1 text-md group relative overflow-hidden'>
                            <span className='relative z-10 flex items-center gap-2'>
                                Serviços
                                <motion.div
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight className='w-5 h-5' />
                                </motion.div>
                            </span>
                            <motion.div
                                className='absolute inset-0 bg-marca1/80'
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className='px-12 bg-marca2 text-md group relative overflow-hidden'>
                            <span className='relative z-10 flex items-center gap-2'>
                                Sobre
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                >
                                    <Info className='w-5 h-5' />
                                </motion.div>
                            </span>
                            <motion.div
                                className='absolute inset-0 bg-marca2/80'
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
             className='absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-full'
             initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
            >
                <img className='w-full h-full object-cover' src={HeroImg} alt="Imagem Hero" />
            </motion.div>
        </section>
    )
}