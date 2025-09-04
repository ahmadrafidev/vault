import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Header } from "@/src/components";

const resourceCategories = [
  {
    id: "videos",
    name: "Videos",
    description: "Curated video content about design engineering and creative processes",
    icon: "▶",
  },
  {
    id: "articles",
    name: "Articles", 
    description: "Thought-provoking articles on design and engineering.",
    icon: "📄",
  },
  {
    id: "people",
    name: "People",
    description: "Inspiring designers, engineers, and innovators.",
    icon: "👥",
  },
  {
    id: "other",
    name: "Other",
    description: "Miscellaneous resources, tools, and discoveries.",
    icon: "🔗",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="pt-8 py-6 sm:py-12 md:py-16 text-start max-w-lg">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-4 leading-tight">
            The Essential Archive for Designers and Engineers
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Resources Categories */}
          <div className="lg:col-span-3">
            <h2 className="text-base md:text-lg font-normal text-foreground mb-1 sm:mb-2 md:mb-4">
              Browse by category
            </h2>
            
            <div className="space-y-3 md:space-y-6">
              {resourceCategories.map((category) => (
                <Link key={category.id} href={`/resources?tab=${category.id}`}>
                  <div className="group flex items-center gap-4 px-5 py-4 hover:bg-foreground/[0.008] hover:translate-x-1 active:translate-x-0 active:bg-foreground/[0.012] transition-all duration-200 ease-out cursor-pointer border-l-2 border-transparent hover:border-foreground/10">
                    <span className="text-lg group-hover:scale-105 transition-transform duration-200 ease-out flex-shrink-0 opacity-60 group-hover:opacity-80">{category.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-base group-hover:text-foreground transition-colors duration-200 truncate">
                        {category.name}
                      </h3>
                      <p className="text-sm text-foreground/45 group-hover:text-foreground/60 leading-relaxed transition-colors duration-200 mt-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                        {category.description}
                      </p>
                    </div>
                    <div className="text-foreground/25 group-hover:text-foreground/45 group-hover:translate-x-0.5 transition-all duration-200 ease-out flex-shrink-0 opacity-0 group-hover:opacity-100">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 px-5">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground/70 transition-all duration-200 hover:translate-x-0.5 group font-medium"
              >
                <span>View all resources</span>
                <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" />
              </Link>
            </div>
          </div>

          {/* Suggestion Section */}
          <div className="lg:col-span-2">
            <h2 className="text-base md:text-lg font-medium text-foreground mb-1 sm:mb-2 md:mb-4">
              Contribute to the archive
            </h2>
            
            {/* Card */}
            <div className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] rounded-xl p-6 border border-foreground/10 backdrop-blur-sm">
              <div className="flex items-center mb-2 md:mb-4">
                <div>
                  <h3 className="text-base font-medium text-foreground">Suggest a Resource</h3>
                  <p className="text-sm text-foreground/60">
                    Share something valuable you've discovered
                  </p>
                </div>
              </div>
              
              <form className="space-y-5">
                <div className="relative">
                  <input
                    type="url"
                    placeholder="Paste a link..."
                    className="w-full px-5 py-4 bg-background/50 border border-foreground/20 rounded-lg text-base placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/60 focus:bg-background focus:shadow-sm focus:shadow-foreground/10 transition-all duration-200"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-5 h-5 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-5 py-2 md:py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-base flex items-center justify-center gap-2"
                >
                  <span>Send Suggestion</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
