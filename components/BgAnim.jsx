"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BgAnimation() {
  useEffect(() => {
    // Function to change text and border color
    const changeTextColor = (color) => {
      // Change text colors, excluding specific elements
      document.querySelectorAll(
          "h1, h2, h3, p, a:not(nav a), span:not(.btn):not(nav span):not(.mention):not(.client-txt):not(.footer):not(.ft-border)"
        )
        .forEach((el) => {
          // Skip footer elements and buttons
          if (el.closest(".footer")) return;
          if (el.closest(".ft-border")) return;
          if (el.closest(".btn")) return;

          // Only change color if element doesn't have a specific color class
          if (!el.classList.contains("client-txt")) {
            el.style.color = color;
          }
        });

      // Change border colors, excluding Navbar and Footer
      document
        .querySelectorAll(
          "div[class*='border']:not(.footer):not(.btn):not(.ft-border):not(.ft-btn), hr, border"
        )
        .forEach((el) => {
          el.style.borderColor = color;
        });
    };

    const setupAnimations = () => {
      const isMobile = window.innerWidth < 768;

      // Initially set body to black and text to white
      gsap.set("body", {
        "--color": "#0F0D0D",
        backgroundColor: "#0F0D0D",
      });
      changeTextColor("white");

      // When body changes to white, make text black
      gsap.to("body", {
        "--color": "white",
        backgroundColor: "white",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#hero",
          scrub: true,
          start: "top -58%",
          end: "top -58%",
          markers: false,
        },
        onStart: () => {
          changeTextColor("black");
        },
        onReverseComplete: () => {
          changeTextColor("white");
        },
      });

      // When body changes back to black, make text white
      gsap.to("body", {
        "--color": "#0F0D0D",
        background: "#0F0D0D",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#hero",
          scrub: true,
          start: isMobile ? "top -450%" : "top -530%",
          end: isMobile ? "top -450%" : "top -530%",
          markers: false,
        },
        onStart: () => {
          changeTextColor("white");
        },
        onReverseComplete: () => {
          changeTextColor("black");
        },
      });

      // Ensure Navbar remains white
      const navbar = document.querySelector("nav");
      if (navbar) {
        navbar.style.color = "white";
        navbar.querySelectorAll("a").forEach((link) => {
          link.style.color = "white";
        });
      }

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Initial setup
    setupAnimations();

    // Handle resize
    const handleResize = () => {
      // Kill all existing triggers before recreating
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setupAnimations();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return null;
}
