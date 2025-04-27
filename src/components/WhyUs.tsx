import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="flex flex-wrap flex-col items-center mx-auto container px-4">
      <h2
        className="w-full text-center mb-4 md:mb-8 text-[#fbc710] uppercase font-semibold tracking-widest text-sm lg:text-base fade-in"
      >
        WHY US
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 lg:w-[80%] mx-auto">
        <div className="mb-6 sm:mb-14 flex flex-col gap-3 text-center lg:text-left fade-in fade-in-delay-1">
          <h3 className="text-2xl sm:text-3xl font-semibold lg:text-4xl">
            Trusted experts with
            <span className="text-[#fbc710]"> years of experience</span> and
            <span className="text-[#fbc710]"> industry accreditations</span>
          </h3>

          <div className="flex flex-col gap-3">
            <p>
              At Accountings Zone, we are dedicated to guiding you on your
              financial journey with expertise, integrity, and a personalized
              approach. Our team of experienced financial consultants is
              committed to helping you unlock your full financial potential, one
              step at a time.
            </p>
            <p>
              Our mission is to empower you with the knowledge and tools to make
              informed decisions, secure your financial stability, and achieve
              lasting success.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[400px] lg:max-w-[50%] mx-auto">
          <Image
            src="/why-us/why-us-man.svg"
            width="800"
            height="800"
            alt="Why Us"
            className="max-w-full h-auto fade-in fade-in-delay-2"
          />
        </div>
      </div>
    </section>
  );
}
