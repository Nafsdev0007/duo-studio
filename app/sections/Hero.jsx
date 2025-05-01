"use client";
import React, { useEffect, useState } from "react";
import Beep from "@/components/Hero-beep";
import HeroAnim from "@/components/HeroAnim";
import StaggerAnimation from "@/GSAP/Hero-anim";

export default function Hero() {
  const [isMuted, setIsMuted] = React.useState(true);
  const [videoSrc, setVideoSrc] = useState("https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4");

  const handleVideoClick = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Adjust this breakpoint as needed
        setVideoSrc("https://duo-studio.co/assets/home/Duo%20Reel--Mobile-reduced.mp4");
      } else {
        setVideoSrc("https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4");
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="min-h-screen relative w-full" id="hero">
      <div className="flex md:pt-14 pt-27 text-[#FEFCFF] flex-col font-[PPMori1] h-[78%] justify-center items-center">
        <div className="flex flex-col items-center">
          <div className=" leading-0 m-0">
            <StaggerAnimation>
              <h1 className="left-txt hidden md:block leading-[7vw] text-[7.5vw] font-[500] tracking-tighter">
                A design studio made
              </h1>
              <h1 className="left-txt  md:hidden block leading-[14vw] text-[14vw] font-[500] tracking-tighter">
                A design studio
              </h1>
            </StaggerAnimation>
          </div>
          <div className=" leading-0 m-0">
          <StaggerAnimation>
            <h1 className="right-txt md:block hidden pl-2 w-fit overflow-hidden pointer-events-none leading-[7vw] text-[7.5vw] font-[500] tracking-tighter">
              to elevate your brand
            </h1>

            <h1 className="right-txt md:hidden block pl-2 w-fit overflow-hidden pointer-events-none leading-[14vw] text-[14vw] font-[500] tracking-tighter">
            made to elevate
            </h1>
          </StaggerAnimation>
           
          </div>
          <div className="leading-0 m-0 overflow-hidden md:hidden block ">
            <StaggerAnimation>
            <h1 className="mid-txt text-center pl-2 w-fit pointer-events-none leading-[14vw] text-[14vw] font-[500] tracking-tighter">your brand</h1>
            </StaggerAnimation>
          </div>
        </div>
        <div className="flex pt-7 leading-[22px] md:w-[30%] text-center tracking-tight font-[Suisselntl2] justify-center">
          <Beep />
        </div>
      </div>

      <video
        autoPlay
        muted={isMuted}
        loop
        loading="lazy"
        onClick={handleVideoClick}
        className="md:w-[50%] w-[52%] hero-video ml-[25%] mt-20 md:mt-32 cursor-pointer"
        src={videoSrc}
      ></video>
      <HeroAnim />
    </div>
  );
}
