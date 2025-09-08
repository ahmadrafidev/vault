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
    <footer role="contentinfo">
      <div className={cn("max-w-5xl mx-auto py-4", containerPadding)}>
        <div className="text-center text-foreground/60">
          <p className="text-sm md:text-base">
            Built by{" "}
            <a
              href="https://x.com/arayyye"
              className="text-foreground/90 font-medium hover:text-foreground hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rafi's Twitter profile"
            >
              arayyye
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
