import React from 'react';
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';
function Main(props) {
    return (
        <div className='w-full h-screen text- center'>
            <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
                <div className="pt-12 mt-4">
                    <p className="uppercase text-sm tracking-widest text-gray-600">LET&#39;S Study TOGETHER!</p>
                    <h1 className="py-4 text-gray-700">Hi, I&#39;m <span className='text-[#5651e5]'>Dongha Lee</span></h1>

                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    2023년도 2학기에 웹 개발에 입문하게 된 중부대학교 정보보호학과 2학년 이동하 입니다.
                    혼자만 아는것이 아닌 다른사람과 지식을 공유하고 피드백을 나누면서 공부하고 싶습니다.
                    현재는 주로 프론트엔드 공부를 하고 있지만 나중에 백엔드도 따로 다뤄보고 싶습니다.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;