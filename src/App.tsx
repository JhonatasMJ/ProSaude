"use client";

import { useState } from "react";
import { Transition } from "@/components/ui/transition";
import { motion } from "framer-motion";
import LogoBranca from "@/assets/logoBranca.svg?react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Soluctions from "@/components/Soluctions";

export default function App() {
  const [key] = useState(0);

  return (
    <div className="relative w-full h-screen flex items-center justify-center ">
      <Transition
        key={key}
        introDuration={3}
        transitionDuration={1}
        type="slide"
        direction="top"
        autoExit
        className="bg-marca1 dark:bg-white "
        intro={
          <div className="flex flex-col items-center justify-center h-full w-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              <LogoBranca className="w-32 h-32" />
            </motion.div>
          </div>
        }
      >
        <div>
          <Navbar />
       
            <Hero />
            <Soluctions/>
          </div>
    
      </Transition>
    </div>
  );
}
