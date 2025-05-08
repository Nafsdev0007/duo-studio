"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisScroll({ isEnabled = true }) {
  useEffect(() => {
    const scroll = new Lenis({
      smooth: true,
      wheelMultiplier: 1,
      lerp: 0.1, // Reduced lerp for faster response
      touchMultiplier: 2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothTouch: true,
    });

    function raf(time) {
      scroll.raf(time);
      requestAnimationFrame(raf);
    }

    if (isEnabled) {
      requestAnimationFrame(raf);
    }

    return () => {
      scroll.destroy();
    };
  }, [isEnabled]);

  return null;
}
