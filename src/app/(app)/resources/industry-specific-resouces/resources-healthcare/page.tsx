"use client"

import {
  ArrowRight,
  FileText,
  HeartPulse,
  BarChart,
  Stethoscope,
  Receipt,
  Calculator,
  Shield,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function HealthcareResources() {
  const overviewRef = useRef<HTMLElement>(null)

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Resources for Healthcare
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Specialized financial management solutions for healthcare professionals, clinics, and hospitals.
                </p>
              </div>
              <div className="mx-auto">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={scrollToOverview}
                >
                  Explore Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" ref={overviewRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                The healthcare industry requires specialized financial management solutions to handle regulatory
                compliance, medical billing, and tax planning. Our resources assist healthcare professionals, clinics,
                and hospitals in optimizing their financial operations.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Practice Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive financial systems designed for medical practices, clinics and healthcare facilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Receipt className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Medical Billing</h3>
                  <p className="text-muted-foreground">
                    Efficient systems for insurance claims, patient billing, and revenue cycle management.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">
                    Guidance on maintaining HIPAA compliance and navigating healthcare-specific regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Specialized resources tailored for healthcare financial management.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Calculator className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Medical Practice Tax Planning</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">
                    Reduce liabilities through legal deductions for healthcare providers.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Receipt className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Healthcare Billing & Reimbursement</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Navigate insurance and Medicaid/Medicare payment systems.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Shield className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">HIPAA-Compliant Documentation</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Secure patient and financial data management systems.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Users className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Payroll & Compensation Optimization</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">
                    Ensure tax efficiency for healthcare worker salaries and benefits.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <HeartPulse className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Grants & Funding Assistance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Identify opportunities for non-profit and research funding.</p>
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
                Our approach to supporting healthcare professionals and organizations.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Regulatory & Compliance Checklists</h3>
                <p className="text-muted-foreground">Ensure adherence to tax and legal requirements.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Tax Deductions for Medical Professionals</h3>
                <p className="text-muted-foreground">Understand tax credits available for healthcare businesses.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Financial Planning & Budgeting Tools</h3>
                <p className="text-muted-foreground">Track expenses and streamline revenue cycles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to optimize your healthcare practice finances?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our team of healthcare financial experts is ready to help you navigate complex regulations and maximize
              your practice efficiency.
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
