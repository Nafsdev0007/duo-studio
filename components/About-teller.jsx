export default function AboutTeller({ number, title1, title2, text ,width}) {
  return (
    <div className="flex flex-col  gap-16">
      <div className="flex uppercase gap-4  flex-col">
        <div className="px-2 py-[2.5px] border font-[Suisselntl2] w-12 text-[12px] md:w-14 md:text-[15px] flex justify-center items-center rounded-full">
          <p>{number}</p>
        </div>
        <div className="flex lg:text-[39.8408px] text-[26px] leading-[26px] tracking-tighter font-[PPMori2] lg:leading-[39.8408px] font-semibold flex-col">
          <h1>{title1}</h1>
          <h1>{title2}</h1>
        </div>
      </div>
      <div className={`font-[Suisselntl2]  text-[16px] leading-[22px] md:leading-[20px] w-[80%]`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
