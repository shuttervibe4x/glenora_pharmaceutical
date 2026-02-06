import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:scale-110",
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#20bd5a] hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  );
};
