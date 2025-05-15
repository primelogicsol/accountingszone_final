"use client"

import { ArrowRight, FileText, Search, BarChart, Building, LineChart, Scale, Briefcase, FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudies() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Case Studies</h1>
                <p className="mx-auto max-w-[600px] text-muted-foregrounxd md:text-xl">
                  Our real-world case studies showcase successful tax strategies, financial planning techniques, and
                  business accounting solutions, helping users learn from practical examples.
                </p>
              </div>
              <div className="mx-auto">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => {
                    const overviewElement = document.getElementById("overview");
                    if (overviewElement) {
                      overviewElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                Our real-world case studies showcase successful tax strategies, financial planning techniques, and
                business accounting solutions, helping users learn from practical examples.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Building className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Industry-Specific</h3>
                  <p className="text-muted-foreground">
                    Tailored examples across different business sectors to address unique industry challenges.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BarChart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Financial Analysis</h3>
                  <p className="text-muted-foreground">
                    Before-and-after analysis showing the impact of strategic financial decisions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Scale className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">
                    Ensuring all strategies and solutions adhere to current legal and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                What makes our case studies valuable learning resources.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 max-w-6xl">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <Building className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Industry-Specific</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Tailored examples across different business sectors.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <BarChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Financial Analysis</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Understanding the impact of financial decisions.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Practical insights for application in your business.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <LineChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Comparative Analysis</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Benchmarking best practices across industries.</p>
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
                Our approach to creating valuable case studies for financial learning.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Select a Case Study</h3>
                <p className="text-muted-foreground">Browse examples by industry or topic that match your needs.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Analyze the Solution</h3>
                <p className="text-muted-foreground">Learn how businesses overcame financial challenges.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Implement Lessons</h3>
                <p className="text-muted-foreground">Apply proven tactics to your financial planning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to learn from real success stories?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Discover how businesses like yours have overcome financial challenges and implemented successful
              strategies.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
