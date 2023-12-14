import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-8"
        alt="FlowBite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        Flowbite
      </span>
    </Link>
  );
};

export default Logo;
