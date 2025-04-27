// "use client"
// import dynamic from "next/dynamic"
// import AboutSection from "@/components/Home/AboutSection"
// import ServicesSection from "@/components/Home/ServicesSection"
// import Statistics from "@/components/Home/Statistics"
// import TaxCalculation from "@/components/Home/TaxCalculation"
// import WhyUs from "@/components/WhyUs"
// import "@/styles/animations.css"

// // Dynamically import the Slider component with SSR disabled
// const Slider = dynamic(() => import("@/components/Slider"), {
//   ssr: false,
// })

// const images = [
//   "/consultation/consultation1.jpg",
//   "/consultation/consultation2.jpg",
//   "/consultation/consultation3.jpg",
//   "/consultation/consultation4.jpg",
//   "/consultation/consultation5.jpg",
// ]

// export default function HomeContent() {
//   return (
//     <main className="overflow-hidden">
//       {/* Hero Section */}
//       <section className="fade-in">
//         <Slider
//           title="Home"
//           description="Unlock your financial potential with expert guidance"
//           images={images}
//           btnText="Get Started"
//           btnHref="contact/get-a-consultation"
//         />
//       </section>

//       {/* About Section with light background */}
//       <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-1">
//         <AboutSection />
//       </section>

//       {/* Services Section with subtle background */}
//       <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-2">
//         <ServicesSection />
//       </section>

//       {/* Statistics Section */}
//       <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-3">
//         <Statistics />
//       </section>

//       {/* Tax Calculation Section */}
//       <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-4">
//         <TaxCalculation />
//       </section>

//       {/* Why Us Section */}
//       <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-4">
//         <WhyUs />
//       </section>

//       {/* Building Wealth Slider */}
//       <section className="fade-in fade-in-delay-5">
//         <Slider
//           description="Building wealth, creating futures."
//           images={["/contact/GettyImages-1440181617-scaled.jpg"]}
//         />
//       </section>

//       {/* Team Slider */}
//       <section className="fade-in fade-in-delay-6 mb-16 md:mb-24">
//         <Slider
//           title="Team"
//           description="Get to know the incredible individuals behind our company"
//           images={["/team/GettyImages-1407840013-scaled.jpg"]}
//           btnText="Our People"
//           btnHref="about"
//         />
//       </section>
//     </main>
//   )
// }


// for the cards section 
"use client"

import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import AboutSection from "@/components/Home/AboutSection"
import ServicesSection from "@/components/Home/ServicesSection"
import Statistics from "@/components/Home/Statistics"
import WhyUs from "@/components/WhyUs"
import "@/styles/animations.css"

import { motion, AnimatePresence } from "framer-motion"
import { FaCalculator, FaChartBar, FaFileAlt, FaCog } from "react-icons/fa"
import { getTaxScenarios } from "@/lib/api"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface Card {
  id: number
  title: string
  subtitle: string
  icon: JSX.Element
  content: JSX.Element
}

interface TaxScenario {
  id: number
  description: string
  income: number
  deductions: number
  taxRate: number
}

const Slider = dynamic(() => import("@/components/Slider"), { ssr: false })
const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
]

const COLORS = ['#0088FE', '#FF8042']

const CardComponent: React.FC<{
  card: Card
  isExpanded: boolean
  onToggle: () => void
}> = ({ card, isExpanded, onToggle }) => (
  <motion.div
    className={`relative bg-gradient-to-br ${
      card.id % 2 === 0
        ? "from-blue-500 to-purple-600"
        : "from-green-500 to-teal-600"
    } text-white rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
      isExpanded ? "z-20 scale-105" : "hover:scale-105"
    }`}
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className="flex items-center space-x-4 cursor-pointer"
      onClick={onToggle}
    >
      <div className="text-4xl">{card.icon}</div>
      <div>
        <h3 className="text-xl font-bold">{card.title}</h3>
        <p className="text-sm opacity-80">{card.subtitle}</p>
      </div>
    </div>
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          className="mt-4 p-4 bg-white text-gray-800 rounded-lg overflow-visible"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {card.content}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export default function HomeContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [scenarios, setScenarios] = useState<TaxScenario[]>([])
  const [income, setIncome] = useState<number>(50000)
  const [deductions, setDeductions] = useState<number>(10000)
  const [taxPlan, setTaxPlan] = useState<{ income: number; deductions: number; estimatedTax: number; createdAt: string } | null>(null)

  useEffect(() => {
    async function fetchScenarios() {
      try {
        const data = await getTaxScenarios()
        setScenarios(data)
      } catch (error) {
        console.error("Error fetching scenarios:", error)
      }
    }
    fetchScenarios()
  }, [])

  const calculateTax = () => {
    const taxableIncome = income - deductions
    const tax = taxableIncome * 0.25
    return tax > 0 ? tax : 0
  }

  const handleCreatePlan = () => {
    const newPlan = {
      income,
      deductions,
      estimatedTax: calculateTax(),
      createdAt: new Date().toLocaleString(),
    }
    setTaxPlan(newPlan)
  }

  const resetPlan = () => setTaxPlan(null)

  const cards: Card[] = [
    {
      id: 1,
      title: "Calculate Taxes Owed",
      subtitle: "Quickly estimate your tax liability",
      icon: <FaCalculator />,
      content: (
        <div>
          <h4 className="font-semibold">Tax Calculator</h4>
          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-sm">Income ($)</label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full p-2 border rounded"
                placeholder="Enter income"
              />
            </div>
            <div>
              <label className="block text-sm">Deductions ($)</label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full p-2 border rounded"
                placeholder="Enter deductions"
              />
            </div>
            <p className="text-lg font-bold">
              Estimated Tax: ${calculateTax().toFixed(2)}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Analyze Tax Scenario",
      subtitle: "Explore different tax situations",
      icon: <FaChartBar />,
      content: (
        <div>
          <h4 className="font-semibold">Tax Scenario Analyzer</h4>
          {scenarios.length > 0 ? (
            <ul className="space-y-2 mt-2">
              {scenarios.map((scenario) => (
                <li key={scenario.id} className="p-2 bg-gray-100 rounded">
                  <p>{scenario.description}</p>
                  <p>Income: ${scenario.income.toFixed(2)}</p>
                  <p>Tax: ${(scenario.income * scenario.taxRate).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-600">No scenarios available.</p>
          )}
        </div>
      ),
    },
    {
      id: 3,
      title: "Apply Tax Strategies",
      subtitle: "Optimize your tax plan",
      icon: <FaCog />,
      content: (
        <div>
          <h4 className="font-semibold">Tax Strategies</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Maximize retirement contributions</li>
            <li>Leverage charitable deductions</li>
            <li>Explore tax credits</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: "Create Tax Plan",
      subtitle: "Build a custom tax strategy",
      icon: <FaFileAlt />,
      content: (
        <div>
          <h4 className="font-semibold">Tax Plan Creator</h4>
          <p className="mt-2">
            Use the calculator above to set your income and deductions, then click Create Plan.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleCreatePlan}
          >
            Create Plan
          </button>
          <AnimatePresence>
            {taxPlan && (
              <motion.div
                className="mt-4 p-4 bg-gray-100 rounded-lg text-center overflow-visible"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h5 className="font-semibold mb-2">Your Tax Plan Summary</h5>
                <p>Created: {taxPlan.createdAt}</p>
                <div className="flex justify-center my-4 overflow-visible" style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Tax', value: taxPlan.estimatedTax },
                          { name: 'Remaining', value: taxPlan.income - taxPlan.estimatedTax }
                        ]}
                        dataKey="value"
                        innerRadius={40}
                        outerRadius={60}
                        label
                      >
                        {[
                          { name: 'Tax', value: taxPlan.estimatedTax },
                          { name: 'Remaining', value: taxPlan.income - taxPlan.estimatedTax }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <button
                  className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={resetPlan}
                >
                  Clear Plan
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    },
  ]

  return (
    <main className="overflow-hidden">
      <section className="fade-in">
        <Slider
          title="Home"
          description="Unlock your financial potential with expert guidance"
          images={images}
          btnText="Get Started"
          btnHref="contact/get-a-consultation"
        />
      </section>
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-1">
        <AboutSection />
      </section>
      <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-2">
        <ServicesSection />
      </section>
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-3">
        <Statistics />
      </section>
      <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Tax Planning Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {cards.map((card) => (
              <CardComponent
                key={card.id}
                card={card}
                isExpanded={expandedCard === card.id}
                onToggle={() =>
                  setExpandedCard(
                    expandedCard === card.id ? null : card.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-5">
        <WhyUs />
      </section>
      <section className="fade-in fade-in-delay-6">
        <Slider
          description="Building wealth, creating futures."
          images={["/contact/GettyImages-1440181617-scaled.jpg"]}
        />
      </section>
      <section className="fade-in fade-in-delay-7 mb-16 md:mb-24">
        <Slider
          title="Team"
          description="Get to know the incredible individuals behind our company"
          images={["/team/GettyImages-1407840013-scaled.jpg"]}
          btnText="Our People"
          btnHref="about"
        />
      </section>
    </main>
  )
}
