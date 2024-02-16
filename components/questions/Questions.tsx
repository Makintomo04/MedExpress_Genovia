import React from 'react'
import Question from '../Modals/Question'
import Input from '../Input'
import { FieldErrors, FieldValues,UseFormRegister } from 'react-hook-form'
import { FC } from 'react'
import { STEPS } from '@/lib/utils'
interface IQuestionCompProps {
    q: STEPS,
    id:string,
    name:string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    question:string
}

export const QuestionComp:FC<IQuestionCompProps> = ({q,name,register,errors,id,question}) => {
  
    return (
    <div>
        <Question questionNo={q} question={question} />
            
        <Input register={register} name={name} id={name} value={id}/>
 
        {errors[name] && <p className="text-red-500 mt-5 text-sm">Please select and option to continue</p>}
         
    </div>
  )
}

