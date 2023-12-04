"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills";
import Testing from "@/components/Testing";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      {/* <Testing/> */}
      <Footer />
    </div>
  );
}
