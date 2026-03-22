import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  Send,
  CreditCard,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "FAQs", path: "#" },
];

const products = [
  { name: "Medicines", path: "/shop" },
  { name: "Medical Equipment", path: "/shop" },
  { name: "Health Care", path: "/shop" },
  { name: "Personal Care", path: "/shop" },
  { name: "Baby Care", path: "/shop" },
];

const accountLinks = [
  { name: "My Account", path: "#" },
  { name: "Order History", path: "#" },
  { name: "Wishlist", path: "#" },
  { name: "Track Order", path: "#" },
  { name: "Returns", path: "#" },
];

const aboutLinks = [
  { name: "About Us", path: "/about" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms & Conditions", path: "#" },
  { name: "Shipping Policy", path: "#" },
  { name: "Careers", path: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-muted">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                Subscribe to our Newsletter
              </h3>
              <p className="text-primary-foreground/80 mt-1">
                Stay updated with the latest <span className="font-semibold">healthcare products & tips</span>!
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-background text-foreground border-0 h-12"
              />
              <Button className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">+</span>
              </div>
              <span className="text-2xl font-bold text-primary-foreground">Glenora</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Glenora Pharmaceutical Pvt. Ltd. — Your trusted partner for quality medicines and healthcare solutions.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 bg-background/10 hover:bg-background/20 transition-colors rounded-lg px-4 py-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-primary-foreground">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground">Download on the</p>
                  <p className="text-sm font-semibold text-primary-foreground">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-background/10 hover:bg-background/20 transition-colors rounded-lg px-4 py-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-primary-foreground">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground">Get it on</p>
                  <p className="text-sm font-semibold text-primary-foreground">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Your Account */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Your Account</h4>
            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Ground Floor, Mansarover Colony, Ancillary Chowk, Beside MECL, Hatia, Ranchi, Jharkhand - 834003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 700 481 7894 / 7061586649</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">glenorapharmaceutical@gmail.com</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors hover-scale"
                >
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Glenora Pharmaceutical Pvt. Ltd. All rights reserved. Made with ❤️ for healthcare.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-sm mr-2">We Accept:</span>
              {["Visa", "MasterCard", "PayPal", "Amex"].map((name) => (
                <div
                  key={name}
                  className="w-12 h-8 bg-background/10 rounded flex items-center justify-center"
                >
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
