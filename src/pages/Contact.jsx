import React from 'react'
import Card from '../components/Card/Card'
import { contacts } from '../constants'

function Contact() {
  return (
    <div className='flex flex-col-reverse justify-center xl:flex-row m-10'>
        <div className='w-full xl:w-1/2 xl:mx-5 shadow-sm'>
          <h1 className='text-3xl text-center md:text-4xl tracking-wide text-[#cf9c0f]'>CONTACT ME</h1>
          <p className='my-4 text-center'>Let's <span className='text-[#cf9c0f] text-xl'>Talk About Ideas</span></p>
          <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center mx-auto mt-10 w-full'>
            {contacts.map((contact)=>(
              <a href={contact.link} className='cursor-pointer' target='_blank'><Card contact={contact.contact} icon={contact.icon} key={contact.id}/></a>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Contact