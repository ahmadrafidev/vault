"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useCallback, memo } from "react";

import { useMobileLayout } from "@/src/hooks";
import { NeatTab, type NeatTabItem } from "@/src/components/ui";
import { cn } from "@/src/utils";

const NAVIGATION_TABS: NeatTabItem[] = [
  { label: "Home" },
  { label: "Resources" },
];

const HeaderComponent = memo(function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = useMemo(() => {
    if (pathname === "/") return 0;
    if (pathname === "/resources") return 1;
    return 0;
  }, [pathname]);
  
  const { containerPadding } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  const handleTabChange = useCallback((index: number) => {
    if (index === 0) router.push("/");
    if (index === 1) router.push("/resources");
  }, [router]);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      role="banner"
    >
      <div className={cn("max-w-5xl mx-auto", containerPadding)}>
        <div className="flex items-center justify-center h-16">
          <NeatTab
            tabs={NAVIGATION_TABS}
            defaultTab={currentTab}
            onChange={handleTabChange}
            variant="pill"
            className="z-10"
          />
        </div>
      </div>
    </header>
  );
});

HeaderComponent.displayName = 'Header';

export { HeaderComponent as Header };
