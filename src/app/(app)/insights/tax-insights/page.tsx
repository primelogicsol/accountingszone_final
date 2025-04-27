"use client";

import {
  ArrowRight,
  BarChart3,
  Building,
  Globe,
  LineChart,
  Shield,
  Briefcase,
  ShoppingBag,
  Server,
  Stethoscope,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";


export default function TaxInsights() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-40"></div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">TAX INSIGHTS</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Strategic Perspectives for Modern Businesses
          </p>
          <Button size="lg" className="mx-auto px-8 py-6 text-base bg-[#fbc710] hover:bg-[#fbc710]/90 text-black">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
        </section>

        {/* Compliance Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">Compliance</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                THE FOUNDATION OF TAX STRATEGY
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Navigating the Regulatory Landscape</p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Ensuring adherence to local, national, and international tax regulations forms the bedrock of sound
                  financial governance. Beyond merely avoiding penalties, comprehensive compliance builds credibility
                  with authorities, investors, and partners alike.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Regulatory Evolution Tracking:</span>
                      <span className="block text-muted-foreground">
                        Tax codes undergo constant revision, requiring vigilant monitoring
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Documentation Excellence:</span>
                      <span className="block text-muted-foreground">
                        Maintaining meticulous records that substantiate all positions taken
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Jurisdictional Alignment:</span>
                      <span className="block text-muted-foreground">
                        Harmonizing compliance across all operational locations
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Stakeholder Confidence:</span>
                      <span className="block text-muted-foreground">
                        Demonstrating governance that reinforces trust in your organization
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;Compliance is not merely a defensive strategy but a proactive business asset that creates operational
                  freedom through regulatory confidence.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Planning Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Strategic Planning
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                TRANSFORMING TAX FROM EXPENSE TO INVESTMENT
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elevating Tax Management from Compliance to Strategy
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Strategic tax planning represents a paradigm shift from viewing taxation solely as a cost to
                  recognizing it as an area for value creation. By applying foresight and expertise, businesses can
                  substantially enhance their financial performance through credits, deductions, and deferrals.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Timing Optimization:</span>
                      <span className="block text-muted-foreground">
                        Accelerating deductions and deferring income recognition when advantageous
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Structure Evaluation:</span>
                      <span className="block text-muted-foreground">
                        Selecting business entities and operational models with favorable tax implications
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Credit Maximization:</span>
                      <span className="block text-muted-foreground">
                        Capturing all available incentives aligned with business activities
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Transaction Planning:</span>
                      <span className="block text-muted-foreground">
                        Structuring major business events with tax efficiency in mind
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Lifecycle Management:</span>
                      <span className="block text-muted-foreground">
                        Adapting strategies through startup, growth, maturity, and transition phases
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;The difference between tax compliance and tax planning is the difference between recording history
                  and shaping the future.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cash Flow Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">Cash Flow</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                IMPACT ON CASH FLOW: THE LIQUIDITY IMPERATIVE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Converting Tax Strategy into Financial Strength
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Timely filing and tax optimization directly influence a business&apos;s liquidity and operational health.
                  Sophisticated tax management enhances organizational cash flow – a critical factor in operational
                  flexibility, investment capability, and competitive resilience.
                </p>
                <h3 className="text-xl font-bold mb-5">Cash Flow Enhancement Strategies:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Timing Optimization:</span>
                      <span className="block text-muted-foreground">
                        Strategic scheduling of tax payments and refunds to align with cash flow needs
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Estimated Payment Precision:</span>
                      <span className="block text-muted-foreground">
                        Calculating optimal quarterly payments to prevent both penalties and over-withholding
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Acceleration Strategies:</span>
                      <span className="block text-muted-foreground">
                        Expediting refunds and credits through proactive filing approaches
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Method Selection:</span>
                      <span className="block text-muted-foreground">
                        Choosing accounting methods that improve near-term cash positioning
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Depreciation Planning:</span>
                      <span className="block text-muted-foreground">
                        Utilizing accelerated methods to improve early-year cash flow
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Credit Utilization:</span>
                      <span className="block text-muted-foreground">
                        Converting available tax credits into immediate liquidity
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;Effective tax management directly impacts the most critical financial metric for growing businesses –
                  available operating capital.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Industry Insights
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                INDUSTRY-SPECIFIC NUANCES
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                Tailored Strategies for Distinct Business Environments
              </p>
              <p className="text-base max-w-3xl mx-auto mb-8">
                Different sectors face unique tax regulations and opportunities that require specialized knowledge and
                approaches.
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center mb-8">Sector-Specific Considerations:</h3>

                <Tabs defaultValue="real-estate" className="w-full">
                  <div className="bg-muted/30 p-2 rounded-lg mb-6">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full bg-transparent gap-1">
                      <TabsTrigger
                        value="real-estate"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <Home className="h-4 w-4" />
                          <span>Real Estate</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="healthcare"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <Stethoscope className="h-4 w-4" />
                          <span>Healthcare</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="manufacturing"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <Building className="h-4 w-4" />
                          <span>Manufacturing</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="technology"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <Server className="h-4 w-4" />
                          <span>Technology</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="professional"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <Briefcase className="h-4 w-4" />
                          <span>Professional</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="retail"
                        className="bg-white data-[state=active]:bg-[#fbc710] data-[state=active]:text-black shadow-sm"
                      >
                        <div className="flex flex-col items-center gap-1 py-1">
                          <ShoppingBag className="h-4 w-4" />
                          <span>Retail</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="border rounded-lg bg-white shadow-sm">
                    <TabsContent value="real-estate" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <Home className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Real Estate Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Cost segregation strategies</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Accelerate depreciation deductions by identifying components of real property
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">1031 exchange structuring</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Defer capital gains tax by reinvesting proceeds into like-kind properties
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Opportunity zone investments</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Benefit from tax incentives when investing in designated economically distressed areas
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Passive activity optimization</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Structure ownership to maximize deductibility of losses against other income
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="healthcare" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <Stethoscope className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Healthcare Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Provider compensation planning</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Optimize salary and ownership structures for tax efficiency
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Medical device excise considerations</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Navigate specialized taxes applicable to medical equipment
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Research credit opportunities</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Capture tax benefits for clinical research and development activities
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Tax-exempt entity structures</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Evaluate nonprofit status options and related tax benefits
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="manufacturing" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <Building className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Manufacturing Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Inventory method selection</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Choose optimal accounting methods to manage taxable income
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">UNICAP considerations</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Navigate uniform capitalization rules for production costs
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Production activity benefits</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Leverage tax incentives for domestic manufacturing
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Export incentive programs</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Utilize tax benefits for international sales and operations
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="technology" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <Server className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Technology Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">R&D credit maximization</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Capture tax benefits for software and technology development
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">IP development strategies</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Structure intellectual property ownership for tax efficiency
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Stock compensation planning</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Optimize equity-based compensation for tax benefits
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Software development treatment</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Navigate capitalization vs. expense treatment for development costs
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="professional" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <Briefcase className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Professional Services Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Entity structure optimization</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Select optimal business structures for tax efficiency
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Owner compensation planning</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Balance salary and distributions to minimize tax burden
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Cash vs. accrual considerations</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Choose accounting methods that align with business goals
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Retirement structure design</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Implement tax-advantaged retirement plans for owners and employees
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="retail" className="p-6 m-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#fbc710]/10 p-2 rounded-full">
                          <ShoppingBag className="h-5 w-5 text-[#fbc710]" />
                        </div>
                        <h4 className="text-xl font-semibold">Retail & E-Commerce Tax Strategies</h4>
                      </div>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Inventory valuation methods</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Select optimal inventory accounting approaches for tax purposes
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Multi-state nexus management</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Navigate tax obligations across multiple jurisdictions
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">Sales tax compliance systems</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Implement efficient processes for collecting and remitting sales taxes
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-[#fbc710]/10 p-4 rounded-md">
                          <div className="h-2 w-2 rounded-full bg-[#fbc710] mt-2 shrink-0"></div>
                          <div>
                            <span className="font-medium">International marketplace strategies</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Structure global operations to minimize tax burden
                            </p>
                          </div>
                        </li>
                      </ul>
                    </TabsContent>
                  </div>
                </Tabs>

                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md mt-8">
                  &quot;The most valuable tax strategies are not those applied universally, but those precision-crafted for
                  the specific dynamics of your industry.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Global Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">Global Tax</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                GLOBALIZATION: NAVIGATING INTERNATIONAL TAX COMPLEXITY
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic Approaches to Worldwide Taxation
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Cross-border taxation and regulatory requirements (e.g., VAT, GST, and digital service taxes) are
                  increasingly relevant for businesses operating globally. As operations expand internationally,
                  companies face complex tax considerations requiring sophisticated expertise.
                </p>
                <h3 className="text-xl font-bold mb-5">Key International Tax Considerations:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Permanent Establishment Management:</span>
                      <span className="block text-muted-foreground">
                        Understanding when business activities trigger tax presence in foreign jurisdictions
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Transfer Pricing Strategy:</span>
                      <span className="block text-muted-foreground">
                        Developing defensible cross-border transaction policies
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Foreign Tax Credit Optimization:</span>
                      <span className="block text-muted-foreground">
                        Minimizing double taxation through available credit mechanisms
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Treaty Network Navigation:</span>
                      <span className="block text-muted-foreground">
                        Utilizing international agreements to reduce withholding and taxation
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Global Income Planning:</span>
                      <span className="block text-muted-foreground">
                        Structuring international operations for tax efficiency
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Globe className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Digital Economy Taxation:</span>
                      <span className="block text-muted-foreground">
                        Adapting to evolving rules for virtual presence and digital services
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;In global business, tax strategy is not merely about minimizing obligations but about creating
                  certainty in an uncertain international environment.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#fbc710] text-black py-16 rounded-lg -mx-4 px-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">TRANSFORM YOUR TAX APPROACH</h2>
            <p className="mb-10 text-lg leading-relaxed">
              Elevate your tax function from compliance to strategic advantage. Our tax specialists combine technical
              expertise with industry knowledge to develop tailored approaches that support your business objectives.
            </p>
            <Link href="/contact/get-a-consultation">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-base font-medium bg-black text-white hover:bg-black/90">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

