import React from 'react'
import { GoDownload } from "react-icons/go";
import { info, icons, skills } from '../constants';
import SkillSlider from '../components/SkillSlider/SkillSlider';

function About() {
  return (
    <div>
        <div className='flex flex-col md:flex-row md:my-20 md:mx-14'>
            <div className='w-full md:w-1/3'>
                <img src="./pfp.jpg" alt="profile pic" width={200} className='rounded-full border-[7px] md:w-[400px] my-10 mx-auto shadow-[0px_0px_20px_1px_rgba(256,256,256)]'/>
                <a href="https://drive.google.com/file/d/1UwmDvfEzy_oJ1ch5zKP3G1H2ZZ4LIMjj/view?usp=sharing" target='_blank'><button className='flex my-10 mx-auto xl:mx-36 px-4 py-2 items-center hover:bg-[#cf9c0f] rounded-sm border border-[#cf9c0f]'><GoDownload className='mr-2'/> RESUME</button></a>
            </div>
            <div className='w-full md:w-2/3 my-3 md:ml-32'>
                <h1 className='text-[#cf9c0f] text-center text-3xl md:text-4xl'>ABOUT ME</h1>
                <p className='text-lg lg:text-xl text-center font-light my-6 leading-relaxed'>
                    Hello! I'm Hariom Vashista. A computer science undergrad
                    with a passion for Web Development. Having an in-depth knowledge
                    including HTML5, CSS3, JavaScript, React.JS, Tailwind CSS. Strong
                    background in management and leadership.
                </p>
                <ul className='my-10 lg:my-20'>
                    {info.map((info)=>(
                        <li className='text-lg lg:text-xl ml-8 md:ml-0 my-3' key={info.id}>
                            <span className='text-[#cf9c0f]'>{info.title}</span>
                            <span className='mx-1'>{info.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='md:mx-14'>
            <h2 className='text-3xl text-[#cf9c0f] text-center my-10 '>MY INTERESTS</h2>
            <div className='flex justify-evenly'>
                {
                    icons.map((icon)=>(
                        <div>{icon}</div>
                    ))
                }
            </div>
        </div>

        <div className='mb-20'>
            <h2 className='text-2xl sm:text-3xl text-[#cf9c0f] mt-24 text-center mb-10'>PROFESSIONAL SKILLS</h2>
            <div className='bg-[#3a3a3a] w-full grid grid-cols-1 md:grid-cols-2 justify-items-center p-8 sm:p-10'>
                {skills.map((skill)=>(
                    <SkillSlider skillName={skill.skillName} expertise={skill.expertise} key={skill.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About