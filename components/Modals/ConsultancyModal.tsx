"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";
import usePharmasist from "@/hooks/usePharmasist";
import PharmasistPhoto from "./PharmacistPhoto";
import { Button } from "../ui/button";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { ModalContext } from "@/app/modalContext";
import { STEPS, cn } from "@/lib/utils";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import FormSubmissionUtil from "@/lib/formSubmissionUtil";
import { QuestionComp } from "../questions/Questions";
import PharamacistDetails from "./PharamacistDetails";

const ConsultancyModal = () => {
  const [step, setStep] = useState(STEPS.START);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [progress, setProgress] = useState((step / STEPS.COMPLETE) * 100);
  const { data: pharmasist, error } = usePharmasist();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      Q1: null,
      Q2: null,
      Q3: null,
      Q4: null,
      Q5: null,
    },
  });

  const Q1 = watch("Q1");
  const Q2 = watch("Q2");
  const Q3 = watch("Q3");
  const Q4 = watch("Q4");
  const Q5 = watch("Q5");

  useEffect(() => {
    // Updates the progress bar
    setProgress((step / STEPS.COMPLETE) * 100);
  }, [step]);

  const onBack = () => {
    if (step === STEPS.START) return setIsOpen(false);
    setStep(step - 1);
  };
  const onNext = () => {
    if (step === STEPS.COMPLETE) {
      setIsOpen(false);
      return setStep(STEPS.START);
    }
    return setStep(step + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step === STEPS.COMPLETE) {
      setIsOpen(false);
      setStep(STEPS.START);
      return;
    }
    if (step !== STEPS.Q5) {
      return onNext();
    }
    setIsLoading(true);
    try {
      await FormSubmissionUtil.submitForm(data);
      reset(); // Clear form
      setStep(STEPS.COMPLETE);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  let footerContent = (
    <div className="min-h-[100px] h-[100px] w-full sm:border-t border-slate-700/20 p-0 gap-0 sm:p-8 sm:gap-10 flex items-center justify-end">
      <>
        <div className="hidden sm:block h-2 w-full rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-600">
          <div
            className="h-2 bg-blue-600"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className=" flex items-center justify-end sm:gap-4 w-full mt-auto h-[70px] sm:h-auto sm:w-auto">
          {step !== STEPS.COMPLETE && (
            <Button
              onClick={onBack}
              size="default"
              className="text-lg font-medium tracking-wideflex items-center gap-2 w-full sm:w-auto rounded-none sm:rounded-md py-[7px]"
              variant="outline"
            >
              {" "}
              <ChevronLeft
                className={cn(step === STEPS.START ? "hidden" : "block")}
                size={22}
              />{" "}
              {step === STEPS.START ? "Close" : "Back"}
            </Button>
          )}
          <Button
            onClick={handleSubmit(onSubmit)}
            size="default"
            className="text-lg font-medium tracking-wide flex items-center gap-2 w-full sm:w-auto rounded-none sm:rounded-sm"
          >
            {step === STEPS.START
              ? "Start"
              : step === STEPS.Q5
                ? "Finish"
                : step === STEPS.COMPLETE
                  ? "Close"
                  : "Next"}{" "}
            <ChevronRight
              className={cn(
                step === STEPS.START ||
                  step === STEPS.Q5 ||
                  step === STEPS.COMPLETE
                  ? "hidden"
                  : "block"
              )}
              size={22}
            />
          </Button>
        </div>
      </>
    </div>
  );
  let upperBodyContent = (
    <>{step !== STEPS.COMPLETE && <PharamacistDetails />}</>
  );

  let bodyContent = (
    <div>
      {/* <h1>Consultancy</h1> */}
      <p className="text-slate-600 text-lg">
        Hi, I'm {pharmasist?.results[0]?.name.first}, We’re almost done! To make
        sure this treatment is safe for you to take, we just need you to answer
        a few questions.
      </p>
    </div>
  );
  if (step === STEPS.Q1) {
    bodyContent = (
      <QuestionComp
        register={register}
        q={STEPS.Q1}
        id={Q1}
        name="Q1"
        question="Do you have any allergies?"
        errors={errors}
      />
    );
  }
  if (step === STEPS.Q2) {
    bodyContent = (
      <QuestionComp
        register={register}
        q={STEPS.Q2}
        id={Q2}
        name="Q2"
        question="Are you currently taking any medication (including over the counter, prescription or recreational drugs)?"
        errors={errors}
      />
    );
  }
  if (step === STEPS.Q3) {
    bodyContent = (
      <QuestionComp
        register={register}
        q={STEPS.Q3}
        id={Q3}
        name="Q3"
        question="Are you aged between 18-75?"
        errors={errors}
      />
    );
  }
  if (step === STEPS.Q4) {
    bodyContent = (
      <QuestionComp
        register={register}
        q={STEPS.Q4}
        id={Q4}
        name="Q4"
        question="Do you have high blood pressure (above 160/90), or are you currently on treatment for high blood pressure?"
        errors={errors}
      />
    );
  }
  if (step === STEPS.Q5) {
    bodyContent = (
      <QuestionComp
        register={register}
        q={STEPS.Q5}
        id={Q5}
        name="Q5"
        question="Do you have high blood pressure (above 160/90), or are you currently on treatment for high blood pressure?"
        errors={errors}
      />
    );
  }
  if (step === STEPS.COMPLETE) {
    bodyContent = (
      <div className="h-full justify-center text-center flex flex-col gap-8 items-center">
        <CheckCircle2 className="text-blue-600" size={64} />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Thank You for Completing your Consultation!
          </h1>
          <p className="text-muted-foreground">
            Expect an email back from us within the next 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Modal
      title="Medical Assessment"
      upperBody={upperBodyContent}
      body={bodyContent}
      footer={footerContent}
      isLoading={isLoading}
    />
  );
};

export default ConsultancyModal;
