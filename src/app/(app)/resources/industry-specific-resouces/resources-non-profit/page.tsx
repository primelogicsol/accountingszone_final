import {
    ArrowRight,
    FileText,
    Shield,
    BarChart,
    Briefcase,
    HandCoins,
    FileSpreadsheet,
    Users,
    UserCheck,
    Landmark,
  } from "lucide-react"
  import Link from "next/link";
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  
  export default function NonProfitResources() {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex flex-col items-center">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Resources for Non-Profit Organizations
                  </h1>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Specialized financial tools and resources to help non-profits maintain compliance and optimize their
                    financial management.
                  </p>
                </div>
                <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
  
          <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Non-profits require financial transparency and compliance with IRS 501(c)(3) regulations. Our resources
                  ensure proper financial management and tax exemption compliance.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Landmark className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">IRS Compliance</h3>
                    <p className="text-muted-foreground">
                      Comprehensive guidance on maintaining 501(c)(3) status and meeting all regulatory requirements for
                      tax-exempt organizations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <FileSpreadsheet className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Grant Management</h3>
                    <p className="text-muted-foreground">
                      Tools and strategies for efficient tracking, reporting, and management of grants and multiple
                      funding sources.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <HandCoins className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Donation Optimization</h3>
                    <p className="text-muted-foreground">
                      Strategic approaches to maximize donor contributions while ensuring proper tax documentation and
                      acknowledgments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section id="key-features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Specialized resources tailored for non-profit financial management.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Shield className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>501(c)(3) Tax Compliance Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Maintain tax-exempt status with comprehensive compliance resources.
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <BarChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Grant Accounting & Fund Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Track and report funding sources accurately for complete transparency.
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <HandCoins className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Donor Contribution Tax Deduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Ensure tax efficiency for charitable giving.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <FileSpreadsheet className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Annual Financial Reporting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Stay compliant with federal and state requirements including IRS Form 990 filing.
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Users className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Payroll & Volunteer Tax Regulations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Proper classification and payroll management for staff and volunteers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
  
          <section id="how-we-work" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Our approach to supporting non-profit organizations.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Non-Profit Tax Filing Templates</h3>
                  <p className="text-muted-foreground">Ready-to-use compliance resources and forms.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Live Webinars</h3>
                  <p className="text-muted-foreground">
                    Expert discussions on non-profit accounting and financial management.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Financial Strategy Consultations</h3>
                  <p className="text-muted-foreground">
                    Maximize funding and operational efficiency with personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
            <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to optimize your non-profit&apos;s financial management?
              </h2>
              <p className="text-lg text-black/90 max-w-2xl mx-auto">
                Our team of non-profit financial experts is ready to help you navigate complex regulations and maximize
                your organization&apos;s impact through efficient financial practices.
              </p>
              <Link href="/contact/get-a-consultation">
                <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    )
  }
  