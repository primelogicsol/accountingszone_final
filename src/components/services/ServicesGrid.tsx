import React from "react";

type ServicesGridProps = {
  title: string;
  gridCards: { title: string; description: string }[];
};

export default function ServicesGrid({ title, gridCards }: ServicesGridProps) {
  return (
    <>
      <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
        {title}
      </h3>

      <div className="text-sm text-gray-500 lg:text-base mt-[15px] lg:mt-[26px]">
        <ul className="list-disc grid grid-cols-1 md:grid-cols-3 gap-12">
          {gridCards.map((card, index) => (
            <li key={index}>
              <h4 className="text-black font-semibold">{card.title}</h4>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
