// components/GSAPAnimation.js
"use client";

import React, { useEffect, useState } from "react";
import Page2Bars from "@/components/Page2-bars";
import Image from "next/image";
import Background1 from "../../public/services__branding@1152.webp";
import Background2 from "../../public/services__content@1152.webp";
import Background3 from "../../public/services__websites@1152.webp";
import BgAnimation from "@/components/BgAnim";
import YAnimation from "@/components/Y-anim";
import MbBars from "@/components/Mb-Bars";
import { useMediaQuery } from "react-responsive";

export default function Page2() {
  const [currentBackground, setCurrentBackground] = useState(Background1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgrounds = {
    Branding: Background1,
    Websites: Background3,
    Content: Background2,
  };

  const handleHover = (title) => {
    // Only trigger transition if the background is different
    if (backgrounds[title] !== currentBackground) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBackground(backgrounds[title]);
        setIsTransitioning(false);
      }, 300); // matches the transition duration
    }
  };
  

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange(); // Initialize
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  

  return (
    <>
      <div className="min-h-[124.5vh] hidden lg:block relative w-full page-2">
        <div className=" flex pl-6 md:pl-[85.5px] gap-52 flex-col">
          <div className="page2-txt-div flex flex-col ">
            <YAnimation
              start="top 80%"
              trigger={".page-2"}
              end="top top"
              index={0}
            >
              <div className="flex items-center gap-9">
                <p className="font-[400] font-[Suisselntl2] leading-[15px] text-[15px] text-[#0F0D0D]">
                  Capabilities
                </p>
                <h1 className="page-2-headings">
                  At Duo Studio, we have a passion
                </h1>
              </div>
              <div>
                <h1 className="page-2-headings">for crafting personalized</h1>
                <h1 className="page-2-headings"> solutions, including:</h1>
              </div>
            </YAnimation>
          </div>

          <div className="">
            <YAnimation
              trigger={".page-2"}
              start="top 30%"
              end="top top"
              index={1}
            >
              <Page2Bars
                title="Branding"
                desc="Brand Identity, Brand Strategy, Logo Design, Messaging, Positioning, Art Direction, Brand Guidelines"
                border={"border-t-1"}
                onHover={() => handleHover("Branding")}
              />
            </YAnimation>
            <YAnimation
              trigger={".page-2"}
              start="top 15%"
              end="top top"
              index={2}
            >
              <Page2Bars
                title="Websites"
                desc={
                  "Web Design, Web Development, UI/UX, Wireframes, Copywriting, E-Commerce, SEO, CMS, Analytics/Tracking"
                }
                border={"border-t-1"}
                onHover={() => handleHover("Websites")}
              />
            </YAnimation>
            <YAnimation
              trigger={".page-2"}
              start="top 0%"
              end="top top"
              index={3}
            >
              <Page2Bars
                title={"Content"}
                desc={
                  "Content Strategy, Graphic Design, Marketing Design Collateral, Packaging, Print Design, Illustration, Motion Graphics"
                }
                border={"border-t-1 border-b-1"}
                onHover={() => handleHover("Content")}
              />
            </YAnimation>
          </div>
        </div>

        <div className="w-1/2 absolute right-0 top-24 pt-10 h-[85vh]">
          <Image
            src={currentBackground}
            alt="Service Background"
            fill
            style={{
              objectFit: "cover",
              transition: isTransitioning
                ? "opacity 0.3s cubic-bezier(0.11, 0, 0.5, 0)"
                : "opacity 0s",
              opacity: isTransitioning ? 0 : 1,
            }}
          />
        </div>
        <YAnimation
          trigger={".page-2"}
          start="top -20%"
          end="top top"
          index={4}
        >
          <button className="ml-[85.5px] hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300 px-5 py-[2px] mt-8 rounded-full bg-[#EDBFFF] text-[14px] font-[Suisselntl1] ">
            Learn More
          </button>
        </YAnimation>
        <BgAnimation />
      </div>

      <div className="min-h-[124.5vh] mt-36 sm:mt-48  block lg:hidden">
        <div className="page2-txt-div flex px-6 flex-col ">
          <YAnimation
            start={isMobile? "top 60%":"top -5%"}
            trigger={".page-2"}
            end="top top"
            index={16}
          >
            <div className="flex ">
              <p className="font-[400] font-[Suisselntl2] text-[15px] text-[#0F0D0D]">
                Capabilities
              </p>
            </div>
            <div>
              <h1 className="page-2-headings flex">At Duo Studio, we have a&nbsp;<span className="sm:block hidden">passion for</span> <span className="sm:hidden hidden md:block">&nbsp;crafting</span> </h1>
              <h1 className="page-2-headings  sm:hidden block ">
                 passion for 
                crafting <br /> personalized solutions,
              </h1>

              <h1 className="page-2-headings hidden md:hidden sm:block">
              crafting personalized solutions,
              </h1>
              <h1 className="page-2-headings md:hidden block">including:</h1>

              <h1 className="page-2-headings md:block hidden">personalized solutions, including:</h1>
            </div>
          </YAnimation>
        </div>

        <div className="mt-6 md:mt-10">
          <MbBars
            desc={isMobile?[
              "Brand Identity, Brand Strategy, Logo Design, Messaging, Positioning, Art Direction, Brand Guidelines",
            ]:[
              "Brand Identity, Brand Strategy, Logo Design,", "Messaging, Positioning, Art Direction, Brand"," Guidelines",
            ]}
            title={"Branding"}
            border={"border-t-1"}
            img={
              "https://duo-studio.co/assets/services/services__branding@1152.webp"
            }
            descAnimation={{
              start: isMobile?"top -2%":"top -95%",
              trigger: ".page-2",
              end: "top top",
              index: 17,
            }}
          />

          <MbBars
         desc={
           isMobile ? [
             "Web Design, Web Development, UI/UX,",
             "Wireframes, Copywriting, E-Commerce,",
             "SEO, CMS, Analytics/Tracking"
           ] : ["Web Design, Web Development, UI/UX,","Wireframes, Copywriting, E-Commerce, SEO,","CMS, Analytics/Tracking"]
         }

            title={"Websites"}
            border={"border-t-1"}
            img={
              "https://duo-studio.co/assets/services/services__websites@1152.webp"
            }
            descAnimation={{
              start: isMobile?"top -40%":"top -185%",
              trigger: ".page-2",
              end: "top top",
              index: 18,
            }}
          />

          <MbBars
            desc={isMobile?[
              "Content Strategy, Graphic Design, Marketing Design Collateral, Packaging," ,
              "Print Design,Illustration, Motion ","Graphics",
            ]: ["Content Strategy, Graphic Design, Marketing"," Design Collateral, Packaging, Print Design,","Illustration, Motion Graphics"]}
            title={"Content"}
            border={"border-t-1"}
            img={
              "https://duo-studio.co/assets/services/services__content@1152.webp"
            }
            descAnimation={{
              start: isMobile?"top -95%":"top -260%",
              trigger: ".page-2",
              end: "top top",
              index: 19,
            }}
          />
        </div>

        <YAnimation
          
          start={isMobile? "top -100%":"top -305%"}
          trigger={".page-2"}
          end="top top"
          index={20}
        >
        <button className="text-[12px] text-black mb-16 ml-6  hover:bg-[#000000] hover:text-[#fff] cursor-pointer bg-[#EDBFFF] font-[Suisselntl1] px-6 py-[.5px] rounded-full">
            Learn More
          </button>
        </YAnimation>
      </div>
    </>
  );
}
