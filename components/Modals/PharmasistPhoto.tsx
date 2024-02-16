import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface IPharmasistPhoto {
src:string,
name?:string
className?:string
}

const PharmasistPhoto:FC<IPharmasistPhoto> = ({src,name,className}) => {
  return (
    <Avatar className={cn(className,'size-20')}>
  <AvatarImage src={src} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  )
}

export default PharmasistPhoto