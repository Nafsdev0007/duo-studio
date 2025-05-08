"use client";
import { useEffect, useRef, useState } from "react";

const isMobileDevice = () => window.innerWidth < 1024; // Changed to md breakpoint to match your site's mobile breakpoint

export default function Cursor({ mousePosition = { x: 0, y: 0 } }) {
  const cursorRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  const [cursorStyle, setCursorStyle] = useState({
    width: 16,
    height: 16,
    backgroundColor: "#EDBFFF",
    textContent: "",
    backgroundImage: "",
  });

  const cursorStyles = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "#EDBFFF",
      textContent: "",
      backgroundImage: "",
    },
    cards: {
      width: 60,
      height: 25,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontSize: "15px",
      fontWeight: "400",
      textAlign: "center",
      fontFamily: "Suisselntl2",
      textContent: "View",
    },
    button: {
      width: 36,
      height: 36,
    },
    video: {
      width: 90,
      height: 25,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontSize: "15px",
      fontWeight: "400",
      textAlign: "center",
      fontFamily: "Suisselntl2",
      textContent: "Sound On",
    },
    clientsBars: {
      width: 400,
      height: 320,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 10000,
    },
  };

  useEffect(() => {
    if (isMobileDevice()) return;

    const handleHover = (e) => {
      let newStyle = cursorStyles.default;
      let shouldRemoveMixBlend = false;

      if (e.target.closest(".cards")) {
        newStyle = cursorStyles.cards;
      } else if (e.target.closest(".client-txt-div")) {
        newStyle = { ...cursorStyles.clientsBars };
        const clientTxtDiv = e.target.closest(".client-txt-div");

        const imageUrl = clientTxtDiv.getAttribute("data-image-url");
        if (imageUrl) {
          newStyle.backgroundImage = `url(${imageUrl})`;
        }

        shouldRemoveMixBlend = true;
      } else if (e.target.closest("button")) {
        newStyle = cursorStyles.button;
      } else if (e.target.closest("video")) {
        newStyle = cursorStyles.video;
      }

      setCursorStyle(newStyle);

      // Dynamically remove or add mix-blend-difference
      if (cursorRef.current) {
        if (shouldRemoveMixBlend) {
          cursorRef.current.classList.remove("mix-blend-difference");
          cursorRef.current.classList.remove("cursor-pointer");
          cursorRef.current.classList.remove("rounded-full");
          cursorRef.current.classList.add("rounded-none");
        } else {
          cursorRef.current.classList.add("mix-blend-difference");
          cursorRef.current.classList.add("cursor-pointer");
          cursorRef.current.classList.add("rounded-full");
          cursorRef.current.classList.remove("rounded-none");
        }
      }
    };

    const handleBtnMouseEnter = (e) => {
      if (isMobileDevice()) return;
      const btnElement = e.target.closest(".btn");
      if (btnElement) {
        setCursorVisible(false);
      }
    };

    const handleBtnMouseLeave = (e) => {
      if (isMobileDevice()) return;
      const btnElement = e.target.closest(".btn");
      if (btnElement) {
        setCursorVisible(true);
      }
    };

    // Add mobile class to body for CSS targeting
    const updateMobileClass = () => {
      if (isMobileDevice()) {
        document.body.classList.add('is-mobile');
      } else {
        document.body.classList.remove('is-mobile');
      }
    };

    updateMobileClass();
    window.addEventListener('resize', updateMobileClass);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseenter", handleBtnMouseEnter, true);
    document.addEventListener("mouseleave", handleBtnMouseLeave, true);

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseenter", handleBtnMouseEnter, true);
      document.removeEventListener("mouseleave", handleBtnMouseLeave, true);
      window.removeEventListener('resize', updateMobileClass);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current || isMobileDevice()) return;

    const styles = {
      transform: `translate(${mousePosition.x - cursorStyle.width / 2}px, ${
        mousePosition.y - cursorStyle.height / 2
      }px)`,
      width: `${cursorStyle.width}px`,
      height: `${cursorStyle.height}px`,
      backgroundColor: cursorStyle.backgroundColor,
      backgroundImage: cursorStyle.backgroundImage,
      backgroundSize: cursorStyle.backgroundSize,
      backgroundPosition: cursorStyle.backgroundPosition,
      borderRadius: cursorStyle.borderRadius,
      zIndex: cursorStyle.zIndex || 10000,
      display: cursorVisible ? "block" : "none",
      justifyContent: cursorStyle.justifyContent,
      alignItems: cursorStyle.alignItems,
      color: cursorStyle.color,
      fontSize: cursorStyle.fontSize,
      fontWeight: cursorStyle.fontWeight,
      textAlign: cursorStyle.textAlign,
      fontFamily: cursorStyle.fontFamily,
    };

    Object.entries(styles).forEach(([key, value]) => {
      if (value !== undefined) {
        cursorRef.current.style[key] = value;
      }
    });

    cursorRef.current.textContent = cursorStyle.textContent || "";
  }, [mousePosition, cursorStyle, cursorVisible]);

  useEffect(() => {
    // Set cursor visibility based on device type
    const updateCursorVisibility = () => {
      setCursorVisible(!isMobileDevice());
    };

    // Initial check
    updateCursorVisibility();

    // Add event listener for window resize
    window.addEventListener("resize", updateCursorVisibility);

    return () => {
      window.removeEventListener("resize", updateCursorVisibility);
    };
  }, []);

  // Don't render the cursor at all on mobile
  if (typeof window !== 'undefined' && isMobileDevice()) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="cursor transition-all duration-300 ease-out rounded-full fixed top-0 left-0 z-[1000] mix-blend-difference pointer-events-none"
      style={{ display: cursorVisible ? "block" : "none" }} // Control visibility with style
    ></div>
  );
}