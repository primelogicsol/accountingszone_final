"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList as RadixTabsList, TabsTrigger as RadixTabsTrigger } from "@/components/ui/tabs";
import { LucideProps, UserCheck as UserCheckIcon, RefreshCw, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

// Create a wrapper component for Lucide icons
const IconWrapper = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return <svg ref={ref} {...props} />;
});

IconWrapper.displayName = "IconWrapper";

// Replace all Lucide icons with the wrapper component
const ClipboardCheck = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Shield = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const FileCheck = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const CheckCircle = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Search = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Eye = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Workflow = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const AlertTriangle = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Bell = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Lock = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const FileText = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Users = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

const Globe = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <IconWrapper ref={ref} {...props} />
));

// Explicitly type TabsTrigger
const TabsTrigger = RadixTabsTrigger as React.FC<
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }>
>;

// Explicitly type TabsList
const TabsList = RadixTabsList as React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
>;

export default function AuditTrailTools() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">AUDIT TRAIL TOOLS</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              COMPREHENSIVE TRANSACTION TRACKING FOR UNCOMPROMISED INTEGRITY
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers powerful audit trail solutions
              that maintain complete, tamper-proof records of all financial transactions and system activities. Our
              specialized tools provide the transaction transparency and verification capabilities essential for
              regulatory compliance, fraud prevention, and financial governance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TRANSACTION INTEGRITY ASSURANCE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <ClipboardCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Complete Activity Documentation</h3>
                <p className="text-muted-foreground">
                  Record every financial transaction with detailed user attribution
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Tamper-Evident Records</h3>
                <p className="text-muted-foreground">
                  Implement cryptographic verification that prevents undetected alterations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Compliance Readiness</h3>
                <p className="text-muted-foreground">
                  Maintain audit-ready documentation that meets regulatory requirements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Automated Verification</h3>
                <p className="text-muted-foreground">Leverage systematic checks that validate transaction integrity</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Forensic Investigation Support</h3>
                <p className="text-muted-foreground">Enable detailed examination when irregularities require review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE AUDIT SOLUTION</h2>
          </div>
          <Tabs defaultValue="financial" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="financial"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Financial Transaction Tracking
              </TabsTrigger>
              <TabsTrigger
                value="compliance"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Compliance Documentation
              </TabsTrigger>
              <TabsTrigger value="risk" className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black">
                Risk Management Enhancement
              </TabsTrigger>
            </TabsList>
            <TabsContent value="financial">
              <Card>
                <CardHeader>
                  <CardTitle>Complete visibility into all accounting and financial activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Journal Entry Documentation</h4>
                          <p className="text-sm text-muted-foreground">
                            Detailed logging of all entries with full attribution
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <UserCheckIcon className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Approval Flow Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Step-by-step documentation of authorization processes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <RefreshCw className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Change History Preservation</h4>
                          <p className="text-sm text-muted-foreground">
                            Complete record of modifications to financial data
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Eye className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Record Access Logging</h4>
                          <p className="text-sm text-muted-foreground">
                            Tracking of all views and exports of sensitive information
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Workflow className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">System Configuration Control</h4>
                          <p className="text-sm text-muted-foreground">
                            Documentation of changes to accounting controls and settings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle>Purpose-built tools for regulatory requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">SOX 404 Compliance Support</h4>
                          <p className="text-sm text-muted-foreground">Evidence of effective internal controls</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Regulatory Filing Verification</h4>
                          <p className="text-sm text-muted-foreground">
                            Documentation of preparation and review processes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Multi-Regulatory Framework Alignment</h4>
                          <p className="text-sm text-muted-foreground">
                            Simultaneous compliance with multiple standards
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Authority Matrix Enforcement</h4>
                          <p className="text-sm text-muted-foreground">Validation of proper authorization levels</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Segregation of Duties Monitoring</h4>
                          <p className="text-sm text-muted-foreground">
                            Prevention of control circumvention through role separation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="risk">
              <Card>
                <CardHeader>
                  <CardTitle>Proactive tools to identify and address issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Anomaly Detection</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated identification of unusual transaction patterns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bell className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Real-Time Alerts</h4>
                          <p className="text-sm text-muted-foreground">
                            Immediate notification of policy violations or suspicious activities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Access Attempt Logging</h4>
                          <p className="text-sm text-muted-foreground">Documentation of unauthorized access attempts</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Eye className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Sensitive Transaction Monitoring</h4>
                          <p className="text-sm text-muted-foreground">
                            Enhanced scrutiny for high-risk financial activities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Reconciliation Verification</h4>
                          <p className="text-sm text-muted-foreground">
                            Validation of account reconciliation processes
                          </p>
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
              Our partnership with Prime Logic Solutions USA leverages sophisticated technology for audit trail
              management:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Secure Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Immutable record storage preventing unauthorized alteration</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Cryptographic validation ensuring data integrity</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Segregated audit data with restricted access</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated backup and redundancy</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Time-stamping with secure time source verification</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Machine learning-based anomaly detection</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Pattern recognition for fraud identification</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Risk-based monitoring intensity adjustment</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous transaction analysis</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated compliance checking</p>
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
              Our collaboration with Prime Logic Solutions USA ensures comprehensive support throughout your audit trail
              implementation:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Risk assessment and control evaluation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Customized audit trail design aligned with compliance requirements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with existing financial systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User training on audit trail best practices</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Documentation of audit control environments</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular audit log reviews and analysis</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>System update management</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Emerging risk assessment</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Compliance requirement monitoring</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Third-party audit support</p>
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
                    &quot;The audit trail solution implemented through Accounting Zone proved invaluable during our
                    annual external audit. What previously required weeks of documentation gathering was instantly
                    available with complete traceability. Our auditors specifically commented on the exceptional quality
                    of our transaction documentation.&quot;
                  </p>
                  <p className="font-semibold">— Controller, Publicly Traded Manufacturing Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;During an internal investigation of irregular transactions, the comprehensive audit trail
                    allowed us to quickly identify the source, scope, and timeline of the issue. The detailed user
                    attribution and timestamp features provided irrefutable evidence that expedited resolution.&quot;
                  </p>
                  <p className="font-semibold">— Chief Compliance Officer, Financial Services Firm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a healthcare organization with strict compliance requirements, maintaining proper audit
                    trails across our financial systems was challenging. This solution integrated seamlessly with our
                    existing infrastructure while providing the documentation we need for multiple regulatory
                    frameworks.&quot;
                  </p>
                  <p className="font-semibold">— Finance Director, Regional Healthcare System</p>
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
                Transform your financial governance with audit trail tools that provide uncompromised transaction
                integrity and compliance documentation. Contact Accounting Zone to schedule a consultation and discover
                how our collaboration with Prime Logic Solutions USA can enhance your financial controls and regulatory
                readiness.
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
              <p>Email: audittrail@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
