import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export const LatestProducts = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader
          title="Latest Products"
          subtitle="Check out our newest arrivals"
          action={
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/shop">View All Products</Link>
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
