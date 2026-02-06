import { SectionHeader } from "@/components/shared/SectionHeader";
import { brands } from "@/data/products";

export const PopularBrands = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <SectionHeader
          title="Popular Brands"
          subtitle="Trusted brands we partner with"
          centered
        />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group bg-card rounded-xl p-6 flex items-center justify-center grayscale-hover hover-lift card-shadow animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
