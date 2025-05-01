import BgAnimation from "@/components/BgAnim";
import BorderAnim from "@/components/Border";
import WorkCards from "@/components/work-cards";
import YAnimation from "@/components/Y-anim";
import { useState, useEffect } from 'react';

const getAnimationValues = (isMobile) => ({
  heading: {
    trigger: ".works",
    start: isMobile ? "top 75%" : "top 65%",
    end: "top top",
    index: 5
  },
  madeGood: {
    trigger: ".works",
    start: isMobile ? "top 60%" : "top 50%",
    end: "top center",
    index: 6
  },
  mgny: {
    trigger: ".works",
    start: isMobile ? "top 50%" : "top -10%",
    end: "top center",
    index: 7
  },
  finturity: {
    trigger: ".works",
    start: isMobile ? "top 5%" : "top -96%",
    end: "top center",
    index: 8
  },
  cruefilms: {
    trigger: ".works",
    start: isMobile ? "top -5%" : "top -110%",
    end: "top center",
    index: 9
  },
  bottom: {
    trigger: ".works",
    start: isMobile ? "top -57%" : "top -155%",
    end: "bottom bottom",
    index: 10
  }
});

export default function Work() {
  const [isMobile, setIsMobile] = useState(false);
  const [animValues, setAnimValues] = useState(getAnimationValues(false));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setAnimValues(getAnimationValues(window.innerWidth < 768));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="md:min-h-[320vh] h-[170vh] works relative">
      <BorderAnim />
      <div className="flex md:pl-[85.5px] pl-6 md:pl-0 mt-16 md:mt-[98.5px] flex-col">
        <YAnimation {...animValues.heading}>
          <h1 className="text-[#0F0D0D] text-[50px] leading-[50px] md:text-[102.45px] font-[PPMori1] md:leading-[102.45px] tracking-tighter ">
            Featured
          </h1>
          <h1 className="text-[#0F0D0D] text-[50px] leading-[50px] md:text-[102.45px] font-[PPMori1] md:leading-[102.45px] tracking-tighter ">
            work
          </h1>
        </YAnimation>
      </div>

      <div className="absolute md:top-44 top-36 -right-0 md:right-0">
        <YAnimation {...animValues.madeGood}>
          <WorkCards
            src="/work-images/projects_madegood-reduced.mp4"
            type="video"
            title="MadeGood"
            deskDesc="Brand Strategy, Website"
            mobileDesc={["Brand Strategy,", "Website"]}
          />
        </YAnimation>
      </div>

      <div className="absolute md:top-[36vw] left-6 top-[270px] md:left-[6%]">
        <YAnimation {...animValues.mgny}>
          <WorkCards
            src="/work-images/home__mgny-thumbnail.webp"
            type="image"
            title="MGNY"
            deskDesc="Brand Strategy, Website, Creative Direction, Illustration"
            mobileDesc={["Brand Strategy", "Website, Creative", "Direction, Illustration"]}
          />
        </YAnimation>
      </div>

      <div className="absolute md:top-[75vw] top-[520px] right-6 md:right-[12%]">
        <YAnimation {...animValues.finturity}>
          <WorkCards
            src="/work-images/home-casestudy-finturity.webp"
            type="image"
            title="Finturity"
            deskDesc="Brand Strategy, Brand Identity, Website, Graphic Design"
            mobileDesc={["Brand Strategy, Brand", " Identity, Website,","Graphic Design"]}
          />
        </YAnimation>
      </div>

      <div className="absolute left-6 top-[740px] md:top-[96vw] md:left-[12%]">
        <YAnimation {...animValues.cruefilms}>
          <WorkCards
            src="/work-images/projects_cruefilms-reduced.mp4"
            type="video"
            title="Cruefilms"
            deskDesc="Brand Strategy, Website"
            mobileDesc={["Brand Strategy", "Website"]}
          />
        </YAnimation>
      </div>

      <div className="works-bottom absolute md:bottom-40 bottom-24 left-6  md:left-[58%]">
        <YAnimation {...animValues.bottom}>
          <h3 className="font-[Suisselntl2] md:text-[16px] text-[15px] text-[#0F0D0D] font-normal">
            Browse our work and get inspired by the <br />
            possibilities we can create together.
          </h3>
          <button className="hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300 px-5 py-[2px] mt-4 rounded-full bg-[#EDBFFF] tracking-tighter md:tracking-normal text-[14px] font-[Suisselntl1]">
            See All Work
          </button>
        </YAnimation>
      </div>

      <BgAnimation />
    </div>
  );
}