"use client";
import { navelems } from "@/config";
import { useDuoContext } from "@/context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
gsap.registerPlugin(useGSAP);

const NavItems = () => {
  useGSAP(() => {
    gsap.from(".navUl li", {
      stagger: 0.06,
      y: 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "cubic-bezier(0.83, 0, 0.17, 1)",
    });

    gsap.from(".navSocial", {
      stagger: 0.06,
      y: 5,
      opacity: 0,
      delay: 0.5,
      duration: 0.4,
      ease: "cubic-bezier(0.83, 0, 0.17, 1)",
    });
  });

  return (
    <div className="h-[120vh] w-full z-[100] fixed top-0 left-0 bg-[#F0CAFF] flex flex-col items-center justify-center">
      <div className="text-center mt-0">
        <ul className="navUl ">
          <li className="navLi underline underline-offset-7">Home</li>
          {navelems.map((items, idx) => (
            <li className="navLi">
              <a key={idx} href="#">
                {items}
              </a>
            </li>
          ))}
          <li className="navLi">Archive</li>
        </ul>
      </div>

      <div className="flex navSocial mr-0 sm:mr-65 md:mr-100 mt-36 sm:mt-30 gap-10 md:gap-7 sm:gap-10">
        <div>
          <p className="text-[15px] text-black font-[Suisselntl2] leading-[19px] ">
            General Inquiries
          </p>
          <h5 className="navPs">hello@duo-studio-co</h5>
          <h5 className="navPs block sm:hidden">studio-co</h5>
        </div>

        <div>
          <p className="text-[15px] text-black font-[Suisselntl2] leading-[19px] ">
            Follow Us
          </p>
          <h2 className="navPs">Instagram, Linkedin</h2>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { handleEnter, handleLeave } = useDuoContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav className="h-10  mix-blend-difference lg:block hidden justify-between px-8 z-[5555555555] fixed top-0 text-white left-0 py-2 w-full">
        <Image
          src="https://duo-studio.co/assets/logo.svg"
          width={5}
          height={5}
          alt="image-1"
          className="w-9 h-9"
        />
        <div className="nav-mid absolute top-1/2 left-1/2 mt-2 -translate-x-1/2 -translate-y-1/2 flex items-center">
          <a
            href="/"
            className="font-[Suisselntl2] text-[14.5px] underline-offset-3 underline"
          >
            Home,
          </a>
          {navelems.map((elems, idx) => (
            <a
              className="font-[Suisselntl2] text-[14.5px]"
              key={idx}
              href="#"
              onMouseEnter={() => handleEnter(idx)}
              onMouseLeave={handleLeave}
            >
              &nbsp;{elems},
            </a>
          ))}
        </div>
        <div className="nav-gola mt-2 h-4 w-4 bg-red-white rounded-full"></div>
      </nav>

      <nav className="w-[100vw] lg:hidden block px-6 py-6">
        <div className="flex items-center fixed gap-[73vw] md:gap-[85vw] sm:gap-[82.5vw] z-[120] justify-between  mix-blend-difference">
          <img
            src="https://duo-studio.co/assets/logo.svg"
            alt=""
            className="object-cover mix-blend-difference w-[35px] h-[23px]"
          />
          <button onClick={handleClick}>
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              fill={"#323434"}
              className="h-7 w-9"
            />
          </button>
        </div>

        <div>{isOpen ? <NavItems /> : null}</div>
      </nav>
    </>
  );
}
