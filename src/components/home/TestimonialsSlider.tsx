import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/products";
import { cn } from "@/lib/utils";

export const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Trusted by thousands of happy customers"
          centered
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow text-center">
            <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
            
            <div className="animate-fade-in" key={currentIndex}>
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              
              <h4 className="font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {testimonials[currentIndex].role}
              </p>

              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonials[currentIndex].rating
                        ? "text-accent fill-accent"
                        : "text-muted-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
