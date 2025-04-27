"use client";
import { useEffect, useRef } from "react";

export function useAnimation(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add animation class after a delay
    const timer = setTimeout(() => {
      element.classList.add("animate");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return ref;
} 