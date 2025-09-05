"use client";

import type { ResourceCategory } from "@/src/types";
import { EmptyState } from "@/src/components/ui";

interface ResourceContentProps {
  categories: ResourceCategory[];
  activeTab: string;
}

export function ResourceContent({ categories, activeTab }: ResourceContentProps) {
  return (
    <div className="min-h-[400px]" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
      {categories.map((category) => (
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
          <EmptyState category={category} />
        </div>
      ))}
    </div>
  );
}
