import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { getFutureDate } from "@/hooks/useCountdown";
import { Star } from "lucide-react";

const dealProducts = [
  {
    id: "1",
    name: "Professional Blood Pressure Monitor with Smart Features",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    price: 42.50,
    originalPrice: 50.00,
    discount: 15,
    rating: 4.8,
    reviews: 245,
    dealEndsAt: getFutureDate(5, 14),
  },
  {
    id: "2",
    name: "Advanced Digital Thermometer with Fever Alarm",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    price: 21.50,
    originalPrice: 25.00,
    discount: 14,
    rating: 4.6,
    reviews: 189,
    dealEndsAt: getFutureDate(3, 8),
  },
];

export const DealOfTheWeek = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <SectionHeader
            title="Deal of the Week"
            subtitle="Don't miss these amazing limited-time offers!"
            centered
          />
        </ScrollAnimate>

        <ScrollAnimateList
          animation="fade-up"
          staggerDelay={150}
          className="grid md:grid-cols-2 gap-8"
        >
          {dealProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden card-shadow flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto img-zoom-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg font-bold px-3 py-1 rounded-lg">
                  -{product.discount}%
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Countdown */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Hurry up! Offer ends in:</p>
                  <CountdownTimer targetDate={product.dealEndsAt} variant="default" />
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to={`/product/${product.id}`}>Shop Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </ScrollAnimateList>
      </div>
    </section>
  );
};
