"use client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { consultationMessageSchema } from "@/schemas/consultationMessageSchema";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Explicitly type Loader2 as a React functional component
const LoaderIcon = Loader2 as React.FC<React.SVGProps<SVGSVGElement>>;

export default function GetAConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof consultationMessageSchema>>({
    resolver: zodResolver(consultationMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      state: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof consultationMessageSchema>) => {
    setIsSubmitting(true);
  
    try {
      const response = await axios.post<ApiResponse>(
        "/api/consultation-message",
        data
      );
      toast({
        title: "Success",
        description: response.data.message,
      });
      form.reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error in sending message! : ", error);
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data.message;
      toast({
        title: "Message Send Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <div className="overflow-hidden md:my-[100px] py-10 md:py-15 lg:py-28">
        <header className="container mx-auto w-[90%] lg:w-[73%] mt-[60px]">
          <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
            Get a Consultation
          </h1>
        </header>

        <section
          id="get-a-consultation-form"
          className="container max-w-[1300px] my-[150px] px-8 mx-auto flex flex-col gap-16 sm:gap-20"
        >
          <div className="relative mx-auto md:w-1/2 md:mx-0">
            <h4 className="text-3xl mx-auto font-bold" data-aos="fade">
              Let&apos;s
              <span className="text-[#fbc710]"> Get Started!</span>
            </h4>
            <p className="mt-2">
              Please tell us how we can help you. Only fields marked with * are
              required. Your information is protected by our privacy policy.
            </p>
          </div>

          <div className="sm:mb-6 md:mb-14">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Name *"
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
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email *"
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
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone number *"
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
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="City"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="country"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Country" className="rounded-none hover:border-black duration-300 px-4 py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="state"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="State"
                            className="rounded-none hover:border-black duration-300 px-4 py-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  data-aos="fade"
                  className="duration-300 w-36 h-12 text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] text-black font-normal uppercase"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoaderIcon className="mr-2 h-4 w-4 animate-spin" /> PLEASE
                      WAIT
                    </>
                  ) : (
                    "NEXT"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </main>
  );
}