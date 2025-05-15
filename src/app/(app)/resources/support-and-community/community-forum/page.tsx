"use client"

import { useRef } from "react"
import { ArrowRight, Users, MessageSquare, Calendar, Search, Shield, UserCheck, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityForum() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Community Forum</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with other users, tax experts, and industry professionals to share experiences and gain
                  insights.
                </p>
              </div>
              <div className="mx-auto">
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50"
                  onClick={scrollToOverview}
                >
                  Explore Community Forum
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
                Join our Community Forum to connect with other users, tax experts, and industry professionals. Share
                experiences, ask questions, and gain insights into tax planning and compliance.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community Support</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow users who can share their experiences and solutions to common tax challenges.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Expert Discussions</h3>
                  <p className="text-muted-foreground">
                    Engage with tax professionals who provide insights on complex tax topics and best practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community Events</h3>
                  <p className="text-muted-foreground">
                    Participate in webinars, Q&A sessions, and discussions on timely tax topics and updates.
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
                Essential resources to help you connect and learn from the community.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex items-center justify-center text-center">
                  <Users className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Peer-to-Peer Support</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Engage with fellow users and experts.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex items-center justify-center text-center">
                  <MessageSquare className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Discussion Boards</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Topics on tax strategies, software issues, and general queries.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex items-center justify-center text-center">
                  <Calendar className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Exclusive Community Events</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Webinars, Q&A sessions, and expert discussions.</p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex items-center justify-center text-center">
                  <Search className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle className="text-center">Searchable Threads</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-muted-foreground text-center">Easily find discussions relevant to your needs.</p>
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
                Our approach to fostering a helpful and engaging community.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">User Registration & Moderation</h3>
                <p className="text-muted-foreground">Secure access with community guidelines.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Active Engagement</h3>
                <p className="text-muted-foreground">Encourage discussions and problem-solving.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Expert Contributions</h3>
                <p className="text-muted-foreground">Tax professionals participate in discussions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join our growing community today</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Connect with thousands of users and tax experts to share knowledge, ask questions, and find solutions to
              your tax challenges.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Create an Account
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
