import { ArrowRight, Shield, Lock, Key, FileCheck, AlertTriangle, Eye, Bell, UserCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Security() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Security</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Robust security measures to protect your sensitive financial information and ensure compliance with
                  industry standards.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  Learn About Security
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                  Security Compliance
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
                We prioritize data security and privacy to protect sensitive financial information. Our robust security
                measures ensure compliance with the latest industry standards and regulations.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Lock className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Data Encryption</h3>
                  <p className="text-muted-foreground">
                    Advanced encryption protocols to protect your financial data both in transit and at rest.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Key className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Access Controls</h3>
                  <p className="text-muted-foreground">
                    Strict authentication and authorization measures to ensure only authorized users can access
                    sensitive information.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileCheck className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Compliance Standards</h3>
                  <p className="text-muted-foreground">
                    Adherence to industry regulations and standards to protect your data and maintain trust.
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
                Essential security measures to protect your financial data.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Lock className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Ensures data confidentiality.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Key className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Multi-Factor Authentication (MFA)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Adds an extra layer of protection.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Eye className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Regular Security Audits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Proactive risk assessments to prevent breaches.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Shield className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Compliance with Industry Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">SOC 2, GDPR, and IRS data protection guidelines.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Real-Time Threat Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">AI-driven threat detection and response.</p>
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
                Our approach to ensuring the security of your financial data.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Continuous Monitoring</h3>
                <p className="text-muted-foreground">Tracking and mitigating security threats.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Data Encryption & Protection</h3>
                <p className="text-muted-foreground">Ensuring safe storage and transmission.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">User Authentication & Access Controls</h3>
                <p className="text-muted-foreground">Implementing strict security protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Your financial data deserves the best protection
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Learn more about our comprehensive security measures designed to keep your sensitive financial information
              safe and compliant.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              View Security Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
