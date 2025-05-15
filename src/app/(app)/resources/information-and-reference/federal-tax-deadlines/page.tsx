"use client"

import { ArrowRight, FileText, Calendar, Clock, AlertTriangle, Calculator, Bell, Link2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function FederalTaxDeadlines() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Federal Tax Deadlines
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Stay on top of IRS filing due dates, estimated tax deadlines, and extension options for individuals
                  and businesses.
                </p>
              </div>
              <div className="mx-auto">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={scrollToOverview}
                >
                  Explore Federal Tax Deadlines
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
                Federal tax deadlines impact individuals, businesses, and corporations. Our page lists IRS filing due
                dates, estimated tax deadlines, and extension options.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Annual Filing Dates</h3>
                  <p className="text-muted-foreground">
                    Comprehensive calendar of all federal tax deadlines for individuals, businesses, and special tax
                    situations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Calculator className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Estimated Tax Planning</h3>
                  <p className="text-muted-foreground">
                    Guidance on quarterly estimated tax payments for self-employed individuals and businesses.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Penalty Avoidance</h3>
                  <p className="text-muted-foreground">
                    Strategies and reminders to help taxpayers avoid late filing and payment penalties.
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
                Essential resources to help you meet all federal tax obligations on time.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <Calendar className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Annual Tax Filing Dates</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Deadlines for personal and business tax returns.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <Calculator className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Quarterly Estimated Tax Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Due dates for self-employed and businesses.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <Clock className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Tax Extension Filing Process</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">How to apply for extra time.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Penalty Avoidance Strategies</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <p className="text-muted-foreground">Tips for timely payments.</p>
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
                Our approach to helping you stay on top of federal tax deadlines.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Link2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">IRS Calendar Integration</h3>
                <p className="text-muted-foreground">Direct links to official IRS due dates.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Step-by-Step Filing Guidance</h3>
                <p className="text-muted-foreground">Ensuring users meet their obligations.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Automated Alerts for Subscribers</h3>
                <p className="text-muted-foreground">Helping businesses and individuals stay compliant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Never miss an IRS deadline again</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our comprehensive federal tax deadline tracker helps businesses and individuals stay compliant with all
              IRS requirements.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              View Federal Deadlines
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
