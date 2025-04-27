"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileCheck,
  CheckCircle,
  ArrowRight,
  LayoutDashboard,
  BarChart4,
  LineChart,
  PieChart,
  Calendar,
  ClipboardList,
  BarChart,
  AlertCircle,
  Layers,
  ArrowDownUp,
  Activity,
  Gauge,
  CreditCard,
  Map,
  Binary,
} from "lucide-react"
import Link from "next/link";


export default function TaxDashboards() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">TAX DASHBOARDS</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              VISUAL INTELLIGENCE FOR STRATEGIC TAX MANAGEMENT
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers sophisticated tax dashboard
              solutions that transform complex tax data into clear, actionable visualizations. Our customized analytics
              platforms provide real-time insights into tax liabilities, compliance status, and planning opportunities
              across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">VISIBILITY DRIVES VALUE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Gauge className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Real-Time Tax Position Awareness</h3>
                <p className="text-muted-foreground">
                  Monitor current tax liabilities and obligations across all jurisdictions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Compliance Assurance</h3>
                <p className="text-muted-foreground">
                  Track filing deadlines and submission status with automated alerts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <LineChart className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Trend Identification</h3>
                <p className="text-muted-foreground">
                  Recognize patterns in tax data that reveal opportunities or risks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <LayoutDashboard className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Decision Support</h3>
                <p className="text-muted-foreground">
                  Empower strategic choices with clear visualization of tax implications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BarChart4 className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Performance Measurement</h3>
                <p className="text-muted-foreground">
                  Track effective tax rate and other key metrics against benchmarks
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE VISUALIZATION SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="strategic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="strategic"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Strategic Monitoring
              </TabsTrigger>
              <TabsTrigger
                value="compliance"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Compliance Management
              </TabsTrigger>
              <TabsTrigger
                value="analytical"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Analytical Intelligence
              </TabsTrigger>
            </TabsList>
            <TabsContent value="strategic">
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Tax Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Executive-level dashboards for comprehensive tax oversight:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Tax Position Visualization</h4>
                          <p className="text-sm text-muted-foreground">
                            Graphical representation of current tax liabilities and credits
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart4 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Effective Tax Rate Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Real-time calculation and trending of overall tax efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Map className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Jurisdiction Heat Maps</h4>
                          <p className="text-sm text-muted-foreground">
                            Geographic visualization of tax exposure across locations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <PieChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Provision vs. Actual Comparisons</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual tracking of tax estimates against final results
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CreditCard className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Cash Tax Planning</h4>
                          <p className="text-sm text-muted-foreground">
                            Projected payment visualization for improved cash management
                          </p>
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
                  <CardTitle>Compliance Management Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Real-time tracking of filing obligations and status:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Filing Calendar Integration</h4>
                          <p className="text-sm text-muted-foreground">Visual deadline tracking across all tax types</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Status Monitoring</h4>
                          <p className="text-sm text-muted-foreground">
                            Color-coded compliance tracking from preparation through filing
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardList className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Document Completion Visualization</h4>
                          <p className="text-sm text-muted-foreground">
                            Progress tracking for complex filing requirements
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Audit Status Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Real-time visibility into ongoing examination activities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Layers className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Workload Balancing</h4>
                          <p className="text-sm text-muted-foreground">
                            Resource allocation visualization for tax department management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytical">
              <Card>
                <CardHeader>
                  <CardTitle>Analytical Tax Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Deep-dive analytical capabilities for tax optimization:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <ArrowDownUp className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Tax Variance Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual comparison of results across periods and scenarios
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <PieChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Entity Contribution Visualization</h4>
                          <p className="text-sm text-muted-foreground">
                            Graphical breakdown of tax impacts by business unit
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Binary className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Planning Scenario Comparison</h4>
                          <p className="text-sm text-muted-foreground">
                            Side-by-side visualization of tax strategy outcomes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Data Anomaly Detection</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual highlighting of unusual patterns requiring attention
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Trend Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Multi-year visualization of key tax metrics and drivers
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
              Our partnership with Prime Logic Solutions USA leverages cutting-edge visualization technology.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Drill-down capabilities from summary to transaction-level detail</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Dynamic filtering for customized analysis perspectives</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Threshold-based alerting with visual indicators</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Mobile-optimized views for on-the-go access</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated refresh ensuring current data representation</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Data Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Connection with tax preparation software</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>ERP and financial system data pipelines</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated data transformation and cleansing</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Multi-source data consolidation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Historical data warehousing</p>
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
              Our collaboration with Prime Logic Solutions USA ensures a customized approach to your visualization
              needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tailored Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Tax KPI identification and prioritization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Dashboard design aligned with user roles and needs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Data source evaluation and connection</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Initial visualization library creation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User adoption and training support</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular dashboard review and optimization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>New visualization development as needs evolve</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Performance monitoring and improvement</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User feedback incorporation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Best practice sharing and implementation</p>
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
                    &quot;The tax dashboards implemented through Accounting Zone transformed our visibility into global
                    tax positions. What previously required multiple spreadsheets and days of analysis is now available
                    instantly with greater accuracy. Our ability to make informed decisions has improved
                    dramatically.&quot;
                  </p>
                  <p className="font-semibold">— Tax Director, Multinational Corporation</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;During our annual budget process, the scenario modeling visualizations allowed our executive
                    team to immediately understand the tax implications of various strategic options. This visual
                    approach to tax planning has elevated tax considerations in our strategic decision-making.&quot;
                  </p>
                  <p className="font-semibold">— CFO, Growth-Stage Technology Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The compliance tracking dashboard has eliminated missed filings across our multi-state
                    operations. The visual alerts ensure nothing falls through the cracks, and our tax department now
                    spends time on strategic activities rather than status tracking.&quot;
                  </p>
                  <p className="font-semibold">— VP of Finance, Retail Chain</p>
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
              Transform your tax function with visualization tools that provide instant insights and strategic clarity.
              Contact Accounting Zone to schedule a dashboard demonstration and discover how our collaboration with
              Prime Logic Solutions USA can enhance your tax management through visual intelligence.
            </p>
            <div className="pt-4">
              <Link href="/contact-get-a-consultation">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Dashboard Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: dashboards@accountingzone.com | Phone: (555) 123-4567</p>
              <p className="mt-2">Website: www.accountingzone.com/tax-dashboards</p>
            </div>
            <div className="text-sm pt-4 text-black/80">
              <p>
                All tax dashboard solutions are delivered through our exclusive partnership with Prime Logic Solutions
                USA, combining advanced visualization technology with specialized tax expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}