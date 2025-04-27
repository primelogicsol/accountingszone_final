import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NewsGrid() {
  return (
    <Link className="lg:relative flex lg:flex-row flex-col group" href="#">
      <div>
        <Image
          src="/news/news-grid/item-1@2x.jpg"
          width="700"
          height="956"
          alt=""
          className="h-[400px] lg:h-full object-cover"
        />
      </div>
      <div className="lg:absolute lg:group lg:mb-0 lg:group-hover:bg-white lg:focus:bg-white lg:group-hover:border-4 transition-all lg:border-[#fbc710] lg:top-0 lg:left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
        <div className="max-w-[340px] lg:mt-0 lg:opacity-0 h-full lg:translate-y-[20px] text-base lg:focus:opacity-100 lg:group-hover:opacity-100">
          Jul 03, 2020
        </div>
        <h3 className="lg:absolute mt-3 lg:mt-0 lg:opacity-0 lg:group-hover:opacity-100 font-bold lg:left-[32px] lg:group-hover:z-10 lg:top-[20px] lg:-translate-y-[20px] text-3xl xl:left-[30px] xl:top-[130px] xl:text-3xl">
          Discover Interior
        </h3>
        <div className="max-w-[340px] mt-3 lg:-mt-20 lg:mb-auto lg:opacity-0 h-full lg:translate-y-[20px] text-base lg:focus:opacity-100 lg:group-hover:opacity-100">
          Projects for many large domestic and foreign corporations, enterprises
          in many elds such
        </div>
        <div className="mt-3 lg:opacity-0 lg:focus:opacity-100 lg:group-hover:opacity-100">
          <span className="flex items-center text-lg lg:group-hover:text-[#fbc710] lg:focus:text-[#fbc710] font-bold">
            Learn more
            <ChevronRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
