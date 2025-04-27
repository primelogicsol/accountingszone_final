import React from "react";

export default function PrivacyPolicy() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Privacy Policy
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[210px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="mr-0 w-full order-1 lg:mr-[127px] lg:order-none">
                  <h2 className="text-2xl font-bold text-black mb-[35px] lg:mb-[66px]">
                    What information do we collect?
                  </h2>
                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      When you interact with us, we may collect your name,
                      address, email address(es), telephone number(s), and,
                      where appropriate, date of birth.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                    How do we collect information?
                  </h2>
                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      We may collect information about you whenever you interact
                      with us. For example, when you contact regarding our
                      activities, register as a supporter, send or receive
                      information or sign a petition, you specifically and
                      knowingly provide us with your personal information. We
                      may also receive information about you from third parties
                      – but only if you have given them permission to share your
                      information.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                    Confidentiality
                  </h2>
                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      We will not be responsible for the privacy of data
                      collected by websites not owned or managed by Charity,
                      including those linked through our website.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                    Making a complaint
                  </h2>
                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      If you are not satisfied with the response, please contact
                      us at info@accountingszone.com with the details explaining
                      your concerns. We will review your complaint and
                      investigate if the right procedures have been followed and
                      respond back to you as appropriate. We aim to complete
                      this investigation within 15 working days of receiving
                      your complaint, however, in some cases it may take longer.
                      If you are still unsatisfied with the response, you may
                      contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
