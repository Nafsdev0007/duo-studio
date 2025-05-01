"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BorderAnim({color="hahha"}) {
  const borderRef = useRef(null);

  useEffect(() => {
    const borderElement = borderRef.current;

    gsap.fromTo(
      borderElement,
      {
        scaleX: 0, // Start from 0 width
        transformOrigin: "center center", // Expand from center to both sides
      },
      {
        scaleX: 1, // Animate to full width
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: borderElement,
          start: "top 80%", // Trigger when top of element is 80% from top of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div>
      <div
        ref={borderRef}
        className={`border-t-1 border-black ${color} w-full`}
      />
    </div>
  );
}
