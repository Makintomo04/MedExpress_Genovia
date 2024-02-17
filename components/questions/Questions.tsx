import React from "react";
import Question from "../Modals/Question";
import Input from "../Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import { STEPS } from "@/lib/utils";
interface IQuestionCompProps {
  q: STEPS;
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  question: string;
}

export const QuestionComp: FC<IQuestionCompProps> = ({
  q,
  name,
  register,
  errors,
  id,
  question,
}) => {
  return (
    // <div className='sm:pt-8 sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center'>
    <div className="flex flex-col justify-between flex-grow h-48">
      <div className="">
        <Question questionNo={q} question={question} />

        <Input register={register} name={name} id={name} value={id} />
      </div>

      {errors[name] && (
        <p className="text-red-500 mt-5 text-sm">
          Please select and option to continue
        </p>
      )}
    </div>
  );
};
