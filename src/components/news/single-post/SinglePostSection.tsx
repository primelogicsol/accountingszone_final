import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SidebarSection from "./SidebarSection";

export default function SinglePostSection() {
  return (
    <div className="lg:max-w-[1100px] mx-auto container">
      <div className="flex flex-col lg:flex-row">
        <div className="mr-0 w-full order-1 lg:mr-[127px] lg:order-none">
          <div className="my-[15px] text-[#767676] lg:my-[56px]">
            <Link href="#" className="text-black">
              Admin
            </Link>{" "}
            on Jul 3, 2020
          </div>
          <div className="text-2xl font-bold text-black mb-[35px] lg:text-3xl lg:mb-[66px]">
            To mark the first UK show of artist Henri Barande, graphic{" "}
            <Link
              href="#"
              className="text-black underline lg:hover:no-underline lg:focus:no-underline"
            >
              designer Paul
            </Link>
          </div>
          <div className="text-sm text-[#a1a1a1] lg:text-base">
            <p className="mt-[15px] lg:mt-[26px]">
              This response is important for our ability to learn from mistakes,
              but it also gives rise to self-criticism, because it is part of
              the threat-protection system. In other words, what keeps us safe
              can go too far, and keep us too safe. In fact, it can trigger
              self-censoring.
            </p>
            <p className="mt-[15px] lg:mt-[26px]">
              One touch of a red-hot stove is usually all we need to avoid that
              kind of discomfort in the future. The same is true as we
              experience the emotional sensation of stress from our first
              instances of social rejection or ridicule. We quickly learn to
              fear and thus automatically avoid potentially stressful situations
              of all kinds, including the most common of all:
            </p>
          </div>
          <div className="lgs:m-[80px_-190px_77px] m-[35px_0_28px] lg:m-[80px_0_77px]">
            <Image
              src="/accounting/accounting1.jpg"
              width={1110}
              height={628}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="text-2xl font-bold text-black mb-[18px] lg:mb-[43px]">
            Methods for Everyone
          </div>
          <div className="text-sm text-[#a1a1a1] lg:text-base">
            <p className="mt-[15px] lg:mt-[26px]">
              Everything along the way, to and from, fascinated her: every
              pebble, ant, stick, leaf, blade of grass, and crack in the
              sidewalk was something to be picked up, looked at, tasted,
              smelled, and shaken. Everything was interesting to her. She knew
              nothing. I knew everything…been there, done that. She was in the
              moment, I was in the past. She was mindful. I was mindless.
            </p>
            <p className="mt-[15px] lg:mt-[26px]">
              One touch of a red-hot stove is usually all we need to avoid that
              kind of discomfort in the future. The same is true as we
              experience the emotional sensation of stress from our first
              instances of social rejection or ridicule. We quickly learn to
              fear and thus automatically avoid potentially stressful situations
              of all kinds, including the most common of all: making mistakes.
            </p>
          </div>
          <blockquote className="relative m-[40px_0] lg:m-[98px_0_212px] p-[20px_20px_20px_70px] lg:p-[37px_50px_29px_123px] border-4 border-[#fbc710] block font-semibold text-black lg:text-xl before:content-[''] before:absolute before:left-[18px] before:top-[-21px] lg:before:left-[34px] lg:before:top-[40px] before:w-[63px] before:h-[42px] before:bg-no-repeat before:bg-[url('/quote.svg')]">
            <p className="text-lg block font-semibold text-black m-[0_0_28px] lg:text-xl">
              Our greatest weakness lies in giving up. The most certain way to
              succeed is always to try just one more time. emotional sensation
              of stress from our first
            </p>
            <cite>
              <span className="block text-sm lg:text-base not-italic text-black font-bold">
                Paul
              </span>
              <span className="block text-sm text-[#a1a1a1] not-italic font-normal lg:text-base">
                Elite Author
              </span>
            </cite>
          </blockquote>

          <div className="flex flex-col gap-y-16 lg:flex-row items-start gap-x-4 lg:flex-nowrap flex-wrap m-[0_-15px_45px] lg:m-[0_-15px_112px]">
            <div className="h-[300px] flex flex-col lg:h-[633px] lg:mt-0 mt-[26px]">
              <Image
                className="h-[300px] mt-[26px] lg:mt-0 object-cover"
                src="/news/single-post/item-6.jpg"
                alt=""
                width="540"
                height="302"
              />
              <Image
                className="h-[300px] mt-[26px] object-cover"
                src="/news/single-post/item-7.jpg"
                alt=""
                width="540"
                height="302"
              />
            </div>
            <div className="lg:h-[633px] mt-[26px] lg:mt-0">
              <Image
                src="/news/single-post/item-8.jpg"
                alt=""
                width="540"
                height="634"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-2xl font-bold text-black pt-96 lg:pt-0 mb-[18px] lg:mb-[43px]">
            Challenge
          </div>
          <div className="text-sm text-[#a1a1a1] lg:text-base">
            <p className="mt-[15px] lg:mt-[26px]">
              Everything along the way, to and from, fascinated her: every
              pebble, ant, stick, leaf, blade of grass, and crack in the
              sidewalk was something to be picked up, looked at, tasted,
              smelled, and shaken. Everything was interesting to her. She knew
              nothing. I knew everything…been there, done that. She was in the
              moment, I was in the past. She was mindful. I was mindless.
            </p>
            <p className="mt-[15px] lg:mt-[26px]">
              One touch of a red-hot stove is usually all we need to avoid that
              kind of discomfort in the future. The same is true as we
              experience the emotional sensation of stress from our first
              instances of social rejection or ridicule. We quickly learn to
              fear and thus automatically avoid potentially stressful situations
              of all kinds, including the most common of all: making mistakes.
            </p>
          </div>
          <div className="mt-[45px] lg:mt-[98px] pt-[45px] lg:pt-[105px] border-t border-[#a6a6a6]">
            <div className="font-bold text-[#787878]">
              <span className="text-black">Tags: </span>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal focus:outline-none focus:text-[#fbc710] lg:hover:text-[#fbc710] duration-300"
              >
                Inspiration
              </Link>
              ,{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal focus:outline-none focus:text-[#fbc710] lg:hover:text-[#fbc710] duration-300"
              >
                Workspace
              </Link>
              ,{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal focus:outline-none focus:text-[#fbc710] lg:hover:text-[#fbc710] duration-300"
              >
                Minimal
              </Link>
              ,{" "}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal focus:outline-none focus:text-[#fbc710] lg:hover:text-[#fbc710] duration-300"
              >
                Decoration
              </Link>
            </div>

            <div className="flex items-center m-[48px_0_10px]">
              <span className="mr-5 font-bold text-black">Share:</span>
              <ul className="flex flex-wrap text-[#787878]">
                <li className="ml-[10px]">
                  <Link
                    className="size-[30px] focus:text-[#fbc710] hover:text-[#fbc710] duration-300"
                    href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="ml-[10px]">
                  <Link
                    className="size-[30px] focus:text-[#fbc710] hover:text-[#fbc710] duration-300"
                    href="https://x.com/accountingszone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="ml-[10px]">
                  <Link
                    className="size-[30px] focus:text-[#fbc710] hover:text-[#fbc710] duration-300"
                    href="https://www.instagram.com/accountingszone/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="ml-[10px]">
                  <Link
                    className="size-[30px] focus:text-[#fbc710] hover:text-[#fbc710] duration-300"
                    href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SidebarSection />
      </div>
    </div>
  );
}
