import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, BarChart2, FileText, ArrowRight, LineChart, FileSpreadsheet } from "lucide-react"

export default function GovernmentAgenciesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Government Agencies</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Specialized public sector expertise for agencies operating under unique accounting standards and
              compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/government-and-public-sector/government-agencies/learn-more">
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
              Specialized Public Sector Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Government agencies operate under unique accounting standards, stringent compliance requirements, and
              heightened public accountability. Our specialized government accounting team brings comprehensive
              expertise to address these unique challenges.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Challenges We Address
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileSpreadsheet className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>GASB Implementation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Compliance with GASB pronouncements and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Fund accounting structure design and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Government-wide financial statement preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Management&apos;s Discussion and Analysis (MD&A) development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Budget Development and Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Multi-year budgeting frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Performance-based budget structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Budget-to-actual analysis and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Budget modification and amendment processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Grant Accounting and Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Federal and state grant management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Single Audit preparation and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Grant revenue recognition methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Subrecipient monitoring frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Financial Reporting Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Comprehensive Annual Financial Report (CAFR) preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Popular Annual Financial Report (PAFR) development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Government Finance Officers Association (GFOA) certification support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Citizen-centric financial reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Government-Specific Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Government-Specific Solutions
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <p className="mb-4">Our team offers specialized services addressing the distinct challenges of:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Federal Agencies</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Federal financial management systems compliance</li>
                      <li>Treasury reporting requirements</li>
                      <li>Federal appropriation accounting</li>
                      <li>Agency-specific regulatory compliance</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">State Government Entities</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Constitutional and statutory compliance</li>
                      <li>Legislative reporting requirements</li>
                      <li>Statewide consolidation support</li>
                      <li>Program-based accounting structures</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Local Governments</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Municipal fund structure optimization</li>
                      <li>Capital project and debt service accounting</li>
                      <li>Property tax revenue recognition</li>
                      <li>Special assessment districts</li>
                    </ul>
                  </div>
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
                    &quot;Accounting Zone&apos;s government specialists guided us through a complex GASB implementation while
                    simultaneously helping us earn our first GFOA Certificate of Achievement for Excellence in Financial
                    Reporting. Their public sector expertise was evident in every aspect of the engagement.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">Finance Director</p>
                    <p className="text-muted-foreground">Mid-sized Municipal Government</p>
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
            Ready to enhance your public sector financial management?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate complex government accounting standards, compliance
            requirements, and reporting obligations.
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
