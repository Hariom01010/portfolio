import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='mx-2 md:mx-28 mt-36'>
            <h1 className='text-3xl sm:text-5xl my-8 text-[#727272] font-light animate-[slideInLeft_1s]'>I&apos;m a</h1>
            <h1 className='text-4xl sm:text-6xl font-medium mb-8 animate-[slideInLeft_1.5s]'>Frontend Engineer<span className='text-[#cf9c0f]'>.</span></h1>
        </div>
        <div className='w-[84px] mx-3 md:mx-[7.5rem] bg-[#cf9c0f] h-3 animate-[slideInLeft_1.5s]'></div>
        <div className='my-16 md:mx-28 flex items-center'>
          <Link to="/about"><button className='text-lg mx-2 border px-2 py-2 border-[#cf9c0f] hover:bg-[#cf9c0f] animate-fadeIn'>About Me</button></Link>
          <Link to="/projects"><button className='text-lg text-[#cf9c0f] mx-5 flex items-center animate-fadeIn'>Projects <FaArrowRight  className='mx-2'/></button></Link>
        </div>
    </div>
  )
}

export default Home