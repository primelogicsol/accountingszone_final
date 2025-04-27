"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  FileCheck,
  Building2,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Home,
  Stethoscope,
  Factory,
  Hammer,
  Laptop,
  Briefcase,
  Zap,
  BarChart,
  DollarSign,
  Search,
} from "lucide-react"
import Link from "next/link";


export default function IndustrySpecificTaxSolutions() {
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
              INDUSTRY-SPECIFIC TAX SOLUTIONS
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              SPECIALIZED TAX EXPERTISE FOR YOUR INDUSTRY
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers targeted tax solutions designed
              specifically for the unique challenges of specialized industries. Our purpose-built tools address the
              distinct tax regulations, deductions, and compliance requirements that general-purpose software often
              overlooks.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INDUSTRY-FOCUSED ADVANTAGES</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Specialized Compliance</h3>
                <p className="text-muted-foreground">
                  Navigate complex industry-specific tax regulations with confidence
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Enhanced Deduction Capture</h3>
                <p className="text-muted-foreground">Identify tax opportunities unique to your business sector</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Risk Mitigation</h3>
                <p className="text-muted-foreground">Address industry-targeted audit concerns proactively</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BarChart className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Leverage tax strategies developed specifically for your business model
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Benefit from tax approaches optimized for your industry dynamics
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TAILORED INDUSTRY SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="real-estate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="real-estate"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Real Estate Tax Management
              </TabsTrigger>
              <TabsTrigger
                value="healthcare"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Healthcare Industry Tax Solutions
              </TabsTrigger>
              <TabsTrigger
                value="manufacturing"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Manufacturing Tax Optimization
              </TabsTrigger>
            </TabsList>
            <TabsContent value="real-estate">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive tools for property investors, developers, and managers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Cost Segregation Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Accelerated depreciation identification and documentation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">1031 Exchange Management</h4>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Step-by-step guidance through like-kind exchanges
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Passive Activity Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized handling of passive loss limitations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Opportunity Zone Investment</h4>
                          <p className="text-sm text-muted-foreground">
                            Qualified opportunity fund compliance and tracking
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">REIT Qualification Testing</h4>
                          <p className="text-sm text-muted-foreground">
                            Ongoing monitoring of distribution and income requirements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="healthcare">
              <Card>
                <CardHeader>
                  <CardTitle>Specialized tools for medical practices, facilities, and services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Stethoscope className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Provider Compensation Structuring</h4>
                          <p className="text-sm text-muted-foreground">
                            Tax-optimized arrangements for physicians and practitioners
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Stethoscope className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Medical Equipment Depreciation</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized fixed asset classification and tracking
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Research Credit Qualification</h4>
                          <p className="text-sm text-muted-foreground">
                            Clinical trial and medical innovation tax incentives
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Group Practice Tax Allocation</h4>
                          <p className="text-sm text-muted-foreground">
                            Equitable distribution of tax benefits and obligations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Healthcare Facility Incentives</h4>
                          <p className="text-sm text-muted-foreground">
                            Location-based and service-specific tax advantages
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manufacturing">
              <Card>
                <CardHeader>
                  <CardTitle>Purpose-built solutions for production and distribution operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Factory className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Domestic Production Activities</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized deduction analysis and documentation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Cost Accounting Integration</h4>
                          <p className="text-sm text-muted-foreground">Tax-aligned inventory valuation methodologies</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Factory className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Manufacturing Equipment Benefits</h4>
                          <p className="text-sm text-muted-foreground">
                            Optimized depreciation and expensing strategies
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Supply Chain Tax Efficiency</h4>
                          <p className="text-sm text-muted-foreground">
                            Multi-jurisdiction transfer pricing and tax minimization
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">R&D Tax Credit Maximization</h4>
                          <p className="text-sm text-muted-foreground">
                            Production innovation and improvement incentives
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

      {/* Additional Industries Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ADDITIONAL SPECIALIZED INDUSTRIES</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaboration with Prime Logic Solutions USA extends specialized tax expertise to numerous other
              industries, including:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="h-5 w-5 text-[#fbc710]" />
                  Construction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Contract-specific tax accounting methods</li>
                  <li>Multi-state workforce compliance</li>
                  <li>Long-term project tax planning</li>
                  <li>Equipment depreciation optimization</li>
                  <li>Job costing tax integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#fbc710]" />
                  Technology & Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>IP development tax incentives</li>
                  <li>Software development capitalization</li>
                  <li>Stock compensation tax planning</li>
                  <li>International expansion tax structures</li>
                  <li>SaaS revenue recognition alignment</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#fbc710]" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Partnership tax allocations</li>
                  <li>Cash vs. accrual method optimization</li>
                  <li>Personal goodwill planning</li>
                  <li>Practice entity structuring</li>
                  <li>Owner compensation strategies</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#fbc710]" />
                  Energy & Natural Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Depletion calculation and planning</li>
                  <li>Alternative energy tax incentives</li>
                  <li>Carbon credit accounting</li>
                  <li>IDC vs. capitalization strategies</li>
                  <li>Export incentive maximization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation & Support Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION APPROACH</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA delivers specialized industry expertise:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Industry-Specific Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Detailed evaluation of your current industry tax position</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Identification of missed sector-specific opportunities</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Benchmark comparison with industry best practices</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regulatory compliance review for industry-specific requirements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Strategic tax roadmap development</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Specialized Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Industry-tailored system configuration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with sector-specific operational systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Team training on industry tax strategies</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Specialized documentation frameworks</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Industry peer group insights and benchmarking</p>
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
                    &quot;The real estate tax solutions implemented through Accounting Zone transformed our property
                    investment strategy. Their cost segregation tools alone accelerated over $3.2M in deductions we
                    would have otherwise missed, significantly enhancing our cash flow position.&quot;
                  </p>
                  <p className="font-semibold">— CFO, Commercial Real Estate Development Firm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a multi-physician practice with complex compensation arrangements, the healthcare-specific
                    tax solutions addressed complexities that general accounting systems simply missed. The provider
                    compensation modeling tools have been particularly valuable for our partnership decisions.&quot;
                  </p>
                  <p className="font-semibold">— Managing Partner, Specialty Medical Group</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The manufacturing-specific R&D credit analysis identified qualified activities throughout our
                    production process that standard approaches overlooked. The documentation tools created defensible
                    positions that have withstood IRS examination without adjustment.&quot;
                  </p>
                  <p className="font-semibold">— Tax Director, Precision Manufacturing Company</p>
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
              Transform your industry-specific tax approach with solutions designed specifically for your business
              sector. Contact Accounting Zone to schedule an Industry Tax Assessment and discover how our collaboration
              with Prime Logic Solutions USA can enhance your specialized tax strategy.
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
              <p>Email: industry.tax@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
