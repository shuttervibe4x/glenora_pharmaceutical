import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { getFutureDate } from "@/hooks/useCountdown";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Minus, 
  Plus,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Facebook,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const productImages = [
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop",
];

const sizes = ["Small", "Medium", "Large"];
const colors = [
  { name: "White", value: "bg-white border" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Gray", value: "bg-gray-500" },
];

const reviews = [
  {
    id: "1",
    author: "John Smith",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    date: "2024-01-15",
    content: "Excellent product! Works exactly as described. The quality is top-notch and delivery was fast. Highly recommended for anyone looking for a reliable blood pressure monitor.",
    likes: 24,
    dislikes: 2,
  },
  {
    id: "2",
    author: "Emily Brown",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 4,
    date: "2024-01-10",
    content: "Good product overall. Easy to use and accurate readings. The only thing I'd improve is the display could be a bit larger for elderly users.",
    likes: 18,
    dislikes: 1,
  },
  {
    id: "3",
    author: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    date: "2024-01-05",
    content: "Perfect for home use. I've been using it daily for a month now and the readings are consistent with my doctor's measurements. Great value for money!",
    likes: 31,
    dislikes: 0,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("White");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Get product or use first one as fallback
  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
  const dealEndDate = getFutureDate(2, 10);

  return (
    <Layout>
      <PageHeader
        title="Product Details"
        breadcrumbs={[
          { label: "Shop", path: "/shop" },
          { label: product.name },
        ]}
      />

      <section className="py-8 md:py-12">
        <div className="container">
          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-muted rounded-xl overflow-hidden img-zoom-container">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center shadow-md hover:bg-background transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev + 1) % productImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center shadow-md hover:bg-background transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 justify-center">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                      selectedImage === index 
                        ? "border-primary" 
                        : "border-transparent hover:border-muted-foreground/30"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="bg-secondary text-secondary-foreground mb-2">
                EcomZone
              </Badge>
              
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                    <Badge className="bg-destructive">
                      Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  </>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {[
                  "Accurate digital readings",
                  "Easy-to-read LCD display",
                  "Memory function for tracking",
                  "Portable and lightweight design",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Size Selector */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Size</h4>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-colors",
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Color</h4>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-10 h-10 rounded-full transition-all",
                        color.value,
                        selectedColor === color.name 
                          ? "ring-2 ring-primary ring-offset-2" 
                          : "hover:scale-110"
                      )}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Countdown */}
              <div className="bg-secondary rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-2">
                  🔥 Hurry up! Sale ends in:
                </p>
                <CountdownTimer targetDate={dealEndDate} variant="default" />
              </div>

              {/* Quantity & Actions */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Buy Now
                </Button>
              </div>

              {/* Wishlist & Compare */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors",
                    isWishlisted ? "text-destructive" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <RotateCcw className="h-4 w-4" />
                  Add to Compare
                </button>
              </div>

              {/* Stock Status */}
              <Badge className="bg-medico-green text-white mb-6">
                ✓ In Stock
              </Badge>

              {/* Social Share */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-muted-foreground">Share:</span>
                {[Facebook, Twitter, Share2].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Policy Info */}
              <div className="border-t pt-6 space-y-3">
                {[
                  { icon: Truck, text: "Free Shipping on orders over ₹50" },
                  { icon: Shield, text: "Estimated Delivery: 3-5 business days" },
                  { icon: RotateCcw, text: "30-Day Money Back Guarantee" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="w-full justify-start bg-muted/50 rounded-xl p-1">
              <TabsTrigger value="description" className="rounded-lg">Description</TabsTrigger>
              <TabsTrigger value="details" className="rounded-lg">Product Details</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-lg">Reviews ({reviews.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4">Product Description</h3>
                <p className="text-muted-foreground mb-4">
                  This professional-grade blood pressure monitor is designed for accurate and reliable readings at home. 
                  Featuring advanced sensor technology and an easy-to-read LCD display, it provides instant measurements 
                  of systolic and diastolic pressure along with pulse rate.
                </p>
                <p className="text-muted-foreground">
                  The device includes a memory function that stores up to 120 readings with date and time stamps, 
                  making it easy to track your health over time. The adjustable cuff fits most adult arm sizes, 
                  and the compact design makes it perfect for home use or travel.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4">General Information</h3>
                <table className="w-full">
                  <tbody className="divide-y">
                    {[
                      ["Brand", "EcomZone"],
                      ["Model", "BP-02 Professional"],
                      ["Display Type", "LCD Digital"],
                      ["Memory Capacity", "120 readings"],
                      ["Power Source", "4 x AA Batteries"],
                      ["Cuff Size", "22-42 cm (fits most adults)"],
                      ["Accuracy", "±3 mmHg"],
                      ["Weight", "350g"],
                      ["Warranty", "2 Years"],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="py-3 text-muted-foreground">{label}</td>
                        <td className="py-3 text-foreground font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Customer Reviews</h3>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Write Your Review
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-foreground">{review.author}</h4>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-4 w-4",
                                    i < review.rating
                                      ? "text-accent fill-accent"
                                      : "text-muted-foreground"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-3">{review.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              {review.likes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors">
                              <ThumbsDown className="h-4 w-4" />
                              {review.dislikes}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div className="mb-16">
            <SectionHeader
              title="You Might Also Like"
              subtitle="Check out these similar products"
              action={
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/shop">View All</Link>
                </Button>
              }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
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
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
