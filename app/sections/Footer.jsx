import Button from "@/components/Button";
import ScrollingStager from "@/GSAP/Stagger-anim";

export default function Footer() {
  return (
    <div className={`lg:h-[120vh] sm:h-[110vh] h-[105vh] px-6 lg:px-0 lg:pl-[85px] lg:pr-[127px] footer w-full bg-[#EDBFFF] `}>
      <div className="flex  flex-col justify-center lg:flex-row lg:justify-between pt-28 lg:pt-48  items-center">
        <div>
          <div className="overflow-hidden leading-0 m-0">
            <ScrollingStager trigger={".footer"} duration={0.7} start="top 4%" index={3} >
            <h1 className="lg:text-[39.8408px] text-[26px] leading-[26px] lg:leading-[39.8408px] font-bold uppercase text-black text-center tracking-tight font-[PPMori2] ">
              Let's create an experience as
            </h1>
            </ScrollingStager>
          </div>

          <div className="overflow-hidden leading-0 m-0">
            <ScrollingStager trigger={".footer"} duration={0.7} start="top 4%" index={4} >
            <h1 className="lg:text-[39.8408px] text-center text-[26px] leading-[26px] lg:leading-[39.8408px] font-bold uppercase text-black tracking-tight font-[PPMori2]">
            remarkable as your business
            </h1>
            </ScrollingStager>
          </div>

          
        </div>
        <Button
          text={"Get in Touch"}
          className2="lg:w-[143px] w-[115px] mt-6 lg:mt-0 h-[115px] text-black hover:bg-[#0F0D0D] cursor-pointer btn lg:h-[143px] flex text-[14px] font-[Suisselntl1] btn justify-center hover:text-black items-center rounded-full bg-[#fff]"
          className={false}
        />
      </div>

      <div className="border-t-1 ft-border  border-black lg:mt-16 mt-8"></div>

      <div className="lg:mt-22 mt-8 w-full flex lg:flex-row flex-col justify-between">
        <div>
          <h2 className="font-[Suisselntl2] text-[20px] leading-[20px] lg:leading-[22.7671px] lg:text-[22.7671px] text-[#0F0D0D] tracking-tight font-medium">
            Don't miss out. Stay in the loop.
          </h2>
          <input
            type="text"
            placeholder="Your Email"
            className="border-b-1 mt-12 text-black after focus:outline-none pb-3 lg:pb-3 sm:pb-2 lg:w-[135%] sm:w-[100%] pr-32"
          />
        </div>

        <div className="">
          <h2 className="font-[Suisselntl2] lg:mt-0 mt-16 leading-[20px] text-[20px] lg:leading-[22.7671px] lg:text-[22.7671px] text-[#0F0D0D] font-medium cursor-pointer ">
            hello@duo-studio.co
          </h2>
          <div className="flex mt-6 lg:mt-13 gap-13 lg:gap-18">
            <div>
              <h1 className="pb-2 text-black">Main Hubs</h1>
              <p className="ft-p">DC</p>
              <p className="ft-p">Maryland</p>
              <p className="ft-p">Virginia</p>
            </div>

            <div>
              <h1 className="pb-2 text-black">Social</h1>
              <p className="ft-p cursor-pointer">Instagram</p>
              <p className="ft-p cursor-pointer">Linkdin</p>
              <p className="ft-p cursor-pointer">Facebook</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-black block sm:hidden lg:block font-['Suisselntl2'] text-[14px] lg:mt-20 mt-16 leading-[19px]">
        ©2025 Duo Studio |{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  );
}
