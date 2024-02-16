import React, { FC } from 'react'
import Logo from '../Logo'

interface HeaderProps {

}

const Header:FC<HeaderProps> = ({}) => {
  return (
    <div className='min-h-20 bg-blue-700 w-screen flex justify-center items-center'>
        <div className="container w-full mx-auto">
            <Logo/>
        </div>
    </div>
  )
}

export default Header