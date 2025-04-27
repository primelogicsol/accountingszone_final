"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Calculator,
  Clock,
  Building2,
  Globe,
  Briefcase,
  Home,
  Landmark,
  UserCheck,
  BadgePercent,
  Leaf,
  Users,
  GraduationCap,
  LineChart,
} from "lucide-react"
import Link from "next/link";


export default function TaxOptimizationSoftware() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">TAX OPTIMIZATION SOFTWARE</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              MAXIMIZE TAX SAVINGS THROUGH INTELLIGENT ANALYSIS
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers sophisticated tax optimization
              software that systematically identifies deductions, credits, and savings opportunities others miss. Our
              advanced technology transforms complex tax code into strategic advantage for businesses and individuals
              alike.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">UNLOCK HIDDEN TAX BENEFITS</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Comprehensive Deduction Discovery</h3>
                <p className="text-muted-foreground">Identify industry-specific deductions frequently overlooked</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BadgePercent className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Credit Maximization</h3>
                <p className="text-muted-foreground">
                  Capture all available tax credits with automated eligibility analysis
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Strategic Timing Recommendations</h3>
                <p className="text-muted-foreground">Optimize transaction timing for favorable tax treatment</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Audit-Ready Documentation</h3>
                <p className="text-muted-foreground">Build defensible support for every tax position taken</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Lightbulb className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Proactive Planning Alerts</h3>
                <p className="text-muted-foreground">Receive notifications of emerging tax-saving opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INTELLIGENT OPTIMIZATION CAPABILITIES</h2>
          </div>
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger value="business" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Business Tax
              </TabsTrigger>
              <TabsTrigger
                value="individual"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Individual Tax
              </TabsTrigger>
              <TabsTrigger value="credits" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Specialized Credits
              </TabsTrigger>
            </TabsList>
            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Business Tax Advantage Finder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Systematically uncover business-specific optimization opportunities:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Industry-Specific Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Tax strategies tailored to your business sector
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Entity Structure Optimization</h4>
                          <p className="text-sm text-muted-foreground">Recommendations for tax-advantaged structures</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">R&D Credit Identification</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated discovery of qualifying research activities
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Calculator className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Fixed Asset Optimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Depreciation strategies that maximize current benefits
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">International Tax Efficiency</h4>
                          <p className="text-sm text-muted-foreground">
                            Cross-border transaction and structure planning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="individual">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Tax Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Sophisticated personal tax optimization beyond standard preparation:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Investment Tax Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Portfolio review for tax efficiency improvements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Landmark className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Retirement Contribution Optimization</h4>
                          <p className="text-sm text-muted-foreground">Personalized strategies across account types</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Education Incentive Maximization</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive education credit and deduction planning
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Real Estate Tax Strategies</h4>
                          <p className="text-sm text-muted-foreground">
                            Property-related deduction and exclusion opportunities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calculator className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Alternative Minimum Tax Mitigation</h4>
                          <p className="text-sm text-muted-foreground">Strategies to minimize AMT exposure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="credits">
              <Card>
                <CardHeader>
                  <CardTitle>Specialized Credit Capture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Expert systems focused on high-value credit opportunities:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Employee Retention Credit Analysis</h4>
                          <p className="text-sm text-muted-foreground">Eligibility assessment and calculation tools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Leaf className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Energy Efficiency Incentives</h4>
                          <p className="text-sm text-muted-foreground">Property and equipment-related tax benefits</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Work Opportunity Tax Credits</h4>
                          <p className="text-sm text-muted-foreground">
                            Hiring-based incentive identification and documentation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">State-Specific Credit Programs</h4>
                          <p className="text-sm text-muted-foreground">Location-based incentive opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Export and Domestic Production Benefits</h4>
                          <p className="text-sm text-muted-foreground">
                            Qualification analysis for specialized deductions
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INTELLIGENT TECHNOLOGY PLATFORM</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA leverages cutting-edge technology to transform tax
              optimization.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Natural language processing of financial data to identify optimization patterns</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Machine learning algorithms trained on thousands of tax scenarios</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous improvement through outcome analysis</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regulatory change monitoring with impact assessment</p>
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
                    <p>Direct connection with accounting and ERP systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated data extraction from financial statements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Real-time optimization during transaction processing</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with existing tax preparation workflows</p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION & ONGOING EXCELLENCE</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaboration with Prime Logic Solutions USA ensures you receive comprehensive support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Initial tax position assessment to establish baseline</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Historical filing review for amendment opportunities</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration aligned with your specific tax profile</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with existing financial systems and processes</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular tax strategy reviews with specialized experts</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automatic updates for tax law changes and new incentives</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Quarterly optimization reports with action recommendations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Year-round monitoring for tax-saving opportunities</p>
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
                    &quot;The tax optimization software implemented through Accounting Zone identified over $430,000 in
                    previously unclaimed R&D credits across a three-year period. The documentation support made the
                    amendment process straightforward even under IRS review.&quot;
                  </p>
                  <p className="font-semibold">— Technology Manufacturing CFO</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a high-net-worth individual with multiple investment properties, this system uncovered cost
                    segregation opportunities I hadn&apos;t considered. The first-year tax savings exceeded the software
                    investment by 15x.&quot;
                  </p>
                  <p className="font-semibold">— Real Estate Investor</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The employee retention credit analysis identified our eligibility despite our payroll provider
                    telling us we didn&apos;t qualify. The result was over $380,000 in credits we would have otherwise
                    missed.&quot;
                  </p>
                  <p className="font-semibold">— Healthcare Services Director</p>
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
              Transform your approach to tax planning with intelligent optimization that goes beyond compliance to
              strategic advantage. Contact Accounting Zone to schedule a complimentary Tax Savings Assessment and
              discover how our collaboration with Prime Logic Solutions USA can reduce your tax burden.
            </p>
            <div className="pt-4">
              <Link href="/contact/get-a-consultation">

                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Tax Savings Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: optimization@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/tax-optimization</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>
                All tax optimization solutions are delivered through our exclusive partnership with Prime Logic
                Solutions USA, combining advanced technology with specialized tax expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}