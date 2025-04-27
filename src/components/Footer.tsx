"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-white">
      <div className="relative max-w-[1830px] px-4 py-12 md:py-24 lg:py-32 xl:py-40 2xl:max-w-[calc(100vw-90px)]">
        <div className="absolute left-4 top-0 w-[calc(100%-8px)] border-t border-gray-300"></div>
        <div className="grid grid-cols-2 sm:justify-items-center md:grid-cols-6 gap-6">
          <div className="mb-6 md:mb-0 overflow-hidden col-span-2 md:col-span-1">
            <Link href="/" className="block max-w-[300px] mb-4 md:mb-0">
              <Image
                src="/logo/Accounting Zone (4).png"
                alt="Accounting Zone Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </Link>
          </div>

          <div className="order-last md:order-none mb-6 md:mb-0">
            <div className="text-sm sm:text-base text-black">
              © Accountings Zone. 2024 <br /> All Rights Reserved
            </div>
          </div>

          <div className="space-y-4">
            <ul className="list-none p-0">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-black hover:text-yellow-500 transition-colors"
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className={`text-sm sm:text-base text-black hover:text-yellow-500 transition-colors ${
                    pathname === "/terms-and-conditions"
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={`text-sm sm:text-base text-black hover:text-yellow-500 transition-colors ${
                    pathname === "/privacy-policy"
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/support"
                  className={`text-sm sm:text-base hover:text-yellow-500 transition-colors ${
                    pathname === "/contact/support"
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <ul className="list-none p-0">
              <li>
                <Link
                  href="/contact"
                  className={`text-sm sm:text-base text-black hover:text-yellow-500 transition-colors`}
                >
                  Our Location
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-sm sm:text-base hover:text-yellow-500 transition-colors ${
                    pathname === "/about" ? "text-[#fbc710]" : "text-black"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-sm sm:text-base hover:text-yellow-500 transition-colors ${
                    pathname === "/contact" ? "text-[#fbc710]" : "text-black"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                  target="_blank"
                  className="hover:text-yellow-500"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/accountingszone"
                  target="_blank"
                  className="hover:text-yellow-500"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/accountingszone/"
                  target="_blank"
                  className="hover:text-yellow-500"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                  target="_blank"
                  className="hover:text-yellow-500"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
