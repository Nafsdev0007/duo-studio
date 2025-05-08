export default function Page2Bars({ title, desc, border, onHover }) {
  return (
    <div
      className={`py-3 w-[39%] flex cursor-pointer justify-between items-end group ${border}`}
      onMouseEnter={onHover}
    >
      <div className="flex flex-col">
        <h2 className="font-[500] text-[#0F0D0D] text-[22.7671px]  font-[Suisselntl2]">
          {title}
        </h2>
        <p className="font-[400]  text-[#0F0D0D] tracking-tight w-[100%] text-[15px]  font-[Suisselntl2] ">
          {desc}
        </p>
      </div>
      <button
        onClick={() => console.log("Expand clicked")} // Replace with actual function
        className="px-4 py-[2px] rounded-full hover:cursor-pointer 
  transition-all duration-300 ease-in-out 
  text-[14px] font-[Suisselntl1] 
  hover:text-[#FEFCFF] 
  bg-transparent hover:bg-[#000000] 
  opacity-0 group-hover:opacity-100 
  border border-[#0F0D0D] hover:border-transparent"
      >
        Expand
      </button>
    </div>
  );
}
