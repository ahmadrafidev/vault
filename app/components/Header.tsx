"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isResourceActive = pathname === "/resources";
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

            {/* Resources Link */}
            <Link
              href="/resources"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isResourceActive
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
