import React, { FC } from "react";
import Logo from "../Logo";
import Image from "next/image";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="min-h-20 bg-blue-700 w-screen flex justify-center items-center">
      <div className="container w-full mx-auto flex justify-between">
        <Logo />
        <Image
          src="/images/genovia.jpg"
          alt="genovia flag"
          width={60}
          height={40}
        />
      </div>
    </div>
  );
};

export default Header;
