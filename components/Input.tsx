import React from 'react'
import { FC } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
interface IInputProps {
    register: UseFormRegister<FieldValues>,
    name:string,
    id:string,
    value:string
}

const Input:FC<IInputProps> = ({register,name,id,value}) => {
    
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center">
        <input
        {...register(id, {
            required: 'Select an option to continue'
          })}
          className='aspect-square size-8 rounded-full border border-blue-600 text-primary ring-offset-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          type="radio"
          id={`${id}-yes`}
          name={name}
          value="yes"
          checked={value === "yes" ? true : false}
        />
        <label htmlFor={`${id}-yes`} className="text-sm uppercase font-bold leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70 p-2">Yes</label>
        </div>
        <div className="flex items-center">

        <input
        {...register(id, {
            required: 'Select an option to continue' 
          })}
          className='aspect-square size-8 rounded-full border border-blue-600 text-primary ring-offset-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          type="radio"
          id={`${id}-no`}
          value="no"
          checked={value === "no"  ? true : false}
          name={name}
        />
        <label htmlFor={`${id}-no`} className='text-sm uppercase font-bold leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70 p-2'>No</label>
        </div>
      </div>
    </div>
  )
}

export default Input