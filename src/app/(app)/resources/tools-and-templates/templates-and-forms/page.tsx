import { ArrowRight, FileText, Download, Edit, Search, Printer, FileCheck, FolderOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TemplatesAndForms() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Templates and Forms
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  A library of pre-formatted tax forms and templates to simplify financial documentation and compliance.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Browse Library
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
                We provide a library of pre-formatted tax forms and templates to simplify financial documentation and
                compliance for businesses and individuals.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ready-to-Use Forms</h3>
                  <p className="text-muted-foreground">
                    Pre-formatted tax forms and templates that save time and ensure accuracy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Edit className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Customizable Templates</h3>
                  <p className="text-muted-foreground">
                    Editable documents that can be tailored to your specific financial needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileCheck className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Compliance-Ready</h3>
                  <p className="text-muted-foreground">Forms designed to meet IRS requirements and tax regulations.</p>
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
                Essential forms and templates to simplify your tax documentation.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>IRS Tax Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Pre-filled and downloadable W-9, 1099, W-2, and other required forms.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FolderOpen className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Expense Tracking Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Helps organize deductions and tax claims.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileCheck className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Business Tax Reporting Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Profit and loss statements, payroll reports.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <FileText className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Personal Tax Budgeting Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Plan for estimated tax payments.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Edit className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Editable & Printable Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">PDF, Word, and Excel templates available.</p>
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
                Our approach to providing useful tax forms and templates.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Browse the Library</h3>
                <p className="text-muted-foreground">Choose the required tax form or template.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Download & Customize</h3>
                <p className="text-muted-foreground">Editable templates for easy personalization.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Submit & Save</h3>
                <p className="text-muted-foreground">Use the templates for tax filing or record-keeping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to simplify your tax documentation?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Access our library of tax forms and templates to streamline your financial record-keeping and compliance.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Browse Forms Library
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
