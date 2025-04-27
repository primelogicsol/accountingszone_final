"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, FileCheck, CheckCircle, ArrowRight, Calculator, Users, FileSpreadsheet, UserCheck, Clock, Briefcase, FileDigit, Building, Globe, Plane, Building2, Home, RefreshCw, Earth, Locate, Laptop } from 'lucide-react'

export default function WithholdingTaxCalculators() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">WITHHOLDING TAX CALCULATORS</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              PRECISION PAYROLL TAX MANAGEMENT
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, provides sophisticated
              withholding tax calculators that ensure accurate tax withholding for businesses and individuals.
              Our advanced tools eliminate guesswork, reduce compliance risk, and optimize cash flow
              through precise withholding management.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              WHY PRECISION MATTERS
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Compliance Assurance</h3>
                <p className="text-muted-foreground">
                  Stay aligned with constantly changing federal, state, and local withholding requirements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <UserCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Employee Satisfaction</h3>
                <p className="text-muted-foreground">Provide accuracy that prevents unexpected tax bills or excessive withholding</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RefreshCw className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Cash Flow Optimization</h3>
                <p className="text-muted-foreground">
                  Balance withholding needs with liquidity considerations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Administrative Efficiency</h3>
                <p className="text-muted-foreground">
                  Reduce time spent on manual calculations and adjustments
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Audit Protection</h3>
                <p className="text-muted-foreground">
                  Maintain detailed documentation of withholding decisions and calculations
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE CALCULATION SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="employer" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="employer"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Employer Withholding
              </TabsTrigger>
              <TabsTrigger
                value="remote"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Remote Workforce
              </TabsTrigger>
              <TabsTrigger
                value="international"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                International
              </TabsTrigger>
            </TabsList>
            <TabsContent value="employer">
              <Card>
                <CardHeader>
                  <CardTitle>Employer Withholding Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Complete systems for businesses managing employee withholdings:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-Jurisdiction Processing</h4>
                          <p className="text-sm text-muted-foreground">
                            Calculate withholdings across federal, state, and local tax authorities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Special Compensation Handling</h4>
                          <p className="text-sm text-muted-foreground">
                            Accurate withholding for bonuses, equity compensation, and benefits
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileDigit className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Supplemental Wage Calculations</h4>
                          <p className="text-sm text-muted-foreground">
                            Precise withholding for commissions, overtime, and non-standard payments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <UserCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">New Hire Onboarding Tools</h4>
                          <p className="text-sm text-muted-foreground">
                            Simplified tax withholding setup for new employees
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Form W-4 Digitization</h4>
                          <p className="text-sm text-muted-foreground">
                            Electronic collection and implementation of withholding preferences
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="remote">
              <Card>
                <CardHeader>
                  <CardTitle>Remote Workforce Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Specialized tools for the complexities of distributed teams:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-State Employment Calculation</h4>
                          <p className="text-sm text-muted-foreground">
                            Handle employees working across multiple jurisdictions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Laptop className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Telecommuter Tax Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Navigate the complex rules for remote worker withholding
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Locate className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Temporary Assignment Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Calculate appropriate withholding for business travel and temporary relocations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">State Reciprocity Implementation</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatically apply appropriate state tax agreements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Non-Resident Withholding</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized handling for employees working outside their residence state
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="international">
              <Card>
                <CardHeader>
                  <CardTitle>International Withholding Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Global solutions for cross-border employment situations:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Plane className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Expatriate Tax Withholding</h4>
                          <p className="text-sm text-muted-foreground">
                            Calculate appropriate withholding for U.S. citizens abroad
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Foreign National Employees</h4>
                          <p className="text-sm text-muted-foreground">
                            Implement correct withholding for non-citizens working in the U.S.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Tax Treaty Application</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatically apply relevant tax treaty provisions to withholding calculations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Earth className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Global Mobility Support</h4>
                          <p className="text-sm text-muted-foreground">
                            Manage withholding during international assignments and transfers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calculator className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Foreign Tax Credit Estimation</h4>
                          <p className="text-sm text-muted-foreground">
                            Project foreign tax implications for withholding planning
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

      {/* Technology Advantages Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TECHNOLOGY ADVANTAGES</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA leverages cutting-edge technology for withholding precision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Calculation Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Real-time tax table updates across all jurisdictions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Advanced algorithms for complex withholding scenarios</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Machine learning for continuous calculation improvement</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated validation against historical patterns</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Scenario modeling for withholding optimization</p>
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
                    <p>HR information system synchronization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Time and attendance system coordination</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Employee self-service portal integration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Tax filing system connectivity</p>
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
                    <p>Current withholding assessment and optimization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration for your specific workforce</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Employee communication materials</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Payroll team training and certification</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Parallel testing to ensure accuracy</p>
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
                    <p>Continuous tax law monitoring and updates</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular withholding reviews and optimization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Specialized support for complex situations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Annual withholding strategy planning</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Quarterly system performance reviews</p>
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
                    &quot;After implementing the withholding tax calculators through Accounting Zone, our payroll processing time decreased by 40% while accuracy improved dramatically. The multi-state capabilities have been particularly valuable as our workforce has become increasingly distributed across the country.&quot;
                  </p>
                  <p className="font-semibold">— Payroll Director, Technology Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The international withholding capabilities transformed our global mobility program. We now confidently manage expatriate and foreign national withholding with precision that was previously impossible, eliminating both under and over-withholding issues that had created administrative headaches.&quot;
                  </p>
                  <p className="font-semibold">— Global Mobility Manager, Multinational Corporation</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The supplemental wage calculation features have been game-changing for our commission-based sales force. We&apos;ve eliminated the year-end withholding surprises that previously created employee dissatisfaction, while ensuring we remain fully compliant with complex multi-jurisdiction requirements.&quot;
                  </p>
                  <p className="font-semibold">— HR Director, Sales Organization</p>
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
              Transform your approach to withholding tax management with precision tools that ensure compliance while optimizing cash flow. Contact Accounting Zone to schedule a consultation and discover how our collaboration with Prime Logic Solutions USA can enhance your withholding tax processes.
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
              <p>Email: withholding@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/withholding-calculators</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>All withholding tax calculator solutions are delivered through our exclusive partnership with Prime Logic Solutions USA, combining advanced technology with specialized tax expertise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}