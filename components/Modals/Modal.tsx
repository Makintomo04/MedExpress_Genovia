"use client"
import { ModalContext } from '@/app/modalContext'
import React, { FC, useContext } from 'react'
import Heading from './Heading/Heading'

interface IModalProps {
 title:string,
 upperBody?:React.ReactNode,
 body: React.ReactNode,
 footer: React.ReactNode,
 isLoading?:boolean,
}

const Modal:FC<IModalProps> = ({title,upperBody,body,footer,isLoading}) => {
    const handleClose = () => {
        setIsOpen(false)
    }
    const preventClose = (e:React.MouseEvent) => {
        e.stopPropagation();
        return
    }
  const {isOpen,setIsOpen} = useContext(ModalContext);
    return (
        <>
        {isOpen && (
    <div onClick={handleClose} className='bg-black/70 w-screen h-screen flex justify-center items-center fixed inset-0 z-10'>
        
     <div onClick={(e)=>preventClose(e)} className="bg-slate-100 h-screen w-screen flex flex-col  md:w-[800px] md:h-[550px] md:rounded-lg">
        <Heading title={title}/>
        {isLoading ? <p className="">Loading...</p> :<div className="p-6 sm:p-12 sm:pb-0 flex-grow h-full">
            {upperBody}
            {body}
        </div>}
     {footer}

     </div>
    </div>
     )
     }
     </>

)

}

export default Modal