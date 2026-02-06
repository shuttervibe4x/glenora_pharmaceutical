import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "fade-in"
  | "scale-in"
  | "slide-up";

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "animate-fade-up",
  "fade-down": "animate-fade-down",
  "fade-left": "animate-fade-left",
  "fade-right": "animate-fade-right",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-up": "animate-slide-up",
};

export const ScrollAnimate = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className,
  threshold = 0.1,
  as: Component = "div",
}: ScrollAnimateProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return React.createElement(
    Component,
    {
      ref,
      className: cn(
        "opacity-0",
        isVisible && animationClasses[animation],
        isVisible && "opacity-100",
        className
      ),
      style: {
        animationDelay: delay ? `${delay}ms` : undefined,
        animationDuration: duration ? `${duration}ms` : undefined,
      },
    },
    children
  );
};

// For staggered list animations
interface ScrollAnimateListProps {
  children: React.ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
  threshold?: number;
}

export const ScrollAnimateList = ({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  className,
  itemClassName,
  threshold = 0.1,
}: ScrollAnimateListProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={cn(
            "opacity-0",
            isVisible && animationClasses[animation],
            isVisible && "opacity-100",
            itemClassName
          )}
          style={{
            animationDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
