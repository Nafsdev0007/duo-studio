"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useMemo, useState } from "react";

// Ensure ScrollTrigger is registered only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollingStager({
  children,
  start = "top 80%",
  end = "top 80%",
  trigger,
  duration = 0.66,
  index, // Add an optional index to make each animation unique
}) {
  const animRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Generate a unique ID for this animation instance
  const uniqueId = useMemo(
    () =>
      `y-anim-trigger-${Math.random().toString(36).substr(2, 9)}${index || ""}`,
    [index]
  );

  useEffect(() => {
    // Ensure this runs only on client-side
    setIsClient(true);

    // Cleanup function
    return () => {
      // Kill any existing ScrollTrigger with this ID
      const existingTrigger = ScrollTrigger.getById(uniqueId);
      if (existingTrigger) {
        existingTrigger.kill();
      }
    };
  }, [uniqueId]);

  useGSAP(() => {
    // Only run animation on client and when ref is available
    if (isClient && animRef.current) {
      // Destroy existing ScrollTrigger if it exists
      const existingTrigger = ScrollTrigger.getById(uniqueId);
      if (existingTrigger) {
        existingTrigger.kill();
      }

      // Create new animation
      const animation = gsap.from(animRef.current, {
        y:40,
        rotate:4,
        duration: duration,
        ease:"linear",
        opacity:0,
        scrollTrigger: {
          id: uniqueId, // Use unique ID
          trigger: trigger || animRef.current,
          start: start,
          end: end,
          toggleActions: "play none none none",
          // markers: true // Uncomment for debugging
        },
      });

      // Return cleanup function
      return () => {
        animation.kill();
        const trigger = ScrollTrigger.getById(uniqueId);
        if (trigger) trigger.kill();
      };
    }
  }, [isClient, start, end, trigger, uniqueId]);

  return <div ref={animRef}>{children}</div>;
}
