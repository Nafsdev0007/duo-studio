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
      if (window.innerWidth < 1024) { // Adjust this breakpoint as needed
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
      <div className="flex lg:pt-16 md:pb-0 overflow-hidden pt-27 text-[#FEFCFF] flex-col font-[PPMori1] h-[78%] justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="leading-0 m-0">
            <StaggerAnimation>
              <h1 className="left-txt hidden sm:block leading-[7vw] text-[7.5vw] font-[500] tracking-tighter">
                A design studio made
              </h1>
              <h1 className="left-txt  sm:hidden sm:leading-[50px] block leading-[13vw] sm:text-[50px] text-[13vw] font-[500] tracking-tighter">
                A design studio
              </h1>
            </StaggerAnimation>
          </div>
          <div className=" leading-0 m-0">
          <StaggerAnimation>
            <h1 className="right-txt sm:block hidden pl-2 w-fit overflow-hidden pointer-events-none leading-[7vw] text-[7.5vw] font-[500] tracking-tighter">
              to elevate your brand
            </h1>

            <h1 className="right-txt sm:hidden block md:pl-2 w-fit overflow-hidden pointer-events-none sm:leading-[50px] sm:text-[50px] leading-[13vw] text-[13vw] font-[500] tracking-tighter">
            made to elevate
            </h1>
          </StaggerAnimation>
           
          </div>
          <div className="leading-0 m-0 overflow-hidden sm:hidden block ">
            <StaggerAnimation>
            <h1 className="mid-txt text-center sm:text-[50px] pl-2 w-fit pointer-events-none leading-[13vw] text-[13vw] font-[500] tracking-tighter sm:leading-[50px]">your brand</h1>
            </StaggerAnimation>
          </div>
        </div>
        <div className="flex pt-7 leading-[22px]  lg:w-[30%] text-center tracking-tight font-[Suisselntl2] justify-center">
          <Beep />
        </div>
      </div>

      <video
        autoPlay
        muted={isMuted}
        loop
        loading="lazy"
        onClick={handleVideoClick}
        className="md:w-[36%]  w-[52%] sm:w-[45%] md:ml-[32%] lg:w-[50%] hero-video sm:ml-[28%] ml-[25%] lg:ml-[25%] mt-24 sm:mt-42 md:mt-37 lg:mt-32 cursor-pointer"
        src={videoSrc}
      ></video>
      <HeroAnim />
    </div>
  );
}
