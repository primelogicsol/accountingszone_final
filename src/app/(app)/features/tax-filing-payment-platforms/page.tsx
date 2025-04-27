"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Clock,
  FileCheck,
  Link2,
  UserCheck,
  CheckCircle,
  ArrowRight,
  FileText,
  Receipt,
  CalendarClock,
  CheckSquare,
  Database,
  Briefcase,
  Globe,
  Building,
  FileDigit,
  Wallet,
} from "lucide-react"
import Link from "next/link";


export default function TaxFilingPaymentPlatforms() {
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
              TAX FILING AND PAYMENT PLATFORMS
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              STREAMLINED ELECTRONIC FILING AND PAYMENT EXECUTION
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers comprehensive electronic tax
              filing and payment solutions that eliminate paper-based inefficiencies and submission uncertainties. Our
              integrated platforms ensure timely, accurate filing across federal, state, and local tax authorities with
              secure, verifiable payment execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">FILING AND PAYMENT EXCELLENCE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Submission Confidence</h3>
                <p className="text-muted-foreground">Eliminate uncertainty with confirmation-based electronic filing</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckSquare className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Payment Precision</h3>
                <p className="text-muted-foreground">Execute tax payments with exact timing and accurate amounts</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Processing Efficiency</h3>
                <p className="text-muted-foreground">Reduce preparation and submission time by up to 90%</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Compliance Assurance</h3>
                <p className="text-muted-foreground">Meet all electronic filing mandates across jurisdictions</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Audit Protection</h3>
                <p className="text-muted-foreground">
                  Maintain comprehensive digital records of all filings and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE ELECTRONIC TAX SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="federal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger value="federal" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Federal E-Filing
              </TabsTrigger>
              <TabsTrigger value="state" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                State & Local Filing
              </TabsTrigger>
              <TabsTrigger value="payment" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Tax Payment Execution
              </TabsTrigger>
            </TabsList>
            <TabsContent value="federal">
              <Card>
                <CardHeader>
                  <CardTitle>Federal E-Filing Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Complete IRS electronic submission capabilities:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Business Return E-Filing</h4>
                          <p className="text-sm text-muted-foreground">
                            Electronic submission of 1120, 1120S, 1065, and other entity returns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Information Return Processing</h4>
                          <p className="text-sm text-muted-foreground">
                            Streamlined filing for 1099s, W-2s, and other informational forms
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CalendarClock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Extension Automation</h4>
                          <p className="text-sm text-muted-foreground">
                            Electronic filing of extensions with deadline tracking
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileDigit className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Amendment Processing</h4>
                          <p className="text-sm text-muted-foreground">Simplified electronic correction submissions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Signature Authentication</h4>
                          <p className="text-sm text-muted-foreground">Compliant electronic signature management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="state">
              <Card>
                <CardHeader>
                  <CardTitle>State and Local Filing Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Comprehensive multi-jurisdiction capabilities:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-State Return Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Coordinated filing across all applicable state jurisdictions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Local Tax Authority Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Electronic submission to county and municipal tax departments
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">State-Specific Form Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatic generation of jurisdiction-specific forms
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Link2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Cross-Border Filing Coordination</h4>
                          <p className="text-sm text-muted-foreground">
                            Management of filing requirements across state lines
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Portal-Based Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Direct connections to state department of revenue systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Tax Payment Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Secure, precise payment processing:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Wallet className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">EFTPS Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Direct connection with federal tax payment system
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Receipt className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">ACH Payment Processing</h4>
                          <p className="text-sm text-muted-foreground">Electronic fund transfers to tax authorities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CalendarClock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payment Scheduling</h4>
                          <p className="text-sm text-muted-foreground">Timed execution for optimal cash management</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payment Confirmation</h4>
                          <p className="text-sm text-muted-foreground">Verifiable receipt documentation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payment History Management</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive record of all tax disbursements</p>
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
              Our partnership with Prime Logic Solutions USA leverages sophisticated technology for electronic tax
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
                    <p>Direct transmission to tax authority systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Built-in validation against submission requirements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated error checking before submission</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Electronic receipt verification and storage</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Payment confirmation tracking</p>
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
                    <p>Connection with tax preparation software</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with accounting and ERP systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Bank account management system connectivity</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Digital signature integration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Document management system coordination</p>
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
                    <p>Electronic filing registration assistance</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration for your filing requirements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Testing protocol implementation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User authorization management</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Transmission verification procedures</p>
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
                    <p>Annual filing requirement updates</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous portal integration maintenance</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular system testing and verification</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Technical support for submission issues</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Post-filing confirmation management</p>
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
                    &quot;The electronic filing platform implemented through Accounting Zone transformed our year-end
                    process. Filing that previously required days of printing, signing, and mailing now happens with a
                    few clicks. The confirmation system gives us confidence that our submissions are received and
                    processed correctly.&quot;
                  </p>
                  <p className="font-semibold">— Tax Manager, Regional Distribution Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a business with tax obligations in 17 states, coordinating paper filings was a logistical
                    nightmare. The multi-jurisdiction electronic filing solution has streamlined our compliance process
                    while providing better documentation than we ever had with paper submissions.&quot;
                  </p>
                  <p className="font-semibold">— Controller, Multi-State Service Provider</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The payment scheduling features have revolutionized our tax disbursement process. We now
                    optimize our cash position while ensuring timely tax payments, and the confirmation system has
                    eliminated the &apos;check is in the mail&apos; uncertainties we previously faced.&quot;
                  </p>
                  <p className="font-semibold">— Treasury Director, Manufacturing Enterprise</p>
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
              Transform your tax filing and payment processes with electronic solutions that ensure timely, accurate
              submissions while providing complete documentation. Contact Accounting Zone to schedule a consultation and
              discover how our collaboration with Prime Logic Solutions USA can streamline your tax filing and payment
              procedures.
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
              <p>Email: efiling@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/tax-filing</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>
                All tax filing and payment solutions are delivered through our exclusive partnership with Prime Logic
                Solutions USA, combining advanced technology with specialized tax expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}