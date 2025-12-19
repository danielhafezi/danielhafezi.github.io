"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseDrawOnScrollOptions {
  /** Intersection threshold (0-1). Default is 0.3 (30% visible) */
  threshold?: number;
  /** Root margin for the intersection observer. Default is "0px" */
  rootMargin?: string;
  /** Whether the animation should only trigger once. Default is true */
  triggerOnce?: boolean;
}

interface UseDrawOnScrollReturn {
  /** Ref to attach to the SVG element */
  ref: React.RefObject<SVGSVGElement | null>;
  /** Whether the element has been animated (is in view) */
  isAnimated: boolean;
  /** Whether the element is currently in view */
  isInView: boolean;
}

/**
 * Custom hook for triggering SVG draw animations when elements scroll into view.
 * Uses Intersection Observer for performance-conscious scroll detection.
 * 
 * @param options - Configuration options for the intersection observer
 * @returns Object containing ref, isAnimated state, and isInView state
 * 
 * @example
 * ```tsx
 * const { ref, isAnimated } = useDrawOnScroll({ threshold: 0.4 });
 * return (
 *   <svg ref={ref} className={isAnimated ? 'svg-draw-animated' : 'svg-draw-initial'}>
 *     <path ... />
 *   </svg>
 * );
 * ```
 */
export function useDrawOnScroll(
  options: UseDrawOnScrollOptions = {}
): UseDrawOnScrollReturn {
  const { threshold = 0.3, rootMargin = "0px", triggerOnce = true } = options;

  const ref = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting;
          setIsInView(inView);

          if (inView && (!triggerOnce || !hasTriggered.current)) {
            setIsAnimated(true);
            hasTriggered.current = true;

            // If triggerOnce, disconnect the observer after triggering
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce && !inView) {
            // Reset animation state if not triggerOnce
            setIsAnimated(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isAnimated, isInView };
}

/**
 * Helper function to calculate the total length of all paths in an SVG.
 * Useful for setting stroke-dasharray values dynamically.
 * 
 * @param svgElement - The SVG element to measure
 * @returns Total length of all paths, or 0 if no paths found
 */
export function calculatePathLength(svgElement: SVGSVGElement | null): number {
  if (!svgElement) return 0;

  const paths = svgElement.querySelectorAll("path");
  let totalLength = 0;

  paths.forEach((path) => {
    try {
      totalLength += path.getTotalLength();
    } catch (e) {
      // Some paths may not support getTotalLength
      console.warn("Could not get path length:", e);
    }
  });

  return totalLength;
}

export default useDrawOnScroll;