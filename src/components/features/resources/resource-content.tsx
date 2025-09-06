"use client";

import { useEffect, useState } from "react";
import type { ResourceCategory } from "@/src/types";
import { getContentByCategory, type ContentItem } from "@/src/data";
import { ContentCard } from "./content-card";

interface ResourceContentProps {
  categories: ResourceCategory[];
  activeTab: string;
}

export function ResourceContent({ categories, activeTab }: ResourceContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  return (
    <div className="min-h-[400px]" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
      {categories.map((category) => {
        const contentItems = getContentByCategory(category.id);

        return (
          <div
            key={category.id}
            id={`panel-${category.id}`}
            className={`${
              activeTab === category.id ? "block" : "hidden"
            } transition-all duration-300 ease-out`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            aria-hidden={activeTab !== category.id}
          >
            {contentItems.length > 0 ? (
              <div className="space-y-6">
                {/* All Content Section */}
                <section>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {contentItems.map((item, index) => (
                      <div
                        key={item.id}
                        className={`transition-all duration-700 ease-out ${
                          isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                        }`}
                        style={{ transitionDelay: `${300 + (index * 150)}ms` }}
                      >
                        <ContentCard content={item} />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  <p className="text-lg font-medium mb-2">No content available</p>
                  <p className="text-sm">Content for {category.name.toLowerCase()} will be added soon.</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
