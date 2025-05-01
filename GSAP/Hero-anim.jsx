"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function StaggerAnimation({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = Array.from(containerRef.current.children);

    gsap.from(elements,{
      y:40,
      rotate:3,
      duration:.6,
      ease:"linear",
    })
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
