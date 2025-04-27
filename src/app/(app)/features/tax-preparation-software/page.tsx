"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Clock,
  Search,
  FileCheck,
  Link2,
  Cloud,
  UserCheck,
  ScanLine,
  Home,
  Building2,
  Calendar,
  RefreshCw,
  BarChart4,
  DollarSign,
  Users,
  Globe,
  Workflow,
  Share2,
  LineChart,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link";


export default function TaxPreparationSoftware() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">TAX PREPARATION SOFTWARE</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              STREAMLINING YOUR TAX COMPLIANCE JOURNEY
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone partners with Prime Logic Solutions USA to deliver powerful tax preparation software
              solutions that automate complex calculations, ensure compliance, and maximize deductions for businesses
              and individuals alike.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              WHY CHOOSE OUR TAX PREPARATION SOFTWARE?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Accuracy Guaranteed</h3>
                <p className="text-muted-foreground">
                  Advanced algorithms and continuous tax code updates minimize errors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Time-Saving Automation</h3>
                <p className="text-muted-foreground">Reduce preparation time by up to 75% compared to manual methods</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Maximum Deduction Discovery</h3>
                <p className="text-muted-foreground">
                  Intelligent systems identify often-overlooked tax-saving opportunities
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Audit Protection</h3>
                <p className="text-muted-foreground">
                  Built-in review tools flag potential audit triggers before filing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Link2 className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect directly with your existing accounting and financial systems
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Cloud className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Secure Cloud Access</h3>
                <p className="text-muted-foreground">
                  Access your tax information securely from anywhere, anytime, on any device
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE SOLUTIONS FOR EVERY NEED</h2>
          </div>
          <Tabs defaultValue="individuals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="individuals"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                For Individuals
              </TabsTrigger>
              <TabsTrigger
                value="small-business"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                For Small Businesses
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                For Enterprise
              </TabsTrigger>
            </TabsList>
            <TabsContent value="individuals">
              <Card>
                <CardHeader>
                  <CardTitle>Transform Personal Tax Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">User-Friendly Interface</h4>
                          <p className="text-sm text-muted-foreground">
                            Simple question-based approach guides you through the process
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ScanLine className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Document Scanning</h4>
                          <p className="text-sm text-muted-foreground">
                            Digitize W-2s, 1099s, and receipts with smartphone camera integration
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Life Event Optimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Special guidance for major changes (marriage, home purchase, etc.)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-State Filing</h4>
                          <p className="text-sm text-muted-foreground">
                            Manage complex state tax requirements for relocations or multi-state income
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Year-Round Tax Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Access tax implications of financial decisions anytime
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <RefreshCw className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Refund Maximizer</h4>
                          <p className="text-sm text-muted-foreground">
                            Intelligent algorithms that identify every possible refund opportunity
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="small-business">
              <Card>
                <CardHeader>
                  <CardTitle>Purpose-Built Tools for Small Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Business Structure Optimization</h4>
                          <p className="text-sm text-muted-foreground">Compare tax implications across entity types</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart4 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Expense Categorization</h4>
                          <p className="text-sm text-muted-foreground">
                            AI-powered classification of business expenses
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Quarterly Estimation Tools</h4>
                          <p className="text-sm text-muted-foreground">Calculate and schedule quarterly tax payments</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Self-Employment Specialization</h4>
                          <p className="text-sm text-muted-foreground">
                            Dedicated features for freelancers and contractors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Search className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Industry-Specific Guidance</h4>
                          <p className="text-sm text-muted-foreground">
                            Tailored deduction recommendations for your business type
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payroll Tax Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Streamlined handling of payroll taxes with automated filing and payment reminders
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="enterprise">
              <Card>
                <CardHeader>
                  <CardTitle>Sophisticated Solutions for Enterprise Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-Entity Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Consolidated view across multiple business entities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">International Tax Compliance</h4>
                          <p className="text-sm text-muted-foreground">Navigate global tax obligations and treaties</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Workflow className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Custom Workflow Design</h4>
                          <p className="text-sm text-muted-foreground">
                            Tailored processes that match your approval hierarchies
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Share2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Collaborative Platforms</h4>
                          <p className="text-sm text-muted-foreground">
                            Secure document sharing between team members and advisors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Advanced Analytics</h4>
                          <p className="text-sm text-muted-foreground">
                            Strategic tax planning tools with scenario modeling
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Compliance Reporting</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive reporting tools for regulatory compliance and audit preparation
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

      {/* Implementation & Support Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION & SUPPORT</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA ensures you receive comprehensive support throughout your
              tax software journey.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration aligned with your specific needs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Data migration from previous tax preparation systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with existing financial platforms</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User training and adoption support</p>
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
                    <p>Year-round technical support via phone, email, and chat</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automatic tax code updates as regulations change</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Secure cloud backup of all documentation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Annual tax strategy reviews with certified professionals</p>
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
                    &quot;The tax preparation software recommended by Accounting Zone reduced our filing time by 60%
                    while identifying deductions we had missed for years. The ROI was evident immediately.&quot;
                  </p>
                  <p className="font-semibold">— Manufacturing Company CFO</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As someone with income from multiple states, my taxes were always a nightmare. This system
                    made everything clear and straightforward, saving me both money and stress.&quot;
                  </p>
                  <p className="font-semibold">— Healthcare Professional</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The collaborative features allowed our in-house team to work seamlessly with our external
                    accountants. The efficiency gains were substantial.&quot;
                  </p>
                  <p className="font-semibold">— Regional Retail Chain Controller</p>
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
              Transform your tax preparation experience with software solutions tailored to your specific needs. Contact
              Accounting Zone to schedule a personalized demonstration and discover how our partnership with Prime Logic
              Solutions USA can revolutionize your approach to tax compliance.
            </p>
            <div className="pt-4">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: taxsolutions@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}