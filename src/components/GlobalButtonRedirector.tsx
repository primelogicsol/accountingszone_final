// src/components/GlobalButtonRedirector.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalButtonRedirector() {
  const router = useRouter();
  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      if (!button || button.closest('a[href]')) return;
      
      const buttonText = button.textContent?.toLowerCase() || "";
      
      if (
        buttonText.includes("get started") ||
        buttonText.includes("schedule a demo") ||
        buttonText.includes("request assessment") ||
        buttonText.includes("book a consultation") ||
        buttonText.includes("request a demo") ||
        buttonText.includes("get a consultation") ||
        buttonText.includes("request asset management consultation") ||
        buttonText.includes("request audit readiness checklist") ||
        buttonText.includes("request complimentary financial review") ||
        buttonText.includes("get a free consultation")||
        buttonText.includes("request complimentary assessment") ||
        buttonText.includes("request risk assessment") ||
        buttonText.includes("request inventory efficiency assessment") ||
        buttonText.includes("request reporting demo") ||
        buttonText.includes("request expense management assessment") ||
        buttonText.includes("request documentation assessment") ||
        buttonText.includes("request integration consultation") ||
        buttonText.includes("request cleanup assessment") ||
        buttonText.includes("learn more") ||
        buttonText.includes("schedule a tax savings assessment") ||
        buttonText.includes("schedule a demonstration") ||
        buttonText.includes("schedule a dashboard demo") ||
        buttonText.includes("connect with our specialists") ||
        buttonText.includes("contact us today") ||
        buttonText.includes("discover how we can help") ||
        buttonText.includes("access knowledge base") ||
        buttonText.includes("enroll now") ||
        buttonText.includes("explore resources") ||
        buttonText.includes("get a free quote") ||
        buttonText.includes("get a free consultation") ||
        buttonText.includes("get a free assessment") ||
        buttonText.includes("get a free demo") ||
        buttonText.includes("get a free trial") ||
        buttonText.includes("explore automation tools") ||
        buttonText.includes("schedule demo") ||
        buttonText.includes("view deadlines") ||
        buttonText.includes("set reminders") ||
        buttonText.includes("view state deadlines") ||
        buttonText.includes("view latest updates") ||
        buttonText.includes("subscribe to alerts") ||
        buttonText.includes("subscribe to updates") ||
        buttonText.includes("explore knowledge base") ||
        buttonText.includes("ask a question") ||
        buttonText.includes("ask our experts") ||
        buttonText.includes("learn about security") ||
        buttonText.includes("security compliance") ||
        buttonText.includes("view security details") ||
        buttonText.includes("get support") ||
        buttonText.includes("contact support") ||
        buttonText.includes("connect with support")
        



      ) {
        e.preventDefault();
        router.push("/contact/get-a-consultation");
      }
    };
    
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);
  
  return null;
}