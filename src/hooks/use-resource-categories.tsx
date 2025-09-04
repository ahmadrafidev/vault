import { useMemo } from "react";

import type { ResourceCategory, ResourceCategoryData } from "@/src/types";
import { getIcon } from "@/src/utils";

export function useResourceCategories(categoriesData: readonly ResourceCategoryData[]): ResourceCategory[] {
  return useMemo(() => {
    return categoriesData.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      icon: getIcon(category.iconName),
    }));
  }, [categoriesData]);
}
