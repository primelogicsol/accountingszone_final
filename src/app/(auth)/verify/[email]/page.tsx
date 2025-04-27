"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { verifySchema } from "@/schemas/verifySchema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type VerifyFormData = z.infer<typeof verifySchema>;

export default function VerifyAccountPage() {
  const router = useRouter();
  const params = useParams<{ email: string }>();
  const username = params.email;               // ← pulls the [email] segment
  const { toast } = useToast();

  const form = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
    defaultValues: { verifyCode: "" },
  });

  const onSubmit = async (data: VerifyFormData) => {
    try {
      const res = await axios.post<ApiResponse>("/api/verify-code", {
        username,                        // ← now always defined
        otp: data.verifyCode,           // matches server’s payloadSchema
      });

      toast({
        title: "Success",
        description: res.data.message,
      });

      router.replace("/login");
    } catch (err) {
      console.warn("Verification error:", err);
      const axiosErr = err as AxiosError<ApiResponse>;
      toast({
        title: "Verification Failed",
        description:
          axiosErr.response?.data.message || "Unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Account
          </h1>
          <p className="mb-4">Enter the OTP code sent to your email</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="verifyCode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP Code</FormLabel>
                  <FormControl>
                    <Input placeholder="OTP code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
