"use client"

import { ArrowRight, Clock, Laptop, FileText, Building, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BookkeepingInsights() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-40"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
            BOOKKEEPING INSIGHTS
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The Essential Foundation for Financial Success
          </p>
          <Button size="lg" className="mx-auto px-8 py-6 text-base bg-[#fbc710] hover:bg-[#fbc710]/90 text-black">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 text-black" />
          </Button>
        </section>

        {/* Foundational for Accounting Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Foundation
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">
                FOUNDATIONAL FOR ACCOUNTING
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Creating the Bedrock of Financial Truth</p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Proper bookkeeping ensures accurate data entry, forming the base for financial analysis. Without
                  precise bookkeeping, even the most sophisticated accounting analyses will yield flawed results.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <FileText className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Transaction Accuracy:</span>
                      <span className="block text-muted-foreground">Meticulous recording of every financial event</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <FileText className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Consistent Categorization:</span>
                      <span className="block text-muted-foreground">
                        Proper classification using a standardized chart of accounts
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <FileText className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Source Documentation:</span>
                      <span className="block text-muted-foreground">
                        Maintaining evidence supporting each transaction
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <FileText className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Regular Reconciliation:</span>
                      <span className="block text-muted-foreground">
                        Periodic verification against external financial statements
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <FileText className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Chronological Organization:</span>
                      <span className="block text-muted-foreground">
                        Time-ordered recording creating reliable financial history
                      </span>
                    </div>
                  </li>
                </ul>
                <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                  &quot;Quality financial analysis and strategic decision-making begin with meticulous
                  bookkeeping.&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real-Time Tracking Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Real-Time Tracking
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">REAL-TIME TRACKING</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Immediate Visibility into Financial Position
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Timely bookkeeping provides immediate insights into cash flow, expenses, and receivables. Modern
                  approaches have transformed bookkeeping from historical record-keeping to real-time financial
                  monitoring.
                </p>
                <h3 className="text-xl font-bold mb-5">Benefits of Real-Time Bookkeeping:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Cash Flow Management:</span>
                      <span className="block text-muted-foreground">
                        Current understanding of available funds and upcoming obligations
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Expense Monitoring:</span>
                      <span className="block text-muted-foreground">
                        Immediate awareness of spending patterns and anomalies
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Receivables Oversight:</span>
                      <span className="block text-muted-foreground">
                        Up-to-date tracking of customer payments and aging
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Financial Position Assessment:</span>
                      <span className="block text-muted-foreground">
                        Clear picture of assets, liabilities, and equity at any moment
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Budget Comparison:</span>
                      <span className="block text-muted-foreground">
                        Real-time analysis of actual results versus financial plans
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Clock className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Decision Support:</span>
                      <span className="block text-muted-foreground">
                        Timely information for operational and strategic choices
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Automation Trends Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Automation
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">AUTOMATION TRENDS</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technology Transforming Bookkeeping Efficiency
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Automated bookkeeping tools (e.g., QuickBooks, Xero) reduce human error and save time. This
                  technological evolution has revolutionized how businesses capture, process, and utilize financial
                  data.
                </p>
                <h3 className="text-xl font-bold mb-5">Key Automation Advantages:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Data Capture Technology:</span>
                      <span className="block text-muted-foreground">
                        Digital extraction of information from receipts and invoices
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Banking Connectivity:</span>
                      <span className="block text-muted-foreground">
                        Secure direct feeds from financial institutions
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Intelligent Categorization:</span>
                      <span className="block text-muted-foreground">
                        Rule-based and AI-driven transaction classification
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Automated Reconciliation:</span>
                      <span className="block text-muted-foreground">
                        System matching of transactions with bank statements
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Recurring Entry Management:</span>
                      <span className="block text-muted-foreground">Scheduled processing of regular transactions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Laptop className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Exception Identification:</span>
                      <span className="block text-muted-foreground">
                        Automated flagging of unusual or potentially incorrect items
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SME Benefits Section */}
        <section className="mb-24 bg-muted/30 py-16 -mx-4 px-4 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                SME Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">SME BENEFITS</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Critical Value for Small and Medium Enterprises
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Small and medium enterprises rely heavily on precise bookkeeping for expense tracking and financial
                  organization. For smaller businesses, effective bookkeeping is often the difference between financial
                  clarity and chaos.
                </p>
                <h3 className="text-xl font-bold mb-5">SME-Specific Advantages:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Resource Visibility:</span>
                      <span className="block text-muted-foreground">
                        Clear tracking of limited funds and their allocation
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Tax Preparation Simplification:</span>
                      <span className="block text-muted-foreground">
                        Organized records for straightforward tax compliance
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Financing Readiness:</span>
                      <span className="block text-muted-foreground">
                        Well-maintained financial records for potential investors or lenders
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Cash Flow Control:</span>
                      <span className="block text-muted-foreground">
                        Enhanced management of the timing of receipts and payments
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Owner Time Efficiency:</span>
                      <span className="block text-muted-foreground">
                        Reduced administrative burden on business leadership
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Building className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Pattern Recognition:</span>
                      <span className="block text-muted-foreground">
                        Identification of successful business activities and opportunities
                      </span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scalability Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#fbc710] px-4 py-1.5 text-sm font-medium mb-4 text-black">
                Scalability
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 leading-tight">SCALABILITY</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bookkeeping Systems That Grow With Your Business
              </p>
            </div>

            <Card className="mb-6 shadow-sm">
              <CardContent className="p-8">
                <p className="mb-6 text-base leading-relaxed">
                  Efficient bookkeeping practices enable businesses to scale by keeping financial records structured and
                  audit-ready. A well-designed bookkeeping system adapts to increasing complexity without requiring
                  complete redesign.
                </p>
                <h3 className="text-xl font-bold mb-5">Scalability Elements:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Structured Methodology:</span>
                      <span className="block text-muted-foreground">
                        Standardized processes that accommodate growth
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Cloud-Based Solutions:</span>
                      <span className="block text-muted-foreground">
                        Accessible, expandable platforms with flexible capacity
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Multi-Entity Capabilities:</span>
                      <span className="block text-muted-foreground">
                        Financial tracking across expanding business structures
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Role-Based Access:</span>
                      <span className="block text-muted-foreground">Appropriate controls as finance teams grow</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Customizable Reporting:</span>
                      <span className="block text-muted-foreground">
                        Adaptable insights as information needs evolve
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Integration Framework:</span>
                      <span className="block text-muted-foreground">Connectivity with other business systems</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#fbc710]/10 p-2 rounded-full mt-0.5 shrink-0">
                      <Scale className="h-5 w-5 text-[#fbc710]" />
                    </div>
                    <div>
                      <span className="font-medium">Documentation Standards:</span>
                      <span className="block text-muted-foreground">
                        Consistent protocols regardless of transaction volume
                      </span>
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
            <h2 className="text-3xl font-bold tracking-tight mb-6">TRANSFORM YOUR FINANCIAL FOUNDATION</h2>
            <p className="mb-10 text-lg leading-relaxed">
              Elevate your approach to financial record-keeping with bookkeeping systems that provide both fundamental
              accuracy and strategic insight. Professional bookkeeping combines technical precision with business
              understanding to create financial records that support your business objectives.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-base font-medium bg-black text-white hover:bg-black/90"
            >
              Discover How We Can Help
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
