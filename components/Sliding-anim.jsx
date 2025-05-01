"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useState } from "react";
gsap.registerPlugin(useGSAP,ScrollTrigger);


export default function SlidingAnimation({ children }) {
    const ref = useRef(null);
    const [isDesktop, setIsDesktop] = useState(true);
    const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

    // Handle screen resize
    useEffect(() => {
        const checkScreenSize = () => {
            const isDesktopView = window.innerWidth >= 768;
            setIsDesktop(isDesktopView);
        };

        // Initial check
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useGSAP(() => {
        // Kill previous ScrollTrigger instance if it exists
        if (scrollTriggerInstance) {
            scrollTriggerInstance.kill();
        }

        // Only create animation on desktop
        if (isDesktop) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-page",
                    start: "top top",
                    end: "bottom+=1500 bottom",
                    pin: true,
                    scrub: .2,
                }
            });

            tl.to(ref.current, {
                transform: "translateX(-72.3%)",
                ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            });

            // Store the ScrollTrigger instance
            setScrollTriggerInstance(tl.scrollTrigger);
        } else {
            // Reset transform on mobile
            gsap.set(ref.current, {
                transform: "translateX(0)",
            });
        }

        // Cleanup function
        return () => {
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
        };
    }, [isDesktop]); // Re-run when screen size changes

    return React.cloneElement(children, { ref });
}
