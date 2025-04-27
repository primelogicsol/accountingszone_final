import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting and Bookkeeping Services For USA Businesses",
  description:
    "AccountingsZone USA provides professional bookkeeping and accounting services for businesses, specializing in QuickBooks, tax compliance, payroll, and financial planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
