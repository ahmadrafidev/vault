import { PlayCircle, FileText, Users, MoreHorizontal, Wrench } from "lucide-react";
import type { IconName, IconType } from "@/src/types";

const iconMap = {
  FileText,
  PlayCircle,
  Users,
  MoreHorizontal,
  Wrench,
} as const;

/**
 * Converts an icon name to the actual icon component
 */
export function getIcon(iconName: IconName, className: string = "w-5 h-5"): IconType {
  const IconComponent = iconMap[iconName];
  return <IconComponent className={className} />;
}

/**
 * Gets the icon component class (useful for dynamic imports)
 */
export function getIconComponent(iconName: IconName) {
  return iconMap[iconName];
}
