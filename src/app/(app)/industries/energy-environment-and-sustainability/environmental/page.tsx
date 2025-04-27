import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, Leaf, FileText, ArrowRight, Users, BarChart2, Zap, RefreshCw } from "lucide-react"

export default function EnvironmentalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Environmental and Sustainable Organizations
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Financial Frameworks for Environmental Impact and Sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/energy-environment-and-sustainability/environmental/learn-more">
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
              Our Sustainability-Focused Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Environmental organizations combine mission-driven objectives with complex operational models that create
              unique financial challenges. Our specialized team delivers accounting solutions that support environmental
              advocacy, conservation efforts, and sustainability initiatives while ensuring financial stability and
              compliance.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Our Energy, Environment, and Sustainability Practice
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <p className="mb-6">Our practice is built on a foundation of specialized expertise:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Industry Insight:</span> Team members with direct experience in
                    energy, environmental organizations, and sustainability initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Technical Excellence:</span> Accounting specialists with deep
                    knowledge of sector-specific standards, regulations, and emerging practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Impact Integration:</span> Approaches that connect financial metrics
                    with environmental and social outcomes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Forward-Looking Perspective:</span> Understanding of evolving
                    reporting frameworks, regulations, and stakeholder expectations
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Environmental Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Mission-Aligned Financial Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Program-based accounting frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Campaign and initiative cost tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Impact measurement integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Restricted fund management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Grant and Funding Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Environmental grant compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Multi-funder reporting systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Conservation easement accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>International funding management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Sustainability Reporting Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Integrated financial and impact reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>GRI standards implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Natural resource accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Triple bottom line reporting frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Environmental Risk and Liability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Environmental liability assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Remediation cost accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Conservation land management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Climate risk financial disclosure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Why Forward-Thinking Organizations Choose Accounting Zone
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              <Card className="bg-muted/30 border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="h-6 w-6 text-[#fbc710]" />
                      <h3 className="font-semibold text-lg">Aligned Expertise</h3>
                    </div>
                    <p>
                      We understand the unique financial dynamics of organizations focused on environmental protection
                      and sustainable resource use
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-6 w-6 text-[#fbc710]" />
                      <h3 className="font-semibold text-lg">Balanced Perspective</h3>
                    </div>
                    <p>Our approach integrates financial stability with sustainability objectives</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <RefreshCw className="h-6 w-6 text-[#fbc710]" />
                      <h3 className="font-semibold text-lg">Innovative Thinking</h3>
                    </div>
                    <p>We develop new financial methodologies that capture the value of sustainable business models</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-6 w-6 text-[#fbc710]" />
                      <h3 className="font-semibold text-lg">Impact Demonstration</h3>
                    </div>
                    <p>
                      We create reporting frameworks that clearly communicate both financial and sustainability
                      performance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Environmental Sector Solutions
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">
                Our expertise serves diverse environmental and sustainable organizations including:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Leaf className="h-5 w-5 text-[#fbc710] mr-2" />
                    Conservation Organizations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Land trust accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Habitat restoration project tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Conservation easement valuation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Users className="h-5 w-5 text-[#fbc710] mr-2" />
                    Advocacy and Policy Organizations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Campaign finance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Lobbying cost segregation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Coalition financial management</span>
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
                    &quot;Accounting Zone understands the unique financial challenges of environmental organizations.
                    Their team helped us implement program-based accounting that clearly communicates our conservation
                    impact to donors while providing the financial intelligence we need for strategic decision-making.
                    They&apos;ve transformed our finance function from basic bookkeeping to mission-advancing strategic
                    partnership.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">Executive Director</p>
                    <p className="text-muted-foreground">Regional Conservation Trust</p>
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
            Ready for accounting expertise that supports your sustainability goals?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate complex funding structures, impact reporting, and
            sustainability-focused financial management.
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
