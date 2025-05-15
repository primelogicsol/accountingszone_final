"use client"

import { ArrowRight, FileText, AlertCircle, BarChart, Building, Clock, MessageSquare, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function TaxLawUpdates() {
  const overviewRef = useRef<HTMLElement>(null)

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Tax Law Updates</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Stay informed with real-time insights into federal and state tax law changes affecting deductions,
                  credits, and compliance rules.
                </p>
              </div>
              <div className="mx-auto">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={scrollToOverview}
                >
                  Explore Tax Law Updates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" ref={overviewRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Tax laws change frequently, affecting deductions, credits, and compliance rules. Our Tax Law Updates
                page provides real-time insights into federal and state tax law changes.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Timely Alerts</h3>
                  <p className="text-muted-foreground">
                    Immediate notifications about critical tax law changes that could impact your financial planning and
                    compliance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Clear Explanations</h3>
                  <p className="text-muted-foreground">
                    Complex tax legislation broken down into understandable language with practical implications
                    explained.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BarChart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Impact Analysis</h3>
                  <p className="text-muted-foreground">
                    Detailed assessments of how tax changes will affect different taxpayer categories and business
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-terms" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Essential resources to stay current with changing tax legislation.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">New Tax Legislation Summaries</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Breaking down key changes in tax laws.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">IRS Policy Revisions</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Updates on tax code modifications.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <BarChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Impact Analysis</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">How tax changes affect different businesses and individuals.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <Building className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Compliance Guidance</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Ensuring businesses stay tax-compliant.</p>
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
                Our approach to monitoring and communicating tax law changes.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Continuous Monitoring</h3>
                <p className="text-muted-foreground">Instant updates on IRS announcements and law changes.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">User-Friendly Insights</h3>
                <p className="text-muted-foreground">Simplified explanations of complex tax laws.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Industry-Specific Updates</h3>
                <p className="text-muted-foreground">Custom alerts for relevant tax sectors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay ahead of changing tax legislation</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Subscribe to our tax law updates to receive timely alerts and expert analysis on changes that could impact
              your financial planning and compliance.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Subscribe to Updates
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
