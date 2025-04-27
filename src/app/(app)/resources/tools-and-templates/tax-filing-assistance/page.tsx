import { ArrowRight, FileText, Upload, CheckCircle, HelpCircle, Link, Bot, Shield, FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TaxFilingAssistance() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Tax Filing Assistance Tools
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline and simplify the process of preparing and submitting tax returns with minimal errors.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Get Filing Assistance
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
                Our Tax Filing Assistance Tools help streamline and simplify the process of preparing and submitting tax
                returns with minimal errors.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Bot className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Intelligent Automation</h3>
                  <p className="text-muted-foreground">
                    AI-powered tools that simplify data entry and form completion for tax returns.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Error Prevention</h3>
                  <p className="text-muted-foreground">
                    Built-in validation checks to catch mistakes before submission to tax authorities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Compliance Assurance</h3>
                  <p className="text-muted-foreground">
                    Tools that ensure your tax filings meet all IRS requirements and regulations.
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
                Essential tools to help you file your taxes accurately and efficiently.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Bot className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Automated Data Entry Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Extracts tax details from documents.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Tax Form Auto-Fill Feature</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Pre-populates tax return forms.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Error-Checking & Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Ensures compliance with IRS rules.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <HelpCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Filing Status Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Guidance on selecting the right filing status.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Link className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Integration with Tax Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Compatible with major e-filing platforms.</p>
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
                Our approach to helping you file your taxes accurately and efficiently.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Upload className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Upload Your Documents</h3>
                <p className="text-muted-foreground">W-2, 1099, or business financials.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Receive Filing Guidance</h3>
                <p className="text-muted-foreground">Get step-by-step tax submission support.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">File with Confidence</h3>
                <p className="text-muted-foreground">Ensure compliance and reduce audit risks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to simplify your tax filing?</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Use our tax filing assistance tools to prepare and submit your tax returns with confidence.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Start Filing Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
