import React from "react";
import Image from "next/image";
function About(props) {
  return (
    <div className="w-full md:h-screen p-2 flex items-center scroll-py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <p className="uppercase py-4 text-xl tracking-widest font-bold text-[35px] text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am Dongha Lee, JBU student.
          </p>
          <p className="py-2 text-gray-699">
            이번 학기에 웹 개발에 흥미를 가지게 되어서 웹 개발 공부를 시작했습니다. 시작한지 얼마 안된만큼, 아직까지 크게 이렇다 할 성과는 내지 못하였지만 이번 방학 때 백엔드 공부를 시작하면서 여러가지 프로젝트를
            진행해볼 예정입니다. 
          </p>
        </div>
        <div className="w-full h-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200 col-span-2 cursor-pointer">
          <Image src="/assets/digital-device-mockup_53876-89353.avif" alt="Image" width ={80} height={100} className="rounded-xl w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
