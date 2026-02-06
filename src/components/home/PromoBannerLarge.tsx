import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PromoBannerLarge = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=400&fit=crop"
              alt="Medical Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                Special Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Get 25% Off on All Medicines
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Use code <span className="font-bold">HEALTH25</span> at checkout. 
                Limited time offer - don't miss out!
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 gap-2"
              >
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
