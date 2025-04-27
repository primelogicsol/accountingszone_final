"use client"

import {
  Receipt,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  Shield,
  LineChart,
  ClipboardList,
  CreditCard,
  FileText,
  Users,
  Settings,
  BarChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ExpenseTrackingManagement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Expense Tracking and Management
            </h1>
            <p className="text-lg text-gray-600">
              Expense Tracking and Management optimizes your organization's spending through systematic capture,
              categorization, and analysis of business expenditures. Our comprehensive approach transforms expense
              management from a tedious administrative task into a strategic cost control function.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Expense Management Services</h2>
            <p className="text-gray-600">
              We offer comprehensive expense tracking and management solutions tailored to streamline your business
              spending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Expense Policy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of clear, comprehensive policies that define appropriate business expenditures and approval
                  processes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Receipt className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Digital Receipt Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deployment of mobile applications and tools for immediate digitization of receipts and supporting
                  documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Settings className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Automated Categorization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of intelligent classification tools that correctly code expenses according to your
                  chart of accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Approval Workflow Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of multi-level review and approval processes with appropriate authorization thresholds.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Corporate Card Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamless connection between credit card transactions and your accounting system with automated
                  reconciliation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <BarChart className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Vendor Spending Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed review of expenditures by vendor to identify consolidation and negotiation opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Expense Management</h2>
            <p className="text-muted-foreground">Experience these advantages with our expense tracking solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <ClipboardList className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Reduced Administrative Time</h3>
                <p className="text-muted-foreground">
                  Significant reduction in administrative time spent processing expenses.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Spending Visibility</h3>
                <p className="text-muted-foreground">
                  Enhanced visibility into spending patterns across departments and categories.
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
                <h3 className="font-medium text-lg mb-1">Improved Policy Compliance</h3>
                <p className="text-muted-foreground">
                  Improved policy compliance and reduction in inappropriate expenditures.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Faster Reimbursement Cycles</h3>
                <p className="text-muted-foreground">
                  Faster reimbursement cycles for employees and reduced processing costs.
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
                <h3 className="font-medium text-lg mb-1">Strategic Cost Reduction</h3>
                <p className="text-muted-foreground">
                  Strategic cost reduction through comprehensive spending analysis.
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
                <h3 className="font-medium text-lg mb-1">Enhanced Audit Trails</h3>
                <p className="text-muted-foreground">
                  Enhanced audit trails and documentation for tax and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expense Management Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expense management specialists combine accounting expertise with process optimization knowledge to
              transform your expense handling from a burdensome necessity to a strategic advantage.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Process Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of current expense processes, policies, and pain points to identify
                      improvement opportunities.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Solution Design</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored expense management policies, workflows, and systems aligned with your
                      business needs.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Integration</h3>
                    <p className="text-gray-600 text-lg">
                      Deployment of expense management systems with integration to your accounting platform and employee
                      training.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Analysis & Optimization</h3>
                    <p className="text-gray-600 text-lg">
                      Regular spending analysis with ongoing refinement of policies and processes to maximize efficiency
                      and cost control.
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
              Ready to gain control over your business expenses?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Expense Tracking and Management services can streamline your
              processes while providing strategic insights into your organizational spending.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Expense Management Assessment
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
