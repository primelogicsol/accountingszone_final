import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, Rocket, FileText, ArrowRight, BarChart2, LineChart } from "lucide-react"

export default function TechnologyAndStartupsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Technology and Start-Ups</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Navigating the Financial Journey from Concept to Scale
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#fbc710] text-[black] hover:bg-[#fbc710]/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Landscape */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Technology Startup Landscape</h2>
            <p className="text-lg text-muted-foreground">
              Tech companies and start-ups face distinctive financial challenges at each stage of growth—from
              pre-revenue concept development through rapid scaling and eventual exit. Our technology specialists
              deliver stage-appropriate financial solutions that evolve with your business.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Expertise for Each Growth Stage
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Early-Stage & Pre-Revenue Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Founder-friendly accounting structures and systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Burn rate tracking and runway analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>R&D tax credit optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Financial models for seed and angel fundraising</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Growth-Stage Scaling Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Venture capital and Series funding financial preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>SaaS metrics development and tracking (ARR, CAC, LTV, Churn)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Revenue recognition for complex contracts (ASC 606)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Stock-based compensation accounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Mature Technology Company Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Board and investor-grade financial reporting packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>M&A financial due diligence and integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>IPO readiness assessment and preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Strategic tax planning for technology operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Revenue Recognition Complexity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Multi-element arrangement accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Contract modification handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Subscription revenue modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Implementation and customization revenue treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technology Investment Accounting */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Technology Investment Accounting
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Software development capitalization analysis</span> - Determining
                    which development costs can be capitalized versus expensed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Cloud computing arrangement accounting</span> - Proper treatment of
                    SaaS implementation and customization costs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Internal-use software classifications</span> - Accounting for
                    software developed for internal operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">IP valuation and management</span> - Assessing and tracking the
                    value of intellectual property assets
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Why Technology Companies Choose Accounting Zone
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Specialized Expertise:</span> Deep understanding of
                    technology-specific accounting challenges including revenue recognition, equity compensation, and
                    R&D incentives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Metrics That Matter:</span> Focus on the financial and operational
                    KPIs most relevant to your technology subsector and growth stage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Scalable Systems:</span> Implementation of financial infrastructure
                    that grows with your business without requiring disruptive overhauls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Investor-Ready Reporting:</span> Financial packages designed to
                    address the specific metrics and disclosures technology investors expect
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Future-Proofed Compliance:</span> Proactive approach to emerging
                    regulations and standards affecting technology companies
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="pt-8 pb-8 px-6 md:px-8">
                <div className="flex flex-col items-center text-center">
                  <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                    &quot;From our seed round through our Series B, Accounting Zone has been an extension of our finance
                    team. They understand the SaaS metrics our investors care about and helped us implement financial
                    systems that scale with our rapid growth. Their tech industry expertise has been invaluable in
                    navigating complex revenue recognition challenges while maintaining fundraising-ready
                    financials.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">CFO</p>
                    <p className="text-muted-foreground">Enterprise SaaS Platform with $28M in Funding</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to accelerate your startup&apos;s financial journey?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Contact our Technology Industry Team at (555) 123-4567 or email tech@accountingzone.com to discuss how we
            can support your company&apos;s growth from concept to scale.
          </p>
          <Link href="/contact/get-a-consultation">
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
