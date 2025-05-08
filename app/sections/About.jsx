"use client";

import AboutTeller from "@/components/About-teller";
import BorderAnim from "@/components/Border";
import Button from "@/components/Button";
import SlidingAnimation from "@/components/Sliding-anim";
import ScrollingStager from "@/GSAP/Stagger-anim";
import { useMediaQuery } from "react-responsive";

export default function AboutPage() {

  const isMobile = useMediaQuery({query:"(max-width:400px)"});
  const isSmall = useMediaQuery({minWidth:640,maxWidth:768});

  return (
    <div className="min-h-[100vh] mb-45 md:mb-38 lg:mb-0 about-page section">
      <BorderAnim color="dynamic-text" />

      {/* Header Section */}
      <div className="flex lg:mt-24 mt-32 w-full justify-center lg:pl-20 flex-col lg:flex-row lg:pr-28 lg:justify-between">
        <div className="lg:text-[102.45px] md:text-[7.5vw] text-[50px] md:px-0 space-y-2 sm:space-y-0 lg:space-y-2  tracking-tighter font-[PPMori1] font-normal">
          <div className="overflow-hidden">
            <ScrollingStager trigger={".about-page"} start={isMobile ?"top 60%":isSmall?"top 18%":"top 60%"} index={0}>
              <h1 className="lg:leading-[99px] md:leading-[7.5vw] text-center justify-center lg:justify-normal flex lg:gap-4 sm:gap-2 leading-[50px]">
                Beyond logos <span className="sm:block hidden">&</span> <span className="sm:block lg:hidden hidden">creative</span>
              </h1>
            </ScrollingStager>
          </div>

          <div className="overflow-hidden">
            <ScrollingStager trigger={".about-page"} start={isMobile?"top 60%":isSmall?"top 18%":"top 60%"} index={1}>
              <h1 className="md:leading-[56px] lg:leading-[99px] text-center md:text-left leading-[50px] md:pl-0">
                <span className="sm:hidden">
                  &&nbsp;creative
                  <br />
                  websites
                </span>
                <span className="hidden  sm:flex sm:justify-center lg:justify-normal lg:gap-4"> <span className="sm:hidden lg:block">creative</span> websites</span>
              </h1>
            </ScrollingStager>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-black flex justify-center items-center">
          <Button
            className={`lg:w-[143px] mt-8 text-black w-[115px] h-[115px] hover:bg-[#fff] hover:text-[#0F0D0D] cursor-pointer btn lg:h-[143px] flex text-[14px] font-[Suisselntl1] justify-center items-center rounded-full bg-[#EDBFFF]`}
            className2={false}
            text={
              <span className="lg:whitespace-nowrap text-black">
                Start a<br className="lg:hidden" /> project
              </span>
            }
          />
        </div>
      </div>

      {/* Mobile Static AboutTeller */}
      <div className="lg:hidden scrollbar overflow-hidden space-y-12 mt-16">
        <div className="grid overflow-x-auto pl-6 grid-flow-col gap-5 auto-cols-[85%]">
          <AboutTeller
            number={"001"}
            title1="We connect"
            title2={["your brand ", <br />, " with people"]}
            text="A powerful brand has the power to move the hearts and minds of many. Through the combination of brand identity, brand positioning, and storytelling, our aim is to create impactful experiences that become an integral part of people's lives."
          />
          <AboutTeller
            number={"002"}
            title1="We strategize first"
            title2={["when building a", <br />, "brand"]}
            text="At the center of every successful project is data-driven research and a brand strategy framework. Through collaborative workshops, we take a deep-dive into your business, audience, and market to define a roadmap that inspires action."
          />
          <AboutTeller
            number={"003"}
            title1={"We build interactive,"}
            title2={["user-first digital",<br/>," experiences"]}
            text="We don't just build websites; we build growth-driven digital experiences that meet people where they are. Every element, from the web design to the web development is fine-tuned to give your customers an immersive journey from their first click."
          />
          <AboutTeller
            number={"004"}
            title1="We create"
            title2={["intentional content", <br />," that converts"]}
            text="Content is king, and we're masters in building custom, from-scratch content to drive impactful results. We pair compelling narratives with graphic design to amplify your brand's message across various channels."
          />
        </div>
      </div>

      {/* Desktop Sliding Animation */}
      <div className="hidden lg:block ">
        <SlidingAnimation>
          <div className="w-[292%] scroller-div pr-[48vw] flex gap-54 overflow-x-auto">
            {[
              {
                number: "001",
                title1: "We connect your",
                title2: "brand with people",
                text: "A powerful brand has the power to move the hearts and minds of many. Through the combination of brand identity, brand positioning, and storytelling, our aim is to create impactful experiences that become an integral part of people's lives.",
              },
              {
                number: "002",
                title1: "We strategize first",
                title2: "when building a brand",
                text: "At the center of every successful project is data-driven research and a brand strategy framework. Through collaborative workshops, we take a deep-dive into your business, audience, and market to define a roadmap that inspires action.",
              },
              {
                number: "003",
                title1: "We build interactive, user-",
                title2: "first digital experiences",
                text: "We don't just build websites; we build growth-driven digital experiences that meet people where they are. Every element, from the web design to the web development is fine-tuned to give your customers an immersive journey from their first click.",
              },
              {
                number: "004",
                title1: "We create intentional",
                title2: "content that converts",
                text: "Content is king, and we're masters in building custom, from-scratch content to drive impactful results. We pair compelling narratives with graphic design to amplify your brand's message across various channels.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`w-[22.4%] pl-[85px] flex-shrink-0
                   ${index === 0 ? "pl-[85px]" : ""}`}
              >
                <AboutTeller
                  number={item.number}
                  title1={item.title1}
                  title2={item.title2}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </SlidingAnimation>
      </div>
    </div>
  );
}
