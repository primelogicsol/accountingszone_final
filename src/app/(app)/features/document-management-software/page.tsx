"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Search,
  FileCheck,
  Link2,
  ScanLine,
  Calendar,
  RefreshCw,
  Users,
  Share2,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  Lock,
  FileText,
  Zap,
} from "lucide-react"
import Link from "next/link";


export default function DocumentManagementSoftware() {
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
              DOCUMENT MANAGEMENT SOFTWARE
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              TRANSFORM YOUR TAX DOCUMENT ECOSYSTEM
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers comprehensive document
              management solutions that bring security, organization, and efficiency to your tax- related files. Our
              advanced systems eliminate document chaos while ensuring compliance, accessibility, and protection for
              your sensitive financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">END DOCUMENT DYSFUNCTION</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Lock className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Centralized Security</h3>
                <p className="text-muted-foreground">
                  Protect sensitive tax information with enterprise-grade encryption and access controls
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Intelligent Organization</h3>
                <p className="text-muted-foreground">
                  Implement automated classification systems that eliminate manual filing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Search className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Instant Retrieval</h3>
                <p className="text-muted-foreground">Find any document in seconds with powerful search capabilities</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Share2 className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Streamlined Collaboration</h3>
                <p className="text-muted-foreground">Enable secure sharing with team members, clients, and advisors</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ClipboardCheck className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Audit-Ready Documentation</h3>
                <p className="text-muted-foreground">Maintain complete, organized records for regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">COMPREHENSIVE DOCUMENT SOLUTIONS</h2>
          </div>
          <Tabs defaultValue="record-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="record-management"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Tax Record Management
              </TabsTrigger>
              <TabsTrigger
                value="collaboration"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Secure Collaboration Tools
              </TabsTrigger>
              <TabsTrigger
                value="compliance"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Compliance and Audit Support
              </TabsTrigger>
            </TabsList>
            <TabsContent value="record-management">
              <Card>
                <CardHeader>
                  <CardTitle>Complete document lifecycle management for tax-related materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <ScanLine className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Source Document Capture</h4>
                          <p className="text-sm text-muted-foreground">
                            Digital import of paper documents, receipts, and statements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Intelligent Classification</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated categorization using AI-powered recognition
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Search className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Metadata Enhancement</h4>
                          <p className="text-sm text-muted-foreground">
                            Searchable tagging system for easy information retrieval
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <RefreshCw className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Version Control</h4>
                          <p className="text-sm text-muted-foreground">
                            Track document changes with complete revision history
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Retention Policy Enforcement</h4>
                          <p className="text-sm text-muted-foreground">
                            Automated management of document lifecycle per IRS requirements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="collaboration">
              <Card>
                <CardHeader>
                  <CardTitle>Share documents safely with stakeholders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Permission-Based Access</h4>
                          <p className="text-sm text-muted-foreground">
                            Granular control over document visibility and editing rights
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Secure Client Portals</h4>
                          <p className="text-sm text-muted-foreground">
                            Branded, encrypted spaces for document exchange with clients
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Digital Signature Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Legally binding electronic signatures for tax documents
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Activity Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive audit trails of all document interactions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Share2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Secure Messaging</h4>
                          <p className="text-sm text-muted-foreground">
                            Encrypted communication linked to specific documents
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
                  <CardTitle>Tools designed for regulatory requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">IRS Record Compliance</h4>
                          <p className="text-sm text-muted-foreground">
                            Systems aligned with tax record retention requirements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Audit Response Acceleration</h4>
                          <p className="text-sm text-muted-foreground">Quick compilation of requested documentation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Link2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Chain of Custody Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Complete history of document access and modifications
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Legal Hold Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Special handling for documents subject to legal proceedings
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Security Certification</h4>
                          <p className="text-sm text-muted-foreground">
                            Solutions compliant with industry standards for data protection
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
              Our partnership with Prime Logic Solutions USA leverages cutting-edge technology for document management:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>OCR technology that extracts data from scanned documents</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Machine learning algorithms that improve classification accuracy over time</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Automated workflow triggers based on document content or metadata</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Scheduled processes for document retention and archiving</p>
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
                    <p>Direct connection with tax preparation software</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Integration with accounting and ERP systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Compatibility with existing document scanners and capture devices</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Mobile applications for document capture and retrieval on the go</p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IMPLEMENTATION & SUPPORT</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
              Our collaboration with Prime Logic Solutions USA ensures a smooth transition to organized document
              management.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Current document assessment and organization strategy</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Custom taxonomy development for your specific needs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Legacy document migration and organization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User training and adoption support</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ongoing Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular system optimization reviews</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Security updates and enhancements</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>User workflow efficiency analysis</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Continuous improvement recommendations</p>
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
                    &quot;The document management system implemented through Accounting Zone transformed our tax season.
                    What used to be days of searching for supporting documentation now takes minutes, and the secure
                    client portal has virtually eliminated email attachment security concerns.&quot;
                  </p>
                  <p className="font-semibold">— Managing Partner, Regional Accounting Firm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;During our recent IRS examination, we were able to provide every requested document within
                    hours instead of days. The examiner specifically commented on our organization, and the process
                    concluded with minimal disruption to our business.&quot;
                  </p>
                  <p className="font-semibold">— Controller, Manufacturing Company</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a business with operations in multiple states, keeping tax documentation organized was a
                    constant challenge. This system has created a single source of truth that all team members can
                    access based on their roles. The efficiency gain has been remarkable.&quot;
                  </p>
                  <p className="font-semibold">— Tax Director, Retail Corporation</p>
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
              Transform your approach to tax documentation with a system that ensures security, organization, and
              accessibility. Contact Accounting Zone to schedule a personalized demonstration and discover how our
              collaboration with Prime Logic Solutions USA can bring order to your tax document ecosystem.
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
              <p>Email: documents@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
