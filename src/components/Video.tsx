import { motion } from "motion/react";


export default function Video() {
  return (
    <section className="py-20 relative">
      <span className="bg-marca1 w-full h-54 absolute left-0 top-1/2"></span>
      
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <motion.h1
            className="font-bold text-5xl max-w-[33%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Venha conhecer <span className="text-marca1">nossa clínica.</span>
          </motion.h1>
          <motion.p
            className="max-w-[33%] text-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unimos{" "}
            <span className="font-bold text-marca1">tecnologia, qualidade</span>{" "}
            e cuidado para oferecer a você a melhor experiência em saúde.
          </motion.p>
        </div>
        
        <motion.div
          className="relative z-10 group"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            
            transition={{ duration: 0.1 }}
          >
            <iframe
              className="w-full h-[700px] rounded-md shadow-2xl"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
          
        
      
        </motion.div>
      </div>
    </section>
  );
}