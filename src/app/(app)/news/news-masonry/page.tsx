import React from "react";
import NewsMasonry1 from "@/components/news/NewsMasonry1";
import NewsMasonry2 from "@/components/news/NewsMasonry2";
import NewsMasonry3 from "@/components/news/NewsMasonry3";

export default function NewsMasonry() {
  return (
    <main>
      <article className="overflow-hidden w-full my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] pt-[40px] pb-0 px-[60px] sm:pt-[60px] sm:pb-0 sm:px-[80px] lg:pt-[100px] lg:pb-0 lg:px-[120px] xl:pt-[150px] xl:pb-0 xl:px-[200px]">
        <header className="my-[50px]">
          <div className="container mx-auto">
            <h1 className="m-0 text-3xl font-bold sm:text-5xl xl:text-6xl">
              News
            </h1>

            <div className="flex mb-4 mt-20 md:mb-0 md:ml-5">
              <button
                className="mr-[20px] p-0 text-base text-blacks capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710] text-[#fbc710]"
                type="button"
                data-filter="*"
              >
                All
              </button>
              <button
                className="mr-[20px] p-0 text-base text-black capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
                type="button"
              >
                Inspiration
              </button>
              <button
                className="mr-[20px] p-0 text-base text-black capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
                type="button"
              >
                Decoration
              </button>
              <button
                className="mr-[20px] p-0 text-base text-black capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
                type="button"
              >
                Plants
              </button>
              <button
                className="mr-[20px] p-0 text-base text-black capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
                type="button"
              >
                Architecture
              </button>
              <button
                className="mr-[20px] p-0 text-base text-black capitalize bg-transparent border-none appearance-none cursor-pointer xl:mr-7 last:mr-0 hover:outline-none hover:text-[#fbc710] focus:outline-none focus:text-[#fbc710]"
                type="button"
              >
                Interior
              </button>
            </div>
          </div>
        </header>

        <div className="container mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-y-20 sm:gap-x-10 lg:gap-8">
            <li>
              <NewsMasonry1 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
            <li>
              <NewsMasonry3 />
            </li>
            <li>
              <NewsMasonry1 />
            </li>
            <li>
              <NewsMasonry1 />
            </li>
            <li>
              <NewsMasonry1 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
            <li>
              <NewsMasonry3 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
            <li>
              <NewsMasonry2 />
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
