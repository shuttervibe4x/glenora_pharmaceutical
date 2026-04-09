import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { products, categories } from "@/data/products";
import { Grid, List, ChevronDown, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";

const sidebarCategories = [
  "Baby Care",
  "Beauty Care",
  "Health Care",
  "Medical Equipment",
  "Medicines",
  "Personal Care",
];

const filterCategories = [
  "Blood Test",
  "Hair & Skin Care",
  "Temperature Reader",
  "Thermometer",
];

const brands = ["Cartify", "EcomZone", "EcoShop", "HealthPlus", "MediCare"];

const sizes = ["50ml", "100ml", "250ml", "500ml", "Small", "Medium", "Large", "Extra Large"];

const colors = [
  { name: "Orange", value: "bg-orange-500" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Pink", value: "bg-pink-500" },
  { name: "Yellow", value: "bg-yellow-500" },
  { name: "Green", value: "bg-green-500" },
  { name: "Purple", value: "bg-purple-500" },
  { name: "Gray", value: "bg-gray-500" },
];

const PRODUCTS_PER_PAGE = 6;

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([16, 62]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.glenorapharmaceutical.in/" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "https://www.glenorapharmaceutical.in/shop" },
    ],
  }), []);

  useSEO({
    title: "Buy Medicines Online in Ranchi | Glenora Pharmaceutical Shop",
    description: "Browse & buy quality pharmaceutical products from Glenora Pharmaceutical — capsules, tablets, dietary supplements. Fast delivery in Ranchi, Jharkhand. Order via WhatsApp.",
    keywords: "buy medicines online Ranchi, pharmaceutical products Jharkhand, medicine shop Ranchi, tablets capsules Ranchi, Glenora products, healthcare products Jharkhand",
    schema,
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories Accordion */}
      <div className="bg-card rounded-xl p-4 card-shadow">
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-1">
          {sidebarCategories.map((category) => (
            <Collapsible key={category}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                {category}
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 py-2 space-y-2">
                <span className="block text-sm text-muted-foreground">
                  Sub Category 1
                </span>
                <span className="block text-sm text-muted-foreground">
                  Sub Category 2
                </span>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>

      {/* Filter By */}
      <div className="bg-card rounded-xl p-4 card-shadow">
        <h3 className="font-semibold text-foreground mb-4">Filter By</h3>
        
        {/* Categories */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Categories</h4>
          <div className="space-y-2">
            {filterCategories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <Checkbox />
                <span className="text-sm text-muted-foreground">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Availability</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span className="text-sm text-muted-foreground">In stock</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">Not available</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Price Range</h4>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={100}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Colors</h4>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                className={cn(
                  "w-7 h-7 rounded-full border-2 transition-all",
                  color.value,
                  selectedColor === color.name 
                    ? "border-foreground scale-110" 
                    : "border-transparent hover:scale-110"
                )}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Size</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin">
            {sizes.map((size) => (
              <label key={size} className="flex items-center gap-2 cursor-pointer">
                <Checkbox />
                <span className="text-sm text-muted-foreground">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Brands</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <Checkbox />
                <span className="text-sm text-muted-foreground">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Selections */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Selections</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">Discounted</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">New product</span>
            </label>
          </div>
        </div>

        {/* Condition */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Condition</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox defaultChecked />
              <span className="text-sm text-muted-foreground">New</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">Refurbished</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox />
              <span className="text-sm text-muted-foreground">Used</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <PageHeader
        title="Shop"
        breadcrumbs={[{ label: "Shop" }]}
      />

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <FilterSidebar />
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-4 left-4 z-40">
              <Button
                onClick={() => setShowMobileFilters(true)}
                className="bg-primary text-primary-foreground shadow-lg gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Mobile Filter Drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div 
                  className="absolute inset-0 bg-foreground/50" 
                  onClick={() => setShowMobileFilters(false)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-background overflow-y-auto p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button onClick={() => setShowMobileFilters(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Description */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Discover our wide range of healthcare products, medicines, and medical equipment. 
                  Quality products at the best prices with fast delivery.
                </p>
              </div>

              {/* Subcategories */}
              <div className="flex flex-wrap gap-3 mb-6">
                {categories.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    className="flex items-center gap-2 bg-secondary hover:bg-primary/10 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>

              {/* Grid Controls */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded transition-colors",
                      viewMode === "grid" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted hover:bg-muted/80"
                    )}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded transition-colors",
                      viewMode === "list" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted hover:bg-muted/80"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-muted-foreground ml-2">
                    {products.length} products
                  </span>
                </div>

                <Select defaultValue="popularity">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <div className={cn(
                "grid gap-6 mb-8",
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              )}>
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <ProductCard 
                      product={product} 
                      variant={viewMode === "list" ? "horizontal" : "default"}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ←
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      currentPage === page && "border-primary text-primary bg-primary/10"
                    )}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  →
                </Button>
              </div>

              {/* About Section */}
              <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-secondary rounded-2xl p-8">
                <div>
                  <SectionHeader
                    title="About Our Shop"
                    subtitle="Quality healthcare products for your well-being"
                  />
                  <p className="text-muted-foreground mb-4">
                    We are committed to providing the best healthcare products at competitive prices. 
                    Our team carefully selects each product to ensure it meets the highest quality standards.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn More
                  </Button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop"
                  alt="Glenora Pharmaceutical quality healthcare products and medicines"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
