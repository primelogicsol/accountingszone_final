import { ArrowRight, Laptop, Smartphone, Tablet, Cloud, Clock, Shield, Wifi, WifiOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MultiDeviceSyncing() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Multi-Device Syncing
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Real-time access to financial data across desktops, tablets, and smartphones, ensuring a seamless user
                  experience.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Enable Syncing
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
                Our multi-device syncing feature enables real-time access to financial data across desktops, tablets,
                and smartphones, ensuring a seamless user experience.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Laptop className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Desktop Access</h3>
                  <p className="text-muted-foreground">
                    Full-featured tax management on Windows and Mac computers with complete functionality.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mobile Convenience</h3>
                  <p className="text-muted-foreground">
                    Access your tax information on iOS and Android devices while on the go.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Cloud className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Cloud Synchronization</h3>
                  <p className="text-muted-foreground">
                    Secure cloud storage ensures your data is always up-to-date across all devices.
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
                Essential capabilities for seamless multi-device tax management.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Laptop className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Cross-Platform Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Sync across Windows, Mac, iOS, and Android.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Clock className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Real-Time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Immediate changes reflected across all devices.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Cloud className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Cloud-Based Synchronization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Ensuring data integrity and accuracy.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <WifiOff className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Offline Mode with Auto-Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Work without the internet and sync later.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Shield className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>User Role-Based Access Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Restrict access based on permissions.</p>
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
                Our approach to providing seamless multi-device synchronization.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Wifi className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Sync Data Across All Devices</h3>
                <p className="text-muted-foreground">Ensuring continuity in tax management.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Enable Secure Cloud Storage for Access Anywhere</h3>
                <p className="text-muted-foreground">Eliminates data loss risks.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Tablet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Seamless Multi-Device Integration</h3>
                <p className="text-muted-foreground">Switch between desktop and mobile effortlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to access your tax data from any device?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Enable multi-device syncing today and experience seamless tax management across all your devices.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Enable Syncing Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
