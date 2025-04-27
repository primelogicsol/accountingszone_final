"use client"

import {
  ArrowRight,
  Phone,
  Landmark,
  Calendar,
  FileText,
  Database,
  Globe,
  Radio,
  Search,
  Users,
  ClipboardCheck,
  Scale,
  Award,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function IndustrySpecificRegulatoryFilings() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Industry-Specific Regulatory Filings
            </h1>
            <p className="text-lg text-gray-600">
              Ensure your organization meets the unique compliance requirements of your sector while minimizing
              regulatory risk. Our specialized approach addresses the complex, evolving demands of industry-specific
              regulators through expert knowledge and systematic filing management.
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
            <p className="text-gray-600">
              We offer a complete range of industry-specific regulatory filing services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Search className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Regulatory Landscape Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive identification of all industry-specific filing requirements applicable to your
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Calendar className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Specialized Compliance Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of detailed schedules tracking industry-specific deadlines and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Technical Filing Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert development of complex regulatory submissions requiring specialized industry knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Database className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Data Collection Systematization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of efficient processes to gather required information from across the organization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Globe className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Cross-Jurisdictional Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Management of varying requirements across different geographic operating locations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Radio className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Regulatory Change Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuous tracking of evolving requirements with proactive adaptation of compliance approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <ClipboardCheck className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Pre-Submission Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thorough analysis of filings to ensure technical compliance and strategic alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Examiner Relationship Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional interaction with regulatory examiners and information requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Regulatory Filing Services</h2>
            <p className="text-muted-foreground">Our approach delivers tangible advantages for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Compliance Confidence</h3>
                <p className="text-muted-foreground">
                  Confidence in compliance with complex, technical regulatory requirements.
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
                <h3 className="font-medium text-lg mb-1">Reduced Risk</h3>
                <p className="text-muted-foreground">
                  Reduced risk of regulatory penalties, sanctions, or operational restrictions.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Credibility</h3>
                <p className="text-muted-foreground">Enhanced credibility with specialized industry regulators.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Efficient Resource Allocation</h3>
                <p className="text-muted-foreground">
                  Efficient resource allocation through optimized compliance processes.
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
                  Competitive advantage through superior regulatory intelligence and execution.
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
                <h3 className="font-medium text-lg mb-1">Minimized Business Disruption</h3>
                <p className="text-muted-foreground">
                  Minimized business disruption from regulatory examinations and inquiries.
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
                <h3 className="font-medium text-lg mb-1">Strategic Alignment</h3>
                <p className="text-muted-foreground">
                  Strategic alignment of regulatory submissions with business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Regulatory Compliance Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our industry specialists combine deep sector-specific knowledge with regulatory expertise to transform
              complex compliance obligations into manageable, efficient processes tailored to your specific industry
              requirements.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Regulatory Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive identification and evaluation of all industry-specific regulatory requirements
                      applicable to your operations.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Planning Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Compliance Planning</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored compliance calendars and data collection systems to support regulatory
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Execution Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Filing Preparation & Submission</h3>
                    <p className="text-gray-600 text-lg">
                      Expert development of regulatory submissions with thorough pre-submission review for technical
                      compliance and strategic alignment.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Monitoring Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Management & Monitoring</h3>
                    <p className="text-gray-600 text-lg">
                      Continuous tracking of regulatory changes, management of examiner relationships, and adaptation of
                      compliance approaches as requirements evolve.
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
              Struggling with complex industry regulations?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Industry-Specific Regulatory Filings services can help your
              organization navigate sector-specific compliance requirements with confidence and efficiency.
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
