import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Avoid leaving sections transparent on mobile/touch devices if the observer
    // triggers too late or animation is intentionally reduced.
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: isMobileViewport ? Math.min(threshold, 0.05) : threshold,
        rootMargin: isMobileViewport ? "0px 0px 80px 0px" : rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Hook for staggered children animations
export const useStaggerAnimation = (
  itemCount: number,
  baseDelay: number = 100
) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getDelay = (index: number) => ({
    animationDelay: `${index * baseDelay}ms`,
  });

  return { ref, isVisible, getDelay };
};
