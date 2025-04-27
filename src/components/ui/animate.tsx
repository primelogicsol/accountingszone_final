"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Animate({ children, className, delay }: AnimateProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [mounted]);

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={elementRef}
      className={cn("animate-fade-in", delayClass, className)}
    >
      {children}
    </div>
  );
} 