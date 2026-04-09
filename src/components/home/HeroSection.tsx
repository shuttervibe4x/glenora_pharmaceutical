import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medicine.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              🏥 Healthcare Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Quality Healthcare,{" "}
              <span className="text-primary">Your Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Glenora Pharmaceutical Pvt. Ltd. — your trusted pharmaceutical company in Ranchi, Jharkhand. 
              Quality medicines and healthcare products for doctors and patients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-primary">15K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-left animation-delay-200">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Glenora Pharmaceutical medicines and healthcare products in Ranchi Jharkhand"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
