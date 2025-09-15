"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Header, PageHero, ResourceNavigation, ResourceContent } from "@/src/components";
import { useResourceCategories, useMobileLayout } from "@/src/hooks";
import { RESOURCE_CATEGORIES_DATA, RESOURCE_TABS, DEFAULT_ACTIVE_TAB } from "@/src/constants";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize activeTab with URL param or default
  const tabParam = searchParams.get('tab');
  const initialTab = tabParam && RESOURCE_TABS.some(tab => tab.id === tabParam) ? tabParam : DEFAULT_ACTIVE_TAB;
  const [activeTab, setActiveTab] = useState(initialTab);

  const resourceCategories = useResourceCategories(RESOURCE_CATEGORIES_DATA);

  // Update activeTab when URL changes (for browser navigation)
  useEffect(() => {
    const currentTabParam = searchParams.get('tab');
    if (currentTabParam && RESOURCE_TABS.some(tab => tab.id === currentTabParam)) {
      setActiveTab(currentTabParam);
    } else if (!currentTabParam) {
      setActiveTab(DEFAULT_ACTIVE_TAB);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tabId);
    router.push(url.pathname + url.search, { scroll: false });

    const announcement = `Switched to ${RESOURCE_TABS.find(tab => tab.id === tabId)?.label} tab`;
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = announcement;
    document.body.appendChild(liveRegion);
    setTimeout(() => document.body.removeChild(liveRegion), 1000);
  };
  
  const { 
    containerPadding, 
    sectionSpacing, 
    navSpacing, 
    maxWidth 
  } = useMobileLayout({
    reducePadding: true,
    compactSpacing: true,
    adaptiveMaxWidth: true,
  });

  return (
    <main
      id="main-content"
      className={`${maxWidth} mx-auto ${containerPadding}`}
      role="main"
      aria-labelledby="resources-heading"
    >
      <div className={sectionSpacing}>
        <PageHero
          title="Resources"
          description="A highly curated list of discoveries."
          titleId="resources-heading"
        />

        <div className={navSpacing}>
          <ResourceNavigation
            tabs={RESOURCE_TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        <ResourceContent
          categories={resourceCategories}
          activeTab={activeTab}
        />
      </div>
    </main>
  );
}

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ResourcesContent />
      </Suspense>
    </div>
  );
}