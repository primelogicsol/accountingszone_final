"use client";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export function FadeIn({ children, className, delay }: FadeInProps) {
  return (
    <div className={cn("fade-in", delay && `fade-in-delay-${delay}`, className)}>
      {children}
    </div>
  );
} 