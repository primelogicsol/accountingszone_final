"use client"

import { ArrowRight, BarChart3, LineChart, Shield, Laptop, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AccountingInsights() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-40"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
            ACCOUNTING INSIGHTS
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Beyond Numbers: Financial Intelligence for Strategic Leadership
          </p>
          <Button size="lg" className="mx-auto px-8 py-6 text-base bg-[#fbc710] hover:bg-[#fbc710]/90 text-black">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
        </section>

        {/* Holistic Financial View Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Holistic View
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                HOLISTIC FINANCIAL VIEW
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive Vision for Informed Decision-Making
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Accounting provides an overarching view of an organization&apos;s financial health, aiding stakeholders in
                  making informed decisions. This comprehensive perspective transforms isolated financial data into
                  meaningful business intelligence.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <PieChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Integrated Performance Analysis:</span>
                      <span className="block text-muted-foreground">
                        Connecting financial results with operational activities
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <PieChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Complete Financial Storytelling:</span>
                      <span className="block text-muted-foreground">Translating numbers into narrative insights</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <PieChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Cross-Functional Impact Visibility:</span>
                      <span className="block text-muted-foreground">
                        Understanding how financial decisions affect all areas
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <PieChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Early Warning Indicators:</span>
                      <span className="block text-muted-foreground">
                        Identifying financial trends before they become significant issues
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;Financial statements reveal not just where an organization stands, but where it&apos;s heading when
                  properly interpreted.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Financial Management Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Strategic Management
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                STRATEGIC FINANCIAL MANAGEMENT
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interpreting Today, Planning for Tomorrow
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  By interpreting financial data, accounting supports budgeting, forecasting, and long-term planning.
                  Strategic financial management uses accounting intelligence to guide future direction and resource
                  allocation.
                </p>
                <h3 className="text-xl font-bold mb-5">Key Strategic Applications:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Scenario Planning:</span>
                      <span className="block text-muted-foreground">
                        Financial modeling of multiple potential futures
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Resource Allocation:</span>
                      <span className="block text-muted-foreground">Data-driven decisions on capital investment</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Growth Strategy Support:</span>
                      <span className="block text-muted-foreground">Financial roadmaps for expansion initiatives</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Risk Quantification:</span>
                      <span className="block text-muted-foreground">
                        Measuring potential impacts of business challenges
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Performance Measurement:</span>
                      <span className="block text-muted-foreground">Metrics that track progress toward objectives</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Competitive Benchmarking:</span>
                      <span className="block text-muted-foreground">
                        Financial performance relative to industry standards
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulatory Adherence Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Compliance
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">REGULATORY ADHERENCE</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Compliance as Business Strength</p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Accurate accounting ensures compliance with financial reporting standards like GAAP or IFRS. This
                  regulatory adherence builds credibility with stakeholders while providing a reliable foundation for
                  business decisions.
                </p>
                <h3 className="text-xl font-bold mb-5">Compliance Benefits:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Stakeholder Confidence:</span>
                      <span className="block text-muted-foreground">
                        Trust established through transparent, accurate reporting
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Financing Access:</span>
                      <span className="block text-muted-foreground">Improved terms from lenders and investors</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Audit Efficiency:</span>
                      <span className="block text-muted-foreground">Streamlined verification processes</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Legal Protection:</span>
                      <span className="block text-muted-foreground">
                        Reduced risk of regulatory penalties and litigation
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Shield className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Global Business Enablement:</span>
                      <span className="block text-muted-foreground">
                        Ability to operate across multiple jurisdictions
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Integration Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                TECHNOLOGY INTEGRATION
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real-Time Financial Intelligence</p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Cloud accounting platforms and ERP systems have revolutionized financial reporting, making data
                  accessible in real time. Modern technology transforms accounting from historical documentation to
                  dynamic decision support.
                </p>
                <h3 className="text-xl font-bold mb-5">Technology Advantages:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Automation:</span>
                      <span className="block text-muted-foreground">
                        Elimination of manual processes and associated errors
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Real-Time Visibility:</span>
                      <span className="block text-muted-foreground">
                        Immediate access to current financial position
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Enhanced Analysis:</span>
                      <span className="block text-muted-foreground">
                        Advanced tools for data exploration and insight discovery
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Collaboration:</span>
                      <span className="block text-muted-foreground">
                        Shared financial information across departments
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Scalability:</span>
                      <span className="block text-muted-foreground">
                        Financial systems that grow with organizational needs
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Mobile Access:</span>
                      <span className="block text-muted-foreground">
                        Financial intelligence available anywhere, anytime
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Decision Support Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Decision Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">DECISION SUPPORT</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforming Data into Strategic Advantage
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Beyond numbers, accounting insights drive strategies like cost optimization, revenue diversification,
                  and investment analysis. Financial data becomes a critical input for strategic decision-making across
                  all business functions.
                </p>
                <h3 className="text-xl font-bold mb-5">Strategic Applications:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Cost Structure Analysis:</span>
                      <span className="block text-muted-foreground">Identifying optimization opportunities</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Pricing Strategy:</span>
                      <span className="block text-muted-foreground">
                        Data-driven approaches to revenue maximization
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Investment Prioritization:</span>
                      <span className="block text-muted-foreground">ROI-based allocation of limited resources</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Market Expansion Analysis:</span>
                      <span className="block text-muted-foreground">Financial assessment of new opportunities</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Make-vs-Buy Decisions:</span>
                      <span className="block text-muted-foreground">Economic analysis of sourcing alternatives</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <LineChart className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Product Line Evaluation:</span>
                      <span className="block text-muted-foreground">Profitability assessment across offerings</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#fbc710] text-black py-16 rounded-lg -mx-4 px-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">ELEVATE YOUR FINANCIAL PERSPECTIVE</h2>
            <p className="mb-10 text-lg leading-relaxed">
              Transform your approach to financial management with insights that go beyond basic accounting. Our team
              combines technical expertise with business acumen to deliver financial intelligence that drives
              organizational success.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-base font-medium bg-black text-white hover:bg-black/90"
            >
              Connect With Our Specialists
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
