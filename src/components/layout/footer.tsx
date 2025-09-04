"use client";

import { useMobileLayout } from "@/src/hooks";
import { cn } from "@/src/utils";

export function Footer() {
  const { containerPadding } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  return (
    <footer>
      <div className={cn("max-w-5xl mx-auto py-4", containerPadding)}>
        <div className="text-center text-foreground/60">
          <p className="text-sm md:text-base">
            Built by{" "}
            <a 
              href="https://x.com/rafiwiranaa" 
              className="text-foreground/90 font-medium hover:text-foreground hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rafi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
