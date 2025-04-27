"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Search,
  CheckCircle,
  ArrowRight,
  Calculator,
  Building2,
  Building,
  Briefcase,
  Home,
  LineChart,
  Globe,
  DollarSign,
  CalendarClock,
  Users,
  ArrowUpDown,
  Wallet,
  Target,
  Gauge,
  Activity,
  Scale,
} from "lucide-react"
import Link from "next/link";


export default function ScenarioModelingSoftware() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">SCENARIO MODELING SOFTWARE</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">VISUALIZE YOUR FINANCIAL FUTURE</p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers powerful scenario modeling
              software that transforms tax planning from reactive compliance to proactive strategy. Our advanced
              simulation tools allow you to explore multiple &apos;what-if&apos; scenarios, empowering confident decision-making
              with clear visibility into potential tax outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TURN UNCERTAINTY INTO OPPORTUNITY</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Target className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Strategic Foresight</h3>
                <p className="text-muted-foreground">
                  Test financial decisions before implementation to optimize tax positioning
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Risk Mitigation</h3>
                <p className="text-muted-foreground">
                  Identify potential tax implications across multiple regulatory scenarios
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Gauge className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Decision Confidence</h3>
                <p className="text-muted-foreground">
                  Make business moves with complete understanding of tax consequences
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Opportunity Discovery</h3>
                <p className="text-muted-foreground">Uncover tax-advantaged approaches to business transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calculator className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Precision Planning</h3>
                <p className="text-muted-foreground">Fine-tune timing of income recognition and deduction strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">POWERFUL MODELING CAPABILITIES</h2>
          </div>
          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="structure"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Business Structure
              </TabsTrigger>
              <TabsTrigger
                value="transaction"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Transaction Modeling
              </TabsTrigger>
              <TabsTrigger
                value="strategic"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Strategic Planning
              </TabsTrigger>
            </TabsList>
            <TabsContent value="structure">
              <Card>
                <CardHeader>
                  <CardTitle>Business Structure Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Compare tax implications across different entity structures:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Entity Comparison Tools</h4>
                          <p className="text-sm text-muted-foreground">
                            Evaluate S-Corp vs. LLC vs. C-Corp structures side-by-side
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowUpDown className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Conversion Impact Assessment</h4>
                          <p className="text-sm text-muted-foreground">
                            Model tax effects of changing business structures
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">International Entity Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Simulate global structure options and implications
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">State Tax Optimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Model multi-state scenarios to minimize state tax burdens
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Ownership Transition Planning</h4>
                          <p className="text-sm text-muted-foreground">Evaluate tax impacts of ownership changes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transaction">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Forecast tax implications of major business decisions:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">M&A Tax Simulation</h4>
                          <p className="text-sm text-muted-foreground">
                            Model acquisition structures and resulting tax positions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Home className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Real Estate Transaction Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Compare purchase, sale, and exchange scenarios
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Capital Expenditure Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Optimize timing and structure of major purchases
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Business Expansion Modeling</h4>
                          <p className="text-sm text-muted-foreground">
                            Evaluate tax implications of new locations or markets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Divestiture Strategy Testing</h4>
                          <p className="text-sm text-muted-foreground">
                            Compare tax implications of different exit approaches
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="strategic">
              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Strategic Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Build multi-year tax strategies with confidence:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Scale className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Tax Reform Impact Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Model business performance under changing tax laws
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Retirement & Succession Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Optimize transitions for owners and executives
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CalendarClock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-Year Tax Minimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Create strategies that optimize taxes over time
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Wallet className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Cash Flow Projection Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Connect tax planning with liquidity management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Economic Scenario Testing</h4>
                          <p className="text-sm text-muted-foreground">
                            Evaluate tax positions across different economic conditions
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

      {/* Visualization & Reporting Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INTUITIVE VISUALIZATION & REPORTING</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaborative software solutions with Prime Logic Solutions USA transform complex tax data into clear,
              actionable insights.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Side-by-side scenario comparisons with differential highlighting</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Dynamic adjustments with real-time recalculation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Threshold alerts for key tax brackets and limitations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Sensitivity analysis to identify critical decision factors</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Executive summaries with clear recommendations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Detailed technical documentation for implementation teams</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Shareable reports for stakeholder communication</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Audit-ready documentation of planning strategies</p>
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
              Through our partnership with Prime Logic Solutions USA, we ensure seamless integration of scenario
              modeling into your tax planning process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Customized Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Configuration aligned with your industry and business model</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with existing financial and tax systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Custom scenario templates for your common planning needs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Historical data import for baseline establishment</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Dedicated modeling specialists for complex scenarios</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular tax law update webinars and training</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Strategy sessions with tax planning professionals</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Technical support for all software functionality</p>
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
                    &quot;The scenario modeling software recommended by Accounting Zone helped us evaluate multiple
                    expansion strategies, identifying a structure that saved over $2.3M in taxes over five years while
                    maintaining operational flexibility.&quot;
                  </p>
                  <p className="font-semibold">— Manufacturing Enterprise CFO</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;When considering selling our business, this tool allowed us to compare seven different
                    transaction structures. The clarity it provided directly increased our post-tax proceeds by
                    18%.&quot;
                  </p>
                  <p className="font-semibold">— Business Owner, Technology Services</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;We used the multi-state modeling capabilities to optimize our remote workforce strategy,
                    balancing talent access with state tax considerations. The ROI was substantial and immediate.&quot;
                  </p>
                  <p className="font-semibold">— Human Resources Director, Professional Services Firm</p>
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
              Elevate your tax planning with sophisticated scenario modeling that transforms uncertainty into strategic
              opportunity. Contact Accounting Zone to schedule a personalized demonstration of how our collaboration
              with Prime Logic Solutions USA can enhance your tax strategy development.
            </p>
            <div className="pt-4">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Demonstration
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: taxstrategy@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/scenario-modeling</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>
                All scenario modeling solutions are delivered through our exclusive partnership with Prime Logic
                Solutions USA, providing you with industry-leading technology and specialized expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}