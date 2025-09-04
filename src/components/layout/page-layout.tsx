import type { PageLayoutProps } from "@/src/types";
import { PAGE_LAYOUT } from "@/src/constants";
import { cn } from "@/src/utils";

export function PageLayout({ 
  children, 
  title, 
  description, 
  className 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className={cn(
        PAGE_LAYOUT.maxWidth,
        "mx-auto",
        PAGE_LAYOUT.padding,
        className
      )}>
        <div className={PAGE_LAYOUT.spacing.section}>
          {children}
        </div>
      </main>
    </div>
  );
}
