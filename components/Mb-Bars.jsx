import React from "react";
import YAnimation from "./Y-anim";

function MbBars({ border, img, title, desc, descAnimation }) {
  return (
    <div className={`py-6 px-6 ${border}`}>
      <div className="">
        <img src={img} alt="bar-image" className="w-full h-[32vh] object-cover" />
            <YAnimation {...descAnimation}>
        <div className="flex pt-6 items-end">
          <div>
              <h1 className="font-[500] text-[#0F0D0D] text-[20px] font-[Suisselntl2]">
                {title}
              </h1>
              <div>
                {desc.map((line, index) => (
                  <p key={index} className="font-[400] text-[#0F0D0D] tracking-tight w-[94%] leading-[19px] text-[15px] font-[Suisselntl2]">
                    {line}
                  </p>
                ))}
              </div>
          </div>
          <button className="text-[12px] font-[Suisselntl1] px-3 py-[.5px] border-1 rounded-full">
            Expand
          </button>
        </div>
            </YAnimation>
      </div>
    </div>
  );
}

export default MbBars; // Ensure this is correct