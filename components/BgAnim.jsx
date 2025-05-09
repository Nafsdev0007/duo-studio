"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function BgAnimation() {
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const isSmall = useMediaQuery({ minWidth:640, maxWidth:768 });
  const isMedium = useMediaQuery({minWidth:768, maxWidth:1024});

  useEffect(() => {
    const changeTextColor = (color) => {
      document
        .querySelectorAll(
          "h1, h2, h3, p, a:not(nav a), button:not(.btn), span:not(.btn):not(.navPs):not(nav span):not(.mention):not(.client-txt):not(.footer):not(.ft-border)"
        )
        .forEach((el) => {
          if (el.closest(".footer")) return;
          if (el.closest(".ft-border")) return;
          if (el.closest(".btn")) return;
          if (!el.classList.contains("client-txt")) {
            el.style.color = color;
          }
        });

      document
        .querySelectorAll(
          "div[class*='border']:not(.footer):not(.navPs):not(.btn):not(.ft-border):not(.ft-btn), hr, border"
        )
        .forEach((el) => {
          el.style.borderColor = color;
        });
    };

    const setupAnimations = () => {
      gsap.set("body", {
        "--color": "#0F0D0D",
        backgroundColor: "#0F0D0D",
      });
      changeTextColor("white");

      gsap.to("body", {
        "--color": "white",
        backgroundColor: "white",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#hero",
          scrub: true,
          start: isMobile? "top -58%":isSmall? "top -128%": "top -58%",
          end: isMobile? "top -58%":isSmall? "top -128%": "top -58%",
          markers: false,
        },
        onStart: () => {
          changeTextColor("black");
        },
        onReverseComplete: () => {
          changeTextColor("white");
        },
      });

      gsap.to("body", {
        "--color": "#0F0D0D",
        background: "#0F0D0D",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".works-bottom",
          scrub: true,
          start: isMobile ? "top 250vh" : isSmall ? "top -200vh" : isMedium ? "top -250vh" : "top 100vh",
          end: isMobile ? "top 250vh" : isSmall ? "top -200vh" : isMedium ? "top -250vh" : "top 100vh",
          markers: false,
        },
        onStart: () => {
          changeTextColor("white");
        },
        onReverseComplete: () => {
          changeTextColor("black");
        },
      });

      const navbar = document.querySelector("nav");
      if (navbar) {
        navbar.style.color = "white";
        navbar.querySelectorAll("a").forEach((link) => {
          link.style.color = "white";
        });
      }

      ScrollTrigger.refresh();
    };

    setupAnimations();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setupAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isSmall]); // Add as dependencies

  return null;
}
