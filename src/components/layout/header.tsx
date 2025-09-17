"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useMobileLayout } from "@/src/hooks";
import { NeatTab, type NeatTabItem } from "@/src/components/ui";
import { cn } from "@/src/utils";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  const { containerPadding } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  // Navigation tabs configuration
  const navigationTabs: NeatTabItem[] = [
    { label: "Home" },
    { label: "Resources" },
  ];

  // Map pathname to tab index
  const getActiveTabIndex = (path: string) => {
    switch (path) {
      case "/":
        return 0;
      case "/resources":
        return 1;
      default:
        return 0;
    }
  };

  // Set client-side flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle tab navigation
  const handleTabChange = (index: number) => {
    switch (index) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/resources");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      role="banner"
    >
      <div className={cn("max-w-5xl mx-auto", containerPadding)}>
        <div className="flex items-center justify-center h-16">
          <NeatTab
            key={`nav-${isClient ? pathname : 'initial'}`}
            tabs={navigationTabs}
            defaultTab={isClient ? getActiveTabIndex(pathname) : 0}
            variant="pill"
            onChange={handleTabChange}
            className="z-10"
          />
        </div>
      </div>
    </header>
  );
}
