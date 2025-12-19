"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    // Show button after scrolling past 100vh (first viewport)
    const scrollThreshold = window.innerHeight;
    const shouldBeVisible = window.scrollY > scrollThreshold;
    
    setIsVisible(shouldBeVisible);
  }, []);

  useEffect(() => {
    // Throttle function to limit how often handleScroll runs
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100); // Throttle to 100ms
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        // Base styles
        "fixed bottom-8 right-8 z-50",
        "w-12 h-12 rounded-full",
        "flex items-center justify-center",
        // Gradient background matching theme
        "bg-gradient-to-br from-[#dc2626] to-[#f97316]",
        // Shadow for depth
        "shadow-lg shadow-[#dc2626]/25",
        // Hover effects
        "hover:shadow-xl hover:shadow-[#dc2626]/40",
        "hover:scale-110",
        // Focus styles for accessibility
        "focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#171717]",
        // Smooth transitions
        "transition-all duration-300 ease-out",
        // Visibility animation - fade and scale
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      )}
    >
      {/* Up Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}