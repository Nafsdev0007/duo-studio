export default function AboutTeller({ number, title1, title2, text ,width}) {
  return (
    <div className="flex flex-col  gap-16">
      <div className="flex uppercase gap-4  flex-col">
        <div className="px-2 py-[2px] border font-[Suisselntl2] w-14 text-[15px] flex justify-center items-center rounded-full">
          <p>{number}</p>
        </div>
        <div className="flex text-[39.8408px] tracking-tighter font-[PPMori2] leading-[39.8408px] font-semibold flex-col">
          <h1>{title1}</h1>
          <h1>{title2}</h1>
        </div>
      </div>
      <div className={`font-[Suisselntl2]  text-[16px] leading-[20px] w-[80%]`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
