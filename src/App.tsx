"use client";

import { useState } from "react";
import { Transition } from "@/components/ui/transition";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Soluctions from "@/components/sections/Services";
import About from "@/components/sections/About";
import Trainings from "@/components/sections/Trainings";
import Video from "@/components/sections/Video";
import Questions from "@/components/sections/Questions";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ToTop from "@/components/ToTop";

import LogoSvg from "@/components/LogoSvg";

export default function App() {
  const [key] = useState(0);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Transition
        key={key}
        introDuration={4}
        transitionDuration={1}
        type="slide"
        direction="top"
        autoExit
        className="bg-marca1 dark:bg-white"
        intro={<LogoSvg />}
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
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>
          <ToTop />
        </div>
      </Transition>
    </div>
  );
}
