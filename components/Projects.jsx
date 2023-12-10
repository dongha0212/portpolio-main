import React from 'react';

    const projectsData = [
    {
        name: 'Clerk2',
        link: 'https://github.com/dongha0212/clerk2',
        description: '수업시간에 진행한 Clerk2.',
    },
    {
        name: 'Wordle',
        link: 'https://github.com/dongha0212/wordle---',
        description: '간단한 토이 프로젝트로, 지정된 단어를 최소 횟수내에 맞추는 웹 게임.',
    },
    {
        name: 'Dapara2',
        link: 'https://github.com/dongha0212/dapara2',
        description: '수업시간에 진행한 쇼핑몰 웹사이트 Dapara2.',
    },
    {
        name: '축구 국가대표팀 소개 사이트',
        link: 'https://github.com/rrvv01/web-study/',
        description: '아시안게임 개최 당시 팀 프로젝트로 진행했던 축구 국가대표팀 소개 사이트',
    },
    {
        name: 'Portpolio',
        link: 'https://github.com/dongha0212/portpolio-main',
        description: '현재 보고있는 포트폴리오 웹사이트',

        name: 'Myth',
        link: 'myth-green.vercel.app',
        description: '팀 프로젝트로 진행한 쇼핑몰 웹사이트',
    },
    ];

    function Projects(props) {
    return (
        <div className='w-full' id="projects">
        <div className="max-w-[1700px] mx-auto px-2 py-16">
            <p className="txt-xl tracking-widest uppercase text-[35px] font-bold text-[#5651e5]">Projects</p>
            <h2 className="py-8">What I've Built</h2>

            {projectsData.map((project, index) => (
            <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#5651e5] hover:underline">
                Visit Project
                </a>
            </div>
            ))}
        </div>
        </div>
    );
    }

export default Projects;
