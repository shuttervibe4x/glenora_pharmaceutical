import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { ScrollAnimate } from "@/components/shared/ScrollAnimate";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export const FeaturedProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const featuredProducts = products.filter((p) => p.badge === "HOT" || p.badge === "NEW").slice(0, 8);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Auto-slide
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <SectionHeader
            title="Featured Products"
            subtitle="Handpicked favorites just for you"
            centered
          />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" delay={100}>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className={cn(
                "absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground",
                !canScrollPrev && "opacity-50"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <button
              onClick={scrollNext}
              className={cn(
                "absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground",
                !canScrollNext && "opacity-50"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden px-2" ref={emblaRef}>
              <div className="flex gap-6">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    selectedIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};
