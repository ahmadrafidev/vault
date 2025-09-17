'use client';

import {
  useState,
  memo,
  useCallback,
  useRef,
  useLayoutEffect,
  CSSProperties,
  forwardRef,
  useEffect,
} from 'react';
import { cn } from '@/src/utils';

export interface TabItem {
  label: string;
  content?: React.ReactNode;
}

export type TabVariant = 'default' | 'pill';

export interface TabProps {
  tabs: TabItem[];
  defaultTab?: number;
  className?: string;
  variant?: TabVariant;
  onChange?: (index: number) => void;
}

interface TriggerProps {
  label: string;
  active: boolean;
  onSelect: () => void;
  variant?: TabVariant;
}

const INDICATOR_EASING_CUBIC = 'cubic-bezier(.215, .61, .355, 1)';
const INDICATOR_DURATION_MS = 300;

export const NeatTab = ({ tabs, defaultTab = 0, className, variant = 'default', onChange }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotionRef = useRef<boolean>(false);

  // Ensure refs array length matches tab count
  if (triggerRefs.current.length !== tabs.length) {
    triggerRefs.current = Array.from({ length: tabs.length }, (_, i) => triggerRefs.current[i] ?? null);
  }

  const updateIndicator = useCallback(() => {
    const container = tabContainerRef.current;
    const activeButton = triggerRefs.current[activeTab];
    if (!container || !activeButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    const baseStyle: CSSProperties = {
      left: `${buttonRect.left - containerRect.left}px`,
      top: `${buttonRect.top - containerRect.top}px`,
      width: `${activeButton.offsetWidth}px`,
      height: `${activeButton.offsetHeight}px`,
    };

    setIndicatorStyle(
      reducedMotionRef.current
        ? baseStyle
        : {
            ...baseStyle,
            transition: `left ${INDICATOR_DURATION_MS}ms ${INDICATOR_EASING_CUBIC}, width ${INDICATOR_DURATION_MS}ms ${INDICATOR_EASING_CUBIC}, top ${INDICATOR_DURATION_MS}ms ${INDICATOR_EASING_CUBIC}, height ${INDICATOR_DURATION_MS}ms ${INDICATOR_EASING_CUBIC}`,
          }
    );
  }, [activeTab]);

  const handleSelect = useCallback(
    (idx: number) => {
      if (idx === activeTab) return;
      setActiveTab(idx);
      if (typeof onChange === 'function') onChange(idx);
    },
    [activeTab, onChange]
  );

  // Initialize reduced motion preference and subscribe to changes
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mql.matches;
    const listener = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      updateIndicator();
    };
    try {
      mql.addEventListener('change', listener);
      return () => mql.removeEventListener('change', listener);
    } catch {
      // Safari <14 fallback
      mql.addListener(listener);
      return () => mql.removeListener(listener);
    }
  }, [updateIndicator]);

  // Position indicator on layout changes
  useLayoutEffect(() => {
    updateIndicator();

    const container = tabContainerRef.current;
    const activeButton = triggerRefs.current[activeTab];
    const resizeObservers: ResizeObserver[] = [];

    if (container) {
      const ro = new ResizeObserver(updateIndicator);
      ro.observe(container);
      resizeObservers.push(ro);
    }
    if (activeButton) {
      const ro = new ResizeObserver(updateIndicator);
      ro.observe(activeButton);
      resizeObservers.push(ro);
    }

    const onWindowResize = () => updateIndicator();
    window.addEventListener('resize', onWindowResize, { passive: true });

    return () => {
      resizeObservers.forEach((ro) => ro.disconnect());
      window.removeEventListener('resize', onWindowResize);
    };
  }, [activeTab, tabs, variant, updateIndicator]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const isHorizontal = true;
      const maxIndex = tabs.length - 1;
      if (maxIndex < 0) return;

      switch (event.key) {
        case 'ArrowRight':
          if (!isHorizontal) break;
          event.preventDefault();
          handleSelect(activeTab === maxIndex ? 0 : activeTab + 1);
          triggerRefs.current[activeTab === maxIndex ? 0 : activeTab + 1]?.focus();
          break;
        case 'ArrowLeft':
          if (!isHorizontal) break;
          event.preventDefault();
          handleSelect(activeTab === 0 ? maxIndex : activeTab - 1);
          triggerRefs.current[activeTab === 0 ? maxIndex : activeTab - 1]?.focus();
          break;
        case 'Home':
          event.preventDefault();
          handleSelect(0);
          triggerRefs.current[0]?.focus();
          break;
        case 'End':
          event.preventDefault();
          handleSelect(maxIndex);
          triggerRefs.current[maxIndex]?.focus();
          break;
        default:
          break;
      }
    },
    [activeTab, handleSelect, tabs.length]
  );

  if (variant === 'pill') {
    return (
      <div className={cn('w-fit', className)}>
        <div
          ref={tabContainerRef}
          role="tablist"
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="relative inline-flex gap-2 rounded-md overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute rounded-md bg-zinc-900 dark:bg-zinc-50 shadow-sm pointer-events-none"
            style={{ ...indicatorStyle, zIndex: 0 }}
          />
          {tabs.map(({ label }, idx) => (
            <TabTrigger
              key={`${label}-${idx}`}
              ref={(el) => {
                triggerRefs.current[idx] = el;
              }}
              label={label}
              active={idx === activeTab}
              onSelect={() => handleSelect(idx)}
              variant="pill"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('w-fit', className)}>
      <div
        ref={tabContainerRef}
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="relative inline-flex p-1 rounded-md border border-gray-200 dark:border-gray-800 bg-zinc-50 dark:bg-gray-800/70 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute rounded-md bg-gray-900 dark:bg-gray-100 shadow-sm pointer-events-none"
          style={{ ...indicatorStyle, zIndex: 0 }}
        />
        {tabs.map(({ label }, idx) => (
          <TabTrigger
            key={`${label}-${idx}`}
            ref={(el) => {
              triggerRefs.current[idx] = el;
            }}
            label={label}
            active={idx === activeTab}
            onSelect={() => handleSelect(idx)}
            variant="default"
          />
        ))}
      </div>
    </div>
  );
};

const TabTrigger = memo(
  forwardRef<HTMLButtonElement, TriggerProps>(({ label, active, onSelect, variant = 'default' }, ref) => {
    const baseProps = {
      ref,
      onClick: onSelect,
      role: 'tab' as const,
      'aria-selected': active,
      tabIndex: active ? 0 : -1,
      className: '',
    };

    if (variant === 'pill') {
      return (
        <button
          {...baseProps}
          className={cn(
            'relative px-4 py-2 text-sm font-medium rounded-md z-10 outline-none focus-visible:ring-0 focus-visible:outline-none',
            'transition-all duration-200 ease-out',
            active
              ? 'text-white dark:text-gray-900'
              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 hover:scale-[1.02]'
          )}
        >
          {label}
        </button>
      );
    }

    return (
      <button
        {...baseProps}
        className={cn(
          'relative px-4 py-2 text-sm font-medium rounded-md z-10 outline-none focus-visible:ring-0 focus-visible:outline-none',
          'transition-all duration-200 ease-out',
          active
            ? 'text-gray-100 dark:text-gray-900'
            : 'text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-200/40 dark:hover:bg-gray-700/40 hover:scale-[1.02]'
        )}
      >
        {label}
      </button>
    );
  })
);

NeatTab.displayName = 'NeatTab';
TabTrigger.displayName = 'TabTrigger';
