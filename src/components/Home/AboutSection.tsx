"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function AboutSection() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 md:px-8">
      <section className="flex flex-wrap items-center md:flex-row">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8 lg:pr-12">
            <h1 className="mb-4 md:mb-6 font-semibold tracking-widest text-base lg:text-lg text-[#fbc710] uppercase fade-in">
            ABOUT US
            </h1>
          <h3 className="mb-8 text-2xl tracking-[0.02em] font-bold sm:text-3xl lg:text-4xl fade-in">
            Guided by integrity, trust, and client-centricity our values drive everything we do.
          </h3>

          <div className="mb-8 fade-in">
            <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-6 pl-5">
              <li>
                <h4 className="font-bold text-lg">Integrity</h4>
                <p className="text-gray-500">
                  Uphold high ethical standards and act with honesty, transparency, and professionalism in all your
                  interactions.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-lg">Expertise</h4>
                <p className="text-gray-500">
                  Stay up-to-date with industry trends, regulations, and best practices to offer informed advice to your
                  clients.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-lg">Trust and Confidentiality</h4>
                <p className="text-gray-500">
                  Understand the importance of trust and confidentiality in your client relationships.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-lg">Long-Term Relationships</h4>
                <p className="text-gray-500">
                  Build long-term relationships with your clients based on trust, open communication, and mutual
                  respect.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-lg">Objectivity</h4>
                <p className="text-gray-500">
                  Provide unbiased advice that is based on thorough analysis, research, and a comprehensive
                  understanding of your clients&apos; financial situations.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-lg">Accountability</h4>
                <p className="text-gray-500">
                  Monitor progress, review strategies, and make adjustments as needed to help clients stay on track
                  towards their financial goals.
                </p>
              </li>
            </ul>
          </div>

          <Button
            onClick={() => router.push("about")}
            className="text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black font-normal uppercase fade-in"
            size="lg"
          >
            LEARN MORE
          </Button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-md">
            <Image
              src="/about/about-section.jpg"
              width="426"
              height="573"
              alt="About Us Section"
              className="max-w-full h-auto fade-in shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
