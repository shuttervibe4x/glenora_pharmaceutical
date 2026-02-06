import { Link } from "react-router-dom";

const banners = [
  {
    id: "1",
    title: "Face Masks",
    subtitle: "Protection starts here",
    discount: "Up to 40% OFF",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&h=300&fit=crop",
    bgColor: "bg-secondary",
  },
  {
    id: "2",
    title: "Medical Equipment",
    subtitle: "Professional grade quality",
    discount: "New Arrivals",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop",
    bgColor: "bg-primary/5",
  },
];

export const PromoBanners = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {banners.map((banner, index) => (
            <Link
              key={banner.id}
              to="/shop"
              className={`group relative overflow-hidden rounded-2xl ${banner.bgColor} p-6 md:p-8 min-h-[200px] flex items-center animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="relative z-10 max-w-[60%]">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {banner.discount}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {banner.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {banner.subtitle}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                  Shop Now →
                </span>
              </div>

              {/* Image */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-full img-zoom-container">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
