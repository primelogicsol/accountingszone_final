"use client"

import {
  ArrowRight,
  Clock,
  FileText,
  Search,
  Shield,
  BarChart,
  Briefcase,
  Calculator,
  Database,
  Landmark,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function Glossary() {
  // Create a ref for the overview section
  const overviewSectionRef = useRef<HTMLElement>(null)

  // Function to scroll to the overview section
  const scrollToOverview = () => {
    overviewSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplifying Tax Terminology
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Our comprehensive Tax Glossary helps businesses and individuals understand complex tax terms with
                  clear, straightforward definitions.
                </p>
              </div>
              <div className="mx-auto">
                {/* Modified this section - removed the "Learn More" button and kept only the "Explore Glossary" button */}
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={scrollToOverview}
                >
                  Explore Glossary
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Added ref to the overview section */}
        <section ref={overviewSectionRef} id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                The Tax Glossary provides clear definitions of common tax terms, legal jargon, and financial
                terminologies to help businesses and individuals better understand tax-related topics.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Database className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive</h3>
                  <p className="text-muted-foreground">
                    Covers all essential tax terms from basic concepts to complex regulations, ensuring you have access
                    to the complete tax vocabulary.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Landmark className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Easy to Understand</h3>
                  <p className="text-muted-foreground">
                    Complex terms explained in simple language that anyone can comprehend, making tax knowledge
                    accessible to everyone regardless of background.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BarChart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Regularly Updated</h3>
                  <p className="text-muted-foreground">
                    Stays current with the latest tax law changes and new terminology, ensuring you always have the most
                    up-to-date information at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-terms" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Terms</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Essential tax terminology explained in clear, concise language.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Wallet className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Adjusted Gross Income (AGI)</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Total income minus specific deductions.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <BarChart className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Capital Gains Tax</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    A tax on the profit from selling investments or assets.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Calculator className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Deduction</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Expenses that reduce taxable income.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Briefcase className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Earned Income Tax Credit</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">A credit for low-to-moderate-income earners.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <FileText className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Filing Status</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Determines tax rate and deductions (e.g., Single, Married Filing Jointly).
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Landmark className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Tax Bracket</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">A range of income taxed at a specific rate.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Database className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Withholding</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Employer deductions from employee wages for tax payments.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-2">
                    <Shield className="h-8 w-8 text-[#fbc710]" />
                  </div>
                  <CardTitle className="text-center">Tax Exemption</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Income or transactions that are not subject to taxation under specific conditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-we-work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our approach to making tax terminology accessible to everyone.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Regular Updates</h3>
                <p className="text-muted-foreground">Glossary is continuously updated with the latest terms.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Simple Explanations</h3>
                <p className="text-muted-foreground">Definitions are easy to understand and practical.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">User-Friendly Search</h3>
                <p className="text-muted-foreground">Visitors can search for tax terms effortlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to transform your financial reporting?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our team of banking and financial services experts is ready to help you navigate the complex regulatory
              landscape and optimize your financial reporting processes.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}