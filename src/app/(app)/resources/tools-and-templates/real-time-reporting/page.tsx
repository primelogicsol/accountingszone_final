"use client"

import { ArrowRight, BarChart, LineChart, RefreshCw, DollarSign, TrendingUp, Share2, Link } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

export default function RealTimeReporting() {
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
                  Real-Time Reporting Tools
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Dynamic dashboards and analytics to track tax obligations, refunds, and financial planning insights.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => scrollToOverview()}
                >
                  Explore Real-Time Reporting
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
                Our Real-Time Reporting Tools provide dynamic dashboards and analytics to track tax obligations,
                refunds, and financial planning insights.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BarChart className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Visual Analytics</h3>
                  <p className="text-muted-foreground">
                    Interactive charts and graphs that make complex tax data easy to understand.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Live Updates</h3>
                  <p className="text-muted-foreground">
                    Continuously updated data that reflects your current tax and financial situation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Forecasting</h3>
                  <p className="text-muted-foreground">
                    Predictive analytics to help plan for future tax obligations and financial decisions.
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
                Essential reporting capabilities to monitor your tax and financial status.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <DollarSign className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Real-Time Tax Liability Updates</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Monitor estimated tax dues.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <BarChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Income & Expense Visualization</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Graphical breakdown of financial transactions.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Tax Refund Tracker</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Track pending refunds and estimated return dates.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <LineChart className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Business Financial Reporting Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Custom financial insights for businesses.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Multi-Year Tax Projection Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Long-term planning and forecasting.</p>
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
                Our approach to providing real-time financial insights.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Link className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Sync with Financial Data</h3>
                <p className="text-muted-foreground">Automatically integrates with accounting software.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Generate Reports in Real Time</h3>
                <p className="text-muted-foreground">Live updates on tax obligations.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Export & Share Insights</h3>
                <p className="text-muted-foreground">Download reports in PDF or Excel formats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to gain real-time insights into your finances?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Start using our real-time reporting tools today to track your tax obligations and financial status.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Access Reports Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
