"use client"
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { ModalContext } from './modalContext'

interface IProviderProps {
    children: React.ReactNode
}


const Providers:FC<IProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </ModalContext.Provider>
  )
}

export default Providers