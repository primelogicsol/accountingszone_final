import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarSection() {
  return (
    <section className="w-full mb-[50px] lg:max-w-[255px] lg:mb-0">
      <div className="mt-10 lg:mt-[79px]">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="w-full p-[16px_50px_16px_25px] max-w-[300px] relative left-1/2 -translate-x-1/2 bg-[#f1f1f1] border border-[#f1f1f1] transition-colors lg:left-0 lg:transform-none focus:bg-white focus:outline-none lg:focus:bg-white lg:hover:bg-white placeholder:text-[#767676]"
        />
      </div>
      <div className="mt-10 lg:mt-[79px]">
        <p className="text-lg text-black font-bold mb-[30px]">Related posts</p>
        <div>
          <Link
            className="block mt-5 group"
            href="/single-post"
            target="_blank"
          >
            <figure className="flex m-0">
              <Image
                src="/news/single-post/sidebar-1.jpg"
                alt="Horizontal Building"
                width={300}
                height={200}
                className="!max-w-[80px] w-full !h-[65px] mr-5"
              />
              <div>
                <p className="lg:group-hover:text-[#fbc710] lg:group-focus:text-[#fbc710] m-0 mb-[5px] text-sm font-bold text-black transition-colors">
                  Horizontal Building
                </p>
                <p className="m-0 text-[#767676] text-xs">Feb, 24th, 2017</p>
              </div>
            </figure>
          </Link>
          <Link
            className="block mt-5 group"
            href="/single-post"
            target="_blank"
          >
            <figure className="flex m-0">
              <Image
                src="/news/single-post/sidebar-2.jpg"
                alt="House Near Wrocklow"
                width={300}
                height={200}
                className="!max-w-[80px] w-full !h-[65px] mr-5"
              />
              <div>
                <p className="lg:group-hover:text-[#fbc710] lg:group-focus:text-[#fbc710] m-0 mb-[5px] text-sm font-bold text-black transition-colors">
                  House Near Wrocklow
                </p>
                <p className="m-0 text-[#767676] text-xs">Feb, 24th, 2017</p>
              </div>
            </figure>
          </Link>
          <Link
            className="block mt-5 group"
            href="/single-post"
            target="_blank"
          >
            <figure className="flex m-0">
              <Image
                src="/news/single-post/sidebar-3.jpg"
                alt="Horizontal Building"
                width={300}
                height={200}
                className="!max-w-[80px] w-full !h-[65px] mr-5"
              />
              <div>
                <p className="lg:group-hover:text-[#fbc710] lg:group-focus:text-[#fbc710] m-0 mb-[5px] text-sm font-bold text-black transition-colors">
                  Horizontal Building
                </p>
                <p className="m-0 text-[#767676] text-xs">Feb, 24th, 2017</p>
              </div>
            </figure>
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:mt-[79px]">
        <p className="text-lg text-black font-bold mb-[30px]">Categories</p>
        <div className="mt-[31px]">
          {[
            { name: "Architecture", num: "(05)" },
            { name: "Interior", num: "(02)" },
            { name: "Decoration", num: "(12)" },
            { name: "Plants", num: "(03)" },
          ].map((category, index) => (
            <div
              className="flex items-center justify-between cursor-pointer group pt-[10px]"
              key={index}
            >
              <div className="text-[#767676] transition-colors lg:group-hover:text-[#fbc710] lg:group-focus:text-[#fbc710]">
                {category.name}
              </div>
              <div className="text-[#787878] transition-colors lg:group-hover:text-[#fbc710] lg:group-focus:text-[#fbc710]">
                {category.num}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-[79px]">
        <p className="text-lg text-black font-bold mb-[30px]">Archives</p>
        <div className="mt-[31px]">
          {["January 2020", "December 2019", "June 2018", "July 2017"].map(
            (archive, index) => (
              <div
                className="flex items-center justify-between cursor-pointer lg:hover:text-[#fbc710] lg:focus:text-[#fbc710] pt-[10px] text-[#767676] transition-colors"
                key={index}
              >
                <div>{archive}</div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-10 lg:mt-[79px]">
        <p className="text-lg text-black font-bold mb-[30px]">Popular Tags</p>
        <div className="flex flex-wrap -mt-1.5">
          {[
            "inspiration",
            "interior",
            "exterior",
            "decoration",
            "architecture",
          ].map((tag, index) => (
            <Link
              className="mr-[10px] mb-[10px] p-[3px_15px] border border-[#d3d3d3] text-xs text-black uppercase transition-all lg:focus:bg-[#fbc710] lg:hover:bg-[#fbc710] lg:focus:border-transparent lg:hover:border-transparent"
              href="#"
              key={index}
              target="_blank"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
