import { Truck, RefreshCw, Tag, Headphones } from "lucide-react";
import { ScrollAnimateList } from "@/components/shared/ScrollAnimate";

const features = [
  {
    icon: Truck,
    title: "Secure Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    icon: RefreshCw,
    title: "Easy Refund",
    description: "30-day money back guarantee",
  },
  {
    icon: Tag,
    title: "Best Offers",
    description: "Competitive prices everyday",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service",
  },
];

export const TrustStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <ScrollAnimateList
          animation="fade-up"
          staggerDelay={100}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </ScrollAnimateList>
      </div>
    </section>
  );
};
