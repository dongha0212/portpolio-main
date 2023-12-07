import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose,AiOutlineMail} from "react-icons/ai"
function Navbar(props) {
    const [nav,setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#f4f4f4]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="w-[125px] h-[70px] rounded-full overflow-hidden">
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover: border-b hover:text-[#5751E5] hover:scale-105">Home</li>
            </Link>
            <Link href={"#about"}>
              <li className="ml-10 text-sm uppercase hover: border-b hover:text-[#5751E5] hover:scale-105">About</li>
            </Link>
            <Link href={"#skills"}>
              <li className="ml-10 text-sm uppercase hover: border-b hover:text-[#5751E5] hover:scale-105">
                Skill
              </li>
            </Link>
            <Link href={"#projects"}>
              <li className="ml-10 text-sm uppercase hover: border-b hover:text-[#5751E5] hover:scale-105">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={nav ?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}>
        <div className={nav?"md:hidden  fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300":"fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-300"}>
            <div className="">
                <div className="flex w-full items-center justify-between">
                    <Image src={"/assets/341027718_1676182212842322_1799788735964277705_n.png"} width={87} height={35} alt="/"/>
                    <div onClick={handleNav} className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose/>
                    </div>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <ul className="uppercase">
                    <Link href={"/"}>
                        <li className="py-4 text-sm">Home</li>
                    </Link>
                    <Link href={"/"}>
                        <li className="py-4 text-sm">About</li>
                    </Link>
                    <Link href={"/"}>
                        <li className="py-4 text-sm">Skills</li>
                    </Link>
                    <Link href={"/"}>
                        <li className="py-4 text-sm">Projects</li>
                    </Link>
                </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Navbar;
