"use client"

import {
  ArrowRight,
  Phone,
  ClipboardCheck,
  FileCheck,
  Settings,
  FileText,
  Users,
  BarChartIcon as Bar,
  LineChartIcon as ChartLineUp,
  Wrench,
  Shield,
  TrendingUp,
  Target,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";


export default function InternalControlsAndAuditing() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Internal Controls and Auditing
            </h1>
            <p className="text-lg text-gray-600">
              Strengthen organizational governance and operational integrity through systematic evaluation and
              enhancement of control environments. Our comprehensive approach addresses financial, operational, and
              compliance controls to mitigate risks while improving process efficiency and reliability.
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
              We offer a complete range of internal control and auditing services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <ClipboardCheck className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Control Environment Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive evaluation of existing controls against recognized frameworks (COSO, COBIT, etc.)
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Target className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Key Control Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Determination of critical control points that mitigate significant organizational risks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Settings className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Control Design Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhancement of control procedures to increase effectiveness while minimizing operational burden.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Control Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of clear, thorough descriptions of control objectives, activities, and responsibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Internal Audit Function Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Establishment or enhancement of internal audit capabilities and methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Bar className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Risk-Based Audit Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of comprehensive audit schedules focused on areas of greatest organizational risk.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <ChartLineUp className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Audit Execution and Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional conduct of audit procedures with clear, actionable findings.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#FFB800]/20">
              <CardHeader>
                <Wrench className="h-8 w-8 text-[#FFB800] mb-2" />
                <CardTitle className="text-gray-900">Remediation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practical assistance implementing improvements to address identified control deficiencies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Control Services</h2>
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
                <h3 className="font-medium text-lg mb-1">Risk Reduction</h3>
                <p className="text-muted-foreground">Significant reduction in operational and financial risks.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Information Reliability</h3>
                <p className="text-muted-foreground">Enhanced reliability of financial and operational information.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Resource Utilization</h3>
                <p className="text-muted-foreground">
                  Improved resource utilization through elimination of control redundancies.
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
                <h3 className="font-medium text-lg mb-1">Asset Safeguarding</h3>
                <p className="text-muted-foreground">Strengthened safeguarding of organizational assets.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Stakeholder Confidence</h3>
                <p className="text-muted-foreground">
                  Increased stakeholder confidence through demonstrable governance.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <ClipboardCheck className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">External Audit Readiness</h3>
                <p className="text-muted-foreground">
                  Preparation for successful external audits and regulatory examinations.
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
                <h3 className="font-medium text-lg mb-1">Process Improvement</h3>
                <p className="text-muted-foreground">
                  Identification of process improvement opportunities through control evaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Controls & Audit Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our internal control specialists combine audit expertise with practical business knowledge to deliver
              control frameworks that protect your organization while supporting operational effectiveness.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Control Environment Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of existing controls against recognized frameworks to identify strengths
                      and improvement opportunities.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Design Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Control Design & Documentation</h3>
                    <p className="text-gray-600 text-lg">
                      Development of optimized control procedures and thorough documentation of control activities and
                      responsibilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testing Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#FFB800] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#FFB800] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#FFB800] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Audit & Testing</h3>
                    <p className="text-gray-600 text-lg">
                      Professional conduct of risk-based audit procedures with clear, actionable findings and
                      recommendations.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Continuous Improvement</h3>
                    <p className="text-gray-600 text-lg">
                      Implementation of remediation plans and ongoing monitoring to ensure sustainable control
                      effectiveness and operational efficiency.
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
              Want to strengthen your control environment while improving efficiency?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Internal Controls and Auditing services can help your
              organization mitigate risks while enhancing operational performance through optimized control structures.
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
