import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Testimonials from "../Testimonials";
import NewsSection from "../NewsSection";

export default function ProjectsSection() {
  return (
    <>
      <section className="flex mx-10 flex-wrap md:mx-auto w-full container">
        <header
          className="flex items-center flex-col md:flex-row font-bold justify-around mx-auto w-full container mb-8 md:mb-12 lg:mb-16"
          data-aos="fade"
        >
          <h2 className="text-4xl xl:text-5xl mb-4 md:mb-0">Latest projects</h2>

          <div className="flex mb-4 md:mb-0 md:ml-5">
            <button
              className="mr-[20px] p-0 text-lg capitalize bg-transparent border-none appearance-none cursor-pointer font-bold xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710] text-[#fbc710]"
              type="button"
              data-filter="*"
            >
              All
            </button>
            <button
              className="mr-[20px] p-0 text-lg text-black capitalize bg-transparent border-none appearance-none cursor-pointer font-bold xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
              type="button"
            >
              Building
            </button>
            <button
              className="mr-[20px] p-0 text-lg text-black capitalize bg-transparent border-none appearance-none cursor-pointer font-bold xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
              type="button"
            >
              Interior
            </button>

            <Link
              className="flex gap-4 text-gray-500 sm:ml-[30px] xl:ml-[45px] ml-7 lg:ml-11"
              href="#"
            >
              View all projects
              <ChevronRight />
            </Link>
          </div>
        </header>

        <div className="container max-w-full lg:max-w-[1830px]" data-aos="fade">
          <div className="mx-auto relative overflow-hidden list-none p-0 z-10">
            <div className="relative w-full h-full z-10 flex justify-center transition-transform">
              <ul className="flex md:gap-x-8">
                <li>
                  <Link className="relative flex" href="#">
                    <div className="h-[400px] lg:h-full object-cover">
                      <Image
                        src="/projects/1.jpg"
                        width="430"
                        height="573"
                        alt="Projects Details"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute hover:bg-[#fbc710] focus:bg-[#fbc710] top-0 left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
                      <h3 className="absolute font-bold left-[32px] hover:-z-10 bottom-[12px] m-0 -translate-y-[20px] text-2xl text-white xl:left-[40px] xl:bottom-[24px] xl:text-3xl">
                        Villa <br />
                        In <br />
                        London
                      </h3>
                      <div className="max-w-[340px] mt-6 mb-auto opacity-0 h-full translate-y-[20px] text-base text-black focus:opacity-100 hover:opacity-100">
                        Projects for many large domestic and foreign
                        corporations, enterprises in many fields such as
                        finance, banking, F&B, education, communication.
                      </div>
                      <div className="mt-3 opacity-0 focus:opacity-100 hover:opacity-100">
                        <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                          See project
                          <ChevronRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="relative hidden md:flex" href="#">
                    <div className="h-[400px] lg:h-full object-cover">
                      <Image
                        src="/projects/1.jpg"
                        width="430"
                        height="573"
                        alt="Projects Details"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute hover:bg-[#fbc710] focus:bg-[#fbc710] top-0 left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
                      <h3 className="absolute font-bold left-[32px] hover:-z-10 bottom-[12px] m-0 -translate-y-[20px] text-2xl text-white xl:left-[40px] xl:bottom-[24px] xl:text-3xl">
                        Villa <br />
                        In <br />
                        London
                      </h3>
                      <div className="max-w-[340px] mt-6 mb-auto opacity-0 h-full translate-y-[20px] text-base text-black focus:opacity-100 hover:opacity-100">
                        Projects for many large domestic and foreign
                        corporations, enterprises in many fields such as
                        finance, banking, F&B, education, communication.
                      </div>
                      <div className="mt-3 opacity-0 focus:opacity-100 hover:opacity-100">
                        <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                          See project
                          <ChevronRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="relative hidden md:flex" href="#">
                    <div className="h-[400px] lg:h-full object-cover">
                      <Image
                        src="/projects/1.jpg"
                        width="430"
                        height="573"
                        alt="Projects Details"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute hover:bg-[#fbc710] focus:bg-[#fbc710] top-0 left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
                      <h3 className="absolute font-bold left-[32px] hover:-z-10 bottom-[12px] m-0 -translate-y-[20px] text-2xl text-white xl:left-[40px] xl:bottom-[24px] xl:text-3xl">
                        Villa <br />
                        In <br />
                        London
                      </h3>
                      <div className="max-w-[340px] mt-6 mb-auto opacity-0 h-full translate-y-[20px] text-base text-black focus:opacity-100 hover:opacity-100">
                        Projects for many large domestic and foreign
                        corporations, enterprises in many fields such as
                        finance, banking, F&B, education, communication.
                      </div>
                      <div className="mt-3 opacity-0 focus:opacity-100 hover:opacity-100">
                        <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                          See project
                          <ChevronRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="relative hidden md:flex" href="#">
                    <div className="h-[400px] lg:h-full object-cover">
                      <Image
                        src="/projects/1.jpg"
                        width="430"
                        height="573"
                        alt="Projects Details"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute hover:bg-[#fbc710] focus:bg-[#fbc710] top-0 left-0 flex flex-col w-full h-full p-[30px] xl:py-[44px] xl:px-[30px]">
                      <h3 className="absolute font-bold left-[32px] hover:-z-10 bottom-[12px] m-0 -translate-y-[20px] text-2xl text-white xl:left-[40px] xl:bottom-[24px] xl:text-3xl">
                        Villa <br />
                        In <br />
                        London
                      </h3>
                      <div className="max-w-[340px] mt-6 mb-auto opacity-0 h-full translate-y-[20px] text-base text-black focus:opacity-100 hover:opacity-100">
                        Projects for many large domestic and foreign
                        corporations, enterprises in many fields such as
                        finance, banking, F&B, education, communication.
                      </div>
                      <div className="mt-3 opacity-0 focus:opacity-100 hover:opacity-100">
                        <span className="flex items-center text-lg text-black hover:text-[#fbc710] focus:text-[#fbc710] font-bold">
                          See project
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

      <section className="container mx-auto max-w-[1800px]">
        <div className="container mx-auto">
          <ul className="list-none flex flex-wrap justify-center items-center -mt-[98px]">
            <li
              className="w-1/2 text-center items-center mt-[98px] sm:w-1/3 lg:w-1/4 xl:w-1/5"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Image
                src="/partners/1.png"
                width="117"
                height="47"
                alt="behr handelsagentur"
                className="inline-block items-center backdrop-grayscale hover:backdrop-grayscale-0"
              />
            </li>
            <li
              className="w-1/2 text-center items-center mt-[98px] sm:w-1/3 lg:w-1/4 xl:w-1/5"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Image
                src="/partners/1.png"
                width="117"
                height="47"
                alt="behr handelsagentur"
                className="inline-block items-start backdrop-grayscale hover:backdrop-grayscale-0"
              />
            </li>
            <li
              className="w-1/2 text-center items-center mt-[98px] sm:w-1/3 lg:w-1/4 xl:w-1/5"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Image
                src="/partners/1.png"
                width="117"
                height="47"
                alt="behr handelsagentur"
                className="inline-block items-start backdrop-grayscale hover:backdrop-grayscale-0"
              />
            </li>
            <li
              className="w-1/2 text-center items-center mt-[98px] sm:w-1/3 lg:w-1/4 xl:w-1/5"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Image
                src="/partners/1.png"
                width="117"
                height="47"
                alt="behr handelsagentur"
                className="inline-block items-start backdrop-grayscale hover:backdrop-grayscale-0"
              />
            </li>
          </ul>
        </div>
      </section>

      <Testimonials />

      <NewsSection />
    </>
  );
}
