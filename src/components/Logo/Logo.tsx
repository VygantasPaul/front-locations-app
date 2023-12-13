import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Logo"
      ></img>
    </Link>
  );
};

export default Logo;
