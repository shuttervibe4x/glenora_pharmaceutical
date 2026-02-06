import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  centered = false,
  className,
  action,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-8",
        centered && "text-center",
        !centered && action && "flex items-end justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && <div className="hidden md:block">{action}</div>}
    </div>
  );
};
