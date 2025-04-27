"use client"

import {
  TrendingUp,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  CoinsIcon,
  Shield,
  Target,
  CreditCard,
  Banknote,
  Building,
  LineChart,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function CashFlowManagement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Cash Flow Management</h1>
            <p className="text-lg text-gray-600">
              Cash Flow Management is the lifeblood of business sustainability and growth. At Accounting Zone, we
              implement sophisticated cash management strategies that optimize liquidity while maximizing the
              productivity of every dollar in your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#FFB800] text-black hover:bg-[#FFB800]/10 gap-2">
                <Phone className="h-4 w-4" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Cash Flow Management Solutions</h2>
            <p className="text-gray-600">
              We offer comprehensive cash flow management solutions tailored to optimize your business liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <LineChart className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Cash Flow Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of detailed projections that anticipate cash positions across multiple time horizons
                  (13-week, quarterly, and annual).
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Working Capital Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of strategies to reduce cash conversion cycles and improve operational liquidity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Receivables Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Design of efficient invoicing, follow-up, and collection systems to minimize days sales outstanding.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Banknote className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Payables Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic scheduling of vendor payments to balance cash preservation with vendor relationships and
                  early payment discounts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Building className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Banking Structure Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evaluation and optimization of banking relationships, account structures, and cash pooling
                  arrangements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Landmark className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Cash Reserve Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of investment strategies for excess cash that balance liquidity needs with return
                  objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Cash Flow Management</h2>
            <p className="text-muted-foreground">Our approach delivers tangible advantages for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Prevention of Cash Shortfalls</h3>
                <p className="text-muted-foreground">
                  Avoid unexpected cash shortfalls that could disrupt operations or damage relationships.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Landmark className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Reduced External Financing</h3>
                <p className="text-muted-foreground">
                  Reduced reliance on external financing through improved internal cash generation.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Capitalize on Opportunities</h3>
                <p className="text-muted-foreground">
                  Enhanced ability to capitalize on time-sensitive business opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Financial Stability</h3>
                <p className="text-muted-foreground">
                  Improved financial stability during seasonal fluctuations or economic downturns.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <CoinsIcon className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Strategic Resource Deployment</h3>
                <p className="text-muted-foreground">
                  Strategic advantage through optimal deployment of financial resources.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Cash Flow KPI Implementation</h3>
                <p className="text-muted-foreground">
                  Establishment of key performance indicators and dashboard reporting for ongoing cash position
                  monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Cash Flow Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team combines accounting expertise with business acumen to transform cash flow management from a
              reactive necessity to a proactive strategic advantage for your organization.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#FFB800] -translate-x-1/2"></div>

            <div className="space-y-16 relative">
              {/* Analysis Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">01</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Cash Flow Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive review of current cash flow patterns, banking structures, and working capital
                      efficiency to identify improvement opportunities.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Strategic Alignment Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategy Development</h3>
                    <p className="text-gray-600 text-lg">
                      Creating customized cash management strategies aligned with your business objectives and
                      operational requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Forecast Development Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation</h3>
                    <p className="text-gray-600 text-lg">
                      Deploying cash flow forecasting tools, optimizing banking structures, and establishing cash
                      management protocols.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Implementation Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Monitoring & Optimization</h3>
                    <p className="text-gray-600 text-lg">
                      Regular review of cash flow performance, adjustment of forecasts, and continuous improvement of
                      cash management processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Is cash flow keeping you up at night?</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Take control of your business liquidity with Accounting Zone&apos;s Cash Flow Management services. Schedule a
              confidential cash flow assessment today.
            </p>
            <Link href="/contact/get-a-consultation">
              <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-12">
          <Separator className="mb-8 bg-[#FFB800]/20" />
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} AccountingZone. All rights reserved.</p>
            <p className="mt-2">
              123 Financial District, New York, NY 10001 | (555) 123-4567 | info@accountingzone.com
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
