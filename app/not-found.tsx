'use client';

import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-light text-foreground/30 leading-none tracking-tight">
            404
          </h1>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-3">
              Lost in the Vault?
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed">
              This gem seems to have vanished from our collection. 
              Don't worry, there are plenty more treasures to discover.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all duration-200 hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background"
            >
              <Home size={18} />
              Return to Vault
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:border-foreground/40 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background"
            >
              <ChevronLeft size={18} />
              Retrace steps
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
