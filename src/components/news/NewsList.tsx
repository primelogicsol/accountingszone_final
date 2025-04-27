import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsList() {
  return (
    <Link className="lg:relative flex lg:flex-row flex-col justify-center group" href="#">
      <div>
        <Image
          src="/news/item-6.jpg"
          width="1110"
          height="393"
          alt=""
          className="h-[400px] lg:h-full object-cover"
        />
      </div>
      <div className="lg:absolute lg:group lg:group-hover:bg-white lg:focus:bg-white lg:group-hover:border-4 border-[#fbc710] transition-all lg:top-0 lg:right-[92px] flex flex-col lg:w-1/4 h-full p-[30px] xl:py-[44px] xl:px-[30px]">
        <div className="max-w-[340px] lg:opacity-0 h-full lg:translate-y-[20px] text-base lg:focus:opacity-100 lg:group-hover:opacity-100">
          Jul 03, 2020
        </div>
        <h3 className="lg:absolute lg:opacity-0 lg:group-hover:opacity-100 font-bold lg:left-[32px] lg:group-hover:z-10 lg:top-[20px] lg:-translate-y-[20px] text-3xl xl:left-[30px] xl:top-[130px] xl:text-3xl">
          Discover Interior
        </h3>
        <div className="max-w-[340px] lg:-mt-20 lg:mb-auto lg:opacity-0 h-full lg:translate-y-[20px] text-base lg:focus:opacity-100 lg:group-hover:opacity-100">
          Projects for many large domestic and foreign corporations, enterprises
          in many elds such
        </div>
        <div className="mt-3 lg:opacity-0 lg:focus:opacity-100 lg:group-hover:opacity-100">
          <span className="flex items-center text-lg lg:group-hover:text-[#fbc710] lg:focus:text-[#fbc710] font-bold text-[#fbc710]">
            Learn more
            <ChevronRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
