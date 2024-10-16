import { cn } from "@/lib/utils";

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg bg-slate-50 h-full overflow-hidden border border-gray-400",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <div className={cn("font-bold text-black text-sm", className)}>
      {children}
    </div>
  );
}
