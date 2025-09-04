"use client";

import type { ResourceCategory } from "@/src/types";
import { EmptyState } from "@/src/components/ui";

interface ResourceContentProps {
  categories: ResourceCategory[];
  activeTab: string;
}

export function ResourceContent({ categories, activeTab }: ResourceContentProps) {
  return (
    <div className="min-h-[400px]">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`${
            activeTab === category.id ? "block" : "hidden"
          } transition-all duration-300 ease-out`}
        >
          <EmptyState category={category} />
        </div>
      ))}
    </div>
  );
}
