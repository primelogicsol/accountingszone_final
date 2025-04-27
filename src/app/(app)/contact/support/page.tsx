"use client";
import React from "react";
import FSCard from "@/components/services/FSCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

// Explicitly type Link as a React functional component
const TypedLink = Link as React.FC<
  React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
>;

const supportCards = [
  {
    title: "Tax Planning",
    href: "/services/tax-planning",
  },
  {
    title: "Case Studies",
    href: "/insights/case-studies",
  },
  {
    title: "Blog",
    href: "/resources/blog",
  },
];

export default function Support() {
  const router = useRouter();

  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Support
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-2xl font-bold text-black">
                      How Can We Help?
                    </h3>

                    <div className="lg:pt-8 lg:pb-16 lg:min-h-[400px] md:ml-56">
                      <div className="max-w-[520px] lg:p-20">
                        <div className="mb-4 xl:mb-12">
                          <TypedLink
                            href="tel:17606860609"
                            className="text-3xl font-bold text-black hover:outline-none focus:outline-none transition-colors hover:text-[#fbc710] focus:text-[#fbc710]"
                          >
                            +1 (760) 686 06 09
                          </TypedLink>
                        </div>
                        <div className="text-[#787878] sm:flex mt-[30px]">
                          <div className="mb-1.5 text-black font-bold flex-shrink-0 sm:mb-0 sm:mr-2">
                            Email:
                          </div>
                          <div>
                            <TypedLink
                              href="mailto:info@accountingszone.com"
                              className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710]"
                            >
                              info@accountingszone.com
                            </TypedLink>
                          </div>
                        </div>
                        <div className="text-[#787878] sm:flex sm:items-center mt-[30px]">
                          <div className="mb-1.5 text-black font-bold flex-shrink-0 sm:mb-0 sm:mr-2">
                            Follow us:
                          </div>
                          <div>
                            <ul className="fill-[#929292] flex flex-wrap items-end">
                              <li className="ml-0 sm:ml-7">
                                <TypedLink
                                  className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                                  href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaFacebookF />
                                </TypedLink>
                              </li>
                              <li className="ml-4 sm:ml-7">
                                <TypedLink
                                  className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                                  href="https://x.com/accountingszone"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaXTwitter />
                                </TypedLink>
                              </li>
                              <li className="ml-4 sm:ml-7">
                                <TypedLink
                                  className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                                  href="https://www.instagram.com/accountingszone/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaInstagram />
                                </TypedLink>
                              </li>
                              <li className="ml-4 sm:ml-7">
                                <TypedLink
                                  className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                                  href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedin />
                                </TypedLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-[#787878] sm:flex mt-[30px] sm:items-end">
                          <div className="mt-1.5 text-black font-bold flex-shrink-0 sm:mb-0 mr-2">
                            Work Hours:
                          </div>
                          <div>Monday - Friday : 08h00 - 17h30</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                    Frequently Asked Questions (FAQs)
                  </h3>
                  <div className="space-y-4 lg:space-y-8">
                    <p className="text-lg font-semibold text-gray-500">
                      From how to sign up for Accountings Zone to learning about
                      our security process, these FAQs will help you better
                      understand Accountings Zone.
                    </p>
                    <Button
                      onClick={() => router.replace("/resources/faq")}
                      data-aos="fade"
                      size="lg"
                      className="text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black font-normal uppercase"
                    >
                      GO TO FAQS
                    </Button>
                  </div>

                  <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                    Tools & Resources
                  </h3>
                  <div className="space-y-4 lg:space-y-8">
                    <p className="text-lg font-semibold text-gray-500">
                      Detailed information on tax planning strategies,
                      first-hand case studies, blog articles and more.
                      We&apos;ve got extensive resources to help you understand
                      how to legally save your clients money in taxes.
                    </p>
                  </div>

                  <div className="pt-6 lg:pt-12">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                      {supportCards.map((item, index) => (
                        <li key={index}>
                          <TypedLink href={item.href}>
                            <FSCard title={item.title} />
                          </TypedLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
