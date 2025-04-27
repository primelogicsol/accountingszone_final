"use client"

import {
  BarChart,
  ArrowRight,
  Phone,
  AlertTriangle,
  BrainCircuit,
  LineChart,
  PieChart,
  Clock,
  Smartphone,
  Users,
  Target,
  Bell,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function RealTimeFinancialReporting() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 md:h-20"></div>
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Real-Time Financial Reporting
            </h1>
            <p className="text-lg text-gray-600">
              Real-Time Financial Reporting delivers immediate visibility into your financial position and performance,
              enabling agile decision-making and proactive management. Our sophisticated reporting systems transform
              financial data into actionable insights available on demand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-[#fbc710] hover:bg-[#fbc710]/90 text-black gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10 gap-2">
                <Phone className="h-4 w-4" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Real-Time Reporting Solutions</h2>
            <p className="text-gray-600">
              We offer comprehensive real-time financial reporting solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <BarChart className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Dashboard Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creation of customized financial dashboards displaying key metrics and performance indicators relevant
                  to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Automated Financial Statements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementation of systems that produce up-to-date balance sheets, income statements, and cash flow
                  statements on demand.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Bell className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">KPI Monitoring & Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Establishment of threshold-based notifications for critical financial metrics requiring attention.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Users className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Departmental Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Design of specialized reports to monitor financial performance by division, department, or cost
                  center.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Target className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Variance Analysis Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Development of systems to continuously compare actual results with budgets or forecasts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all border-[#fbc710]/20">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-[#fbc710] mb-2" />
                <CardTitle className="text-gray-900">Mobile Reporting Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Setup of secure mobile access to critical financial information for on-the-go decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Real-Time Reporting</h2>
            <p className="text-muted-foreground">Gain these strategic advantages with our reporting solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Immediate Visibility</h3>
                <p className="text-muted-foreground">
                  Immediate visibility into financial performance without waiting for period-end closes.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Proactive Issue Management</h3>
                <p className="text-muted-foreground">
                  Enhanced ability to identify and address issues before they escalate.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Improved Decision-Making</h3>
                <p className="text-muted-foreground">
                  Improved decision-making through timely access to relevant financial insights.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Greater Organizational Alignment</h3>
                <p className="text-muted-foreground">
                  Greater organizational alignment through shared access to performance metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Increased Operational Efficiency</h3>
                <p className="text-muted-foreground">
                  Increased operational efficiency through automated report generation.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#fbc710]/10 flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-[#fbc710]" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Competitive advantage through faster response to market changes and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Reporting Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our reporting specialists combine financial expertise with technical knowledge to deliver information
              systems that transform data into strategic intelligence for your organization.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#fbc710] -translate-x-1/2"></div>

            <div className="space-y-16 relative">
              {/* Analysis Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">01</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Needs Assessment</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive evaluation of your reporting requirements, key metrics, and decision-making
                      processes.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Strategic Alignment Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">02</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Solution Design</h3>
                    <p className="text-gray-600 text-lg">
                      Development of tailored reporting frameworks, dashboards, and alert systems aligned with your
                      strategic goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Forecast Development Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="lg:text-right mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">03</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Implementation & Integration</h3>
                    <p className="text-gray-600 text-lg">
                      Deployment of reporting systems with seamless integration to your accounting and operational
                      platforms.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>

              {/* Implementation Step */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center group">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left mb-8 lg:mb-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#fbc710] transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-[#fbc710] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>
                    <span className="inline-block text-[#fbc710] text-4xl font-bold mb-4">04</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Training & Refinement</h3>
                    <p className="text-gray-600 text-lg">
                      Comprehensive user training with ongoing refinement of reports and dashboards based on feedback
                      and evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Want financial insights when you need them, not weeks later?
            </h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Contact Accounting Zone to discuss how our Real-Time Financial Reporting solutions can provide immediate
              visibility into your business performance and accelerate your decision-making capabilities.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Request Reporting Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-12">
          <Separator className="mb-8 bg-[#fbc710]/20" />
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} AccountingZone. All rights reserved.</p>
            <p className="mt-2">
              123 Financial District, New York, NY 10001 | (555) 123-4567 | info@accountingzone.com
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
