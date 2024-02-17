"use client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValues: IModalContext = {
  isOpen: false,
  setIsOpen: () => {},
};

export const ModalContext = createContext(defaultValues);
