"use client"

import {
  FileCheck,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  Shield,
  ClipboardList,
  FileText,
  Users,
  FolderCheck,
  Search,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AuditReadyDocumentation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Audit-Ready Documentation</h1>
            <p className="text-lg text-gray-600">
              Audit-Ready Documentation ensures your financial records are systematically organized, properly supported,
              and readily accessible for internal or external review. Our comprehensive approach transforms document
              management from a reactive scramble into a proactive system that supports compliance and operational
              efficiency.
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Documentation Services</h2>
            <p className="text-gray-600">
              We offer comprehensive audit-ready documentation solutions to ensure your financial records meet the
              highest standards of compliance and organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FolderCheck className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Document Organization System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of structured filing systems with clear naming conventions and hierarchical organization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Transaction Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systematic collection and organization of supporting evidence for all significant financial
                  transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <ClipboardList className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Policy & Procedure Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of comprehensive written policies for financial processes, controls, and approval workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Search className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Audit Trail Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Establishment of systems that maintain clear records of all financial activities and changes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Lock className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Document Retention Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of secure, compliant document storage with appropriate retention schedules.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FileCheck className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Audit Request Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proactive compilation of documentation packages in anticipation of common audit requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Audit-Ready Documentation</h2>
            <p className="text-muted-foreground">Experience these advantages with our documentation services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Reduced Audit Stress</h3>
                <p className="text-muted-foreground">
                  Significantly reduced stress and disruption during audit periods.
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
                <h3 className="font-medium text-lg mb-1">Lower Compliance Risk</h3>
                <p className="text-muted-foreground">Lower risk of compliance issues or adverse audit findings.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Enhanced Credibility</h3>
                <p className="text-muted-foreground">
                  Enhanced credibility with auditors, regulators, and stakeholders.
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
                <h3 className="font-medium text-lg mb-1">Improved Information Access</h3>
                <p className="text-muted-foreground">
                  Improved access to critical financial information for decision-making.
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
                <h3 className="font-medium text-lg mb-1">Operational Efficiency</h3>
                <p className="text-muted-foreground">
                  Increased operational efficiency through organized information management.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Knowledge Preservation</h3>
                <p className="text-muted-foreground">
                  Preservation of institutional knowledge despite personnel changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Documentation Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our documentation specialists combine accounting expertise with information management best practices to
              create systems that ensure your financial records are always audit-ready.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Documentation Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of current documentation practices, gaps, and compliance requirements.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">System Design</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored documentation frameworks, policies, and organization systems aligned with
                      your business needs.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Organization</h3>
                    <p className="text-gray-600 text-lg">
                      Systematic deployment of documentation systems with organization of existing records and creation
                      of missing documentation.
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Maintenance & Compliance</h3>
                    <p className="text-gray-600 text-lg">
                      Ongoing management of documentation systems with regular reviews to ensure continued compliance
                      and effectiveness.
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
              Ready to eliminate audit stress and strengthen compliance?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Audit-Ready Documentation services can transform your record
              keeping and ensure you're always prepared for financial review.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Documentation Assessment
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
