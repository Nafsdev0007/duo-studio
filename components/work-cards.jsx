import Image from "next/image";

export default function WorkCards({ src, type = "image", title, mobileDesc , deskDesc}) {
  return (
    <div className="cursor-pointer cards overflow-hidden relative group">
      <div className="md:h-[505px] h-[185px] w-[145px] md:w-[409px] cursor-pointer overflow-hidden relative group">
        {type === "image" ? (
          <div className="w-full h-full overflow-hidden">
            <Image
              src={src}
              alt="work-media"
              width={144}
              height={200}
              quality={100}
              priority
              className="w-full h-full object-object md:object-cover group-hover:blur-[2px] group-hover:scale-105 transition-blur duration-300 origin-center"
            />
          </div>
        ) : (
          <video
            src={src}
            className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[2px] transition-blur duration-300 origin-center"
            controls={false}
            autoPlay
            loop
            muted
          />
        )}
      </div>
      <div className="flex flex-col mt-3">
        <h2 className="font-[Suisselntl2] text-[20px] leading-[17px] md:leading-[22.7671px] md:text-[22.7671px] text-[#0F0D0D] font-medium">
          {title}
        </h2>
        <div>
          {mobileDesc.map((line, index) => (
            <h3
              key={index}
              className="font-[Suisselntl2] block md:hidden text-[15px] leading-[13px] mt-[7px] text-[#0F0D0D] tracking-tight font-normal"
            >
              {line}
            </h3>
          ))}

             <h3
              className="font-[Suisselntl2]  md:block hidden text-[15px] leading-[15px] mt-[7px] text-[#0F0D0D] font-normal"
            >
              {deskDesc}
            </h3>
          
        </div>
      </div>
    </div>
  );
}
