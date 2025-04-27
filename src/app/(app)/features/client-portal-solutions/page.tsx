"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  FileCheck,
  Users,
  Share2,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  Lock,
  MessageSquare,
  Bell,
  FileText,
  Calendar,
  CreditCard,
  BarChart,
  Palette,
} from "lucide-react"
import Link from "next/link";



export default function ClientPortalSolutions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-block rounded-lg bg-[#fbc710] px-3 py-1 text-sm text-black">
              In Collaboration with Prime Logic Solutions USA
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">CLIENT PORTAL SOLUTIONS</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              SECURE CLIENT COLLABORATION WITHOUT BOUNDARIES
            </p>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Accounting Zone, in collaboration with Prime Logic Solutions USA, delivers sophisticated client portal
              solutions that transform how you share documents, communicate, and collaborate with your clients. Our
              secure platforms eliminate the risks of email while providing an exceptional client experience through
              intuitive, branded engagement spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ELEVATE CLIENT RELATIONSHIPS</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <Shield className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground">
                  Protect sensitive financial information with advanced encryption and access controls
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Share2 className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Streamlined Collaboration</h3>
                <p className="text-muted-foreground">
                  Simplify document exchange, approvals, and communications in one secure location
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Palette className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Brand Reinforcement</h3>
                <p className="text-muted-foreground">
                  Deliver a consistent, professional digital experience that strengthens your firm identity
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Client Satisfaction</h3>
                <p className="text-muted-foreground">
                  Provide 24/7 self-service access to documents and services clients increasingly expect
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BarChart className="h-6 w-6 text-[#fbc710] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Operational Efficiency</h3>
                <p className="text-muted-foreground">
                  Reduce administrative overhead through automated workflows and notifications
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              COMPREHENSIVE CLIENT ENGAGEMENT PLATFORM
            </h2>
          </div>
          <Tabs defaultValue="document-management" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#fbc710]/10 text-black">
              <TabsTrigger
                value="document-management"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Secure Document Management
              </TabsTrigger>
              <TabsTrigger
                value="communication"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Client Communication Hub
              </TabsTrigger>
              <TabsTrigger
                value="service-delivery"
                className="data-[state=active]:bg-[#fbc710] data-[state=active]:text-black"
              >
                Digital Service Delivery
              </TabsTrigger>
            </TabsList>
            <TabsContent value="document-management">
              <Card>
                <CardHeader>
                  <CardTitle>Sophisticated document sharing with complete control</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Share2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Two-Way Document Exchange</h4>
                          <p className="text-sm text-muted-foreground">
                            Simplified upload and download of financial documents
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Intelligent Organization</h4>
                          <p className="text-sm text-muted-foreground">
                            Customized folder structures reflecting your service relationships
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Version Control</h4>
                          <p className="text-sm text-muted-foreground">
                            Complete history tracking of document updates and changes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Approval Workflows</h4>
                          <p className="text-sm text-muted-foreground">
                            Structured processes for document review and authorization
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Secure Archiving</h4>
                          <p className="text-sm text-muted-foreground">
                            Long-term retention with appropriate access controls
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="communication">
              <Card>
                <CardHeader>
                  <CardTitle>Centralized, secure client interaction tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Threaded Messaging</h4>
                          <p className="text-sm text-muted-foreground">
                            Contextual communications linked to specific documents or tasks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bell className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Notification Management</h4>
                          <p className="text-sm text-muted-foreground">
                            Customizable alerts for both clients and team members
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Discussion Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Complete history of all client-firm communications
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Secure File Requests</h4>
                          <p className="text-sm text-muted-foreground">
                            Structured collection of documents with automated reminders
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Share2 className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Announcement Broadcasting</h4>
                          <p className="text-sm text-muted-foreground">
                            Targeted communications to specific client segments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service-delivery">
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced service experience through technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Electronic Signature Integration</h4>
                          <p className="text-sm text-muted-foreground">
                            Legally binding document execution without printing
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Secure Form Collection</h4>
                          <p className="text-sm text-muted-foreground">
                            Custom forms that gather information directly from clients
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CreditCard className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payment Processing</h4>
                          <p className="text-sm text-muted-foreground">Integrated invoicing and payment collection</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <BarChart className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Service Tracking</h4>
                          <p className="text-sm text-muted-foreground">Transparent status monitoring of ongoing work</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Appointment Scheduling</h4>
                          <p className="text-sm text-muted-foreground">
                            Self-service booking of meetings and consultations
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
              Our partnership with Prime Logic Solutions USA leverages sophisticated technology for client engagement:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Security Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Bank-level encryption for data at rest and in transit</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Multi-factor authentication options</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Granular permission controls</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Detailed access logging</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Compliance with major security frameworks (SOC 2, GDPR, etc.)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Responsive design for all devices</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Intuitive user interface requiring minimal training</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>White-labeled branding customization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Single sign-on integration options</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Mobile application access</p>
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
              Our collaboration with Prime Logic Solutions USA ensures comprehensive support throughout your client
              portal journey:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Client service workflow assessment</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Portal structure customization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Branding and personalization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Data migration from existing systems</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Team and client onboarding support</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Regular feature updates and security patches</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Usage analytics and optimization recommendations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Client adoption support materials</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Best practice consulting</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fbc710] flex-shrink-0 mt-0.5" />
                    <p>Ongoing technical assistance</p>
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
                    &quot;The client portal implemented through Accounting Zone transformed our client relationships.
                    Document collection that previously took weeks now happens in days, and clients regularly comment on
                    how much they appreciate the secure, organized approach to sharing sensitive financial
                    information.&quot;
                  </p>
                  <p className="font-semibold">— Managing Partner, Regional Accounting Firm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;As a growing firm, scaling our client communication was becoming unmanageable through email.
                    Our portal solution has streamlined document collection and client interaction while providing a
                    level of security and professionalism that strengthens our market position.&quot;
                  </p>
                  <p className="font-semibold">— Founder, Boutique Tax Advisory Practice</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#fbc710]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="italic">
                    &quot;Our clients particularly value the transparency the portal provides into their ongoing
                    services. The ability to check status, access past documents, and communicate securely from any
                    device has significantly enhanced their experience with our firm.&quot;
                  </p>
                  <p className="font-semibold">— Client Relations Director, Financial Services Organization</p>
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
              Transform your client experience with a secure, branded portal that elevates collaboration while
              strengthening security. Contact Accounting Zone to schedule a demonstration and discover how our
              partnership with Prime Logic Solutions USA can enhance your client relationships through technology.
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
              <p>Email: clientportal@accountingzone.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
