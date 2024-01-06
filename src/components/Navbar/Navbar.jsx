import React, {useState} from 'react'
import { FaLinkedinIn, FaGithub, FaLaptopCode } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {RxCross2} from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const showNavbar = ()=>{
        setNavbar((prevState)=>{
            return (!prevState)
        })
    }

  return (
    <div className='px-2 py-6 flex justify-between items-center'>
        <div>
            <Link to="/" className='font-Cedarville text-2xl ml-4'>Hariom</Link>
        </div>

        <div className='hidden md:block'>
            <ul className='flex items-center ml-20 text-lg'>
                <Link to="/about"><li className='mx-4' >About</li></Link>
                <Link to="/projects"><li className='mx-4'>Projects</li></Link>
                <Link to="/contact"><li className='mx-4'>Contact</li></Link>
            </ul>
        </div>

        <div className='hidden md:block'>
            <ul className='flex items-center justify-end px-4'>
                <a href = "https://www.linkedin.com/in/hariom-vashista-603436226/" target='_blank'><li className='mx-3'><FaLinkedinIn size={23}/></li></a>
                <a href="https://github.com/Hariom01010" target='_blank'><li className='mx-3'><FaGithub size={23}/></li></a>
                <a href='https://twitter.com/HariomVashista' target='_blank'><li className='mx-3'><FaXTwitter size={23}/></li></a>
            </ul>
        </div>

        {/* Mobile Navbar */}
        <div className='md:hidden'><GiHamburgerMenu size={25} onClick={showNavbar} /></div>
        <div className={`${navbar?"block":"hidden"} right-0 top-0 w-2/4 h-full fixed  bg-[#1c1c21] px-4 border-l animate-slideInRight shadow-[5px_0px_10px_10px_rgb(256,256,256)]`}>
            <div>
                <RxCross2 onClick={showNavbar} size={28} className='relative right-0 mt-6'/>
            </div>
            <div className='h-full'>
                <ul className='my-auto'>
                    <Link to="/about"><li className='text-xl my-4 flex items-center'><IoPersonOutline size={24} className='mr-4'/>About</li></Link>
                    <Link to="/projects"><li className='text-xl my-4 flex items-center'><FaLaptopCode size={24} className='mr-4'/>Projects</li></Link>
                    <Link to="contact"><li className='text-xl my-4 flex items-center'><MdOutlineMail size={24} className='mr-4'/>Contact</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar