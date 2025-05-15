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
import { Checkbox } from "@/components/ui/checkbox";
import { clientInformationFormSchema } from "@/schemas/clientInformationFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

export default function ClientInformationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Bookkeeping",
    "Tax Planning",
    "Financial Analysis",
    "Payroll",
    "Other",
  ] as const;

  const form = useForm<z.infer<typeof clientInformationFormSchema>>({
    resolver: zodResolver(clientInformationFormSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      phoneNumber: "",
      email: "",
      address: "",
      preferredContactMethod: "Email",
      businessType: "Other",
      industryCategory: "",
      taxIdentificationNumber: "",
      businessRegistrationNumber: "",
      annualRevenueRange: "",
      numberOfEmployees: 0,
      servicesRequired: [],
      frequencyOfService: "Monthly",
      specificGoalsOrNeeds: "",
      currentAccountingSoftware: "",
      preferredCommunicationSchedule: "",
      bankAccountDetails: "",
      creditLimit: "",
      billingAddress: "",
      businessRegistrationCertificate: "",
      taxIdentificationCertificate: "",
      financialStatements: "",
      governmentIssuedID: "",
      declaration: false,
      consent: false,
      signature: "",
      date: "",
    },
  });

  // State to store file references
  const [files, setFiles] = useState<{
    businessRegistrationCertificate?: File;
    taxIdentificationCertificate?: File;
    financialStatements?: File;
    governmentIssuedID?: File;
  }>({});

  // Handler for file input changes with validation
  const handleFileChange = (
    name: keyof typeof files,
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFiles((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
      onChange(""); // Clear form field
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File too large",
        description: `The file ${file.name} exceeds the 3MB limit`,
        variant: "destructive",
      });
      event.target.value = ""; // Reset the input
      return;
    }

    // Validate file type
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: `Please upload PDF, DOC, DOCX, JPG, or PNG files only`,
        variant: "destructive",
      });
      event.target.value = ""; // Reset the input
      return;
    }

    setFiles((prev) => ({ ...prev, [name]: file }));
    onChange(file.name); // Update form field with file name
  };

  const onSubmit = async (data: z.infer<typeof clientInformationFormSchema>) => {
    setIsSubmitting(true);

    try {
      // Create FormData object to handle file uploads
      const formData = new FormData();

      // Add all text fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key === "servicesRequired") {
          formData.append(key, JSON.stringify(value));
        } else if (
          key !== "businessRegistrationCertificate" &&
          key !== "taxIdentificationCertificate" &&
          key !== "financialStatements" &&
          key !== "governmentIssuedID"
        ) {
          formData.append(key, String(value));
        }
      });

      // Add file fields to FormData
      let totalFileSize = 0;
      Object.entries(files).forEach(([key, file]) => {
        totalFileSize += file.size;
        formData.append(key, file);
      });

      // Check total payload size before submission
      if (totalFileSize > 8 * 1024 * 1024) {
        // 10MB limit
        throw new Error(
          "Total file size exceeds the maximum allowed limit of 8MB"
        );
      }

      const response = await axios.post<ApiResponse>(
        "/api/client-information",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast({
        title: "Success",
        description:
          response.data.message || "Client information submitted successfully",
      });

      // Reset form and file state after successful submission
      form.reset();
      setFiles({});
    } catch (error) {
      console.error("Error in submitting client information: ", error);
      let errorMessage = "Failed to submit client information";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        const axiosError = error as AxiosError<ApiResponse>;
        if (axiosError.response?.data.message) {
          errorMessage = axiosError.response.data.message;
        } else if (axiosError.response?.status === 413) {
          errorMessage = "Files are too large to upload. Please reduce file sizes.";
        }
      }

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
          Client Information Form
        </h1>
      </header>

      <section
        id="client-information-form"
        className="container max-w-[1300px] my-[150px] px-8 mx-auto flex flex-col gap-16 sm:gap-20"
      >
        <div className="sm:mb-6 md:mb-14">
          <p className="text-sm text-gray-600 mb-6">
            Please note: All files must be less than 3MB in size. Accepted formats:
            PDF, DOC, DOCX, JPG, PNG.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-20">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold" data-aos="fade">
                  Section 1:
                  <span className="text-[#fbc710]"> Client Details</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="fullName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter full name"
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
                    name="businessName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name (if applicable)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business name"
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
                    name="address"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter address"
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
                    name="preferredContactMethod"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Preferred Contact Method: [Phone / Email / Other] *
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                          >
                            <SelectTrigger>{field.value}</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Phone">Phone</SelectItem>
                              <SelectItem value="Email">Email</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
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
                  <span className="text-[#fbc710]">
                    {" "}
                    Business Information (if applicable)
                  </span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="businessType"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Business Type: [Sole Proprietor / Partnership /
                          Corporation / LLC / Other]
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>{field.value}</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Sole Proprietor">
                                Sole Proprietor
                              </SelectItem>
                              <SelectItem value="Partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="Corporation">
                                Corporation
                              </SelectItem>
                              <SelectItem value="LLC">LLC</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
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
                        <FormLabel>Industry/Category</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Industry/Category"
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
                        <FormLabel>Tax Identification Number (TIN)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter tax identification number (TIN)"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
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
                        <FormLabel>Business Registration Number</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter business registration number"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="annualRevenueRange"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Revenue Range</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter annual revenue range"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="numberOfEmployees"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter number of employees"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
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
                  <span className="text-[#fbc710]"> Service Requirements</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="servicesRequired"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Required *</FormLabel>
                        <FormControl>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {services.map((service, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-x-2"
                              >
                                <Checkbox
                                  id={service}
                                  checked={field.value.includes(service)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...field.value, service]
                                      : field.value.filter(
                                          (item) => item !== service
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                                <label
                                  htmlFor={service}
                                  className="text-sm font-medium text-gray-700"
                                >
                                  {service}
                                </label>
                              </div>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="frequencyOfService"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Frequency of Service: [Weekly / Monthly / Quarterly /
                          Annually] *
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                          >
                            <SelectTrigger>{field.value}</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Weekly">Weekly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="Quarterly">
                                Quarterly
                              </SelectItem>
                              <SelectItem value="Annually">Annually</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="specificGoalsOrNeeds"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Goals or Needs</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter specific goals or needs"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="currentAccountingSoftware"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Current Accounting Software (if any)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter current accounting software"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="preferredCommunicationSchedule"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Communication Schedule</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter preferred communication schedule"
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
                  <span className="text-[#fbc710]"> Financial Information</span>
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                  data-aos="fade"
                >
                  <FormField
                    name="bankAccountDetails"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Account Details (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter bank account details"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="creditLimit"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Limit (if applicable)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter credit limit"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="billingAddress"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Billing Address (if different from primary address)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter billing address"
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
                    name="businessRegistrationCertificate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Upload Business Registration Certificate (if applicable)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(
                                "businessRegistrationCertificate",
                                e,
                                field.onChange
                              )
                            }
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="taxIdentificationCertificate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Upload Tax Identification Certificate *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            required
                            onChange={(e) =>
                              handleFileChange(
                                "taxIdentificationCertificate",
                                e,
                                field.onChange
                              )
                            }
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="financialStatements"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Upload Financial Statements (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) =>
                              handleFileChange(
                                "financialStatements",
                                e,
                                field.onChange
                              )
                            }
                            className="rounded-none hover:border-black duration-300 px-4 pt-[14px] pb-[34px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="governmentIssuedID"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Government-Issued ID *</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            required
                            onChange={(e) =>
                              handleFileChange(
                                "governmentIssuedID",
                                e,
                                field.onChange
                              )
                            }
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
                    Declaration and Consent
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
                        <FormItem>
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
                            I consent to the use of this information for the
                            purpose of providing accounting services.
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
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> PLEASE
                    WAIT
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