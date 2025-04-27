"use client";
import React, { useState } from "react";
import PartnerApplicationForm from "@/components/PartnerApplicationForm";
import ClientInformationForm from "@/components/ClientInformationForm";
import TaxFilingForm from "@/components/TaxFilingForm";
import { Button } from "@/components/ui/button";

type toggleForms = "PAF" | "CIF" | "TFF";

export default function ApplicationForms() {
  const [toggleForms, setToggleForms] = useState<toggleForms>("PAF");

  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <div className="overflow-hidden md:my-[60px] py-8 md:py-12 lg:py-24 container mx-auto">
        <div className="container mx-auto w-[90%] lg:w-[79%] mt-[60px] flex gap-5 flex-wrap">
          <Button
            onClick={() => setToggleForms("PAF")}
            data-aos="fade"
            size="lg"
            className={`text-sm font-semibold rounded-3xl bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black uppercase ${
              toggleForms === "PAF" && "bg-white border-2 border-[#fbc710]"
            }`}
          >
            Partner Application Form
          </Button>
          <Button
            onClick={() => setToggleForms("CIF")}
            data-aos="fade"
            size="lg"
            className={`text-sm font-semibold rounded-3xl bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black uppercase ${
              toggleForms === "CIF" && "bg-white border-2 border-[#fbc710]"
            }`}
          >
            Client Information Form
          </Button>
          <Button
            data-aos="fade"
            onClick={() => setToggleForms("TFF")}
            size="lg"
            className={`text-sm font-semibold rounded-3xl bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black uppercase ${
              toggleForms === "TFF" && "bg-white border-2 border-[#fbc710]"
            }`}
          >
            Tax Filing Form
          </Button>
        </div>

        {toggleForms === "PAF" && <PartnerApplicationForm />}
        {toggleForms === "CIF" && <ClientInformationForm />}
        {toggleForms === "TFF" && <TaxFilingForm />}
      </div>
    </main>
  );
}
