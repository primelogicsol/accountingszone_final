"use client"

import {
  DollarSign,
  FileText,
  ArrowRight,
  Phone,
  AlertTriangle,
  Bitcoin,
  Database,
  LineChart,
  Server,
  Layers,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function CryptocurrencyTaxReporting() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Cryptocurrency Tax Reporting
            </h1>
            <p className="text-lg text-gray-600">
              Bring clarity and compliance to the complex tax implications of digital asset transactions. Our
              specialized approach cuts through regulatory uncertainty to deliver accurate reporting and strategic
              planning for cryptocurrency investors and businesses.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Cryptocurrency Tax Services</h2>
            <p className="text-gray-600">
              We provide comprehensive solutions for the complex world of cryptocurrency taxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Bitcoin className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Transaction Classification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precise categorization of cryptocurrency activities as capital gains, ordinary income, mining
                  proceeds, or other tax events.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Database className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Basis Tracking and Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of FIFO, LIFO, or specific identification methods for cost basis determination.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <LineChart className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Blockchain Transaction Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed review of on-chain transactions to identify taxable events and appropriate treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Server className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Exchange Data Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aggregation and normalization of trading data across multiple exchanges and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Layers className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">DeFi Activity Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evaluation of staking, yield farming, liquidity provision, and other decentralized finance activities
                  for tax implications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Cryptocurrency Tax Services</h2>
            <p className="text-muted-foreground">
              Our approach delivers significant advantages for crypto investors and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Bitcoin className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Regulatory Confidence</h3>
                <p className="text-muted-foreground">
                  Confidence in compliance with evolving cryptocurrency tax regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Calculation Accuracy</h3>
                <p className="text-muted-foreground">
                  Accuracy in complex basis calculations across multiple platforms and tokens.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Tax Liability Minimization</h3>
                <p className="text-muted-foreground">
                  Strategic tax planning to minimize cryptocurrency-related tax liabilities.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Penalty Prevention</h3>
                <p className="text-muted-foreground">
                  Prevention of penalties through proper reporting and disclosure.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Detailed Transaction Records</h3>
                <p className="text-muted-foreground">Detailed transaction records for audit support if needed.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">International Compliance</h3>
                <p className="text-muted-foreground">
                  Navigation of cross-border cryptocurrency reporting requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our cryptocurrency tax specialists combine technical blockchain knowledge with tax expertise to deliver
              compliant, optimized reporting for this rapidly evolving asset class.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#FFB800] -translate-x-1/2"></div>

            <div className="space-y-16 relative">
              {/* Step 1 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">01</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Collection</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive gathering of cryptocurrency transaction data from exchanges, wallets, and blockchain
                      records.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Step 2 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Transaction Analysis</h3>
                    <p className="text-gray-600 text-lg">
                      Detailed classification of cryptocurrency activities and determination of appropriate tax
                      treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Tax Calculation</h3>
                    <p className="text-gray-600 text-lg">
                      Precise computation of tax obligations based on transaction history and applicable regulations.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Step 4 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Reporting & Strategy</h3>
                    <p className="text-gray-600 text-lg">
                      Preparation of compliant tax documentation and development of future tax minimization strategies.
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
              Navigating the complex world of cryptocurrency taxation?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact us to discuss how our Cryptocurrency Tax Reporting services can bring clarity and compliance to
              your digital asset activities while minimizing tax impact through strategic planning.
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
