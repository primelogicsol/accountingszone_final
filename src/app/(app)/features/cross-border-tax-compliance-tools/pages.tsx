"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  FileCheck,
  Globe,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  FileText,
  BarChart,
  DollarSign,
  Building2,
  Laptop,
  Link2,
} from "lucide-react"
import Link from "next/link";


export default function CrossBorderTaxComplianceTools() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              CROSS-BORDER TAX COMPLIANCE TOOLS
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              NAVIGATE GLOBAL TAX COMPLEXITY WITH CONFIDENCE
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers sophisticated cross-border tax
              compliance solutions that transform international tax obligations from complex burdens into streamlined
              processes. Our comprehensive tools ensure accurate management of VAT, GST, and international tax
              requirements across multiple jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">GLOBAL COMPLIANCE SIMPLIFIED</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Globe className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Multi-Jurisdiction Mastery</h3>
                <p className="text-muted-foreground">
                  Manage tax obligations across dozens of countries from a single platform
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Regulatory Precision</h3>
                <p className="text-muted-foreground">
                  Stay current with constantly evolving international tax requirements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ClipboardCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Filing Automation</h3>
                <p className="text-muted-foreground">Streamline preparation and submission of international returns</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Risk Mitigation</h3>
                <p className="text-muted-foreground">Reduce exposure to penalties, interest, and reputational damage</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BarChart className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Identify opportunities for legitimate tax efficiency across borders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE INTERNATIONAL SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="vat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger value="vat" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Value-Added Tax (VAT) Management
              </TabsTrigger>
              <TabsTrigger value="gst" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Goods and Services Tax (GST) Compliance
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Global Corporate Tax Management
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vat">
              <Card>
                <CardHeader>
                  <CardTitle>Complete solutions for European and global VAT compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">VAT Registration Services</h4>
                          <p className="text-sm text-muted-foreground">
                            Simplified registration across multiple jurisdictions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Return Preparation and Filing</h4>
                          <p className="text-sm text-muted-foreground">Automated calculation and submission tools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">EU One-Stop Shop (OSS) Management</h4>
                          <p className="text-sm text-muted-foreground">Streamlined compliance with OSS requirements</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Input VAT Recovery</h4>
                          <p className="text-sm text-muted-foreground">Maximization of legitimate VAT reclamation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Intrastat Reporting</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated compilation and submission of required statistics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="gst">
              <Card>
                <CardHeader>
                  <CardTitle>Specialized tools for GST jurisdictions worldwide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-Country GST Filing</h4>
                          <p className="text-sm text-muted-foreground">
                            Unified platform for Australia, Canada, Singapore, and more
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Laptop className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">B2C Digital Services Compliance</h4>
                          <p className="text-sm text-muted-foreground">Management of complex digital taxation rules</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">HST/PST/QST Canadian Compliance</h4>
                          <p className="text-sm text-muted-foreground">Provincial and federal tax harmonization</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Input Tax Credit Optimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Systematic identification of recoverable taxes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">GST Reconciliation Tools</h4>
                          <p className="text-sm text-muted-foreground">Automated validation of GST transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="corporate">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive solutions for international business taxation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Corporate Tax Return Automation</h4>
                          <p className="text-sm text-muted-foreground">Streamlined preparation across jurisdictions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Permanent Establishment Monitoring</h4>
                          <p className="text-sm text-muted-foreground">Proactive management of PE risk</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Link2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Transfer Pricing Documentation</h4>
                          <p className="text-sm text-muted-foreground">
                            Systematic preparation of required documentation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Country-by-Country Reporting</h4>
                          <p className="text-sm text-muted-foreground">Simplified compliance with BEPS requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Foreign Tax Credit Management</h4>
                          <p className="text-sm text-muted-foreground">Optimization of global tax positions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ADVANCED TECHNOLOGY PLATFORM</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our partnership with Prime Logic Solutions USA leverages sophisticated technology for international tax
              management:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Global Tax Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuously updated rules for 100+ tax jurisdictions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated rate determination based on location and transaction type</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Built-in validation against jurisdiction-specific requirements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Multi-currency calculation and reporting capabilities</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Connection with ERP and financial systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>E-commerce platform integration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Digital marketplace compatibility</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>International payment processor coordination</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation & Support Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION & ONGOING SUPPORT</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaboration with Prime Logic Solutions USA ensures comprehensive support for your global tax
              operations:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Global Implementation Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>International footprint assessment and prioritization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Jurisdiction-by-jurisdiction compliance evaluation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System configuration for your specific global operations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Staff training on international tax processes</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Global Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular compliance reviews by international tax specialists</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Proactive alerts for regulatory changes worldwide</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Quarterly global tax position assessments</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Strategic planning for international expansion</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CLIENT SUCCESS STORIES</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As our e-commerce business expanded internationally, managing VAT across Europe became
                    overwhelming. The cross-border compliance tools implemented through Accounting Zone transformed this
                    challenge into a manageable process, saving us countless hours while ensuring complete
                    compliance.&quot;
                  </p>
                  <p className="font-semibold">— CFO, Digital Products Retailer</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;When we expanded operations into APAC markets, the complexity of GST compliance in multiple
                    countries created significant risk. This solution simplified our approach with automation that
                    adapts to each jurisdiction&apos;s requirements, allowing us to focus on business growth rather than tax
                    administration.&quot;
                  </p>
                  <p className="font-semibold">— International Tax Director, SaaS Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;The transfer pricing documentation capabilities alone justified our investment. What
                    previously required expensive specialist consultants is now handled systematically through our
                    compliance platform, with better results and at a fraction of the cost.&quot;
                  </p>
                  <p className="font-semibold">— VP of Taxation, Manufacturing Multinational</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-[#fbc710] text-black">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">GET STARTED TODAY</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-black/90">
              Transform your approach to international tax compliance with tools that simplify complex global
              requirements. Contact Accounting Zone to schedule a Global Tax Assessment and discover how our
              collaboration with Prime Logic Solutions USA can streamline your cross-border tax operations.
            </p>
            <div className="pt-4">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="text-sm pt-2 text-black/90">
              <p>Email: global.tax@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
