import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full z-40">
      <div className="flex fixed top-0 left-0 bg-white items-center justify-between w-full mx-auto py-2 px-1 sm:px-4 md:py-3 sm:px-8 shadow-sm">
        <Link
          href="/"
          className="relative pl-[10px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[32px] before:h-full before:border-[1.5px] before:border-solid before:border-[#fbc710] before:border-r-0 overflow-hidden max-w-[110px]"
        >
          <Image
            src="/logo/Accountings.png"
            alt="Accounting Zone Logo"
            width={120}
            height={40}
            className="w-full h-auto"
          />
        </Link>

        <Navbar />

        {/* Phone number link is already commented out */}
        {/* <Link
          href="tel:17606860609"
          className="hidden xl:block font-bold justify-self-end hover:text-[#fbc710] transition-colors"
        >
          +1 (760) 686 06-09
        </Link>  */}
      </div>
    </header>
  );
}