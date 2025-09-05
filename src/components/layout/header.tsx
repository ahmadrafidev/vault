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
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50" role="banner">
      <div className={cn("max-w-5xl mx-auto", containerPadding)}>
        <div className="flex items-center justify-center h-16">
          {/* Navigation */}
          <nav
            id="navigation"
            className="flex items-center space-x-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Home Link */}
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150",
                isHomeActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
              aria-current={isHomeActive ? "page" : undefined}
            >
              Home
            </Link>

            {/* Resources Link */}
            <Link
              href="/resources"
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150",
                isResourceActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              )}
              aria-current={isResourceActive ? "page" : undefined}
            >
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
