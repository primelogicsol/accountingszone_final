"use client"

import {
  ArrowRight,
  FileText,
  ShoppingCart,
  BarChart,
  Globe,
  DollarSign,
  Calculator,
  Truck,
  Database,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function EcommerceResources() {
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
                  Resources for E-commerce
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Specialized financial and tax solutions for online retailers navigating multi-state and international
                  commerce.
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
                E-commerce businesses require tax-efficient strategies for online sales, digital payment processing, and
                multi-state tax compliance. Our resources guide entrepreneurs in optimizing their online business
                finances.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Globe className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Multi-State Tax Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive solutions for navigating the complexities of nexus laws and state sales tax
                    requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Digital Commerce Strategy</h3>
                  <p className="text-muted-foreground">
                    Financial optimization for online retail operations, including inventory, fulfillment, and payment
                    processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <DollarSign className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Global Sales Management</h3>
                  <p className="text-muted-foreground">
                    Guidance on international tax compliance, VAT, and cross-border transaction optimization.
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
                Specialized resources tailored for e-commerce financial management.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Globe className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Sales Tax Compliance & Nexus Laws</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Stay compliant with varying state tax regulations.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Truck className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Dropshipping & Inventory Accounting</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Ensure accurate financial tracking for global operations.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <BarChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">E-commerce Profitability Management</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Optimize revenue streams and expense tracking.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <Database className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Digital Goods & Services Taxation</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">
                    Understand taxation on intangible assets and digital products.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                  <DollarSign className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Cross-Border E-commerce Tax Planning</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Navigate international sales tax laws and requirements.</p>
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
                Our approach to supporting e-commerce businesses.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Tax Compliance Webinars</h3>
                <p className="text-muted-foreground">Live training sessions with e-commerce tax experts.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Sales Tax Registration Guides</h3>
                <p className="text-muted-foreground">State-specific filing requirements and documentation.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Financial Tracking Templates</h3>
                <p className="text-muted-foreground">Tools for real-time revenue and expense monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to simplify your e-commerce taxation?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our team of e-commerce financial experts is ready to help you navigate complex sales tax regulations and
              optimize your online business operations.
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
