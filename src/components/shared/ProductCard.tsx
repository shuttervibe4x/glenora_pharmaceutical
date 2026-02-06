import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  dealEndsAt?: Date;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "horizontal";
  className?: string;
}

export const ProductCard = ({ 
  product, 
  variant = "default",
  className 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <div className={cn(
      "group bg-card rounded-xl overflow-hidden card-shadow card-shadow-hover hover-lift",
      variant === "horizontal" && "flex",
      className
    )}>
      {/* Image Container */}
      <div className={cn(
        "relative img-zoom-container bg-muted",
        variant === "horizontal" ? "w-40 shrink-0" : "aspect-square"
      )}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && (
            <Badge className={cn("text-xs", product.badgeColor || "bg-accent")}>
              {product.badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-destructive text-xs">-{discount}%</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "w-8 h-8 rounded-full bg-background shadow-md flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground",
              isWishlisted && "bg-destructive text-destructive-foreground"
            )}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-8 h-8 rounded-full bg-background shadow-md flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>

        {/* Countdown Timer */}
        {product.dealEndsAt && (
          <div className="absolute bottom-2 left-2 right-2">
            <CountdownTimer targetDate={product.dealEndsAt} variant="compact" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn("p-4", variant === "horizontal" && "flex-1")}>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.floor(product.rating)
                  ? "text-accent fill-accent"
                  : "text-muted-foreground"
              )}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
