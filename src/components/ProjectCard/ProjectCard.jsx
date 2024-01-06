import React, { useState } from 'react'

function ProjectCard({imgSrc, title, content, link}) {

  return (  
      <div className="w-[18rem] sm:w-1/2 lg:w-1/3 bg-[#2b2b34] rounded-md p-4 my-5 md:mx-10 cursor-pointer shadow-md">
        <a href={link} target='_blank'>
        <div>
          <div className='mb-10'>
              <img src={imgSrc} alt="" width={150} className="mx-auto w-[100px]" />
          </div>
          <div>
              <h1 className="text-center md:text-left text-xl md:text-2xl font-bold text-[#cf9c0f] my-3">{title}</h1>
              <p className="md:text-lg">{content.slice(0,300)}...</p>
          </div>
        </div>
        </a>
      </div>
  )
}

export default ProjectCard