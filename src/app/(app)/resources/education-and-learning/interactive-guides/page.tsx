"use client"

import { ArrowRight, Search, BookOpen, Layers, Lightbulb, CheckSquare, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InteractiveGuides() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Interactive Guides</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Our Interactive Guides provide a step-by-step approach to understanding complex financial concepts,
                  tax filing processes, and accounting systems.
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
                  Explore Guides
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
                Our Interactive Guides provide a step-by-step approach to understanding complex financial concepts, tax
                filing processes, and accounting systems. These guides help individuals and businesses make informed
                financial decisions.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Step-by-Step Learning</h3>
                  <p className="text-muted-foreground">
                    Easily digestible lessons with visual aids to help you understand complex financial concepts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Play className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Interactive Simulations</h3>
                  <p className="text-muted-foreground">
                    Engage with real-time scenarios that simulate actual financial decision-making processes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Layers className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Customized Learning</h3>
                  <p className="text-muted-foreground">
                    Tailored guides based on your experience level, from beginner to advanced financial knowledge.
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
                What makes our interactive guides effective learning tools.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 max-w-6xl">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <BookOpen className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Step-by-Step Instructions</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Easily digestible lessons with visuals.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <Play className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Real-Time Simulations</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Interactive scenarios for practical learning.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <Layers className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Customized Learning</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Tailored guides based on user experience levels.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <CheckSquare className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Quizzes & Assessments</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Test knowledge and receive feedback.</p>
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
                Our approach to interactive financial education.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Choose Your Topic</h3>
                <p className="text-muted-foreground">Select guides based on your learning objectives.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Play className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Engage with Content</h3>
                <p className="text-muted-foreground">Follow along with hands-on exercises and simulations.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Apply Learnings</h3>
                <p className="text-muted-foreground">Implement concepts in practical financial situations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to learn through interactive experiences?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our step-by-step interactive guides will help you understand complex financial concepts and make better
              financial decisions.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
