"use client";

import { useState } from "react";
import { Transition } from "@/components/ui/transition";
import { motion } from "framer-motion";
import LogoIntro from "@/assets/logoIntro.svg?react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Soluctions from "@/components/Services";
import About from "@/components/About";
import Trainings from "@/components/Trainings";
import Video from "@/components/Video";
import Questions from "@/components/Questions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

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
              <LogoIntro className="w-32 h-32" />
            </motion.div>
          </div>
        }
      >
        <div>
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Soluctions />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="trainings">
            <Trainings />
          </section>
          <section id="video">
            <Video />
          </section>
           <section id="questions">
            <Questions />
          </section>
          <section id="contact">
            <Contact/>
          </section>
           <section id="footer">
            <Footer/>
          </section>
          <ToTop />
        </div>
      </Transition>
    </div>
  );
}
