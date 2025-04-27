import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  BarChart2,
  Database,
  ArrowRight,
  Briefcase,
  LineChart,
  FileText,
  DollarSign,
  Users,
  Landmark,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssetManagementAndHedgeFundsLegalFirms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Padding Div */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Asset Management and Hedge Funds Legal Firms
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Specialized accounting solutions for financial institutions, asset managers, and legal firms navigating
              complex regulatory environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/get-a-consultation">
                <Button size="lg" className="bg-[#fbc710] text-black hover:bg-[#fbc710]/90">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/industries/financial-and-legal-services/asset-management-and-hedge-funds-legal-firms/learn-more">
                <Button size="lg" variant="outline" className="border-[#fbc710] text-[black] hover:bg-[#fbc710]/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Our Specialized Services</h2>
          <Tabs defaultValue="banking" className="max-w-5xl mx-auto">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 mb-12 p-1 bg-muted/30 rounded-lg">
              <TabsTrigger
                value="banking"
                className="text-sm md:text-base py-3 data-[state=active]:bg-[#fbc710] data-[state=active]:text-black data-[state=active]:shadow-md rounded-md transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <Landmark className="h-5 w-5" />
                  <span>Banking & Financial</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="asset"
                className="text-sm md:text-base py-3 data-[state=active]:bg-[#fbc710] data-[state=active]:text-black data-[state=active]:shadow-md rounded-md transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <LineChart className="h-5 w-5" />
                  <span>Asset Management</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="legal"
                className="text-sm md:text-base py-3 data-[state=active]:bg-[#fbc710] data-[state=active]:text-black data-[state=active]:shadow-md rounded-md transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Legal Firms</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Banking & Financial Services Tab */}
            <TabsContent value="banking">
              {/* Industry Landscape */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Banking Industry Landscape</h2>
                <p className="text-lg text-muted-foreground">
                  Financial institutions operate in an environment of unprecedented regulatory scrutiny, technological
                  disruption, and competitive pressure. From community banks to global financial services providers,
                  these organizations require accounting partners who understand the complex interplay between
                  regulatory compliance, risk management, and strategic financial reporting.
                </p>
              </div>

              {/* Specialized Challenges */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
                Specialized Challenges We Address
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Regulatory Complexity Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Implementation of evolving CECL (Current Expected Credit Loss) methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Basel III/IV capital adequacy monitoring and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Stress testing and scenario analysis support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>FDICIA and internal control frameworks</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Financial Instrument Accounting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Complex derivative valuation and hedge accounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Structured finance and securitization accounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Investment portfolio classification and impairment analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Fair value hierarchy disclosures and documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Risk Management Integration</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Credit risk quantification and allowance methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Interest rate risk modeling and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Liquidity risk monitoring frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Operational risk control assessments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Technology Transformation Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Core banking system conversion accounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Digital banking implementation controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Data governance and integrity frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Fintech partnership accounting structures</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Credentials */}
              <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                  Our Banking & Financial Services Credentials
                </h2>
                <div className="bg-muted/30 rounded-lg p-6 md:p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Team members with previous experience at federal regulatory agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Certified Bank Auditors (CBA) and Financial Services Certified Professionals (FSCP)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Active participants in industry associations including American Bankers Association</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Regular contributors to banking accounting publications and conferences</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="max-w-3xl mx-auto">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-8 pb-8 px-6 md:px-8">
                    <div className="flex flex-col items-center text-center">
                      <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                        &quot;The specialized banking knowledge Accounting Zone brings to our quarterly financial
                        reporting process has been transformative. Their team anticipates regulatory changes before they
                        impact us and ensures our financial reporting meets both compliance requirements and strategic
                        objectives simultaneously.&quot;
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold">EVP & Chief Financial Officer</p>
                        <p className="text-muted-foreground">Regional Bank with $5B in assets</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Asset Management Tab */}
            <TabsContent value="asset">
              {/* Industry Landscape */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Asset Management Industry Landscape
                </h2>
                <p className="text-lg text-muted-foreground">
                  Investment managers operate in a highly specialized accounting environment with complex valuation
                  methodologies, partnership allocation structures, and investor reporting requirements. From boutique
                  hedge funds to global asset managers, these organizations require precise, transparent financial
                  reporting that satisfies both regulatory demands and sophisticated investor expectations.
                </p>
              </div>

              {/* Specialized Challenges */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
                Specialized Challenges We Address
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <LineChart className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Fund Accounting Excellence</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Net Asset Value (NAV) calculation methodology development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>ASC 820 fair value measurement framework implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Side pocket accounting and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Series of shares and multi-class equalization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Partnership Economics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Complex waterfall models for carried interest calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>GP/LP allocation methodologies and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Performance fee verification and reconciliation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Special allocation handling and documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Investment Valuation Expertise</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Level 3 asset valuation policy development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Valuation committee documentation and support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Illiquid investment valuation model validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Practical expedient application and documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Regulatory and Investor Reporting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Form PF data collection and reporting frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>AIFMD transparency reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Customized investor reporting packages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>ILPA fee disclosure compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Methodology */}
              <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                  Our Methodology and Approach
                </h2>
                <div className="bg-muted/30 rounded-lg p-6 md:p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>
                        Detailed understanding of various fund structures (master-feeder, parallel, fund-of-funds)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Expertise across multiple administrator platforms and reconciliation processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Close collaboration with fund legal counsel on partnership agreement terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Continuous monitoring of regulatory changes affecting investment managers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="max-w-3xl mx-auto">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-8 pb-8 px-6 md:px-8">
                    <div className="flex flex-col items-center text-center">
                      <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                        What sets Accounting Zone apart is their ability to translate complex fund structures and
                        investment strategies into clear, accurate financial reporting. Their team anticipates our
                        auditors&apos; questions before they arise, making our annual audit process remarkably smooth for a
                        fund with our complexity.&quot;
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold">Chief Operating Officer</p>
                        <p className="text-muted-foreground">$1.2B Multi-Strategy Hedge Fund</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Legal Firms Tab */}
            <TabsContent value="legal">
              {/* Industry Landscape */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Legal Industry Landscape</h2>
                <p className="text-lg text-muted-foreground">
                  Legal practices face unique accounting challenges stemming from trust account regulations, complex
                  partnership structures, and the specialized billing and revenue recognition practices inherent to
                  legal services. From solo practitioners to AmLaw 100 firms, legal organizations require accounting
                  expertise tailored to the specific demands of legal practice management.
                </p>
              </div>

              {/* Specialized Challenges */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
                Specialized Challenges We Address
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto mb-16">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Trust Account Compliance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>IOLTA account reconciliation and maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Client fund separation and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Three-way reconciliation procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Regulatory compliance documentation and reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Partnership Economics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Compensation model development and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Capital account maintenance and buy-in/buy-out calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Origination and working attorney credit systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Partner draw and distribution management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Practice Financial Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Matter profitability analysis and reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Timekeeper efficiency and realization metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Alternative fee arrangement accounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Department and practice area performance reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-6 w-6 text-[#fbc710]" />
                      <CardTitle>Revenue Recognition Specialization</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>ASC 606 implementation for legal services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Contingency fee recognition methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Work-in-process valuation approaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] shrink-0 mt-0.5" />
                        <span>Retainer management and recognition</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Legal Industry Expertise */}
              <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                  Our Legal Industry Expertise
                </h2>
                <div className="bg-muted/30 rounded-lg p-6 md:p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Certified Legal Manager (CLM) professionals on staff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Experience with major legal practice management systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Active participation in Association of Legal Administrators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#fbc710] shrink-0 mt-0.5" />
                      <span>Specialized training in legal ethics and trust accounting regulations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="max-w-3xl mx-auto">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-8 pb-8 px-6 md:px-8">
                    <div className="flex flex-col items-center text-center">
                      <blockquote className="border-l-4 border-[#fbc710] pl-6 py-2 italic bg-[#fbc710]/5 rounded-r-md">
                        Beyond the exceptional trust accounting services they provide, Accounting Zone has
                        transformed how we understand our firm&apos;s economics. Their matter profitability reporting has
                        influenced how we staff cases and structure fee arrangements, directly improving our bottom
                        line.
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold">Managing Partner</p>
                        <p className="text-muted-foreground">Regional Law Firm with 75 Attorneys</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to transform your financial reporting?
          </h2>
          <p className="text-lg text-black/90 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate the complex regulatory landscape and optimize your
            financial reporting processes.
          </p>
          <Link href="/contact/get-a-consultation">
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
