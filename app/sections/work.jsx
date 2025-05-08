import BgAnimation from "@/components/BgAnim";
import BorderAnim from "@/components/Border";
import WorkCards from "@/components/work-cards";
import YAnimation from "@/components/Y-anim";
import { useState, useEffect } from 'react';

const getAnimationValues = (isMobile, isSmall , isMedium) => ({
  heading: {
    trigger: ".works",
    start: isMobile ? "top 75%" : isSmall ? "top 10%" : "top 65%",
    end: "top top",
    index: 5
  },
  madeGood: {
    trigger: ".works",
    start: isMobile ? "top 60%" : isSmall ? "top 10%" : "top 50%",
    end: "top center",
    index: 6
  },
  mgny: {
    trigger: ".works",
    start: isMobile ? "top 50%" : isSmall ? "top -30%" : "top -10%",
    end: "top center",
    index: 7
  },
  finturity: {
    trigger: ".works",
    start: isMobile ? "top 5%" : isSmall ? "top -95%" : "top -96%",
    end: "top center",
    index: 8
  },
  cruefilms: {
    trigger: ".works",
    start: isMobile ? "top -5%" : isSmall ? "top -150%" : isMedium ? "top -160%" : "top -110%",
    end: "top center",
    index: 9
  },
  bottom: {
    trigger: ".works",
    start: isMobile ? "top -57%" : isSmall ? "top -230%" : isMedium ? "top -180%" : "top -155%",
    end: "bottom bottom",
    index: 10
  }
});

export default function Work() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [animValues, setAnimValues] = useState(getAnimationValues(false, false));

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 400;
      const small = window.innerWidth > 640 && window.innerWidth < 768;
      const medium = window.innerWidth > 768 && window.innerWidth < 1024

      setIsMobile(mobile);
      setIsSmall(small);
      setAnimValues(getAnimationValues(mobile, small, medium));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);



  return (
    <div className="lg:min-h-[320vh] sm:h-[280vh] h-[170vh] works relative">
      <BorderAnim />
      <div className="flex lg:pl-[85.5px] sm:pl-10 md:pl-13 pl-6 mt-16 lg:mt-[98.5px] flex-col">
        <YAnimation {...animValues.heading}>
          <h1 className="text-[#0F0D0D] text-[50px] flex leading-[50px] lg:text-[102.45px] font-[PPMori1] md:text-[7.4vw] lg:leading-[102.45px] tracking-tighter ">
            Featured <span className="sm:block hidden lg:hidden">&nbsp;work</span>
          </h1>
          <h1 className="text-[#0F0D0D] sm:hidden block lg:block text-[50px] leading-[50px] lg:text-[102.45px] md:text-[7.4vw] font-[PPMori1] lg:leading-[102.45px] tracking-tighter ">
            work
          </h1>
        </YAnimation>
      </div>

      <div className="absolute lg:top-44 top-36 sm:top-30  -right-0 lg:right-0">
        <YAnimation {...animValues.madeGood}>
          <WorkCards
            src="/work-images/projects_madegood-reduced.mp4"
            type="video"
            title="MadeGood"
            deskDesc="Brand Strategy, Website"
            mobileDesc={["Brand Strategy,", "Website"]}
            small={"Brand Strategy, Website"}
          />
        </YAnimation>
      </div>

      <div className="absolute lg:top-[36vw] sm:top-90 left-6 top-[270px] lg:left-[6%]">
        <YAnimation {...animValues.mgny}>
          <WorkCards
            src="/work-images/home__mgny-thumbnail.webp"
            type="image"
            title="MGNY"
            deskDesc="Brand Strategy, Website, Creative Direction, Illustration"
            mobileDesc={["Brand Strategy", "Website, Creative", "Direction, Illustration"]}
            small={["Brand Strategy, Website, Creative", <br/>," Direction, Illustration"]}
          />
        </YAnimation>
      </div>

      <div className="absolute lg:top-[75vw] top-[520px] sm:top-[120vh] right-6 lg:right-[12%]">
        <YAnimation {...animValues.finturity}>
          <WorkCards
            src="/work-images/home-casestudy-finturity.webp"
            type="image"
            title="Finturity"
            deskDesc="Brand Strategy, Brand Identity, Website, Graphic Design"
            mobileDesc={["Brand Strategy, Brand", " Identity, Website,","Graphic Design"]}
            small={["Brand Strategy, Brand Identity, Website,", <br/>," Graphic Design"]}
          />
        </YAnimation>
      </div>

      <div className="absolute left-6 top-[740px] sm:top-[183vh] lg:top-[96vw] lg:left-[12%]">
        <YAnimation {...animValues.cruefilms}>
          <WorkCards
            src="/work-images/projects_cruefilms-reduced.mp4"
            type="video"
            title="Cruefilms"
            deskDesc="Brand Strategy, Website"
            mobileDesc={["Brand Strategy", "Website"]}
            small={"Brand Strategy, Website"}
          />
        </YAnimation>
      </div>

      <div className="works-bottom absolute md:bottom-40 bottom-24 left-6  md:left-[58%]">
        <YAnimation {...animValues.bottom}>
          <h3 className="font-[Suisselntl2] md:text-[16px] text-[15px] text-[#0F0D0D] font-normal">
            Browse our work and get inspired by the <br />
            possibilities we can create together.
          </h3>
          <button className="hover:bg-[#000000] text-[#0F0D0D] hover:text-[#fff] cursor-pointer duration-300 px-5 py-[2px] mt-4 rounded-full bg-[#EDBFFF] tracking-tighter md:tracking-normal btn text-[14px] font-[Suisselntl1]">
            See All Work
          </button>
        </YAnimation>
      </div>

      <BgAnimation />
    </div>
  );
}