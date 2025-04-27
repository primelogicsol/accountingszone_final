import React from "react";
import { cn } from "@/lib/utils";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({
  name,
  body,
}: {
  name: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-52 sm:w-72 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <IoPersonCircleOutline className="size-9 sm:size-12 rounded-full text-gray-800" />
        <div className="flex flex-col gap-1">
          <figcaption className="text-sm sm:text-base font-semibold dark:text-white">
            {name}
          </figcaption>
          <div className="text-xs sm:text-sm flex gap-6 items-center font-semibold dark:text-white/40">
            <div className="flex gap-1">
              <FaStar className="size-2.5 sm:size-3 text-[#fcac01]" />
              <FaStar className="size-2.5 sm:size-3 text-[#fcac01]" />
              <FaStar className="size-2.5 sm:size-3 text-[#fcac01]" />
              <FaStar className="size-2.5 sm:size-3 text-[#fcac01]" />
            </div>
            <span>4.8/5</span>
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-xs sm:text-sm text-gray-800">
        {body}
      </blockquote>
    </figure>
  );
}
