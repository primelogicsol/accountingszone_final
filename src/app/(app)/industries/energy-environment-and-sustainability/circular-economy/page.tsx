import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CheckCircle, RefreshCw, FileText, ArrowRight, BarChart2, Recycle } from "lucide-react"

export default function CircularEconomyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Circular Economy Strategies</h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Financial Models for Regenerative Business Innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/energy-environment-and-sustainability/circular-economy/learn-more">
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
              Circular Economy Accounting Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Circular economy businesses transform traditional linear production models into regenerative systems that
              eliminate waste and pollution. Our specialized team provides innovative accounting approaches that address
              the unique financial challenges and opportunities created by circular business models.
            </p>
          </div>

          {/* Specialized Challenges */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Specialized Circular Economy Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Circular Business Model Economics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Product-as-a-service financial modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Take-back program accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Remanufacturing and refurbishment economics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Sharing platform revenue recognition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Resource Efficiency Valuation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Material flow cost accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Waste reduction financial impact assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Resource productivity metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>By-product revenue optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Lifecycle Financial Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Total cost of ownership modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Lifecycle profitability assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Extended producer responsibility accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>End-of-life management cost tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Recycle className="h-6 w-6 text-[#fbc710]" />
                  <CardTitle>Circular Transition Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Linear to circular transition accounting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Stranded asset management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Circular business case development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                    <span>Circularity key performance indicators</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Solutions */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
              Specialized Circular Economy Solutions
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">
                Our expertise supports various circular economy applications including:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <RefreshCw className="h-5 w-5 text-[#fbc710] mr-2" />
                    Product Lifecycle Extension
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Repair service economics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Refurbishment program accounting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Remanufacturing cost structures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Recycle className="h-5 w-5 text-[#fbc710] mr-2" />
                    Resource Recovery Systems
                  </h4>
                  <ul className="space-y-2 pl-7">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Recycling program economics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Upcycling value capture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Material recovery accounting</span>
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
                    &quot;Our transition to a circular business model created accounting challenges that traditional
                    approaches couldn&apos;t address. Accounting Zone developed customized financial frameworks that properly
                    value our product-as-a-service offering, quantify the benefits of our take-back program, and measure
                    the true economics of our remanufacturing operations. Their innovative thinking has been essential
                    to demonstrating the financial viability of our circular model.&quot;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">Finance Director</p>
                    <p className="text-muted-foreground">Circular Economy Manufacturing Pioneer</p>
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your business model?</h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of circular economy specialists is ready to help you develop financial frameworks that support
            regenerative business innovation and sustainable growth.
          </p>
          <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  )
}
