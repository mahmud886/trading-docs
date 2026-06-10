import { BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  iconClassName?: string;
  iconSize?: number;
};

export function LogoMark({ className, iconClassName, iconSize }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-md bg-accent-green/10 xl:h-8 xl:w-8 xl:rounded-lg",
        className,
      )}
      aria-hidden="true"
    >
      {iconSize ? (
        <BarChart3 size={iconSize} className={cn("text-accent-green", iconClassName)} />
      ) : (
        <>
          <BarChart3 size={14} className={cn("text-accent-green xl:hidden", iconClassName)} />
          <BarChart3 size={18} className={cn("hidden text-accent-green xl:block", iconClassName)} />
        </>
      )}
    </div>
  );
}
