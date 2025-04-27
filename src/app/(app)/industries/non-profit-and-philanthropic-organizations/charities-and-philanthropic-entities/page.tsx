import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, Heart, FileText, ArrowRight, Users, BarChart2 } from "lucide-react"

export default function CharitiesAndPhilanthropicEntitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Charities and Philanthropic Entities
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Financial Frameworks for Maximum Mission Impact
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/non-profit-and-philanthropic-organizations/charities-and-philanthropic-entities/learn-more">
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
              Philanthropic Organization Landscape
            </h2>
            <p className="text-lg text-muted-foreground">
              Charitable and philanthropic organizations must balance donor stewardship, programmatic effectiveness, and
              transparent reporting. Our specialized team delivers comprehensive financial solutions that enhance
              accountability, optimize resource allocation, and demonstrate meaningful impact.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Philanthropic Organization Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Donor-Centric Financial Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Donor-advised fund accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Gift acceptance policy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Planned giving program support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Major donor financial reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Grant-Making Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Grant management system implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Due diligence process development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Grant payment scheduling and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Impact measurement integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Charitable Financial Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Functional expense allocation methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Program/administrative ratio optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Charity watchdog metric management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Impact-focused financial reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Endowment and Investment Oversight</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Investment policy statement development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Spending rate analysis and planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Underwater endowment management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Alternative investment accounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Solutions for Philanthropic Entities
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Our expertise addresses the unique needs of:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Heart className="h-5 w-5 text-[#fbc710] mr-2" />
                    Private Foundations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Minimum distribution requirement planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Self-dealing prohibition compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Excise tax minimization strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Users className="h-5 w-5 text-[#fbc710] mr-2" />
                    Community Foundations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Component fund accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Designated/field of interest fund management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Agency fund accounting</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BarChart2 className="h-5 w-5 text-[#fbc710] mr-2" />
                    Corporate Foundations and Giving Programs
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Corporate/foundation segregation compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Matching gift program accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Corporate social responsibility reporting</span>
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
                    &quot;As our foundation&apos;s assets grew from $10M to over $50M, Accounting Zone&apos;s philanthropic
                    specialists ensured our financial infrastructure evolved accordingly. Their expertise in endowment
                    management, grant-making systems, and impact measurement has been instrumental in maximizing our
                    foundation&apos;s effectiveness while maintaining impeccable compliance.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">Board Chair</p>
                    <p className="text-muted-foreground">Family Foundation</p>
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
            Ready to maximize your philanthropic impact?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of specialists can help you implement financial frameworks that enhance accountability, optimize
            resource allocation, and demonstrate meaningful impact.
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
