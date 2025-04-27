import {
    ArrowRight,
    FileText,
    Search,
    Wrench,
    AlertCircle,
    Download,
    Lightbulb,
    CheckCircle,
    RefreshCw,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  
  export default function TroubleshootingGuides() {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex flex-col items-center">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Troubleshooting Guides
                  </h1>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Step-by-step solutions to common issues related to tax calculations, filing errors, and
                    software-related concerns.
                  </p>
                </div>
                <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                    Browse Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                    Search Solutions
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
                  Our Troubleshooting Guides provide step-by-step solutions to common issues related to tax calculations,
                  filing errors, and software-related concerns.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Technical Solutions</h3>
                    <p className="text-muted-foreground">
                      Detailed instructions to resolve software issues, error messages, and technical problems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Tax Filing Assistance</h3>
                    <p className="text-muted-foreground">
                      Guidance on resolving common tax filing errors, form issues, and calculation problems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Self-Help Resources</h3>
                    <p className="text-muted-foreground">
                      Comprehensive documentation that empowers users to solve problems independently.
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
                  Essential resources to help you resolve tax and software issues quickly.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Self-Help Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Detailed troubleshooting steps.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Wrench className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Technical Support Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Fixing common software-related issues.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <AlertCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Error Code Directory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Explanations and resolutions for system errors.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Download className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Downloadable PDF Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Easy access to offline help.</p>
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
                  Our approach to helping you resolve issues efficiently.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Issue Identification</h3>
                  <p className="text-muted-foreground">Quickly pinpointing the cause of a problem.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Guided Fixes</h3>
                  <p className="text-muted-foreground">Providing step-by-step instructions for resolution.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Continuous Updates</h3>
                  <p className="text-muted-foreground">Troubleshooting documentation is regularly improved.</p>
                </div>
              </div>
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
            <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Can&apos;t find a solution to your problem?</h2>
              <p className="text-lg text-black/90 max-w-2xl mx-auto">
                If our troubleshooting guides don&apos;t resolve your issue, our support team is ready to provide personalized
                assistance.
              </p>
              <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </section>
        </main>
      </div>
    )
  }
  