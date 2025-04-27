import { ArrowRight, Calendar, Clock, AlertTriangle, Map, Bell, CalendarClock, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StateTaxDeadlines() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  State Tax Deadlines
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Stay on top of tax filing deadlines, extensions, and payment schedules for all 50 states.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  View Deadlines
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                  Set Reminders
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
                Each U.S. state has different tax filing deadlines, extensions, and payment schedules. Our State Tax
                Deadlines page provides real-time updates on important dates for individual and business taxpayers.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Calendar</h3>
                  <p className="text-muted-foreground">
                    A complete listing of all state tax deadlines organized by date, tax type, and jurisdiction.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Map className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">State-by-State Guidance</h3>
                  <p className="text-muted-foreground">
                    Detailed information on filing requirements specific to each state&apos;s tax authority.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Penalty Prevention</h3>
                  <p className="text-muted-foreground">
                    Information on late filing consequences and strategies to avoid penalties across different states.
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
                Essential resources to help you meet all state tax obligations on time.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Calendar className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>State-Specific Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Filing dates for income, corporate, and sales tax by state.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Clock className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Extension Filing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Steps to request more time if needed.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Late Penalty Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Understanding consequences of missed deadlines.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Map className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>State-by-State Comparison Tool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Quickly check tax deadlines across states.</p>
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
                Our approach to helping you stay on top of state tax deadlines.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <CalendarClock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Updated Annually</h3>
                <p className="text-muted-foreground">Reflecting the latest IRS and state government updates.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Interactive Calendar Integration</h3>
                <p className="text-muted-foreground">Users can set reminders for key deadlines.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Guidance on Extensions & Penalties</h3>
                <p className="text-muted-foreground">Helping taxpayers avoid fines and compliance issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Never miss a state tax deadline again</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our comprehensive state tax deadline tracker helps businesses and individuals stay compliant across all 50
              states.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              View State Deadlines
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
