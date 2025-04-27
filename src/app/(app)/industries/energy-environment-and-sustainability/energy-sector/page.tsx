import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, Zap, FileText, ArrowRight, BarChart2, Factory } from "lucide-react"

export default function EnergySectorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Energy Sector</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Navigating Financial Complexity in a Transforming Industry
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/energy-environment-and-sustainability/energy-sector/learn-more">
                <Button size="lg" variant="outline" className="border-[#fbc710] text-[black] hover:bg-[#fbc710]/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Landscape */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Energy-Specific Accounting Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Energy companies face unprecedented challenges balancing traditional accounting requirements with emerging
              sustainability imperatives. Our energy specialists provide comprehensive solutions that address
              sector-specific complexities while supporting strategic adaptation to evolving market conditions.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Energy Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Asset Management and Valuation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Reserve accounting and valuation methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Generation asset depreciation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Impairment testing for energy infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Asset retirement obligation accounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Regulatory Accounting Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Rate case financial support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Regulatory asset and liability management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Cost of service analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Multi-jurisdiction compliance frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Energy Trading and Risk Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Derivative accounting and hedging strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Mark-to-market valuation methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Trading and position limit monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Counterparty risk assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Energy Transition Financial Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Renewable project financial modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Carbon accounting and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>ESG metric development and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Clean energy tax incentive optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Energy Sector Solutions
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">
                Our energy expertise spans diverse industry segments including:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Factory className="h-5 w-5 text-[#fbc710] mr-2" />
                    Traditional Energy Producers
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Depletion calculations and reserve reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Joint interest billing and division of interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Production accounting systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Zap className="h-5 w-5 text-[#fbc710] mr-2" />
                    Utilities and Power Generators
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Rate-regulated accounting frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Fuel cost adjustment mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Power purchase agreement accounting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="pt-8 pb-8 px-6 md:px-8">
                <div className="flex flex-col items-center text-center">
                  <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                    &quot;Accounting Zone helped us navigate the complex financial implications of our transition from
                    traditional generation to a renewable-focused portfolio. Their energy sector specialists understand
                    both conventional power accounting and emerging renewable finance structures, providing invaluable
                    guidance through our transformation journey.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">CFO</p>
                    <p className="text-muted-foreground">Regional Energy Provider</p>
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
            Ready to transform your energy finance function?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of energy specialists is ready to help you navigate complex regulatory requirements, asset
            management challenges, and energy transition planning.
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
