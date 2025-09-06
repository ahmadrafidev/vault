"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Header, PageHero, ResourceNavigation, ResourceContent } from "@/src/components";
import { useResourceCategories, useMobileLayout } from "@/src/hooks";
import { RESOURCE_CATEGORIES_DATA, RESOURCE_TABS, DEFAULT_ACTIVE_TAB } from "@/src/constants";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE_TAB);
  const resourceCategories = useResourceCategories(RESOURCE_CATEGORIES_DATA);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && RESOURCE_TABS.some(tab => tab.id === tabParam)) {
      setActiveTab(tabParam);
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