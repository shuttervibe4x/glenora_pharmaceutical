import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollAnimate, ScrollAnimateList } from "@/components/shared/ScrollAnimate";
import { brands } from "@/data/products";

export const PopularBrands = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <ScrollAnimate animation="fade-up">
          <SectionHeader
            title="Popular Brands"
            subtitle="Trusted brands we partner with"
            centered
          />
        </ScrollAnimate>

        <ScrollAnimateList
          animation="scale-in"
          staggerDelay={80}
          className="grid grid-cols-3 md:grid-cols-6 gap-6"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-card rounded-xl p-6 flex items-center justify-center grayscale-hover hover-lift card-shadow cursor-pointer"
            >
              <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {brand.logo}
              </div>
            </div>
          ))}
        </ScrollAnimateList>
      </div>
    </section>
  );
};
