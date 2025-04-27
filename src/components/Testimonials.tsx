import React from "react";
// import Marquee from "./ui/marquee";
// import ReviewCard from "./ui/review-card";
import Image from "next/image";

// const reviews = [
//   {
//     name: "Jasmin Samano",
//     body: "I look forward in working with Accounting Zone for any future business or tax services.",
//   },
//   {
//     name: "Terri Maya",
//     body: "Absolutely love all the staff with Accounting Zone. They are so patient with me, and are always very detailed and specific with everything.",
//   },
//   {
//     name: "Daniel Gonzalez",
//     body: "Rosie was amazing, I would recommend her services to EVERYBODY!",
//   },
//   {
//     name: "Eddie bedolla",
//     body: "The customer service has always been exceptional from Joel and the team at Accounting Zone.",
//   },
// ];

export default function Testimonials() {
  return (
    <section className="max-w-[1800px] py-20 container mx-auto" data-aos="fade">
      <div className="container mx-auto">
        <div>
          <div className="relative w-[80%] sm:w-[75%] mx-auto h-[350px] flex sm:gap-16 transition-transform">
            <div className="mt-[58px] relative px-[32px] py-[24px] border-4 border-[#fbc710] bg-white p-4 h-full w-full transition-transform pl-8 before:content-[''] before:absolute before:right-24 before:top-[50px] before:w-[42px] before:h-[31px] before:bg-no-repeat before:bg-[url('/quote.svg')]">
              <div className="w-[112px] h-[112px] -mt-[84px] mb-[48px] rounded-[50%] overflow-hidden absolute top-[50px] left-[40px]">
                <Image
                  src="/team/avatar-paul.png"
                  width="112"
                  height="112"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="mb-5 pt-24 text-3xl text-black font-bold">
                Paul
              </div>
              <div className="mb-8 text-lg text-black">
                Designer in <span className="text-[#fbc710]">Paul.com</span>
              </div>
              <div className="text-gray-500 text-lg">
                Projects for many large domestic and foreign corporations,
                enterprises in many fields such as finance, banking, F&B,
                education, communication.
              </div>
            </div>

            <div className="mt-[58px] hidden sm:block relative px-[32px] py-[24px] border-4 border-[#fbc710] h-full w-full transition-transform pl-8 before:content-[''] before:absolute before:right-24 before:top-[50px] before:w-[41.5px] before:h-[31px] before:bg-no-repeat before:bg-[url('/quote.svg')]">
              <div className="w-[112px] h-[112px] -mt-[84px] mb-[48px] rounded-[50%] overflow-hidden absolute top-[50px] left-[40px]">
                <Image
                  src="/team/avatar-paul.png"
                  width="112"
                  height="112"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="mb-5 pt-24 text-2xl text-black font-bold">
                Robert
              </div>
              <div className="mb-8 text-black">
                Founder in <span className="text-[#fbc710]">Apple inc.</span>
              </div>
              <div className="text-gray-500">
                Founded in 2007, Sparch is specializing in providing innovative
                services such as website design, brand identity, and marketing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
