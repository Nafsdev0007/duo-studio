"use client";

import { useEffect } from "react";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function LenisScroll() {
  useEffect(() => {
    const scroll = new Lenis({
      smooth: true,
      wheelMultiplier:1,
      lerp:.15,
    });

    function raf(time) {
      scroll.raf(time);
      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    return () => {
      scroll.destroy(); // cleanup
    };
  }, []);

  return null;
}
