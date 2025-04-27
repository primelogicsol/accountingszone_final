import Image from "next/image"

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <section className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-3/5 mb-12 md:mb-0 md:pr-8 lg:pr-12">
            <h2 className="mb-4 md:mb-6 font-semibold tracking-widest text-base lg:text-lg text-[#fbc710] uppercase fade-in">
            SERVICES
            </h2>

          <h3 className="mb-8 text-3xl font-bold tracking-[0.02em] lg:text-4xl fade-in">
            To meet your needs <br />
            <span className="text-sm text-gray-500">
              Accounting, Bookkeeping, Financial Reporting, Payroll And Tax Services
            </span>
          </h3>

          <ul className="space-y-8">
            <li className="hover:cursor-pointer duration-300">
              <div className="text-lg font-bold uppercase mb-4">Accounting</div>
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Financial Statements</h4>
                    <p className="text-sm text-gray-500">
                      We prepare comprehensive financial, income, cash flow statements and balance sheets.
                    </p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Ledger Maintenance</h4>
                    <p className="text-sm text-gray-500">
                      Our team ensures that your general ledger is accurate and up-to-date.
                    </p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Payroll Accounting</h4>
                    <p className="text-sm text-gray-500">
                      Accurate payroll accounting is crucial for compliance and employee satisfaction.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:cursor-pointer duration-300">
              <div className="text-lg font-bold uppercase mb-4">BookKeeping</div>
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Financial Record Keeping</h4>
                    <p className="text-sm text-gray-500">
                      Ensure your financial transactions are meticulously recorded and organized.
                    </p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Reconciliation and Reporting</h4>
                    <p className="text-sm text-gray-500">Keep your accounts balanced and up-to-date.</p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Custom Bookkeeping Solutions</h4>
                    <p className="text-sm text-gray-500">
                      Tailored to fit your business needs, our customizable bookkeeping services.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-black hover:cursor-pointer duration-300">
              <div className="text-lg font-bold uppercase mb-4">Tax planning</div>
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Strategic Tax Optimization</h4>
                    <p className="text-sm text-gray-500">
                      Maximize your savings with our strategic tax planning services.
                    </p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Comprehensive Tax Compliance</h4>
                    <p className="text-sm text-gray-500">
                      Our expert team ensures your tax filings are accurate and timely, helping you avoid penalties and
                      optimize your tax liabilities.
                    </p>
                  </li>
                  <li className="hover:text-black hover:cursor-pointer duration-300 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">Proactive Tax Advisory</h4>
                    <p className="text-sm text-gray-500">
                      We provide ongoing advice and updates on tax law changes, ensuring your business remains compliant
                      and financially efficient.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
          <div className="relative">
            <Image
              src="/accounting/accounting1.jpg"
              width="426"
              height="573"
              alt="Accounting Section"
              className="max-w-full h-auto fade-in shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
