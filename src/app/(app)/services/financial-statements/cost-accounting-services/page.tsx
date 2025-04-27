"use client"

import { Calculator, BarChart, ArrowRight, Phone, BrainCircuit, Shield, Target, LineChart, PieChart, Layers, Scale, TrendingUp, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CostAccountingServices() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Cost Accounting Services
            </h1>
            <p className="text-lg text-gray-600">
              Cost Accounting Services provide granular visibility into your operational expenses, transforming cost
              management from an administrative function into a strategic advantage. Our methodical approach
              identifies, allocates, and optimizes costs across your organization to enhance profitability and
              decision-making.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Comprehensive Solutions</h2>
            <p className="text-gray-600">
              We offer a complete range of cost accounting solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Layers className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Activity-Based Costing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of sophisticated costing models that accurately trace expenses to specific activities,
                  products, and services.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <BarChart className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Cost Structure Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed examination of fixed versus variable costs to improve operational flexibility and break-even
                  points.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <PieChart className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Product & Service Line Costing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precise calculation of direct and indirect costs for each revenue stream to identify true
                  profitability.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Scale className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Overhead Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Design of equitable distribution frameworks that accurately assign shared costs to appropriate cost
                  objects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Target className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Cost Driver Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysis of the underlying factors that influence cost behavior to enable more effective management.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Margin Enhancement Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Data-driven recommendations to improve contribution margins and overall profitability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Cost Accounting Services</h2>
            <p className="text-muted-foreground">
              Partner with Accounting Zone and gain these strategic advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Accurate Profitability Insights</h3>
                <p className="text-muted-foreground">
                  Gain accurate insight into true product, service, and customer profitability.
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
                <h3 className="font-medium text-lg mb-1">Enhanced Pricing Decisions</h3>
                <p className="text-muted-foreground">
                  Make better pricing decisions based on comprehensive cost information.
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
                <h3 className="font-medium text-lg mb-1">Strategic Cost Reduction</h3>
                <p className="text-muted-foreground">
                  Gain strategic advantage through identification of cost reduction opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Budget Accuracy</h3>
                <p className="text-muted-foreground">
                  Create more accurate budgets through detailed understanding of cost behavior.
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
                <h3 className="font-medium text-lg mb-1">Data-Supported Decisions</h3>
                <p className="text-muted-foreground">
                  Make informed make-vs-buy and outsourcing decisions based on reliable data.
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
                <h3 className="font-medium text-lg mb-1">Competitive Positioning</h3>
                <p className="text-muted-foreground">
                  Achieve competitive positioning through cost leadership or margin optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Methodology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our cost accounting specialists combine industry expertise with advanced methodologies to transform your
              cost data into a strategic asset that drives sustainable profitability and informed decision-making.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost Structure Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of your current cost structure, allocation methods, and accounting
                      systems.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Methodology Design</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored cost accounting methodologies aligned with your business model and
                      information needs.
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
                      Systematic deployment of cost accounting systems with training and documentation to ensure
                      successful adoption.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Analysis & Optimization</h3>
                    <p className="text-gray-600 text-lg">
                      Ongoing analysis of cost data to identify trends, opportunities, and strategic insights for
                      continuous improvement.
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
              Do you know the true profitability of each product, service, or customer?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Discover hidden profit opportunities with Accounting Zone&apos;s Cost Accounting Services.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Complimentary Assessment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
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
