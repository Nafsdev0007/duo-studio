"use client";

import LenisScroll from "@/components/Lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/app/sections/Hero";
import Page2 from "@/app/sections/Page2";
import Work from "@/app/sections/work";
import AboutPage from "@/app/sections/About";
import Clients from "@/app/sections/Clients";
import Cursor from "@/components/Cursor";
import { useState, useEffect } from "react";
import Footer from "@/app/sections/Footer";
import Overlay from "@/components/Overlay";
import { useDuoContext } from "@/context";
import Head from "next/head";

export default function MainWrapper() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  function handleMove(dets) {
    setMousePosition({ x: dets.clientX, y: dets.clientY });
  }

  useEffect(() => {
    // Disable body scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [isLoading]);

  const { index, isVisible } = useDuoContext();

  return (
    <>

      <Head>
        <title></title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

    <LenisScroll isEnabled={!isLoading} />
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center touch-none select-none">
          <div className="text-white text-xl font-[PPMori1] ">Loading...</div>
        </div>
      )}
      <Cursor mousePosition={mousePosition} />
      <main onMouseMove={handleMove}>
        {
          <div
            className={`duration-150  ease-linear ${
              isVisible ? `opacity-1` : `opacity-0`
            } `}
          >
            <Overlay index={index} />
          </div>
        }
        <Navbar />
        <Hero />
        <Page2 />
        <Work />
        <AboutPage />
        <Clients />
        <Footer />
      </main>
    </>
  );
}
