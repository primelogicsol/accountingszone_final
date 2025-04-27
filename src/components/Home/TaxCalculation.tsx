"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function TaxCalculation() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <section className="text-center">
        <motion.header
          className="max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-[#fbc710]">Tax Planning Software</span>
            <br />
            to Build a More Profitable Firm
          </h2>
        </motion.header>

        <div className="mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {taxFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                image={feature.image}
                alt={feature.alt}
                title={feature.title}
                index={index}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

const taxFeatures = [
  {
    image: "/Calculate-Tax.svg",
    alt: "Calculate Taxes Owed",
    title: "Calculate\nTaxes Owed",
  },
  {
    image: "/Analyze Any Tax Scenario.svg",
    alt: "Analyze Any Tax Scenario",
    title: "Analyze Any\nTax Scenario",
  },
  {
    image: "/Apply Tax Planning Strategies.svg",
    alt: "Apply Tax Planning Strategies",
    title: "Apply Tax\nPlanning\nStrategies",
  },
  {
    image: "/Create a Tax Plan.svg",
    alt: "Create a Tax Plan",
    title: "Create a\nTax Plan",
  },
]

interface FeatureCardProps {
  image: string;
  alt: string;
  title: string;
  index: number;
}

function FeatureCard({ image, alt, title, index }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.li
      ref={ref}
      className="flex flex-col items-center gap-y-5 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative w-[115px] h-[78px] flex items-center justify-center">
        <Image src={image || "/placeholder.svg"} alt={alt} width={115} height={78} className="object-contain" />
      </div>
      <div className="text-xl md:text-2xl font-semibold whitespace-pre-line">{title}</div>
    </motion.li>
  )
}
