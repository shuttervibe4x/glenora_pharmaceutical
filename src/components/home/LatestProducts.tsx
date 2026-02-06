import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { products } from "@/data/products";

export const LatestProducts = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <SectionHeader
            title="Latest Products"
            subtitle="Check out our newest arrivals"
            action={
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/shop">View All Products</Link>
              </Button>
            }
          />
        </ScrollAnimate>

        <ScrollAnimateList
          animation="fade-up"
          staggerDelay={80}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollAnimateList>
      </div>
    </section>
  );
};
