import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, Flame } from "lucide-react";

const variants = {
  info: {
    icon: Info,
    border: "border-accent-blue",
    bg: "bg-accent-blue/5",
    iconColor: "text-accent-blue",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-accent-orange",
    bg: "bg-accent-orange/5",
    iconColor: "text-accent-orange",
  },
  tip: {
    icon: Lightbulb,
    border: "border-accent-green",
    bg: "bg-accent-green/5",
    iconColor: "text-accent-green",
  },
  danger: {
    icon: Flame,
    border: "border-red-500",
    bg: "bg-red-500/5",
    iconColor: "text-red-500",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof variants;
  title?: string;
  children: React.ReactNode;
}) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div className={cn("my-6 rounded-xl border-l-4 p-4 backdrop-blur-xl", v.border, v.bg)}>
      <div className={cn("flex items-center gap-2 font-semibold text-foreground")}>
        <Icon size={18} className={v.iconColor} />
        {title && <span>{title}</span>}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
