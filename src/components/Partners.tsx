import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="container mx-auto">
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
  );
}
