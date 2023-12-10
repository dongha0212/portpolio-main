import Image from "next/image";
import React from "react";

function Skill(props) {
  return (
    <div className="w-full lg:h-screen p-2" id="skill">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-x; tracking-widest uppercase text-[#5651e5] text-[35px] font-bold">
          Skill
        </p>
        <h2 className="py-4">What I learned?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/logo-2582748_1280.webp"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#E54F19]">HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/css.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#74A1C4]">CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/communityIcon_4g1uo0kd87c61.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-blue-800">REACTJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/js.png"
                  }
                  className="w-full h-full"
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-yellow-500">JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/md.png"
                  }
                  className="w-full h-full"
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-green-800">MONGODB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/nextjs-icon-dark-background.png"
                  }
                  className="w-full h-full"
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-gray-800">NEXTJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
