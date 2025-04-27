"use client"

import {
  Workflow,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  Database,
  Laptop,
  Network,
  Layers,
  ShoppingCart,
  Users,
  CreditCard,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AccountingSoftwareIntegration() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Integration with Accounting Software
            </h1>
            <p className="text-lg text-gray-600">
              Integration with Accounting Software creates seamless connections between your financial management system
              and other business applications, eliminating data silos and manual processes. Our integration expertise
              ensures your accounting platform serves as a centralized hub for accurate, timely financial information
              throughout your organization.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Integration Services</h2>
            <p className="text-gray-600">
              We offer comprehensive software integration solutions to connect your accounting system with other
              business applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Laptop className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Integration Needs Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive analysis of data flow requirements between your accounting system and other business
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Network className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">API Connection Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of secure, reliable data pathways between platforms using standard or custom application
                  programming interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <ShoppingCart className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">E-commerce Platform Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamless connection of online sales channels with your accounting system for automated order and
                  payment processing.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">CRM System Synchronization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bi-directional data flow between customer relationship management and accounting systems to unify
                  customer information.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Banking Interface Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Direct bank feed setup with automated reconciliation and transaction categorization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Database className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Custom Middleware Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of specialized connection tools for legacy or proprietary systems without standard
                  integration capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Software Integration</h2>
            <p className="text-muted-foreground">Experience these advantages with our integration solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Elimination of Duplicate Entry</h3>
                <p className="text-muted-foreground">Elimination of duplicate data entry and associated errors.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Workflow className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Accelerated Information Flow</h3>
                <p className="text-muted-foreground">Accelerated information flow throughout your organization.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Data Accuracy</h3>
                <p className="text-muted-foreground">Enhanced data accuracy through reduced manual handling.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Decision-Making</h3>
                <p className="text-muted-foreground">
                  Improved decision-making with consolidated financial intelligence.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Layers className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Streamlined Processes</h3>
                <p className="text-muted-foreground">Streamlined processes and reduced administrative overhead.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Scalable Systems</h3>
                <p className="text-muted-foreground">
                  Scalable systems that accommodate business growth and complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Integration Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our integration specialists combine technical expertise with accounting knowledge to create seamless
              connections that transform disparate systems into a unified financial ecosystem.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">System Analysis</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of your existing systems, data requirements, and integration needs.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Integration Design</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored integration architecture with data mapping and transformation rules.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Testing</h3>
                    <p className="text-gray-600 text-lg">
                      Deployment of integration solutions with comprehensive testing to ensure data accuracy and system
                      reliability.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Monitoring & Optimization</h3>
                    <p className="text-gray-600 text-lg">
                      Ongoing supervision of integration performance with refinement and expansion to meet evolving
                      business needs.
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
              Ready to eliminate data silos and manual processes?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Accounting Software Integration services can connect your
              business systems and streamline your financial data management.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Integration Consultation
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
