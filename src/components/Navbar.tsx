"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { User } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false)
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false)
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)

  // Mobile submenu states
  const [mobileFinancialOpen, setMobileFinancialOpen] = useState(false)
  const [mobileRecordsOpen, setMobileRecordsOpen] = useState(false)
  const [mobileTaxOpen, setMobileTaxOpen] = useState(false)
  const [mobileAdvisoryOpen, setMobileAdvisoryOpen] = useState(false)
  const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false)
  const [mobileInfoRefOpen, setMobileInfoRefOpen] = useState(false)
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const [mobileTechOpen, setMobileTechOpen] = useState(false)
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false)
  const [mobileIndustrySpecificOpen, setMobileIndustrySpecificOpen] = useState(false)


  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen)
    setServicesDropdownOpen(false)
    setFeaturesDropdownOpen(false)
    setIndustriesDropdownOpen(false)
    setInsightsDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setAboutDropdownOpen(false)
    setContactDropdownOpen(false)
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
    setProfileDropdownOpen(false)
    setIsOpen(false)
  }

  const handleDropdownClick = (dropdownName: string) => {
    switch (dropdownName) {
      case "services":
        setServicesDropdownOpen(!servicesDropdownOpen)
        setFeaturesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setContactDropdownOpen(false)
        setAboutDropdownOpen(false)
        setResourcesDropdownOpen(false)
        break
      case "features":
        setFeaturesDropdownOpen(!featuresDropdownOpen)
        setServicesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setContactDropdownOpen(false)
        setAboutDropdownOpen(false)
        setResourcesDropdownOpen(false)
        break
      case "insights":
        setInsightsDropdownOpen(!insightsDropdownOpen)
        setFeaturesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setServicesDropdownOpen(false)
        setContactDropdownOpen(false)
        setAboutDropdownOpen(false)
        setResourcesDropdownOpen(false)
        break
      case "industries":
        setIndustriesDropdownOpen(!industriesDropdownOpen)
        setFeaturesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setServicesDropdownOpen(false)
        setContactDropdownOpen(false)
        setResourcesDropdownOpen(false)
        setAboutDropdownOpen(false)
        break
      case "contact":
        setContactDropdownOpen(!contactDropdownOpen)
        setFeaturesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setServicesDropdownOpen(false)
        setAboutDropdownOpen(false)
        setResourcesDropdownOpen(false)
        break
      case "about":
        setAboutDropdownOpen(!aboutDropdownOpen)
        setFeaturesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setServicesDropdownOpen(false)
        setContactDropdownOpen(false)
        setResourcesDropdownOpen(false)
        break
      case "resources":
        setResourcesDropdownOpen(!resourcesDropdownOpen)
        setFeaturesDropdownOpen(false)
        setIndustriesDropdownOpen(false)
        setInsightsDropdownOpen(false)
        setServicesDropdownOpen(false)
        setContactDropdownOpen(false)
        setAboutDropdownOpen(false)
        break
      // Mobile submenu toggles
      case "financial":
        setMobileFinancialOpen(!mobileFinancialOpen)
        break
      case "records":
        setMobileRecordsOpen(!mobileRecordsOpen)
        break
      case "tax":
        setMobileTaxOpen(!mobileTaxOpen)
        break
      case "advisory":
        setMobileAdvisoryOpen(!mobileAdvisoryOpen)
        break
      case "compliance":
        setMobileComplianceOpen(!mobileComplianceOpen)
        break
      case "inforef":
        setMobileInfoRefOpen(!mobileInfoRefOpen)
        break
      case "support":
        setMobileSupportOpen(!mobileSupportOpen)
        break
      case "tools":
        setMobileToolsOpen(!mobileToolsOpen)
        break
      case "tech":
        setMobileTechOpen(!mobileTechOpen)
        break
      case "education":
        setMobileEducationOpen(!mobileEducationOpen)
        break
      case "industryspecific":
        setMobileIndustrySpecificOpen(!mobileIndustrySpecificOpen)
        break
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // xl breakpoint
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("nav")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <nav className="bg-white p-4 relative z-50 w-full">
      <div className="container mx-auto flex xl:justify-center justify-end items-center">
        {/* Logo could go here */}
        <div className="flex-1 xl:hidden"></div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden flex items-center justify-center w-10 h-10 bg-transparent appearance-none cursor-pointer z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <RxCross2 className="size-5" /> : <RxHamburgerMenu className="size-5" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center">
          <li className="mr-4 lg:mr-10">
            <Link
              href="/"
              className={`text-xs hover:text-[#fbc710] transition-colors uppercase ${
                pathname === "/" ? "text-[#fbc710]" : "text-black"
              }`}
            >
              HOME
            </Link>
          </li>
          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname.includes("services") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              SERVICES
            </div>
            <div
              className={`absolute text-[13px] z-10 -left-[170px] top-full w-[1089px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
                servicesDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="grid grid-cols-5 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">FINANCIAL</li>
                  <li>
                    <Link
                      href="/services/financial-statements/budget-planning-and-forecasting"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Budget Forecasting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/cash-flow-management"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cash Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/audit-preparation-assistance"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Audit Assistance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/financial-analysis-and-strategy"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Financial Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/cost-accounting-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cost Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/financial-risk-assessment"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Risk Assessment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/accounts-receivable-and-payable-mgt"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Receivable Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements/inventory-accounting"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Inventory Accounting
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">RECORDS</li>
                  <li>
                    <Link
                      href="/services/records/accounts-payable-receivable-reconciliation"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Receivable Reconciliation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/cloud-based-bookkeeping"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cloud Bookkeeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/real-time-financial-reporting"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Financial Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/expense-tracking-management"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Expense Tracking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/fixed-asset-management"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Asset Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/audit-ready-documentation"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Audit Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/accounting-software-integration"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Software Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/records/historical-bookkeeping-cleanup"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Bookkeeping Cleanup
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">TAX</li>
                  <li>
                    <Link
                      href="/services/tax/capital-gains-tax-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Capital Gains
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/tax-saving-strategies"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Startup Strategies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/charitable-contributions-tax-optimization"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Charitable Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/cryptocurrency-tax-reporting"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Crypto Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/payroll-tax-calculation"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Payroll Filing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/quarterly-tax-estimates"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Tax Estimates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/post-tax-season-consultation"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Post-Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax/estate-inheritance-tax-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Estate Planning
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">ADVISORY</li>
                  <li>
                    <Link
                      href="/services/advisory/financial-strategy-development"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Strategy Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/business-performance-optimization"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Performance Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/risk-management-consulting"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Risk Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/business-valuation-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Valuation Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/mergers-and-acquisitions-support"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      M&A Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/cash-flow-optimization-strategies"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cash Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/start-up-financial-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Start-Up Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advisory/cost-reduction-and-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cost Efficiency
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">COMPLIANCE</li>
                  <li>
                    <Link
                      href="/services/compliance/statutory-reporting-and-compliance"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Statutory Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/corporate-governance-advisory"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Governance Advisory
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/industry-regulatory-filings"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Regulatory Filings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/anti-money-laundering-compliance"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      AML Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/internal-controls-and-auditing"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Controls Auditing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/employment-and-labor-law-compliance"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Labor Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/corporate-secretarial-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Secretarial Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/compliance/environmental-social-and-governance"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      ESG Reporting
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </li>
          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <Link
              href="/industries"
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname.includes("industries") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              INDUSTRIES
            </Link>
            <div
              className={`absolute z-10 -left-[225px] top-full w-[1089px] py-12 bg-white shadow-lg duration-300 transition-opacity text-[13px] ${
                industriesDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="grid grid-cols-4 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
                <div className="space-y-4 px-4">
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Financial and Legal Services</li>
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/banking-financial-services"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Banking and Financial Services Insurance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/asset-management-and-hedge-funds-legal-firms"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Asset Mgt and Hedge Funds Legal Firms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/venture-capital-and-private-equity-firms"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Venture Capital and Private Equity Firms
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Retail, Hospitality, and Services</li>
                    <li>
                      <Link
                        href="/industries/retail/retail-wholesale"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Retail and Wholesale
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/retail/hospitality"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Hospitality
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/retail/ecommerce"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        E-commerce and Online Retailers
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Government and Public Sector</li>
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/government-agencies"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Government Agencies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/public-enterprises"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Public Enterprises
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/publicly-listed-companies"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Publicly Listed Companies
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Technology and Start-Ups</li>
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/technology-and-startups"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Technology and Start-Ups
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/engineering-and-it-consulting"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Engineering and IT Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/cryptocurrency-and-blockchain"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Cryptocurrency and Blockchain Companies
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Philanthropic Organizations</li>
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/non-profit-organizations"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Non-Profit Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/charities-and-philanthropic-entities"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Charities and Philanthropic Entities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/religious-institutions"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Religious Institutions
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Professional Services</li>
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/healthcare"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/education"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/professional-services"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Professional Services
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Real Estate industury</li>
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/manufacturing"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/construction"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Construction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/real-estate"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Real Estate
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li className="font-bold text-sm text-[#fbc710]">Environmental Industry</li>
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/energy-sector"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Energy Sector
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/environmental"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Environmental and Sustainable Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/circular-economy"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Circular Economy Strategies
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setFeaturesDropdownOpen(true)}
            onMouseLeave={() => setFeaturesDropdownOpen(false)}
          >
            <Link
              href="/features"
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname.includes("features") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              FEATURES
            </Link>
            <div
              className={`absolute z-10 text-[13px] -left-[290px] top-full w-[1089px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
                featuresDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="grid grid-cols-4 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
                <div className="space-y-3 px-4">
                  <li>
                    <Link
                      href="/features/tax-preparation-software"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/features/tax-preparation-software" ? "text-[#fbc710]" : "text-black"
                      }`}
                    >
                      Tax Preparation Software
                    </Link>
                    <p className="text-xs text-gray-500">
                      Automates tax calculations and ensures compliance (e.g., TurboTax, H&R Block).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/scenario-modeling-software"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Scenario Modeling Software
                    </Link>
                    <p className="text-xs text-gray-500">
                      Simulates &quot;what-if&quot; scenarios to evaluate potential tax outcomes (e.g., Fathom).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/tax-optimization-software"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Tax Optimization Software
                    </Link>
                    <p className="text-xs text-gray-500">
                      Helps identify deductions, credits, and savings opportunities (e.g., Bloomberg Tax).
                    </p>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li>
                    <Link
                      href="/features/withholding-tax-calculators"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Withholding Tax Calculators
                    </Link>
                    <p className="text-xs text-gray-500">
                      Assists businesses and individuals in calculating accurate tax withholdings.
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/document-management-software"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Document Management Software
                    </Link>
                    <p className="text-xs text-gray-500">
                      Securely stores, organizes, and retrieves tax-related files (e.g., DocuSign, Xero Tax).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/cross-border-tax-compliance-tools"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cross-Border Tax Compliance Tools
                    </Link>
                    <p className="text-xs text-gray-500">
                      Handles VAT, GST, and international tax filings (e.g., Avalara, Taxback International).
                    </p>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li>
                    <Link href="/features/tax-dashboards" className="text-black hover:text-[#fbc710] transition-colors">
                      Tax Dashboards
                    </Link>
                    <p className="text-xs text-gray-500">
                      Provides real-time insights into tax liabilities and filing status (e.g., Tableau, Power BI).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/audit-trail-tools"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Audit Trail Tools
                    </Link>
                    <p className="text-xs text-gray-500">
                      Tracks and logs financial transactions for audit and compliance (e.g., AuditFile).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/client-portal-solutions"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Client Portal Solutions
                    </Link>
                    <p className="text-xs text-gray-500">
                      Secure platforms for document sharing and communication with clients (e.g., ShareFile).
                    </p>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li>
                    <Link
                      href="/features/payroll-tax-management-software"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Payroll Tax Management Software
                    </Link>
                    <p className="text-xs text-gray-500">
                      Simplifies payroll tax calculations, filings, and compliance (e.g., QuickBooks Payroll).
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/industry-specific-tax-solutions"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Industry-Specific Tax Solutions
                    </Link>
                    <p className="text-xs text-gray-500">
                      Tools tailored to manage taxes in specialized industries like real estate, healthcare, and
                      manufacturing.
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/features/tax-filing-payment-platforms"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Tax Filing and Payment Platforms
                    </Link>
                    <p className="text-xs text-gray-500">
                      Enables seamless electronic filing and tax payment submissions (e.g., IRS e-File).
                    </p>
                  </li>
                </div>
              </ul>
            </div>
          </li>
          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setInsightsDropdownOpen(true)}
            onMouseLeave={() => setInsightsDropdownOpen(false)}
          >
            <div
              className={`text-xs hover:text-[#fbc710] transition-colors uppercase ${
                pathname.includes("/insights") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              INSIGHTS
            </div>
            <div
              className={`absolute z-10 text-[13px] -left-[345px] top-full w-[1089px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
                insightsDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="grid grid-cols-3 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">Tax Insights</li>
                  <li>
                    <Link
                      href="/insights/tax-insights"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/insights" ? "text-[#fbc710]" : "text-black"
                      }`}
                    >
                      <span>Compliance</span>
                      <p className="text-xs text-gray-500">
                        Ensuring adherence to local, national, and international tax regulations is critical for
                        avoiding penalties with stakeholders.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/tax-insights" className="text-black hover:text-[#fbc710] transition-colors">
                      Strategic Planning
                      <p className="text-xs text-gray-500">
                        Tax planning helps optimize financial performance through credits, deductions, and deferrals.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/tax-insights" className="text-black hover:text-[#fbc710] transition-colors">
                      Impact on Cash Flow
                      <p className="text-xs text-gray-500">
                        Timely filing and tax optimization directly influence a business&apos;s liquidity and
                        operational health.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/tax-insights" className="text-black hover:text-[#fbc710] transition-colors">
                      Industry-Specific Nuances
                      <p className="text-xs text-gray-500">
                        Different sectors (e.g., healthcare, real estate, manufacturing) face unique tax regulations and
                        opportunities.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights/tax-insights" className="text-black hover:text-[#fbc710] transition-colors">
                      Globalization
                      <p className="text-xs text-gray-500">
                        Cross-border taxation and regulatory requirements are increasingly relevant for businesses
                        operating globally.
                      </p>
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">Accounting Insights</li>
                  <li>
                    <Link
                      href="/insights/accounting-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Holistic Financial View
                      <p className="text-xs text-gray-500">
                        Accounting provides an overarching view of an organizations financial, aiding stakeholders in
                        making informed decisions.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/accounting-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Strategic Financial Management
                      <p className="text-xs text-gray-500">
                        By interpreting financial data, accounting supports budgeting, forecasting, and long-term
                        planning.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/accounting-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Regulatory Adherence
                      <p className="text-xs text-gray-500">
                        Accurate accounting ensures compliance with financial reporting standards like GAAP or IFRS.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/accounting-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Technology Integration
                      <p className="text-xs text-gray-500">
                        Cloud accounting platforms and ERP systems have revolutionized reporting, making data accessible
                        in real time.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/accounting-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Decision Support
                      <p className="text-xs text-gray-500">
                        Beyond numbers, accounting insights drive strategies like cost optimization, revenue, and
                        investment analysis.
                      </p>
                    </Link>
                  </li>
                </div>
                <div className="space-y-3 px-4">
                  <li className="font-bold text-sm text-[#fbc710]">Bookkeeping Insights</li>
                  <li>
                    <Link
                      href="/insights/bookkeeping-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Foundational for Accounting
                      <p className="text-xs text-gray-500">
                        Proper bookkeeping ensures accurate data entry, forming the base for financial analysis.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/bookkeeping-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Real-Time Tracking
                      <p className="text-xs text-gray-500">
                        Timely bookkeeping provides immediate insights into cash flow, expenses, and receivables.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/bookkeeping-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Automation Trends
                      <p className="text-xs text-gray-500">
                        Automated bookkeeping tools (e.g., QuickBooks, Xero) reduce human error and save time.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/bookkeeping-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      SME Benefits
                      <p className="text-xs text-gray-500">
                        Small and medium enterprises rely heavily on precise bookkeeping for expense tracking and
                        financial organization.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/bookkeeping-insights"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Scalability
                      <p className="text-xs text-gray-500">
                        Efficient bookkeeping practices enable businesses to scale by keeping financial records
                        structured and audit-ready.
                      </p>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </li>
          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <div
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname.includes("/resources") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              RESOURCES
            </div>
            <div
              className={`absolute z-10 text-[13px] -left-[400px] top-full w-[1089px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
                resourcesDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="grid grid-cols-3 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
                <div className="space-y-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">INFORMATION AND REFERENCE</li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/glossary"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Glossary
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/state-tax-deadlines"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        State Tax Deadlines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/federal-tax-deadlines"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Federal Tax Deadlines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/tax-law-updates"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Tax Law Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/knowledge-base"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/regulatory-faqs"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Regulatory FAQs
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">SUPPORT AND COMMUNITY</li>
                    <li>
                      <Link
                        href="/resources/support-and-community/support-center"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/faqs"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/chat-email-support"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Chat or Email Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/community-forum"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Community Forum
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/troubleshooting-guides"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Troubleshooting Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/customer-feedback"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Customer Feedback Portal
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">TOOLS AND TEMPLATES</li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/tax-calculator"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Tax Calculator Tools
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/compliance-checklists"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Compliance Checklists
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/templates-and-forms"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Templates and Forms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/tax-filing-assistance"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Tax Filing Assistance Tools
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/budgeting-planning-templates"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Budgeting and Planning Templates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/real-time-reporting"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Real-Time Reporting Tools
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 py-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">TECHNOLOGY AND INTEGRATION</li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/security"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/mobile-app-integration"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Mobile App Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/cloud-based-document-storage"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Cloud-Based Document Storage
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/software-integration-guides"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Software Integration Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/automation-tools"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Automation Tools for Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/multi-device-syncing"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Multi-Device Syncing
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 py-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">EDUCATION AND LEARNING</li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/educational-webinars"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Educational Webinars
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/interactive-guides"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Interactive Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/case-studies"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/online-courses"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Online Courses on Tax and Accounting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/e-books"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        E-books on Financial Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/software-tutorials"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Tutorials for Software Use
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="space-y-4 py-4 px-4">
                  <div className="space-y-2">
                    <li className="font-bold text-sm text-[#fbc710]">INDUSTRY-SPECIFIC RESOURCES</li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-real-estate"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-healthcare"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-ecommerce"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-manufacturing"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-non-profit"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for Non-Profit Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-startups"
                        className="text-black hover:text-[#fbc710] transition-colors"
                      >
                        Resources for Startups
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li className="mr-4 lg:mr-10">
            <Link
              href="/partner-application-form"
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname === "/partner-application-form" ? "text-[#fbc710]" : "text-black"
              }`}
            >
              <span className="2xl:block hidden">Partner Application Form</span>
              <span className="block 2xl:hidden">PA Form</span>
            </Link>
          </li>

          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <Link
              href="/about"
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname === "/about" ? "text-[#fbc710]" : "text-black"
              }`}
            >
              ABOUT
            </Link>
          </li>

          <li
            className="relative group mr-4 lg:mr-10"
            onMouseEnter={() => setContactDropdownOpen(true)}
            onMouseLeave={() => setContactDropdownOpen(false)}
          >
            <Link
              href="/contact"
              className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
                pathname.includes("/contact") ? "text-[#fbc710]" : "text-black"
              }`}
            >
              CONTACT
            </Link>
            <div
              className={`absolute z-10 text-[13px] right-0 top-full w-[300px] py-6 bg-white shadow-lg duration-300 transition-opacity ${
                contactDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="text-[11px] px-4 space-y-3">
                <li>
                  <Link
                    href="/contact/get-a-consultation"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Get a Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/contact/support" className="text-black hover:text-[#fbc710] transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black hover:text-[#fbc710] transition-colors">
                    Office Locations
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="ml-auto mr-4 lg:mr-10">
            {!isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-xs text-black hover:text-[#fbc710] transition-colors uppercase">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="text-xs bg-[#fbc710] hover:bg-[#e0b10e] text-black py-2 px-4 rounded transition-colors uppercase"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-2 text-xs text-black hover:text-[#fbc710] transition-colors uppercase"
                >
                  <User className="h-4 w-4" />
                  <span>{session?.user?.username || "Profile"}</span>
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-[11px]">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>


        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 w-full sm:w-3/4 md:w-1/2" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4 border-b">
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <RxCross2 className="size-5" />
            </button>
          </div>

          <ul className="flex flex-col text-base p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
            <li>
              <Link
                href="/"
                className={`px-4 transition-colors block py-2 ${pathname === "/" ? "text-[#fbc710]" : "text-black"}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("services")}
              >
                <span className={pathname.includes("services") ? "text-[#fbc710]" : "text-black"}>Services</span>
                {servicesDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  servicesDropdownOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Financial */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("financial")}
                  >
                    <span>FINANCIAL</span>
                    {mobileFinancialOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileFinancialOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/services/financial-statements/budget-planning-and-forecasting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Budget Forecasting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/cash-flow-management"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cash Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/audit-preparation-assistance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Audit Assistance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/financial-analysis-and-strategy"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Financial Strategy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/cost-accounting-services"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cost Accounting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/financial-risk-assessment"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Risk Assessment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/accounts-receivable-and-payable-mgt"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Receivable Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/financial-statements/inventory-accounting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Inventory Accounting
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Records */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("records")}
                  >
                    <span>RECORDS</span>
                    {mobileRecordsOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileRecordsOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/services/records/accounts-payable-receivable-reconciliation"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Receivable Reconciliation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/cloud-based-bookkeeping"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cloud Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/real-time-financial-reporting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Financial Reporting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/expense-tracking-management"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Expense Tracking
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/fixed-asset-management"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Asset Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/audit-ready-documentation"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Audit Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/accounting-software-integration"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Software Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/records/historical-bookkeeping-cleanup"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Bookkeeping Cleanup
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Tax */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("tax")}
                  >
                    <span>TAX</span>
                    {mobileTaxOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileTaxOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/services/tax/capital-gains-tax-planning"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Capital Gains
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/tax-saving-strategies"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Startup Strategies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/charitable-contributions-tax-optimization"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Charitable Optimization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/cryptocurrency-tax-reporting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Crypto Reporting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/payroll-tax-calculation"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Payroll Filing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/quarterly-tax-estimates"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Tax Estimates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/post-tax-season-consultation"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Post-Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax/estate-inheritance-tax-planning"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Estate Planning
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Advisory */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("advisory")}
                  >
                    <span>ADVISORY</span>
                    {mobileAdvisoryOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileAdvisoryOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/services/advisory/financial-strategy-development"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Strategy Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/business-performance-optimization"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Performance Optimization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/risk-management-consulting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Risk Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/business-valuation-services"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Valuation Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/mergers-and-acquisitions-support"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        M&A Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/cash-flow-optimization-strategies"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cash Optimization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/start-up-financial-planning"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Start-Up Planning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/advisory/cost-reduction-and-planning"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cost Efficiency
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Compliance */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("compliance")}
                  >
                    <span>COMPLIANCE</span>
                    {mobileComplianceOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileComplianceOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/services/compliance/statutory-reporting-and-compliance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Statutory Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/corporate-governance-advisory"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Governance Advisory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/industry-regulatory-filings"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Regulatory Filings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/anti-money-laundering-compliance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        AML Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/internal-controls-and-auditing"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Controls Auditing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/employment-and-labor-law-compliance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Labor Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/corporate-secretarial-services"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Secretarial Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance/environmental-social-and-governance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        ESG Reporting
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Industries Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("industries")}
              >
                <span className={pathname.includes("industries") ? "text-[#fbc710]" : "text-black"}>Industries</span>
                {industriesDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  industriesDropdownOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Financial and Legal Services */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Financial and Legal Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/banking-financial-services"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Banking and Financial Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/asset-management-and-hedge-funds-legal-firms"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Asset Mgt and Hedge Funds
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/financial-and-legal-services/venture-capital-and-private-equity-firms"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Venture Capital and Private Equity
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Retail */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Retail, Hospitality, and Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/retail/retail-wholesale"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Retail and Wholesale
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/retail/hospitality"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Hospitality
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/retail/ecommerce"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        E-commerce and Online Retailers
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Government and Public Sector */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Government and Public Sector</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/government-agencies"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Government Agencies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/public-enterprises"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Public Enterprises
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/government-and-public-sector/publicly-listed-companies"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Publicly Listed Companies
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Technology and Start-Ups */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Technology and Start-Ups</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/technology-and-startups"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Technology and Start-Ups
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/engineering-and-it-consulting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Engineering and IT Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/technology-and-start-ups/cryptocurrency-and-blockchain"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cryptocurrency and Blockchain
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Philanthropic Organizations */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Philanthropic Organizations</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/non-profit-organizations"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Non-Profit Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/charities-and-philanthropic-entities"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Charities and Philanthropic Entities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/non-profit-and-philanthropic-organizations/religious-institutions"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Religious Institutions
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Professional Services */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Professional Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/healthcare"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/education"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/healthcare-education-and-professional-services/professional-services"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Professional Services
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Real Estate Industry */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Real Estate Industry</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/manufacturing"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/construction"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Construction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/manufacturing-construction-and-real-estate/real-estate"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Real Estate
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Environmental Industry */}
                <li className="mb-4">
                  <h3 className="font-bold text-[#fbc710] mb-2">Environmental Industry</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/energy-sector"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Energy Sector
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/environmental"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Environmental and Sustainable Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/energy-environment-and-sustainability/circular-economy"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Circular Economy Strategies
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Features Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("features")}
              >
                <span className={pathname.includes("features") ? "text-[#fbc710]" : "text-black"}>Features</span>
                {featuresDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  featuresDropdownOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="/features/tax-preparation-software"
                    className={`transition-colors block py-1 ${
                      pathname === "/features/tax-preparation-software" ? "text-[#fbc710]" : "text-black"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Tax Preparation Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/scenario-modeling-software"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Scenario Modeling Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/tax-optimization-software"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Tax Optimization Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/withholding-tax-calculators"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Withholding Tax Calculators
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/document-management-software"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Document Management Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/cross-border-tax-compliance-tools"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cross-Border Tax Compliance Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/tax-dashboards"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Tax Dashboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/audit-trail-tools"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Audit Trail Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/client-portal-solutions"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Client Portal Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/payroll-tax-management-software"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Payroll Tax Management Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/industry-specific-tax-solutions"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Industry-Specific Tax Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features/tax-filing-payment-platforms"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Tax Filing and Payment Platforms
                  </Link>
                </li>
              </ul>
            </li>

            {/* Insights Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("insights")}
              >
                <span className={pathname.includes("insights") ? "text-[#fbc710]" : "text-black"}>Insights</span>
                {insightsDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  insightsDropdownOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="/insights/tax-insights"
                    className="text-black hover:text-[#fbc710] transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Tax Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Accounting Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Bookkeeping Insights
                  </Link>
                </li>
              </ul>
            </li>

            {/* Resources Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("resources")}
              >
                <span className={pathname.includes("resources") ? "text-[#fbc710]" : "text-black"}>Resources</span>
                {resourcesDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  resourcesDropdownOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Information and Reference */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("inforef")}
                  >
                    <span>INFORMATION AND REFERENCE</span>
                    {mobileInfoRefOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileInfoRefOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/information-and-reference/glossary"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Glossary
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/state-tax-deadlines"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        State Tax Deadlines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/federal-tax-deadlines"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Federal Tax Deadlines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/tax-law-updates"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Tax Law Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/knowledge-base"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/information-and-reference/regulatory-faqs"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Regulatory FAQs
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Support and Community */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("support")}
                  >
                    <span>SUPPORT AND COMMUNITY</span>
                    {mobileSupportOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileSupportOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/support-and-community/support-center"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/faqs"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/chat-email-support"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Chat or Email Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/community-forum"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Community Forum
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/troubleshooting-guides"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Troubleshooting Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/support-and-community/customer-feedback"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Customer Feedback Portal
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Tools and Templates */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("tools")}
                  >
                    <span>TOOLS AND TEMPLATES</span>
                    {mobileToolsOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileToolsOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/tools-and-templates/tax-calculator"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Tax Calculator Tools
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/compliance-checklists"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Compliance Checklists
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/templates-and-forms"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Templates and Forms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/tax-filing-assistance"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Tax Filing Assistance Tools
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/budgeting-planning-templates"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Budgeting and Planning Templates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/tools-and-templates/real-time-reporting"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Real-Time Reporting Tools
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Technology and Integration */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("tech")}
                  >
                    <span>TECHNOLOGY AND INTEGRATION</span>
                    {mobileTechOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileTechOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/technology-and-integration/security"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/mobile-app-integration"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Mobile App Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/cloud-based-document-storage"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Cloud-Based Document Storage
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/software-integration-guides"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Software Integration Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/automation-tools"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Automation Tools for Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/technology-and-integration/multi-device-syncing"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Multi-Device Syncing
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Education and Learning */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("education")}
                  >
                    <span>EDUCATION AND LEARNING</span>
                    {mobileEducationOpen ? <RxCross2 className="size-3" /> : <RxHamburgerMenu className="size-3" />}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileEducationOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/education-and-learning/educational-webinars"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Educational Webinars
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/interactive-guides"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Interactive Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/case-studies"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/online-courses"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Online Courses on Tax and Accounting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/e-books"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        E-books on Financial Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/education-and-learning/software-tutorials"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Tutorials for Software Use
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Industry-Specific Resources */}
                <li className="mb-4">
                  <div
                    className="font-bold text-[#fbc710] mb-2 flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownClick("industryspecific")}
                  >
                    <span>INDUSTRY-SPECIFIC RESOURCES</span>
                    {mobileIndustrySpecificOpen ? (
                      <RxCross2 className="size-3" />
                    ) : (
                      <RxHamburgerMenu className="size-3" />
                    )}
                  </div>
                  <ul
                    className={`space-y-2 transition-all duration-300 overflow-hidden ${
                      mobileIndustrySpecificOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-real-estate"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-healthcare"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-ecommerce"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-manufacturing"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-non-profit"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for Non-Profit Organizations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/industry-specific-resouces/resources-startups"
                        className="text-black hover:text-[#fbc710] transition-colors block py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources for Startups
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/partner-application-form"
                className={`px-4 transition-colors block py-2 ${
                  pathname === "/partner-application-form" ? "text-[#fbc710]" : "text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Partner Application Form
              </Link>
            </li>

            {/* About Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("about")}
              >
                <span className={pathname === "/about" ? "text-[#fbc710]" : "text-black"}>About</span>
                {aboutDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  aboutDropdownOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="/about"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Certifications
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact Section */}
            <li className="border-t pt-4">
              <div
                className="px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => handleDropdownClick("contact")}
              >
                <span className={pathname.includes("/contact") ? "text-[#fbc710]" : "text-black"}>Contact</span>
                {contactDropdownOpen ? <RxCross2 className="size-4" /> : <RxHamburgerMenu className="size-4" />}
              </div>
              <ul
                className={`mt-2 w-full px-5 transition-all duration-300 overflow-hidden ${
                  contactDropdownOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    href="/contact/get-a-consultation"
                    className={`transition-colors block py-1 ${
                      pathname === "/contact/get-a-consultation" ? "text-[#fbc710]" : "text-black"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/support"
                    className={`transition-colors block py-1 ${
                      pathname === "/contact/support" ? "text-[#fbc710]" : "text-black"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black transition-colors block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Office Locations
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}