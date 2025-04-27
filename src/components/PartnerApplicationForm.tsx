"use client";
import { useState } from "react";
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ApiResponse } from "@/types/ApiResponse";
import axios, { type AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partnerApplicationFormSchema } from "@/schemas/partnerApplicationFormSchema";
import { Checkbox } from "@/components/ui/checkbox";

export default function PartnerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof partnerApplicationFormSchema>>({
    resolver: zodResolver(partnerApplicationFormSchema),
    defaultValues: {
      businessName: "",
      contactPerson: "",
      businessAddress: "",
      phoneNumber: "",
      email: "",
      website: "",
      typeOfBusiness: "",
      industryCategory: "",
      yearsInOperation: "",
      businessRegistrationNumber: "",
      taxIdentificationNumber: "",
      reasonForPartnership: "",
      servicesOrProductsOffered: "",
      geographicalCoverage: "",
      preferredCollaborationType: "",
      previousPartnerships: "",
      annualRevenue: "",
      businessLicensesOrPermits: "",
      insuranceCoverage: "",
      businessRegistrationCertificate: undefined,
      taxIdentificationCertificate: undefined,
      portfolioOrReferences: undefined,
      declaration: false,
      consent: false,
      signature: "",
      date: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof partnerApplicationFormSchema>) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append text fields
      Object.entries(data).forEach(([key, value]) => {
        if (
          key !== "businessRegistrationCertificate" &&
          key !== "taxIdentificationCertificate" &&
          key !== "portfolioOrReferences"
        ) {
          formData.append(key, String(value));
        }
      });

      // Append files
      if (data.businessRegistrationCertificate) {
        formData.append("businessRegistrationCertificate", data.businessRegistrationCertificate);
      }
      if (data.taxIdentificationCertificate) {
        formData.append("taxIdentificationCertificate", data.taxIdentificationCertificate);
      }
      if (data.portfolioOrReferences) {
        formData.append("portfolioOrReferences", data.portfolioOrReferences);
      }

      const response = await axios.post<ApiResponse>("/api/partner-application", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: "Success",
        description: response.data.message || "Partner application submitted successfully",
      });

      form.reset();
    } catch (error) {
      console.error("Error in submitting partner application: ", error);
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage =
        axiosError.response?.data.message || "Failed to submit partner application";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden md:mb-20 py-6 md:py-8 lg:py-16">
      <header className="container mx-auto w-[90%] lg:w-[79%] mt-[40px]">
        <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
          Partner Application Form
        </h1>
      </header>

      <section
        id="partner-application-form"
        className="container max-w-[1300px] my-[150px] px-8 mx-auto flex flex-col gap-16 sm:gap-20"
      >
        <div className="sm:mb-6 md:mb-14">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-20">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 1:
                  <span className="text-[#fbc710]"> General Information</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="businessName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business name"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="contactPerson"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter contact person"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="businessAddress"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business address"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phoneNumber"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="website"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website *</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="Enter website url"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 2:
                  <span className="text-[#fbc710]"> Business Details</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="typeOfBusiness"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Business *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter type of business"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="industryCategory"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry/Category *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Industry/Category"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="yearsInOperation"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years in Operation *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter years in operation"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                            value={field.value} // Ensure value is controlled
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="businessRegistrationNumber"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Registration Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business registration number"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="taxIdentificationNumber"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tax Identification Number (TIN) *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter tax identification number (TIN)"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 3:
                  <span className="text-[#fbc710]">
                    {" "}
                    Service/Partnership Details
                  </span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="reasonForPartnership"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Partnership *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter reason for partnership"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="servicesOrProductsOffered"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services or Products Offered *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter services or products offered"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="geographicalCoverage"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Geographical Coverage *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter geographical coverage"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="preferredCollaborationType"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Collaboration Type *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter preferred collaboration type"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="previousPartnerships"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Partnerships (if any)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter previous partnerships"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 4:
                  <span className="text-[#fbc710]">
                    {" "}
                    Financial and Legal Information
                  </span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="annualRevenue"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Revenue (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter annual revenue"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                            value={field.value || ""} // Handle empty values
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="businessLicensesOrPermits"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Licenses or Permits *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business licenses or permits"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="insuranceCoverage"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Insurance Coverage *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter insurance coverage"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 5:
                  <span className="text-[#fbc710]"> Supporting Documents</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    control={form.control}
                    name="businessRegistrationCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Business Registration Certificate *</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files?.[0] || undefined)}
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="taxIdentificationCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Tax Identification Certificate (if applicable)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files?.[0] || undefined)}
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portfolioOrReferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Portfolio/References (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => field.onChange(e.target.files?.[0] || undefined)}
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 6:
                  <span className="text-[#fbc710]">
                    {" "}
                    Declaration and Agreement
                  </span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <div className="flex justify-center md:flex-row gap-y-4 flex-col md:col-span-2">
                    <FormField
                      name="declaration"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Checkbox
                              id="declaration"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              defaultChecked={false}
                            />
                          </FormControl>
                          <FormLabel htmlFor="declaration" className="px-4">
                            Declaration *
                          </FormLabel>
                          <FormDescription className="px-8">
                            I hereby declare that the information provided is
                            accurate and complete to the best of my knowledge.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="consent"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="">
                          <FormControl>
                            <Checkbox
                              id="consent"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              defaultChecked={false}
                            />
                          </FormControl>
                          <FormLabel htmlFor="consent" className="px-4">
                            Consent *
                          </FormLabel>
                          <FormDescription className="px-8">
                            I consent to the use of this information for
                            partnership evaluation purposes.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    name="signature"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Signature *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter signature"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="date"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date *</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            required
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                data-aos="fade"
                className="duration-300 w-36 h-12 text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] text-black font-normal uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> PLEASE WAIT
                  </>
                ) : (
                  "SUBMIT"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}