"use client";

import LenisScroll from "@/components/Lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/app/sections/Hero";
import Page2 from "@/app/sections/Page2";
import Work from "@/app/sections/work";
import AboutPage from "@/app/sections/About";
import Clients from "@/app/sections/Clients";
import Cursor from "@/components/Cursor";
import { useState } from "react";
import Footer from "@/app/sections/Footer";
import Overlay from "@/components/Overlay";
import { useDuoContext } from "@/context";

export default function MainWrapper() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMove(dets) {
    setMousePosition({ x: dets.clientX, y: dets.clientY });
  }

  const {index ,isVisible} = useDuoContext()


  return (
    <>
      <LenisScroll />
      <Cursor mousePosition={mousePosition} />
      <main onMouseMove={handleMove}>
        {
          <div className={`duration-150 ease-linear ${isVisible ? `opacity-1`:`opacity-0`} `}><Overlay index={index} /></div> 
        }
        <Navbar />
        <Hero />
        <Page2 />
        <Work />
        <AboutPage />
        <Clients />
        <Footer/>
      </main>
    </>
  );
}
