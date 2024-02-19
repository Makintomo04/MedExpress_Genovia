"use client";
import React from "react";
import { Button } from "../ui/button";
import TrustPilot from "../TrustPilot";
import { useContext } from "react";
import { ModalContext } from "@/app/modalContext";
import Image from "next/image";

interface Props {}

const Hero = () => {
  const { setIsOpen } = useContext(ModalContext);
  return (
    <section className="h-full bg-blue-200/70 w-full flex pt-24 pb-24 sm:pt-40 sm:pb-40">
      <div className="container">
        <TrustPilot />
        <h1 className="text-5xl sm:text-[4.5rem] mt-3 max-w-[800px] leading-tight font-bold text-blue-900">
          Find A Treatment
        </h1>
        <p className="text-lg sm:text-lg mt-3 max-w-lg text-pretty text-blue-950/85">
          Tell us about your health to see suggested treatments
        </p>
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 mt-6 rounded-full"
        >
          Start Free Consultancy
        </Button>
      </div>
    </section>
  );
};

export default Hero;
