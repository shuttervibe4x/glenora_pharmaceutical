import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingCart, 
  Phone, 
  ChevronDown, 
  Menu, 
  X,
  MapPin 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <p className="hidden md:block">
            🏥 Glenora Pharmaceutical — <span className="font-semibold">Quality medicines</span> delivered to your doorstep!
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="#" className="flex items-center gap-1 hover:underline">
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Track Order</span>
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <span>EN</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <span>USD</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">+</span>
              </div>
              <span className="text-2xl font-bold text-primary hidden sm:block">Glenora</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <div className="flex items-center border-2 border-primary rounded-lg overflow-hidden">
                  <button className="flex items-center gap-1 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium">
                    All Categories
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2.5 outline-none text-sm"
                  />
                  <button className="px-4 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Phone & Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground text-xs">Need Help?</p>
                  <p className="font-semibold">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Link 
                  to="#" 
                  className="relative p-2 rounded-full hover:bg-secondary transition-colors hover-scale"
                >
                  <User className="h-5 w-5 text-foreground" />
                </Link>
                <Link 
                  to="#" 
                  className="relative p-2 rounded-full hover:bg-secondary transition-colors hover-scale"
                >
                  <Heart className="h-5 w-5 text-foreground" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link 
                  to="#" 
                  className="relative p-2 rounded-full hover:bg-secondary transition-colors hover-scale"
                >
                  <ShoppingCart className="h-5 w-5 text-foreground" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    2
                  </span>
                </Link>

                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <div className="flex items-center border-2 border-primary rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 outline-none text-sm"
              />
              <button className="px-4 py-2.5 bg-primary text-primary-foreground">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={cn(
          "border-t bg-background",
          isMenuOpen ? "block" : "hidden md:block"
        )}>
          <div className="container">
            <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === item.path 
                        ? "text-primary" 
                        : "text-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
