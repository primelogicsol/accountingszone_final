import {
    ArrowRight,
    Calculator,
    Percent,
    TrendingUp,
    DollarSign,
    Sliders,
    FileText,
    Save,
    PieChart,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  
  export default function TaxCalculator() {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex flex-col items-center">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tax Calculator Tools
                  </h1>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Estimate tax liabilities, deductions, and refunds with accuracy and ease for individuals and
                    businesses.
                  </p>
                </div>
                <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                    Try Calculators
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
                  Our Tax Calculator Tools help individuals and businesses estimate tax liabilities, deductions, and
                  refunds with accuracy and ease.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Accurate Calculations</h3>
                    <p className="text-muted-foreground">
                      Precise tax estimates based on the latest IRS tax brackets and regulations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Sliders className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Customizable Scenarios</h3>
                    <p className="text-muted-foreground">
                      Adjust variables to see how different financial decisions impact your tax situation.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <PieChart className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Visual Results</h3>
                    <p className="text-muted-foreground">
                      Clear graphical representations of your tax breakdown and potential savings.
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
                  Essential calculators to estimate and plan your taxes.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <DollarSign className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Income Tax Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Estimate personal or business tax obligations.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Calculator className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Deductions & Credits Analyzer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Identify eligible tax savings.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Capital Gains Tax Estimator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Calculate tax impact on asset sales.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Percent className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Self-Employed Tax Estimator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Determine quarterly and annual tax payments.</p>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center justify-center">
                    <Sliders className="h-8 w-8 mb-2 text-[#fbc710]" />
                    <CardTitle>Real-Time Adjustment Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">Modify inputs for different financial scenarios.</p>
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
                  Our approach to helping you estimate and plan your taxes.
                </p>
              </div>
              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Input Your Financial Details</h3>
                  <p className="text-muted-foreground">Provide income, expenses, and deductions.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Automated Tax Calculation</h3>
                  <p className="text-muted-foreground">Instant results based on IRS tax brackets.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                    <Save className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Save & Download Reports</h3>
                  <p className="text-muted-foreground">Generate and save tax estimates for planning.</p>
                </div>
              </div>
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
            <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to estimate your taxes?</h2>
              <p className="text-lg text-black/90 max-w-2xl mx-auto">
                Try our tax calculators today to get accurate estimates and plan your financial future.
              </p>
              <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
                Start Calculating
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </section>
        </main>
      </div>
    )
  }
  