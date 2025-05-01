"use client";

export default function ClientsBars({
  border = "border-t-1",
  name,
  title,
  year,
  imageUrl,
  "data-image-url": dataImageUrl,
}) {
  // Prioritize imageUrl prop, fallback to data-image-url
  const finalImageUrl = imageUrl || dataImageUrl;

  return (
    <div
      className={`flex client-txt-div hover:text-[#fff] duration-300 text-[#fefcff2b] justify-between border-white py-5 w-full ${border} `}
      data-image-url={finalImageUrl}
    >
      <h2 className="client-txt text-[22.7671px] font-medium tracking-tight font-[Suisselntl2] hover:text-[#fff] duration-300">
        {name}
      </h2>
      <div className="flex gap-21">
        <h3 className="client-txt text-[16px] tracking-tight font-[Suisselntl2] hover:text-[#fff] duration-300">
          {title}
        </h3>
        <p className="client-txt text-[16px] tracking-tight font-[Suisselntl2] hover:text-[#fff] duration-300">
          {year}
        </p>
      </div>
    </div>
  );
}
