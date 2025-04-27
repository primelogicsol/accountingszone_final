"use client"

import {
  Building,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  Shield,
  ClipboardList,
  Calculator,
  BarChart,
  FileText,
  TrendingDown,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FixedAssetManagement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Fixed Asset Management</h1>
            <p className="text-lg text-gray-600">
              Fixed Asset Management optimizes the financial treatment of your capital investments through systematic
              tracking, valuation, and reporting of fixed assets throughout their lifecycle. Our comprehensive approach
              ensures compliance while maximizing tax benefits and informing strategic capital decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-[#fbc710] hover:bg-[#fbc710]/90 text-black gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10 gap-2">
                <Phone className="h-4 w-4" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Asset Management Services</h2>
            <p className="text-gray-600">
              We offer comprehensive fixed asset management solutions tailored to optimize your capital investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Tag className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Asset Tagging & Inventory Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of physical and digital asset identification and tracking methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Capitalization Policy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of clear guidelines defining capitalization thresholds and asset classifications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <TrendingDown className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Depreciation Method Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Selection and implementation of depreciation approaches that align financial reporting with tax
                  strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <ClipboardList className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Fixed Asset Register Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed tracking of all relevant asset information including acquisition date, cost, location, and
                  depreciation status.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Asset Impairment Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular evaluation of asset carrying values against recoverable amounts with appropriate adjustments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Calculator className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Tax Provision Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic application of bonus depreciation, Section 179 expensing, and other tax incentives.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Fixed Asset Management</h2>
            <p className="text-muted-foreground">Experience these advantages when you engage our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Accurate Financial Statements</h3>
                <p className="text-muted-foreground">Accurate financial statement presentation of capital assets.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Tax Position</h3>
                <p className="text-muted-foreground">Enhanced tax position through optimal depreciation strategies.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Prevention of Ghost Assets</h3>
                <p className="text-muted-foreground">
                  Prevention of ghost assets and phantom inventory in your records.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Capital Budgeting</h3>
                <p className="text-muted-foreground">
                  Improved capital budgeting through comprehensive asset lifecycle data.
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
                <h3 className="font-medium text-lg mb-1">Reduced Compliance Risk</h3>
                <p className="text-muted-foreground">Reduced risk of financial misstatement and compliance issues.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Informed Decision Making</h3>
                <p className="text-muted-foreground">
                  Better-informed repair/replace decisions through detailed asset history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Asset Management Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our asset management specialists combine accounting expertise with tax knowledge to ensure your capital
              investments are properly tracked, optimally depreciated, and strategically managed throughout their useful
              lives.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#fbc710] -translate-x-1/2"></div>

            <div className="space-y-16 relative">
              {/* Analysis Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">01</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Asset Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive inventory and evaluation of existing assets with identification of tracking and
                      reporting needs.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Strategic Alignment Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Policy & System Development</h3>
                    <p className="text-gray-600 text-lg">
                      Creation of tailored policies, procedures, and tracking systems aligned with your business needs
                      and compliance requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Forecast Development Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Data Migration</h3>
                    <p className="text-gray-600 text-lg">
                      Systematic deployment of asset management systems with accurate transfer of historical asset data.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Implementation Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Management & Optimization</h3>
                    <p className="text-gray-600 text-lg">
                      Regular maintenance, reconciliation, and strategic analysis of fixed assets to ensure accuracy and
                      tax optimization.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to optimize the management of your capital investments?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Fixed Asset Management services can enhance your financial
              reporting accuracy while maximizing available tax benefits.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Asset Management Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-12">
          <Separator className="mb-8 bg-[#fbc710]/20" />
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
