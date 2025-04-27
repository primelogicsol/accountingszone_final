import Image from "next/image";
import React from "react";

export default function CommentsSection() {
  return (
    <section className="max-w-[730px] m-[0_auto_50px] lg:mb-[207px]">
      <div className="text-2xl font-bold text-black mb-[30px] lg:text-3xl lg:mb-[100px]">
        Comments
      </div>
      <div className="">
        {[
          {
            name: "Hayley",
            date: "Jul 03, 2020 at 15 hours ago",
            text: "Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up",
            img: "comment-1",
          },
          {
            name: "Denzel",
            date: "Jul 03, 2020 at 15 hours ago",
            text: "Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass",
            img: "comment-2",
          },
          {
            name: "Amanda",
            date: "Jul 03, 2020 at 15 hours ago",
            text: "Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up",
            img: "comment-3",
          },
        ].map((comment, index) => (
          <div
            className={`flex flex-col md:flex-row md:items-start mt-[30px] md:mt-[63px] ${
              index === 1 ? "ml-[50px] md:ml-20 lg:ml-[110px]" : ""
            }`}
            key={comment.name}
          >
            <div className="max-w-20 w-full h-20 rounded-[50%] overflow-hidden mb-[10px] md:mb-0 md:flex-shrink-0 md:mr-8">
              <Image
                src={`/news/single-post/${comment.img}.jpg`}
                width={100}
                height={100}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <div className="flex flex-col mb-[5px] md:flex-row md:flex-wrap">
                <div className="font-bold text-black lg:mr-[19px]">
                  {comment.name}
                </div>
                <div className="text-sm text-[#ababab] uppercase">
                  {comment.date}
                </div>
              </div>
              <div className="text-[#a1a1a1] mb-[31px]">{comment.text}</div>
              <button className="w-[68px] p-[5px_13px] text-xs text-black text-center border border-[#d3d3d3] bg-white uppercase cursor-pointer transition-all lg:hover:outline-none lg:hover:border-[#fbc710] lg:hover:bg-[#fbc710] lg:focus:outline-none lg:focus:border-[#fbc710] lg:focus:bg-[#fbc710] md:left-0 md:transform-none">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
