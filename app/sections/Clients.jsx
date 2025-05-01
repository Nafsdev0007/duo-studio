import BorderAnim from "@/components/Border";
import ClientsBars from "@/components/ClientsBars";
import YAnimation from "@/components/Y-anim";
import ScrollingStager from "@/GSAP/Stagger-anim";

export default function Clients() {
    return (
        <div className="h-screen clients w-full">
            <BorderAnim/>

            <div className="px-[85px] mt-24">
                <div className="flex items-center justify-between">
                    
                        <div className="overflow-hidden leading-9 m-0">
                        <ScrollingStager trigger={".clients"} start="top 60%" duration={.5} index={2}  >
                        <h1 className="text-[39.8408px] font-bold uppercase text-white tracking-tight font-[PPMori2] "><span className="text-[#EDBFFF] mention">MENTIONS</span>&nbsp; CLIENTS</h1>
                        </ScrollingStager>
                        </div>

                  <button className="ml-[85.5px] hover:bg-[#fff] text-[#fff] hover:text-[#000] cursor-pointer border-1 duration-300 px-5 py-[2px] rounded-full bg-transparent text-[14px] font-[Suisselntl1] ">View Clients</button>
                </div>

                <div className="mt-8 cursor-pointer"> 
                    <YAnimation trigger={".clients"} start="top 60%" index={11} >
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-verizon.webp' name="Verizon" title={'Small Business Feature'} year={2021} />
                    </YAnimation>
                    <YAnimation trigger={".clients"} start="top 50%" index={12}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-awwwards-honorablemention.webp' name="Awwwards" title={'Honorable Mention'} year={2023} />
                    </YAnimation>

                    <YAnimation trigger={".clients"} start="top 40%" index={13}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-awwwards-mobile.webp' name="Awwwards" title={'Mobile Excellence'} year={2020} />
                    </YAnimation>

                    <YAnimation trigger={".clients"} start="top 30%" index={14}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-mindsparkle.webp' name="Mindsparkle Mag" title={'Site of the Day'} year={2021} />
                    </YAnimation>
                    
                    <YAnimation trigger={".clients"} start="top 20%" index={15}>
                    <ClientsBars data-image-url='https://duo-studio.co/assets/home/home-mentions-orpetron.webp' name="Orpetron" border="border-y-1" title={'Site of the Day'} year={2021} />
                    </YAnimation>
                </div>
            </div>
        </div>
    );
}