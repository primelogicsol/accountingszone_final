"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { contactMessageSchema } from "@/schemas/contactMessageSchema";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

// Explicitly type Loader2 as a React functional component
const LoaderIcon = Loader2 as React.FC<React.SVGProps<SVGSVGElement>>;

// TypedLink for consistent Link usage
const TypedLink = Link as React.FC<
  React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
>;

const WrappedIcon: React.FC<{ Icon: IconType }> = ({ Icon }) => <Icon />;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactMessageSchema>>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      reason: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactMessageSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post<ApiResponse>(
        "/api/contact-message",
        data
      );
      toast({
        title: "Success",
        description: response.data.message,
      });
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
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
            Contact Accountings Zone
          </h1>
        </header>
        <div className="xl:my-[100px] relative max-w-[1830px] mx-auto px-[15px] 2xl:max-w-[calc(100vw-120px)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6303.983230561337!2d144.94987278893993!3d-37.813665379798834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4949e03ba7%3A0x3a4bed3cd2de0c6!2zMjY5IEtpbmcgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sru!4v1613041664241!5m2!1sru!2sru"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            className="w-full h-[300px] mb-[40px] border-none -z-10 lg:absolute lg:left-[15px] lg:top-[15px] lg:w-[calc(100%-30px)] lg:h-full"
          ></iframe>
          <div className="lg:py-20 lg:min-h-[768px] md:ml-56 container">
            <div className="max-w-[520px] bg-white lg:p-20">
              <div className="mb-8 text-3xl font-bold">
                California,{" "}
                <span className="text-[#fbc710]">United States</span>
              </div>
              <address className="max-w-[450px] mb-8 xl:mb-[60px] text-[#787878]">
                124 S Gemstone Street, Ridgecrest California 93555, USA.
              </address>
              <div className="mb-8 xl:mb-[84px]">
                <TypedLink
                  href="tel:+9903449564050"
                  className="text-3xl font-bold hover:outline-none focus:outline-none hover:text-[#fbc710] focus:text-[#fbc710]"
                >
                  +1 (760) 686 06 09
                </TypedLink>
              </div>
              <div className="text-[#787878] sm:flex mt-[30px]">
                <div className="mb-1.5 text-black font-bold flex-shrink-0 sm:mb-0 sm:mr-2">
                  Email:
                </div>
                <div>
                  <TypedLink
                    href="mailto:info@accountingszone.com"
                    className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710]"
                  >
                    info@accountingszone.com
                  </TypedLink>
                </div>
              </div>
              <div className="text-[#787878] sm:flex sm:items-center mt-[30px]">
                <div className="mb-1.5 text-black font-bold flex-shrink-0 sm:mb-0 sm:mr-2">
                  Follow us:
                </div>
                <div>
                  <ul className="fill-[#929292] flex flex-wrap items-end">
                    <li className="ml-0 sm:ml-7">
                      <TypedLink
                        className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                        href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </TypedLink>
                    </li>
                    <li className="ml-4 sm:ml-7">
                      <TypedLink
                        className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                        href="https://x.com/accountingszone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaXTwitter />
                      </TypedLink>
                    </li>
                    <li className="ml-4 sm:ml-7">
                      <TypedLink
                        className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                        href="https://www.instagram.com/accountingszone/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </TypedLink>
                    </li>
                    <li className="ml-4 sm:ml-7">
                      <TypedLink
                        className="text-[#787878] focus:text-[#fbc710] focus:outline-none lg:focus:text-[#fbc710] lg:hover:text-[#fbc710] flex size-[17px] justify-center lg:focus:outline-none lg:hover:outline-none active:opacity-70"
                        href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </TypedLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-[#787878] sm:flex mt-[30px] sm:items-end">
                <div className="mt-1.5 text-black font-bold flex-shrink-0 sm:mb-0 mr-2">
                  Work Hours:
                </div>
                <div>Monday - Friday : 08h00 - 17h30</div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="contact-form"
          className="container max-w-[1300px] my-[200px] px-8 mx-auto flex flex-col gap-16 sm:gap-20"
        >
          <div className="relative mx-auto md:w-1/2 md:mx-0">
            <h4 className="text-3xl mx-auto font-bold" data-aos="fade">
              Let&apos;s grab a coffee and jump on conversation
              <span className="text-[#fbc710]"> chat with us.</span>
            </h4>
          </div>

          <div className="sm:mb-6 md:mb-14">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-8"
              >
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Name"
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
                              placeholder="Phone number"
                              className="rounded-none hover:border-black duration-300 px-4 py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="company"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Company"
                              className="rounded-none hover:border-black duration-300 px-4 py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="reason"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Reason"
                              className="rounded-none hover:border-black duration-300 px-4 py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="subject"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Subject"
                              className="rounded-none hover:border-black duration-300 px-4 py-6"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message *"
                            required
                            className="rounded-none h-[150px] xl:h-[174px] hover:border-black duration-300 px-4 py-6"
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
                    "SEND"
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
