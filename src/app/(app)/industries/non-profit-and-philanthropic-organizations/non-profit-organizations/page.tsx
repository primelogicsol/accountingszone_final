import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, BarChart2, FileText, ArrowRight, Users, Landmark } from "lucide-react"

export default function NonProfitOrganizationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Non-Profit Organizations</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Specialized Financial Management for Mission-Driven Entities
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/non-profit-and-philanthropic-organizations/non-profit-organizations/learn-more">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Non-Profit Accounting Landscape</h2>
            <p className="text-lg text-muted-foreground">
              Non-profit organizations face unique accounting challenges that demand specialized expertise in fund
              accounting, regulatory compliance, and mission-aligned financial reporting. Our comprehensive solutions
              address the distinct needs of 501(c)(3) organizations across all operational stages and focus areas.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Non-Profit Accounting Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Fund Accounting Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Multi-fund structure design and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Restricted and unrestricted fund management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Net asset classification and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Endowment accounting and management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Regulatory Compliance Assurance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Form 990 preparation and strategic planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>State charitable registration management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Public support testing and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Unrelated business income tax (UBIT) planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Program-Based Financial Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Program cost allocation methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Service unit costing models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Grant and contract compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Mission impact financial metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Non-Profit Governance Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Board financial reporting packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Financial policy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Committee structure advisory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Executive financial communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Solutions by Organization Type
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Our experience spans diverse non-profit sectors including:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Users className="h-5 w-5 text-[#fbc710] mr-2" />
                    Social Services Organizations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Program-based cost accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Client service metrics integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Government contract compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Landmark className="h-5 w-5 text-[#fbc710] mr-2" />
                    Educational Organizations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Tuition revenue management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Scholarship fund accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Educational program costing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BarChart2 className="h-5 w-5 text-[#fbc710] mr-2" />
                    Arts and Cultural Organizations
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Membership revenue recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Exhibition and production costing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Facility utilization economics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Our Non-Profit Sector Commitment
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <p className="mb-4">
                Beyond professional services, Accounting Zone demonstrates commitment to the social sector through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Pro Bono Initiative:</span> Annual commitment of service hours to
                    grassroots organizations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Non-Profit Knowledge Sharing:</span> Free educational webinars on
                    financial management topics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Capacity Building Support:</span> Discounted services for emerging
                    organizations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Staff Service:</span> Encouraged board service and volunteering by
                    team members
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
                    &quot;Accounting Zone transformed our financial management from basic compliance to strategic
                    mission support. Their non-profit specialists implemented fund accounting systems that provide clear
                    visibility into our program economics while ensuring perfect compliance with our complex grant
                    requirements. Their partnership has strengthened both our financial position and our impact
                    measurement capabilities.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">Executive Director</p>
                    <p className="text-muted-foreground">Regional Non-Profit Organization</p>
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to enhance your mission impact?</h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Contact our Non-Profit and Philanthropic Services team at (555) 123-4567 or email
            nonprofit@accountingzone.com to discuss how we can support your organization&apos;s unique financial management
            needs.
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
