import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { categories } from "@/data/products";

export const PopularCategories = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <SectionHeader
            title="Popular Categories"
            subtitle="Browse our most popular product categories"
            centered
          />
        </ScrollAnimate>

        <ScrollAnimateList
          animation="fade-up"
          staggerDelay={80}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/shop"
              className="group bg-card rounded-xl p-6 text-center hover-lift card-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center text-3xl group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} Products</p>
            </Link>
          ))}
        </ScrollAnimateList>
      </div>
    </section>
  );
};
