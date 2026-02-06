import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CommitmentBanner = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative animate-fade-right">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=500&fit=crop"
              alt="Healthcare Commitment"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-left animation-delay-200">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Dedicated to Your{" "}
              <span className="text-primary">Healthcare Needs</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are committed to providing the highest quality healthcare products and services. 
              Our team of experts ensures that every product meets rigorous quality standards 
              before reaching you.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "100% Genuine & Certified Products",
                "Fast & Secure Delivery",
                "24/7 Customer Support",
                "Easy Returns & Refunds",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
