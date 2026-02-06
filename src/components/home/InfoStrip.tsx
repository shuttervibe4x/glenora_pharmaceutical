import { Link } from "react-router-dom";
import { Shield, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InfoStrip = () => {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% Genuine Products</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
          <Button asChild variant="secondary" size="sm" className="bg-background text-primary hover:bg-background/90">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
