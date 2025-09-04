import type { TabIndicatorStyle, TabItem, AnimationConfig } from "@/src/types";

/**
 * Calculates the position and dimensions for the tab indicator
 */
export function calculateIndicatorStyle(
  container: HTMLDivElement | null,
  activeButton: HTMLButtonElement | null,
  animationConfig: AnimationConfig
): TabIndicatorStyle | null {
  if (!container || !activeButton) return null;

  const containerRect = container.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();

  return {
    left: `${buttonRect.left - containerRect.left}px`,
    width: `${activeButton.offsetWidth}px`,
    height: `${activeButton.offsetHeight}px`,
    transition: `left ${animationConfig.duration}ms ${animationConfig.easing}, width ${animationConfig.duration}ms ${animationConfig.easing}`,
  };
}

/**
 * Finds the index of the active tab
 */
export function findActiveTabIndex(tabs: TabItem[], activeTabId: string): number {
  return tabs.findIndex(tab => tab.id === activeTabId);
}

/**
 * Ensures the refs array matches the tab count
 */
export function ensureRefArrayLength<T>(
  refsArray: (T | null)[],
  targetLength: number
): (T | null)[] {
  if (refsArray.length !== targetLength) {
    return Array.from({ length: targetLength }, (_, i) => refsArray[i] ?? null);
  }
  return refsArray;
}
