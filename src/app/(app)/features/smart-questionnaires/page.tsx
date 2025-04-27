import React from "react";
import Image from "next/image";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";

const smartQuestionnairesCards = [
  {
    title: "Identification",
    description:
      "Questions determine which strategies may apply based on a particular client’s facts and circumstances.",
  },
  {
    title: "Qualification",
    description:
      "Questions determine which strategies may apply based on a particular client’s facts and circumstances.",
  },
  {
    title: "Calculation",
    description:
      "Questions determine which strategies may apply based on a particular client’s facts and circumstances.",
  },
];

export default function SmartQuestionnaires() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Smart Questionnaires
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg font-semibold text-black lg:text-xl">
                      Eliminate Data Entry With Customizable, User-Friendly
                      Questionnaires
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Easily gather the data you need from your clients to make
                      smart tax planning recommendations. Accountings
                      Zone&apos;s questionnaires react to your inputs, delving
                      deeper when needed to maximize tax savings while omitting
                      unnecessary questions.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] justify-self-center max-w-[400px] lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting2.jpg"
                      width={400}
                      height={400}
                      alt="Tax Planning Strategies"
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                      Everything You Need from Clients, for Every Entity — Fast
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone smart questionnaires allow you to gather
                      the tax planning inputs you need from your clients in
                      minutes without asking for unnecessary data.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Smart questionnaires take thousands of strategies and sort
                      them into six sections to create a streamlined experience
                      for clients and staff:
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Income Optimization for Tax Management
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Dividends, W-2 wages, flow-through income, management fees
                      and all other types of income play a significant role in
                      tax plans. Accountings Zone&apos;s multi-entity tax
                      calculation allows you to shift income to different
                      categories, in different entities, in different
                      jurisdictions to achieve an optimal mix of income for each
                      client scenario.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Form Inputs to Build the Full Scenario
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone tax planning software doesn&apos;t just
                      allow you to create tax plans — you can also estimate a
                      client&apos;s final tax return and make the right
                      recommendations to help lower taxes. Accountings Zone
                      supports hundreds of federal, state and local forms, and
                      more are added every day.
                    </p>

                    <div className="mt-[15px] lg:mt-[26px]">
                      <ul className="list-disc flex flex-col gap-y-1 md:gap-y-2">
                        <li>Background information</li>
                        <li>Dependents</li>
                        <li>Entity structure</li>
                        <li>Personal financial picture</li>
                        <li>Real estate financial picture</li>
                        <li>Business financial picture</li>
                      </ul>
                    </div>

                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone&apos;s questions adapt to user inputs
                      along the way, so your clients will never have to input
                      data that does not relate to their tax scenario.
                    </p>
                  </div>

                  <div className="space-y-8 lg:space-y-16">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                      3 Types of Questions to Give You Confidence
                    </h3>
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <p className="text-lg md:text-base">
                        Accountings Zone smart questionnaires have three types
                        of questions:
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {smartQuestionnairesCards.map((item, index) => (
                        <li key={index}>
                          <FSCard
                            title={item.title}
                            description={item.description}
                          />
                        </li>
                      ))}
                    </ul>

                    <div className="text-sm text-gray-500 lg:text-base">
                      <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                        Uniform Questionnaire
                      </h3>
                      <p className="mt-[15px] lg:mt-[26px]">
                        Accountings Zone simplifies the client experience with
                        smart questionnaires. Your client can answer the fewest
                        number of questions for their current entity and see how
                        an entity change would affect their situation and
                        potentially lower taxes in minutes.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                    Questions Supporting 1,500+ Strategies
                  </h3>

                  <div className="mt-[15px] lg:mt-[26px]">
                    <ul className="list-disc flex flex-col text-gray-500 gap-y-1 md:gap-y-2">
                      <li>
                        Capture federal, state and local tax planning
                        information
                      </li>
                      <li>
                        Collect information on over 1,500 strategies in all 50
                        US states and DC.
                      </li>
                      <li>
                        Gather answers to individual and multi-entity state
                        questions to capture state taxes and savings.
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Built to Enhance Your Client Experience
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      No one likes filling out long forms. Smart forms gather
                      the information you need — without wasting time collecting
                      information you don&apos;t.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone&apos;s smart questionnaires were built
                      with a fast and logical user experience to get exactly
                      what you need from each client without questions that are
                      not relevant to their case.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Teach Tax Staff & Managers How to Tax Plan
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Smart questionnaires empower your team and allow you to
                      expand your firm efficiently. Now your staff can gather
                      the information needed to create professional tax plans
                      directly from clients without prior tax planning
                      experience with Accountings Zone&apos;s accounting
                      practice management software.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      All Major Business Types Supported
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Smart questionnaires support many business types and adapt
                      to ask only relevant questions depending on your
                      client&apos;s selections.
                    </p>

                    <p className="mt-[15px] lg:mt-[26px]">
                      Clients can easily indicate their business type:
                    </p>

                    <div className="mt-[15px] lg:mt-[26px]">
                      <ul className="list-disc flex flex-col gap-y-1 md:gap-y-2">
                        <li>1040 Schedule C</li>
                        <li>1040 Schedule E</li>
                        <li>1040 Schedule F</li>
                        <li>1120</li>
                        <li>1120S</li>
                        <li>1065</li>
                        <li>1040</li>
                        <li>Farm Rental</li>
                      </ul>
                    </div>
                  </div>

                  <ServicesFooter
                    text="Accountings Zone's smart questionnaire then tailors
                      questions specific to that entity type, industry and
                      potential tax strategy matches."
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}