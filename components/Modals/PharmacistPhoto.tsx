import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface IPharmacistPhoto {
  src: string;
  name?: string;
  className?: string;
}

const PharmacistPhoto: FC<IPharmacistPhoto> = ({ src, name, className }) => {
  return (
    <Avatar className={cn(className, "size-16")}>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default PharmacistPhoto;
