import AboutTeller from "@/components/About-teller";
import Anim from "@/components/BgAnim";
import BorderAnim from "@/components/Border";
import Button from "@/components/Button";
import SlidingAnimation from "@/components/Sliding-anim";
import ScrollingStager from "@/GSAP/Stagger-anim";
import Stagger from "@/GSAP/Stagger-anim";
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-[100vh] about-page section">
      <BorderAnim color="dynamic-text" />
      <div className="flex md:mt-24 mt-32 w-full justify-center md:pl-20 flex-col md:flex-row  md:pr-28 md:justify-between">
        <div className="md:text-[102.45px] text-[50px] md:px-0 space-y-2 tracking-tighter font-[PPMori1] font-normal ">
          <div className="m-0 leading-0 overflow-hidden">
            <ScrollingStager trigger={".about-page"} start="top 60%" index={0}>
              <h1 className="md:leading-[99px] pl-1 md:pl-0 text-center flex gap-4 leading-[50px] ">Beyond logos <span className="md:block hidden">&</span></h1>
            </ScrollingStager>
          </div>
      
          <div className="m-0 leading-0 overflow-hidden">
            <ScrollingStager trigger={".about-page"} start="top 60%" index={1}>
              <h1 className="md:leading-[99px] text-center md:text-left leading-[50px] md:pl-0">
                <span className="md:hidden">&&nbsp;creative<br />websites</span>
                <span className="hidden md:inline">creative websites</span>
              </h1>
            </ScrollingStager>
          </div>
        </div>
        <div className=" text-black">
          <Button
            className={`md:w-[143px] mt-8 md:0 text-black w-[115px] h-[115px] hover:bg-[#fff] hover:text-[#0F0D0D] cursor-pointer btn md:h-[143px] flex text-[14px] font-[Suisselntl1] justify-center items-center rounded-full bg-[#EDBFFF]`}
            className2={false}
            text={<span className="md:whitespace-nowrap text-black">Start a<br className="md:hidden" /> project</span>}
          />
        </div>
      </div>

      <SlidingAnimation>
        <div className="w-[292%] mt-16 md:mt-0 md:overflow-x-hidden scroller-div flex md:gap-54 md:pr-[48vw]">
          <div className="md:w-[22%] w-[22%] pl-6 md:pl-[85px] flex-shrink-0">
            <AboutTeller
              number={"001"}
              title1={isMobile ? "We connect" : "We connect your"}
              title2={isMobile ? ["your brand ", "with people"] : "brand with people"}
              text={
                "A powerful brand has the power to move the hearts and minds of many. Through the combination of brand identity, brand positioning, and storytelling, our aim is to create impactful experiences that become an integral part of people's lives."
              }
            />
          </div>

          <div className="w-[21.2%] pl-[85px] flex-shrink-0">
            <AboutTeller
              number={"002"}
              title1={"We strategize first"}
              title2={"when building a brand"}
              text={
                "At the center of every successful project is data-driven research and a brand strategy framework. Through collaborative workshops, we take a deep-dive into your business, audience, and market to define a roadmap that inspires action."
              }
            />
          </div>

          <div className="w-[24%] pl-[85px] flex-shrink-0">
            <AboutTeller
              number={"003"}
              title1={"We build interactive, user-"}
              title2={"first digital experiences"}
              text={
                "We don't just build websites; we build growth-driven digital experiences that meet people where they are. Every element, from the web design to the web development is fine-tuned to give your customers an immersive journey from their first click."
              }
            />
          </div>

          <div className="w-[24%] pl-[85px] flex-shrink-0">
            <AboutTeller
              number={"004"}
              title1={"We create intentional"}
              title2={"content that converts"}
              text={
                "Content is king, and we're masters in building custom, from-scratch content to drive impactful results. We pair compelling narratives with graphic design to amplify your brand's message across various channels."
              }
            />
          </div>
        </div>
      </SlidingAnimation>
    </div>
  );
}
