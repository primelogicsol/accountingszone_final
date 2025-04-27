import React from "react";

type FSCardProps = {
  title: string;
  title2?: string;
  description?: string;
};

export default function FSCard({ title, title2, description }: FSCardProps) {
  return (
    <div
      className="max-w-lg bg-gray-50 flex flex-col min-h-36 justify-center p-8 gap-y-4 border shadow-md overflow-hidden"
      data-aos="fade"
    >
      {/* <Icon className={iconClassName} /> */}
      <h4 className="text-base lg:text-lg font-semibold text-black">
        {title}{" "}
        {title2 && (
          <>
            <br /> {title2}
          </>
        )}
      </h4>
      <p className="text-sm lg:text-base text-gray-500">{description}</p>
    </div>
  );
}
