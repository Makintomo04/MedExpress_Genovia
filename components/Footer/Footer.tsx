import React, { FC } from 'react'

interface FooterProps {

}

const Footer:FC<FooterProps> = ({}) => {
  return (
    <div className='min-h-40 bg-blue-700 w-screen flex justify-center items-center p-8'>
        <div className="container w-full flex flex-col sm:flex-row justify-between items-center mx-auto text-white">
       <p className="">© MedExpress Enterprises Ltd 2024</p> 
       <div className="flex gap-16">
       <ul className="flex gap-2 sm:flex-col">
        <li><a className='hover:underline cursor-pointer'>Home</a></li>
        <li><a className='hover:underline cursor-pointer'>About Us</a></li>
        <li><a className='hover:underline cursor-pointer'>Press</a></li>
       </ul>
       <ul className="flex gap-2 sm:flex-col">
        <li><a className='hover:underline cursor-pointer'>Returns</a></li>
        <li><a className='hover:underline cursor-pointer'>Delivery Info</a></li>
        <li><a className='hover:underline cursor-pointer'>Help Centre</a></li>
       </ul>
       </div>
        </div>
    </div>
  )
}

export default Footer