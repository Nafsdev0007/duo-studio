import Button from "@/components/Button";
import ScrollingStager from "@/GSAP/Stagger-anim";

export default function Footer() {
  return (
    <div className="h-[120vh] pl-[85px] pr-[127px] footer  w-full bg-[#EDBFFF]  ">
      <div className="flex justify-between pt-48  items-center">
        <div>
          <div className="overflow-hidden leading-0 m-0">
            <ScrollingStager trigger={".footer"} duration={0.7} start="top 4%" index={3} >
            <h1 className="text-[39.8408px] leading-[39.8408px] font-bold uppercase text-black tracking-tight font-[PPMori2] ">
              Let's create an experience as
            </h1>
            </ScrollingStager>
          </div>

          <div className="overflow-hidden leading-0 m-0">
            <ScrollingStager trigger={".footer"} duration={0.7} start="top 4%" index={4} >
            <h1 className="text-[39.8408px] leading-[39.8408px] font-bold uppercase text-black tracking-tight font-[PPMori2]">
            remarkable as your business
            </h1>
            </ScrollingStager>
          </div>

          
        </div>
        <Button
          text={"Get in Touch"}
          className2="w-[143px] text-black hover:bg-[#0F0D0D] cursor-pointer btn h-[143px] flex text-[14px] font-[Suisselntl1] justify-center hover:text-black ft-btn items-center rounded-full bg-[#fff]"
          className={false}
        />
      </div>

      <div className="border-t-1 ft-border  border-black mt-16"></div>

      <div className="mt-22 w-full flex justify-between">
        <div>
          <h2 className="font-[Suisselntl2] leading-[22.7671px] text-[22.7671px] text-[#0F0D0D] font-medium">
            Don't miss out. Stay in the loop.
          </h2>
          <input
            type="text"
            placeholder="Your Email"
            className="border-b-1 mt-12 after focus:outline-none pb-3 w-[135%] pr-32"
          />
        </div>

        <div className="">
          <h2 className="font-[Suisselntl2] leading-[22.7671px] text-[22.7671px] text-[#0F0D0D] font-medium cursor-pointer ">
            hello@duo-studio.co
          </h2>
          <div className="flex mt-13 gap-18">
            <div>
              <h1 className="pb-2">Main Hubs</h1>
              <p className="ft-p">DC</p>
              <p className="ft-p">Maryland</p>
              <p className="ft-p">Virginia</p>
            </div>

            <div>
              <h1 className="pb-2">Social</h1>
              <p className="ft-p cursor-pointer">Instagram</p>
              <p className="ft-p cursor-pointer">Linkdin</p>
              <p className="ft-p cursor-pointer">Facebook</p>
            </div>
          </div>
        </div>
      </div>

      <p className=" font-['Suisselntl2'] text-[14px] mt-20 leading-[19px]">
        ©2025 Duo Studio |{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  );
}
