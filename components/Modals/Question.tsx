import React from 'react'
import { FC } from 'react'

interface IQuestionProps {
    questionNo:number,
    question:string,
}

const Question:FC<IQuestionProps> = ({questionNo,question}) => {
  return (
    <div className="flex flex-col mb-8">
        <h1 className="text-lg font-medium text-muted-foreground">Question {questionNo}</h1>
        <p className="text-xl font-semibold text-blue-900">{question}</p>
    </div>
  )
}

export default Question