import { ArrowRight, Smartphone, Shield, Camera, Bell, Link, Download, RefreshCw, Layout } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MobileAppIntegration() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mobile App Integration
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Seamless tax management, bookkeeping, and financial tracking on the go, ensuring real-time access to
                  important data.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Download App
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
                Our mobile app integration allows seamless tax management, bookkeeping, and financial tracking on the
                go, ensuring real-time access to important data.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mobile Access</h3>
                  <p className="text-muted-foreground">
                    Manage your taxes and finances from anywhere using your smartphone or tablet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Camera className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Document Capture</h3>
                  <p className="text-muted-foreground">
                    Instantly scan and upload receipts, invoices, and important tax documents.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-Time Sync</h3>
                  <p className="text-muted-foreground">
                    Automatically synchronize data between your mobile device and desktop platforms.
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
                Essential mobile capabilities to manage your taxes and finances on the go.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Layout className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Mobile-Friendly Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Access financial insights anywhere.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Shield className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Secure Login with Biometric Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Ensuring account safety.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Camera className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Expense & Receipt Scanning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Upload and categorize transactions instantly.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Bell className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Push Notifications for Deadlines & Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Stay updated on tax deadlines.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Link className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Integration with Accounting Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Sync with QuickBooks, Xero, and more.</p>
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
                Our approach to providing seamless mobile tax management.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Seamless App Installation & Setup</h3>
                <p className="text-muted-foreground">Quick onboarding process.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Sync with Cloud Data</h3>
                <p className="text-muted-foreground">Instant updates on tax records.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">User-Friendly Interface for Easy Access</h3>
                <p className="text-muted-foreground">Designed for intuitive navigation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to manage your taxes on the go?</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Download our mobile app today and experience seamless tax management from anywhere, at any time.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Download Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
