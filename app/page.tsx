import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Header } from "./components";

const resourceCategories = [
  {
    id: "videos",
    name: "Videos",
    description: "Curated video content about design engineering, user experience, and creative processes",
    icon: "▶",
  },
  {
    id: "articles",
    name: "Articles", 
    description: "Thought-provoking articles on design and engineering principles, trends, and insights",
    icon: "📄",
  },
  {
    id: "people",
    name: "People",
    description: "Inspiring designers, engineers, creators, and innovators shaping the future of design",
    icon: "👥",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="pt-8 py-6 sm:py-12 md:py-16 text-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4 leading-tight text-balance">
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
            
            <div className="grid gap-3">
              {resourceCategories.map((category) => (
                <Link key={category.id} href={`/resources#${category.id}`}>
                  <div className="group max-w-xl flex items-center gap-3 p-4 rounded-xl border border-foreground/10 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:bg-foreground/[0.02] hover:-translate-y-0.5 g active:scale-[0.98] focus-within:ring-2 focus-within:ring-foreground/20 transition-all duration-150 ease-out cursor-pointer">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300 ease-out">{category.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1 text-sm md:text-lg group-hover:text-foreground/90 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 group-hover:text-foreground/70 leading-relaxed transition-colors duration-200">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-1 active:translate-x-0.5 transition-all duration-300 ease-out">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-sm md:text-base text-foreground/60 hover:text-foreground transition-all duration-200 hover:translate-x-1 group"
              >
                <span>View all resources</span>
                <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
