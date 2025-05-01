"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function HeroAnim() {
  const animationRef = useRef(null);

  useEffect(() => {
    // Ensure scroll is at top on initial load and page reload
    window.scrollTo(0, 0);

    // Clear any existing animations to prevent duplicate triggers
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    // Reset ScrollTrigger to ensure fresh start on reload
    ScrollTrigger.refresh();

    // Define animations for desktop and laptop
    const desktopAndLaptopAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        ".left-txt",
        {
          x: -100,
          duration: 1.4,
          filter: "blur(10px)",
        },
        "a"
      );

      tl.to(
        ".right-txt",
        {
          x: 100,
          duration: 1.4,
          filter: "blur(10px)",
        },
        "a"
      );

      tl.to(
        ".hero-h4",
        {
          filter: "blur(5px)",
        },
        "a"
      );

      gsap.to(".hero-video", {
        y: -600,
        scale: 1.75,
        ease: "power3.out",
        duration: 1.5,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".hero-video",
          start: "top 120%",
          end: "bottom 30%",
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Store the animation reference for potential cleanup
      animationRef.current = tl;
    };

    // Define animations for mobile and tablet
    const mobileAndTabletAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          scrub: 1,
        },
      });

      tl.to(
        ".left-txt",
        {
          x: -50,
          duration: 1.0,
          filter: "blur(7px)",
        },
        "a"
      );

      tl.to(
        ".right-txt",
        {
          x: 50,
          duration: 1.0,
          filter: "blur(7px)",
        },
        "a"
      );

      tl.to(
        ".mid-txt",
        {
          duration: 1.0,
          filter: "blur(7px)",
        },
        "a"
      );
      tl.to(
        ".hero-h4",
        {
          filter: "blur(4px)",
        },
        "a"
      );

      gsap.to(".hero-video", {
        scaleX: 1.7,
        scaleY: 1.5,
        ease: "power3.out",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".hero-video",
          start: "top top%",
          end: "bottom 30%",
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Store the animation reference for potential cleanup
      animationRef.current = tl;
    };

    // Use matchMedia to apply different animations based on screen size
    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(min-width: 768px)", desktopAndLaptopAnimation);
    mediaQuery.add("(max-width: 767px)", mobileAndTabletAnimation);
  }, []);

  return null;
}