import { ArrowRight, FileText, Link, RefreshCw, AlertCircle, Code, BookOpen, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SoftwareIntegrationGuides() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Software Integration Guides
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Seamlessly connect your tax and accounting platforms to enhance efficiency and reduce errors.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Browse Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                  Request Integration
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
                Our software integration guides help businesses and individuals seamlessly connect their tax and
                accounting platforms, enhancing efficiency and reducing errors.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Link className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Seamless Connections</h3>
                  <p className="text-muted-foreground">
                    Connect your tax software with popular accounting platforms for streamlined data flow.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Automated Synchronization</h3>
                  <p className="text-muted-foreground">
                    Eliminate manual data entry with automatic syncing between platforms.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Error Prevention</h3>
                  <p className="text-muted-foreground">
                    Reduce mistakes and inconsistencies by eliminating duplicate data entry.
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
                Essential resources to help you connect your financial platforms.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Step-by-Step Software Setup Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Easy-to-follow instructions.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Link className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Integration with Leading Accounting Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">QuickBooks, FreshBooks, Xero, and more.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Automated Data Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Eliminates manual data entry.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Error Resolution & Troubleshooting Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Minimize integration issues.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Code className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>API Connectivity for Custom Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Advanced options for developers.</p>
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
                Our approach to helping you integrate your software systems.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Identify the Right Integration</h3>
                <p className="text-muted-foreground">Matching solutions with user needs.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Provide Detailed Setup Instructions</h3>
                <p className="text-muted-foreground">Ensuring a smooth transition.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Ongoing Support & Troubleshooting</h3>
                <p className="text-muted-foreground">Helping resolve any technical issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to streamline your financial systems?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Explore our integration guides to connect your tax software with your favorite accounting platforms.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              View Integration Guides
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
