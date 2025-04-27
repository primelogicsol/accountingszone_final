"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import {
  Shield,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Calculator,
  Clock,
  Building2,
  Globe,
  FileSpreadsheet,
  CalendarClock,
  Building,
  FileDigit,
  Database,
  AlertCircle,
  Briefcase,
  ClipboardCheck,
  Users,
  UserCheck,
  Link2,
} from "lucide-react"

export default function PayrollTaxManagementSoftware() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              PAYROLL TAX MANAGEMENT SOFTWARE
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              STREAMLINE YOUR PAYROLL TAX OBLIGATIONS
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers comprehensive payroll tax
              management solutions that transform complex compliance requirements into streamlined, automated processes.
              Our specialized systems ensure accurate calculations, timely filings, and complete documentation while
              reducing administrative burden.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">PAYROLL TAX EXCELLENCE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Calculator className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Calculation Precision</h3>
                <p className="text-muted-foreground">
                  Eliminate errors with automated tax computations across jurisdictions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileSpreadsheet className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Filing Automation</h3>
                <p className="text-muted-foreground">
                  Streamline submission of federal, state, and local payroll tax returns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Compliance Assurance</h3>
                <p className="text-muted-foreground">Stay current with constantly changing payroll tax requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Penalty Prevention</h3>
                <p className="text-muted-foreground">Ensure timely deposits and filings to avoid costly penalties</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Administrative Efficiency</h3>
                <p className="text-muted-foreground">Reduce time spent on payroll tax management by up to 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE PAYROLL TAX SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="jurisdiction" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="jurisdiction"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Multi-Jurisdiction
              </TabsTrigger>
              <TabsTrigger value="filing" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Tax Filing
              </TabsTrigger>
              <TabsTrigger
                value="compliance"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Compliance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="jurisdiction">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Jurisdiction Tax Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Complete solutions for complex employment situations:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Federal Tax Administration</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated calculation and deposit of all federal employment taxes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">State Tax Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Streamlined management across all applicable state jurisdictions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Local Tax Handling</h4>
                          <p className="text-sm text-muted-foreground">
                            Precise calculation of county, city, and special district obligations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Link2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Reciprocity Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated application of cross-border tax agreements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Remote Worker Tax Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Special handling for distributed workforce obligations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="filing">
              <Card>
                <CardHeader>
                  <CardTitle>Tax Filing Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Simplified preparation and submission:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Form Preparation</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated generation of 941, 940, W-2, state, and local returns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Electronic Filing</h4>
                          <p className="text-sm text-muted-foreground">Direct submission to tax authorities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CalendarClock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Deadline Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Proactive alerts for approaching filing requirements
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileDigit className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Amendment Processing</h4>
                          <p className="text-sm text-muted-foreground">Streamlined correction procedures</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Signature Management</h4>
                          <p className="text-sm text-muted-foreground">Digital or proxy signature handling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance and Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive recordkeeping and verification:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Calculator className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Tax Rate Monitoring</h4>
                          <p className="text-sm text-muted-foreground">
                            Tracking of assigned rates with new hire reporting
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Notice Management</h4>
                          <p className="text-sm text-muted-foreground">Systematic handling of agency communications</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Audit Support Documentation</h4>
                          <p className="text-sm text-muted-foreground">
                            Complete record maintenance for agency examinations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Compliance Certification</h4>
                          <p className="text-sm text-muted-foreground">Validation of proper tax handling</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Historical Tax Records</h4>
                          <p className="text-sm text-muted-foreground">
                            Secure, organized archives of all payroll tax activities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Platform Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ADVANCED TECHNOLOGY PLATFORM</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA leverages sophisticated technology for payroll tax
              management.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous tax table updates across thousands of jurisdictions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Algorithmic verification of calculation accuracy</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated data population across multiple forms</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Rule-based validation to prevent common errors</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Learning systems that improve with your specific payroll patterns</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Connection with major payroll processing systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Time and attendance system integration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>HR information system synchronization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>General ledger posting automation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Banking system connectivity for tax deposits</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation & Support Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION & SUPPORT</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaboration with Prime Logic Solutions USA ensures comprehensive support throughout your experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Streamlined Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Current process assessment and optimization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration aligned with your specific needs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Historical compliance review</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Team training and certification</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Transition management with parallel processing</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ongoing Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous tax law monitoring and system updates</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular compliance reviews and recommendations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Dedicated support for complex tax situations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Annual tax strategy planning sessions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Quarterly system optimization reviews</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CLIENT SUCCESS STORIES</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;After implementing the payroll tax management solution through Accounting Zone, we eliminated
                    the tax penalties we had been experiencing and reduced our administrative time by over 70%. The
                    multi-state capabilities have been particularly valuable as our workforce has become more
                    distributed.&quot;
                  </p>
                  <p className="font-semibold">— HR Director, Professional Services Firm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a rapidly growing company adding employees in new states, managing our expanding payroll
                    tax obligations was becoming overwhelming. This solution has automated our compliance, ensuring we
                    meet all requirements as we scale without adding administrative headcount.&quot;
                  </p>
                  <p className="font-semibold">— Controller, Technology Startup</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The payroll tax notice management feature alone justified our investment. What previously
                    created stress and confusion is now handled systematically, with clear tracking and resolution
                    documentation. We haven&apos;t missed a response deadline since implementation.&quot;
                  </p>
                  <p className="font-semibold">— Payroll Manager, Retail Chain</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-[#fbc710] text-black">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">GET STARTED TODAY</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-black/90">
              Transform your approach to payroll tax management with solutions that ensure compliance while reducing
              administrative burden. Contact Accounting Zone to schedule a consultation and discover how our
              collaboration with Prime Logic Solutions USA can streamline your payroll tax processes.
            </p>
            <div className="pt-4">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: payrolltax@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/payroll-tax</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>
                All payroll tax management solutions are delivered through our exclusive partnership with Prime Logic
                Solutions USA, combining advanced technology with specialized tax expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
 