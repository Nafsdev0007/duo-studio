"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Beep() {
  const txtRef = useRef(null);

  useGSAP(() => {
    gsap.to(txtRef.current, {
      opacity: 1,
      duration: 1,
      delay:.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <h4 ref={txtRef} className="hero-h4 text-[16px]  md:text-clip opacity-0">
      We build brand identities, creative websites, and <br className="lg:hidden block" /> visual narratives that
      showcase the full extent of <br className="lg:hidden block" />your potential. Based in Washington DC,<br className="lg:hidden block" />
     &nbsp; working with clients world-wide.
    </h4>
  );
}
