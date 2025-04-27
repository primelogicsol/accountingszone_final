import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsSection() {
  return (
    <section className="flex flex-wrap pb-40 mx-auto sm:w-1/2 container">
      <header
        className="flex items-center font-bold justify-between mx-auto w-full container mb-8 md:mb-12 lg:mb-16"
        data-aos="fade"
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-0">
          Latest news
        </h2>

        <div className="flex mb-4 md:mb-0 md:ml-5">
          <Link
            className="flex gap-4 text-gray-500 sm:ml-[30px] xl:ml-[45px] ml-7 lg:ml-11"
            href="#"
          >
            View all news
            <ChevronRight />
          </Link>
        </div>
      </header>

      <div
        className="container mx-auto w-full lg:max-w-[1830px]"
        data-aos="fade"
      >
        <div className="sm:relative overflow-hidden z-10">
          <div className="sm:relative w-full h-full z-10 flex transition-transform">
            <ul className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <li>
                <Link
                  className="sm:relative flex flex-col sm:flex-row overflow-hidden"
                  href="#"
                >
                  <div className="h-[400px] lg:h-full object-cover">
                    <Image
                      src="/latest-news/1.jpg"
                      width="350"
                      height="352"
                      alt="Projects Details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="sm:absolute duration-300 sm:border-4 sm:border-[#fbc710] sm:hover:bg-white sm:focus:bg-[#fbc710] sm:top-0 sm:left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px] sm:transition-transform sm:translate-y-[294px] sm:hover:-translate-y-0">
                    <h3 className="sm:absolute font-bold sm:left-[32px] sm:bottom-[12px] text-3xl text-white xl:left-[40px] xl:bottom-[24px]">
                      Discover Architecture
                    </h3>
                    <div className="max-w-[340px] sm:mt-6 mb-auto h-full text-lg text-black">
                      Projects for many large domestic and foreign corporations,
                      enterprises in many elds such
                    </div>
                    <div className="mt-3">
                      <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                        Learn more
                        <ChevronRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="sm:relative flex flex-col sm:flex-row overflow-hidden"
                  href="#"
                >
                  <div className="h-[400px] lg:h-full object-cover">
                    <Image
                      src="/latest-news/1.jpg"
                      width="350"
                      height="352"
                      alt="Projects Details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="sm:absolute duration-300 sm:border-4 sm:border-[#fbc710] sm:hover:bg-white sm:focus:bg-[#fbc710] sm:top-0 sm:left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px] sm:transition-transform sm:translate-y-[294px] sm:hover:-translate-y-0">
                    <h3 className="sm:absolute font-bold sm:left-[32px] sm:bottom-[12px] text-3xl text-white xl:left-[40px] xl:bottom-[24px]">
                      Discover Architecture
                    </h3>
                    <div className="max-w-[340px] sm:mt-6 mb-auto h-full text-lg text-black">
                      Projects for many large domestic and foreign corporations,
                      enterprises in many elds such
                    </div>
                    <div className="mt-3">
                      <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                        Learn more
                        <ChevronRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="sm:relative flex flex-col sm:flex-row overflow-hidden"
                  href="#"
                >
                  <div className="h-[400px] lg:h-full object-cover">
                    <Image
                      src="/latest-news/1.jpg"
                      width="350"
                      height="352"
                      alt="Projects Details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="sm:absolute duration-300 sm:border-4 sm:border-[#fbc710] sm:hover:bg-white sm:focus:bg-[#fbc710] sm:top-0 sm:left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px] sm:transition-transform sm:translate-y-[294px] sm:hover:-translate-y-0">
                    <h3 className="sm:absolute font-bold sm:left-[32px] sm:bottom-[12px] text-3xl text-white xl:left-[40px] xl:bottom-[24px]">
                      Discover Architecture
                    </h3>
                    <div className="max-w-[340px] sm:mt-6 mb-auto h-full text-lg text-black">
                      Projects for many large domestic and foreign corporations,
                      enterprises in many elds such
                    </div>
                    <div className="mt-3">
                      <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                        Learn more
                        <ChevronRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
