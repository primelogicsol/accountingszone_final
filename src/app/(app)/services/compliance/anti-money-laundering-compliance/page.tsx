"use client"

import {
  ArrowRight,
  Phone,
  FileText,
  Shield,
  AlertTriangle,
  Search,
  FileCheck,
  Users,
  Database,
  BarChart4,
  Target,
  TrendingUp,
  CheckCircle,
  Layers,
  Eye,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function AntiMoneyLaunderingCompliance() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Anti-Money Laundering (AML) Compliance
            </h1>
            <p className="text-lg text-gray-600">
              Protect your organization from financial crime risks through comprehensive AML programs that meet
              regulatory requirements. Our systematic approach addresses the complex, evolving landscape of money
              laundering threats through risk-based controls and ongoing monitoring.
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
              We offer a complete range of AML compliance services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">AML Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive evaluation of money laundering and terrorist financing risks specific to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">AML Program Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of tailored policies, procedures, and controls aligned with regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Customer Due Diligence Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of risk-based approaches to customer identification and verification.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Eye className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Transaction Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of systems to identify suspicious activities and unusual transaction patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Database className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Sanctions Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of processes to screen customers and transactions against sanctions lists.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">AML Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of role-specific training to ensure staff awareness of AML obligations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <FileCheck className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Regulatory Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Support for suspicious activity reporting and other mandatory AML disclosures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <BarChart4 className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">AML Program Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Independent review of AML controls to assess effectiveness and identify improvement opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our AML Services</h2>
            <p className="text-muted-foreground">Our approach delivers tangible advantages for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Confidence in meeting all AML regulatory requirements and expectations.
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
                <h3 className="font-medium text-lg mb-1">Risk Reduction</h3>
                <p className="text-muted-foreground">
                  Reduced risk of financial crime exposure, regulatory penalties, and reputational damage.
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
                <h3 className="font-medium text-lg mb-1">Resource Optimization</h3>
                <p className="text-muted-foreground">
                  Efficient resource allocation through risk-based AML approaches.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Search className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Detection</h3>
                <p className="text-muted-foreground">
                  Improved ability to identify suspicious activities and potential financial crimes.
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
                <h3 className="font-medium text-lg mb-1">Business Protection</h3>
                <p className="text-muted-foreground">
                  Protection of your business from being used as a vehicle for money laundering.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Audit Readiness</h3>
                <p className="text-muted-foreground">
                  Continuous state of readiness for regulatory examinations and audits.
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
                <h3 className="font-medium text-lg mb-1">Adaptable Compliance</h3>
                <p className="text-muted-foreground">
                  Scalable AML frameworks that adapt to evolving regulations and business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our AML Compliance Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AML specialists combine regulatory expertise with practical business knowledge to deliver effective,
              risk-based compliance programs that protect your organization while supporting operational efficiency.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Risk Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of money laundering and terrorist financing risks specific to your
                      business model, customers, and geographic exposure.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Program Development Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Program Development</h3>
                    <p className="text-gray-600 text-lg">
                      Creation of tailored AML policies, procedures, and controls aligned with regulatory requirements
                      and your specific risk profile.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Training</h3>
                    <p className="text-gray-600 text-lg">
                      Systematic rollout of AML controls with comprehensive staff training to ensure effective
                      execution.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Monitoring & Enhancement</h3>
                    <p className="text-gray-600 text-lg">
                      Ongoing monitoring, testing, and refinement of AML controls to ensure continued effectiveness and
                      adaptation to evolving risks and regulations.
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
              Need to strengthen your AML compliance program?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Anti-Money Laundering Compliance services can help your
              organization protect against financial crime risks while meeting regulatory requirements.
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
