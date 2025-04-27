import React from "react";

type OurApproachProps = {
  title: string;
  ourApproach: { heading: string; description: string }[];
};

export default function OurApproach({ title, ourApproach }: OurApproachProps) {
  return (
    <>
      <h2 className="text-2xl pt-48 sm:pt-80 lg:pt-40 mb-[35px] lg:mb-[66px] font-bold text-black lg:text-3xl">
        {title}
      </h2>
      <div className="pt-6 lg:pt-12">
        <ul className="flex flex-col gap-y-16">
          {ourApproach.map((approach, index) => (
            <li
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x-2"
            >
              <h4 className="text-lg lg:text-xl font-semibold">
                <span className="text-[#fbc710]">0{index + 1}.</span>{" "}
                {approach.heading}
              </h4>
              <p className="text-sm text-gray-500 lg:text-base lg:px-8">
                {approach.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
