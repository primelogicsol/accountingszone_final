import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsMasonry1() {
  return (
    <Link className="flex flex-col group" href="#">
      <div>
        <Image
          src="/news/masonry/item-1.jpg"
          width="350"
          height="478"
          alt=""
          className="h-[400px] lg:h-full object-cover"
        />
      </div>
      <div className="lg:group bg-[#f4f4f4] lg:group-hover:bg-white lg:focus:bg-white lg:group-hover:border-4 transition-all lg:border-[#fbc710] flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
        <div className="max-w-[340px] h-full text-base">Jul 03, 2020</div>
        <h3 className="mt-3 font-bold text-3xl">Samuel Gawith</h3>
        <div className="max-w-[340px] mt-3 lg:mb-auto h-full text-base">
          Projects for many large domestic and foreign corporations, enterprises
          in many elds such
        </div>
        <div className="mt-3">
          <span className="flex items-center text-lg lg:group-hover:text-[#fbc710] lg:focus:text-[#fbc710] font-bold">
            Learn more
            <ChevronRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
