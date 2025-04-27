import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedPost() {
  return (
    <section className="p-[20px_0] bg-white lg:p-[119px_0_103px] m-[15px_0] lg:m-[196px_0_100px]">
      <div className="m-[0_auto] lg:max-w-[1110px]">
        <div className="flex flex-col flex-wrap justify-center mb-[30px] lg:flex-row lg:justify-between lg:items-end lg:mb-[90px]">
          <span className="text-2xl font-bold text-black lg:text-3xl">
            Related posts
          </span>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-[10px] font-semibold text-[#a1a1a1] lg:mt-0 lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] animate-arrow-hover"
          >
            View all news
            <ChevronRight className="lg:hover:animate-arrow-hover" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center m-[0_-15px]">
          {[4, 5, 6].map((index) => (
            <div className="h-auto lg:h-[350px] mb-5" key={index}>
              <div className="relative focus:outline-none hover:outline-none h-full overflow-hidden bg-white">
                <div className="h-[400px] lg:h-full">
                  <Image
                    src={`/news/single-post/related-${index}.jpg`}
                    width="350"
                    height="350"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="bg-white pt-8 md:pt-0 lg:bg-[#f8f8f8] group w-full pl-0 relative transform lg:max-w-[351px] lg:pl-[30px] lg:border-4 lg:border-[#fbc710] lg:translate-x-full lg:absolute lg:right-0 lg:left-auto xl:p-[36px_32px_22px] hover:border-[#fbc710] focus:border-[#fbc710] hover:transform-none focus:transform-none border-transparent transition-colors group">
                  <div className="group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-hover:transition-transform group-focus:transition-transform text-black mb-4 md:opacity-0 md:-translate-y-5">
                    Jul 03, 2020
                  </div>
                  <h3 className="md:invisible group-hover:visible group-hover:static group-focus:static group-hover:text-black group-focus:text-black group-hover:translate-y-0 group-focus:translate-y-0 group-hover:transition-transform group-focus:transition-transform md:absolute left-8 xl:left-10 xl:bottom-6 bottom-3 m-0 md:-translate-y-5 text-2xl xl:text-3xl md:text-white">
                    Discover Architecture
                  </h3>
                  <div className="max-w-[340px] mt-6 mb-auto md:opacity-0 -translate-y-5 text-black">
                    Projects for many large domestic and foreign corporations,
                    enterprises in many fields such
                  </div>
                  <div className="group-hover:opacity-100 group-focus:opacity-100 block opacity-0 mt-3">
                    <Link
                      className="flex items-center text-[#fbc710] font-semibold"
                      href="#"
                    >
                      Learn more
                      <ChevronRight className="ml-2 lg:hover:animate-arrow-hover" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
