import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Main(props) {
    return (
        <div className='w-full h-screen text-center' style={{ backgroundImage: 'url("assets/startup.jpg")', backgroundSize: 'cover' }}>
        <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
            <div className="pt-12 mt-4">
            <p className="uppercase text-sm tracking-widest text-white">LET&#39;S Study TOGETHER!</p>
            <h1 className="py-4 text-white">Hi, I&#39;m <span className='text-[#834eff]'>Dongha Lee</span></h1>

            <p className='py-4 text-white max-w-[70%] m-auto'>
                정보보호학과 2학년 이동하 입니다.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
                </div>
            </div>
            </div>
        </div>
        
    );
    }

export default Main;
