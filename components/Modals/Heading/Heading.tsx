"use client"
import React, { FC } from 'react'
import { X } from 'lucide-react';
import { useContext } from 'react';
import { ModalContext } from '@/app/modalContext';

interface HeadingProps {
    title:string,
    subtitle?:string
}

const Heading: FC<HeadingProps> = ({title,subtitle}) => {
const {setIsOpen} = useContext(ModalContext);
  return (
        <div className="h-12 bg-blue-600 md:rounded-t-lg overflow-hidden border-b-[1px] p-6 py-10 flex justify-between items-center border-b-neutral-700">
            <h1 className="text-xl sm:text-2xl font-bold text-white">{title}</h1>
            {/* <p className="text-sm">{subtitle}</p> */}
            <div onClick={()=>setIsOpen(false)} className="p-3 rounded-full bg-slate-200/20 hover:bg-slate-200/30 cursor-pointer transition">
            <X color='white' />
            </div>
        </div>
    )
}

export default Heading