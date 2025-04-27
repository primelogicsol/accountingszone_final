"use client"

import {
  ArrowRight,
  Phone,
  Search,
  FileCheck,
  Database,
  BarChart4,
  LineChart,
  Scale,
  Users,
  TrendingUp,
  Target,
  Globe,
  Clock,
  Building,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function EnvironmentalSocialGovernance() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Environmental, Social, and Governance (ESG)
            </h1>
            <p className="text-lg text-gray-600">
              Transform sustainability initiatives into strategic advantages through comprehensive reporting and program
              development. Our holistic approach addresses the growing demands from investors, customers, and regulators
              for transparent, meaningful ESG information and performance.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Comprehensive Services</h2>
            <p className="text-gray-600">We offer a complete range of ESG services tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Search className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">ESG Assessment and Benchmarking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evaluation of current performance against industry standards and reporting frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Target className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Materiality Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identification of the most relevant ESG factors for your specific industry and stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <FileCheck className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Framework Selection and Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guidance on optimal reporting standards (SASB, GRI, TCFD, etc.) for your circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Database className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Data Collection Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of efficient processes to gather and validate ESG information across the organization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <BarChart4 className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Report Development and Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of compelling, credible ESG disclosures with appropriate verification.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <LineChart className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Program Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic improvements to ESG performance in areas most material to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Scale className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Regulatory Compliance Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Preparation for evolving mandatory ESG disclosure requirements.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Stakeholder Communication Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of effective approaches to communicate ESG performance and commitments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our ESG Services</h2>
            <p className="text-muted-foreground">Our approach delivers tangible advantages for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Capital Access</h3>
                <p className="text-muted-foreground">
                  Enhanced access to capital through satisfaction of investor ESG requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Competitive advantage in markets where customers value sustainability.
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
                <h3 className="font-medium text-lg mb-1">Risk Reduction</h3>
                <p className="text-muted-foreground">
                  Risk reduction through proactive management of environmental and social factors.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Stakeholder Relations</h3>
                <p className="text-muted-foreground">
                  Improved stakeholder relations through transparent, meaningful reporting.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Regulatory Preparation</h3>
                <p className="text-muted-foreground">
                  Preparation for emerging regulatory requirements ahead of implementation.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Operational Improvements</h3>
                <p className="text-muted-foreground">
                  Identification of operational improvements and cost savings through sustainability initiatives.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Strategic Alignment</h3>
                <p className="text-muted-foreground">
                  Alignment of sustainability efforts with business strategy and value creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our ESG Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our ESG specialists combine sustainability expertise with business acumen to deliver practical,
              value-enhancing approaches that transform ESG from a compliance exercise to a strategic advantage.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#FFB800] -translate-x-1/2"></div>

            <div className="space-y-16 relative">
              {/* Assessment Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">01</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">ESG Assessment & Materiality</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of current ESG performance and identification of the most relevant
                      sustainability factors for your business.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Strategy Development Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Framework & System Development</h3>
                    <p className="text-gray-600 text-lg">
                      Selection of appropriate reporting frameworks and implementation of efficient data collection
                      systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Implementation Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Reporting & Disclosure</h3>
                    <p className="text-gray-600 text-lg">
                      Development of compelling ESG reports and disclosures aligned with stakeholder expectations and
                      regulatory requirements.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Improvement Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Performance Enhancement</h3>
                    <p className="text-gray-600 text-lg">
                      Implementation of strategic initiatives to improve ESG performance and create business value
                      through sustainability.
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
              Ready to turn sustainability into strategic advantage?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Environmental, Social, and Governance services can help your
              organization meet stakeholder expectations while creating business value through effective ESG programs
              and reporting.
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
