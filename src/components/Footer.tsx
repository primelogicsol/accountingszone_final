
"use client"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Footer() {
  const pathname = usePathname()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Support", href: "/contact/support" },
        { name: "FAQs", href: "/faqs" },
        { name: "Our Location", href: "/contact" },
        { name: "Site Map", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-lg group-hover:text-white transition-colors" />,
      href: "https://www.facebook.com/people/Accountings-Zone/100093148360065/",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter className="text-lg group-hover:text-white transition-colors" />,
      href: "https://x.com/accountingszone",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-lg group-hover:text-white transition-colors" />,
      href: "https://www.instagram.com/accountingszone/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-lg group-hover:text-white transition-colors" />,
      href: "https://www.linkedin.com/company/accountingszone/?viewAsMember=true",
    },
  ]

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
          {/* Logo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/Accountings.png"
                alt="Accounting Zone Logo"
                width={160}
                height={160}
                className="h-auto w-auto max-w-[160px]"
              />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 hover:text-yellow-500 ${
                          pathname === link.href ? "text-yellow-500 font-medium" : "text-gray-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links - Centered across full width */}
        <div className="flex justify-center space-x-5 mt-8 w-full">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-500 transition-all duration-200 ease-in-out"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Accountings Zone. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}