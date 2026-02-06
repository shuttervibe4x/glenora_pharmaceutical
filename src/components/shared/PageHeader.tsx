import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export const PageHeader = ({ title, breadcrumbs, className }: PageHeaderProps) => {
  return (
    <div className={cn("bg-primary py-8 md:py-12", className)}>
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-primary-foreground/80">
          <Link to="/" className="flex items-center hover:text-primary-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              {item.path ? (
                <Link 
                  to={item.path} 
                  className="hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};
