import React from 'react'

function Card({contact,icon}) {
  return (
    <div className='border border-[#cf9c0f] w-[13em] md:w-[20em] px-4 py-4 my-7 flex items-center'>
      {icon}
      <p className='ml-4 text-xs md:text-base'>{contact}</p>
    </div>
  )
}

export default Card