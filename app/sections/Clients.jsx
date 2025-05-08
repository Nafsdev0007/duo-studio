import BorderAnim from "@/components/Border";
import ClientsBars from "@/components/ClientsBars";
import YAnimation from "@/components/Y-anim";
import ScrollingStager from "@/GSAP/Stagger-anim";
import { useMediaQuery } from "react-responsive";

export default function Clients() {
        const isMobile = useMediaQuery({query:"(max-width:400px)"});
        const isSmall = useMediaQuery({minWidth:640,maxWidth:768});
        const isMedium = useMediaQuery({minWidth:768,maxWidth:1024});

    return (
        <div className="h-[98vh] sm:h-[108vh] lg:h-screen clients w-full">
            <BorderAnim/>

            <div className="lg:px-[85px] px-6 lg:mt-24 mt-16">
                <div className="flex items-center justify-between">
                    
                        <div className="overflow-hidden leading-9 m-0">
                        <ScrollingStager trigger={".clients"} start={isMobile?"top 60%":isSmall?"top 30%": isMedium? "top 10%" : "top 60%"} duration={.5} index={2}  >
                        <h1 className="lg:text-[39.8408px] text-[26px] font-bold uppercase text-white tracking-tight font-[PPMori2] "><span className="text-[#EDBFFF] mention">MENTIONS</span>&nbsp; CLIENTS</h1>
                        </ScrollingStager>
                        </div>

                  <button className="lg:ml-[85.5px] hover:bg-[#fff] text-[#fff] hover:text-[#000] cursor-pointer border-1 duration-300 lg:px-5 px-5 py-[2px] rounded-full bg-transparent lg:text-[14px] text-nowrap text-[12px] font-[Suisselntl1] ">View Clients</button>
                </div>

                <div className="mt-8 cursor-pointer"> 
                    <YAnimation trigger={".clients"} start={isMobile?"top 60%":isSmall? "bottom 123%":isMedium?"top 5%":"top 60%"} index={11} >
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-verizon.webp' name="Verizon" title={'Small Business Feature'} year={2021} />
                    </YAnimation>
                    <YAnimation trigger={".clients"} start={isMobile?"top 50%":isSmall?"top      -123%": isMedium?"top top" :"top 50%"} index={12}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-awwwards-honorablemention.webp' name="Awwwards" title={'Honorable Mention'} year={2023} />
                    </YAnimation>

                    <YAnimation trigger={".clients"} start={isMobile?"top 40%":isSmall?"bottom 85%": isMedium?"top -5%":"top 40%"} index={13}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-awwwards-mobile.webp' name="Awwwards" title={'Mobile Excellence'} year={2020} />
                    </YAnimation>

                    <YAnimation trigger={".clients"} start={isMobile?"top 30%":isSmall?"bottom 75%": isMedium?"top -10%":"top 30%"} index={14}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-mindsparkle.webp' name="Mindsparkle Mag" title={'Site of the Day'} year={2021} />
                    </YAnimation>
                    
                    <YAnimation trigger={".clients"} start={isMobile?"top 20%":isSmall?"bottom 65%":isMedium?"top 15%":"top 20%"} index={15}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-orpetron.webp' name="Orpetron" border="border-y-1" title={'Site of the Day'} year={2021} />
                    </YAnimation>
                </div>
            </div>
        </div>
    );
}