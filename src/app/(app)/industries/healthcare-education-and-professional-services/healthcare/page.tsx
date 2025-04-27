import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, BarChart2, ArrowRight, Activity, ShieldCheck, Stethoscope } from "lucide-react"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Healthcare</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Financial excellence in an evolving healthcare landscape with specialized accounting expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/healthcare-education-and-professional-services/healthcare/learn-more">
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
              Financial Excellence in an Evolving Healthcare Landscape
            </h2>
            <p className="text-lg text-muted-foreground">
              Healthcare organizations operate in an environment of complex reimbursement models, stringent compliance
              requirements, and constant industry transformation. Our healthcare financial specialists provide
              comprehensive solutions that address the sector&apos;s unique accounting challenges while supporting quality
              patient care.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Healthcare Accounting Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Revenue Cycle Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Charge capture and coding validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Payer contract modeling and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Denied claim analytics and recovery strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Value-based reimbursement accounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Healthcare Regulatory Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Cost reporting for Medicare/Medicaid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Anti-kickback and Stark Law compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>340B program accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Healthcare-specific internal controls</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Clinical Financial Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Service line profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Physician productivity metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Case mix and acuity financial modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Patient outcome cost correlation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Healthcare Operations Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Supply chain and inventory management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Staffing ratio financial analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Equipment acquisition planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Telehealth financial models</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Solutions by Provider Type
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <p className="mb-4">Our healthcare expertise spans diverse delivery models including:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Hospitals and Health Systems</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Departmental cost accounting</li>
                      <li>Length-of-stay financial impact analysis</li>
                      <li>Multi-entity consolidation</li>
                      <li>Capital project financing</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Physician Practices and Medical Groups</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Provider compensation models</li>
                      <li>Practice acquisition valuation</li>
                      <li>Ancillary service financial analysis</li>
                      <li>Practice management dashboards</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Long-Term Care and Senior Living</span>
                    <ul className="mt-2 ml-6 space-y-1 list-disc">
                      <li>Occupancy-based financial modeling</li>
                      <li>Resident level-of-care accounting</li>
                      <li>RUGS and PDPM reimbursement analysis</li>
                      <li>Entrance fee and CCRC revenue recognition</li>
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
                    &quot;Accounting Zone&apos;s healthcare team transformed our revenue cycle management with analytics that
                    identified specific payer contract issues and denial patterns. Their healthcare-specific expertise
                    helped us implement financial systems that improved our cash flow while ensuring compliance with
                    evolving regulations.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">CFO</p>
                    <p className="text-muted-foreground">Multi-Specialty Medical Group with 80+ Providers</p>
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
            Ready to optimize your healthcare financial operations?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of healthcare financial specialists is ready to help you navigate complex reimbursement models,
            ensure regulatory compliance, and improve your financial performance.
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
