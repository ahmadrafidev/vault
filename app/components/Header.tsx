"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const resourceItems = [
  { name: "Videos", href: "/videos", description: "Video content about design engineering" },
  { name: "Articles", href: "/articles", description: "Thought-provoking articles" },
  { name: "People", href: "/people", description: "Inspiring designers and creators" },
];

export default function Header() {
  const pathname = usePathname();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const isResourceActive = resourceItems.some(item => pathname === item.href);
  const isHomeActive = pathname === "/";

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          <Link
            href="/"
            className="flex items-center space-x-2 transition-colors hover:text-foreground/80"
          >
            <div className="text-lg sm:text-xl md:text-3xl font-medium text-foreground">
              Vault
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isHomeActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              Home
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-1 ${
                  isResourceActive
                    ? "bg-foreground/10 text-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <span>Resources</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div
                  className="absolute right-0 mt-1 w-64 bg-background border border-foreground/10 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 text-sm transition-colors hover:bg-foreground/5 ${
                        pathname === item.href
                          ? "text-foreground bg-foreground/5"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-foreground/50 mt-1">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
