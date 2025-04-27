import React from "react";
import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import FSCard from "./FSCard";
import ServicesFooter from "./ServicesFooter";
import FAQs from "./OurApproach";
import ServicesGrid from "./ServicesGrid";

const financialStatementsCards = [
  {
    title: "Current accounting and bookkeeping",
    description:
      "Accounting not only needs to work and be right, but it also needs to be easy. An accounting consultant who understands the bookkeeping process for a company in your industry is invaluable. Then, it will not only work and be right with clever solutions for you, but it will also be safe.",
  },
  {
    title: "Financial statements & annual report",
    description:
      "Closing the books means an annual report needs to be prepared. It's the year's summary, and here's where it's important to think like an accountant. Are there any accruals on the books? Or maybe you're just closing statements? With the help of an experienced accountant, the final line in your annual report won't just be right, it'll be perfect.",
  },
  {
    title: "Payroll administration",
    description:
      "Collective agreement, time reporting, expense management? We provide a flexible and up-to-date payroll administration solution, which can be used even if, say, you manage the bookkeeping on your own. We provide salary consultants globally and a service that you can easily expand into as your business develops.",
  },
  {
    title: "Advice and personal accounting consultant",
    description:
      "Current Accounting, Tax Returns, and Payroll Administration in All Its Splendor. These things should just work. As your client, you get a great deal of value when your advisor gives you advice and insights you wouldn't otherwise have access to. For instance, when it's time to invest or switch between systems, having an advisor is a sounding board that adds value in your day-to-day life.",
  },
];

const gridCards = [
  {
    title: "Customize Management Reports",
    description:
      "Depending on your needs, we provide a comprehensive management report package that allows you to customize the date, comparison, year-to-date and other options.",
  },
  {
    title: "Preparing monthly / quarterly / annual reports",
    description:
      "We assist you in setting up automation accounting and reporting systems for quick data entry and report preparation.",
  },
  {
    title: "Accounts Receivable / Payable",
    description:
      "Aging summary report Ageing summary report overdue receipts and payments To keep your business and accounting up to date.",
  },
  {
    title: "Profit & Loss Statement & Balance Sheet Preparation",
    description:
      "We ensure that your final accounts are prepared with precision and accuracy to help you understand the results of your operations and the financial situation of your company.",
  },
  {
    title: "Write up Services",
    description:
      "Entry of transactions Journals General ledger Assets/equipment ledger Expenses ledger Trial balance Cash flow statements.",
  },
  {
    title: "Forecasting & Budgeting",
    description:
      "We're not a numbers company. We&apos;re a problem-solving company. We can help you set goals, align your budget with your operations and forecast your sales targets.",
  },
  {
    title: "Maintaining General Ledger",
    description:
      "We use digitized accounting software to post entries in the general ledger, complete ledger accounts, and set up a trial balance for your company.",
  },
  {
    title: "Inventory Accounting",
    description:
      "It can be difficult to keep track of and value your inventory. Find, monitor and manage your company's inventory with Glocal's unbeatable and best accounting services.",
  },
  {
    title: "Asset Accounting",
    description:
      "All your fixed assets are professionally mapped, identified and valued. Grow Your Business and Business Assets with Shrinkconsulting.",
  },
  {
    title: "Cash Flow Management",
    description:
      "We work out your net cash flow so you know where you stand financially and what your business opportunities are in the future.",
  },
];

const faqs = [
  {
    heading: "We offer support to businesses of all types",
    description:
      "A limited company needs to oversee its accounts and announce VAT/Tax and charge on an progressing premise. When the year is over, you require to draw up an yearly report that is sent to the country Companies Enrolment Office. Restricted companies are regularly a great shape of company for you who have a marginally bigger trade and need to keep your private accounts partitioned from the company's.",
  },
  {
    heading: "Sole Proprietorship Structure",
    description:
      "A sole proprietorship is not its own legal entity. However, the bookkeeping still needs to be managed. It is important to distinguish between the company's finances and your own as a private person when you book your sole proprietorship. We recommend that you have a separate business account with the bank. In this way, it becomes easier to ensure that everything that should be recorded is recorded.",
  },
  {
    heading: "Trading Companies and Limited Partnerships",
    description:
      "Trading company is its own legal entity that can be run and owned by two or more partners. Since you are personally responsible in a trading company, it is of great importance that your bookkeeping is correct. Therefore, not only the financial parts are important, but also the legal ones (so that the owners can be secure in their business).",
  },
  {
    heading: "Non-profit and Economic Association",
    description:
      "If you run a financial association, you must always draw up an annual report and have an auditor. An annual report must be drawn up no later than 7 months from the end of the financial year, and according to the Annual Accounts Act (ÅRL) must contain a balance sheet, income statement and an administration report.",
  },
];

export default function FinancialStatementsSection() {
  return (
    <div className="lg:max-w-[1100px] mx-auto container">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full order-1 mx-auto lg:order-none">
          <h2 className="text-2xl lg:text-3xl lg:mt-12 mb-[35px] lg:mb-[66px] font-bold text-black">
            Personal Accounting Assistance
          </h2>

          <div className="text-sm text-gray-500 lg:text-base">
            <p className="mt-[15px] lg:mt-[26px]">
              A large and modern accounting firm does not have to lose its human
              touch. In fact, we are one of the biggest accounting firms in
              india. While we concentrate on the relationship between you as an
              entrepreneur and your personal accounting consultant.
            </p>
            <p className="mt-[15px] lg:mt-[26px]">
              Your accounting consultant also has a replacement in the
              background. This person is kept up to date on your company and can
              quickly step in if your consultant gets sick or for any other
              reason.
            </p>
            <p className="mt-[15px] lg:mt-[26px]">
              You get help with just those parts of the report that you need.
              Together we will find a plan that works. And which can be adapted
              as things change for you and your business.
            </p>
          </div>

          <div className="m-[35px_0_28px] lg:m-[80px_0_77px]">
            <Image
              src="/accounting/accounting1.jpg"
              width={780}
              height={428}
              alt="Personal Accounting Assistance"
              className="w-full object-cover"
            />
          </div>

          <ServicesGrid
            title="Our Management Accounting Services Gives You Everything"
            gridCards={gridCards}
          />

          <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
            Our Capabilities
          </h3>

          <div className="space-y-8 lg:space-y-16">
            <div className="space-y-[15px] lg:space-y-[26px]">
              <h4 className="text-lg font-semibold text-black">
                Customer satisfaction guarantee for the first 30 days
              </h4>
              <p className="text-sm text-gray-500 lg:text-base">
                You will receive a refund if, as a partner, we don&apos;t live
                up to your expectations. For us, nothing matters more than our
                clients&apos; satisfaction. We have an average customer
                satisfaction rating of 9/10*, therefore we are certain that you
                will be happy working with us as your financial partner as
                well.. Should our service not match your expectations, you may
                discontinue the partnership with us within the first 60 days
                from signing the contract and get back the cost of the ongoing
                accounting**.
              </p>
              <p className="text-sm text-gray-500 lg:text-base">
                Average rating for the customer experience of our advice in our
                ongoing customer survey.
              </p>
            </div>

            <div className="space-y-[15px] lg:space-y-[26px]">
              <h4 className="text-lg font-semibold text-black">
                Flexible Accounting, Bookkeeping and Finance Services
              </h4>
              <p className="text-sm text-gray-500 lg:text-base">
                Maybe you want to take care of payroll and invoicing on your
                own, but need a little more help with bookkeeping and financial
                statements. You can choose to work with us whether you need a
                full-service accounting firm that covers the whole accounting
                process, or you just need a one-stop shop for individual
                accounting support and guidance. We always cater to your needs
                and circumstances.
              </p>
            </div>

            <div className="pt-6 lg:pt-12">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {financialStatementsCards.map((item, index) => (
                  <li key={index}>
                    <FSCard title={item.title} description={item.description} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FAQs
            title="We offer support to businesses of all types"
            ourApproach={faqs}
          />

          <ServicesFooter
            text="We are here to address any questions you may have as you implement your
        plan. Additionally, for clients seeking an ongoing partnership, we
        provide comprehensive Bookkeeping Services."
          />
        </div>
      </div>
    </div>
  );
}
