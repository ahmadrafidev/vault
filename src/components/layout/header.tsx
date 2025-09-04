"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileLayout } from "@/src/hooks";
import { cn } from "@/src/utils";

export function Header() {
  const pathname = usePathname();
  const { containerPadding } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  const isResourceActive = pathname === "/resources";
  const isHomeActive = pathname === "/";

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className={cn("max-w-5xl mx-auto", containerPadding)}>
        <div className="flex items-center justify-center h-16">
          {/* Navigation */}
          <nav className="flex items-cente space-x-1">
            {/* Home Link */}
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                isHomeActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              Home
            </Link>

            {/* Resources Link */}
            <Link
              href="/resources"
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                isResourceActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
