import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  variant?: "default" | "compact" | "large";
  className?: string;
}

export const CountdownTimer = ({ 
  targetDate, 
  variant = "default",
  className 
}: CountdownTimerProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const timeUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec", pulse: true },
  ];

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-1 text-xs", className)}>
        {timeUnits.map((unit, i) => (
          <span key={unit.label} className="flex items-center">
            <span className={cn(
              "bg-foreground text-background px-1.5 py-0.5 rounded font-mono font-bold",
              unit.pulse && "animate-pulse"
            )}>
              {String(unit.value).padStart(2, "0")}
            </span>
            {i < timeUnits.length - 1 && <span className="text-muted-foreground mx-0.5">:</span>}
          </span>
        ))}
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        {timeUnits.map((unit, i) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span className={cn(
              "w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center rounded-lg text-2xl font-bold font-mono",
              unit.pulse && "pulse-seconds"
            )}>
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {timeUnits.map((unit, i) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className={cn(
            "w-10 h-10 bg-foreground text-background flex items-center justify-center rounded text-sm font-bold font-mono",
            unit.pulse && "pulse-seconds"
          )}>
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-muted-foreground mt-0.5">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
