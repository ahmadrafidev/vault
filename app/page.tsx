import Link from "next/link";
import { ChevronRight, PlayCircle, FileText, Users, MoreHorizontal, Wrench } from "lucide-react";

import { Header } from "@/src/components";
import { getCategoriesByPriority, getCategoryMetadata } from "@/src/data";
import { getIcon } from "@/src/utils/icon-utils";

const resourceCategories = getCategoriesByPriority().map((category) => {
  const metadata = getCategoryMetadata(category.id);
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    icon: getIcon(category.iconName),
    iconLabel: `${category.name} content`,
  };
});

export default function Home() {
  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <main
        id="main-content"
        className="max-w-5xl mx-auto px-6 lg:px-8"
        role="main"
        aria-labelledby="main-heading"
      >
        <div className="pt-8 py-6 sm:py-8 md:py-12 text-start max-w-lg">
          <h1
            id="main-heading"
            className="text-2xl md:text-4xl font-medium tracking-tight text-foreground mb-4 leading-tight"
          >
            The Essential Archive for Designers and Engineers
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Resources Categories */}
          <section className="lg:col-span-3" aria-labelledby="categories-heading">
            <h2
              id="categories-heading"
              className="text-base md:text-lg font-normal text-foreground mb-1 sm:mb-2 md:mb-4"
            >
              Browse by category
            </h2>
            
            <div className="space-y-3 md:space-y-6">
              {resourceCategories.map((category) => (
                <Link key={category.id} href={`/resources?tab=${category.id}`}>
                  <div className="group flex items-center gap-4 px-5 py-4 hover:bg-foreground/[0.008] hover:translate-x-1 active:translate-x-0 active:bg-foreground/[0.012] transition-all duration-200 ease-out cursor-pointer border-l-2 border-transparent hover:border-foreground/10 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-md">
                    <span
                      className="text-lg group-hover:scale-105 transition-transform duration-200 ease-out flex-shrink-0 opacity-60 group-hover:opacity-80"
                      aria-label={category.iconLabel}
                    >
                      {category.icon}
                    </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground text-base group-hover:text-foreground transition-colors duration-200 truncate">
                          {category.name}
                        </h3>
                        <p className="text-sm text-foreground/45 group-hover:text-foreground/60 leading-relaxed transition-colors duration-200 mt-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                          {category.description}
                        </p>
                      </div>
                      <div className="text-foreground/25 group-hover:text-foreground/45 group-hover:translate-x-0.5 transition-all duration-200 ease-out flex-shrink-0 opacity-0 group-hover:opacity-100" aria-hidden="true">
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
          </section>

          {/* Suggestion Section */}
          <section className="lg:col-span-2" aria-labelledby="contribute-heading">
            <h2
              id="contribute-heading"
              className="text-base md:text-lg font-medium text-foreground mb-1 sm:mb-2 md:mb-4"
            >
              Contribute to the archive
            </h2>
            
            {/* Card */}
            <div className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] rounded-xl p-6 border border-foreground/10 backdrop-blur-sm">
              <div className="flex items-center mb-2 md:mb-4">
                <div>
                  <h3 id="suggest-form-heading" className="text-base font-medium text-foreground">Suggest a Resource</h3>
                  <p className="text-sm text-foreground/60">
                    Share something valuable you've discovered
                  </p>
                </div>
              </div>
              
              <form className="space-y-5" role="form" aria-labelledby="suggest-form-heading">
                <div className="relative">
                  <label htmlFor="resource-url" className="sr-only">
                    Resource URL
                  </label>
                  <input
                    id="resource-url"
                    name="resource-url"
                    type="url"
                    placeholder="Paste a link..."
                    className="w-full px-5 py-4 bg-background/50 border border-foreground/20 rounded-lg text-base placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:border-foreground/60 focus:bg-background focus:shadow-sm focus:shadow-foreground/10 transition-all duration-200"
                    required
                    aria-describedby="url-help"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true">
                    <svg className="w-5 h-5 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div id="url-help" className="sr-only">
                    Enter the URL of a resource you'd like to suggest for the archive
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-5 py-2 md:py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-base flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
                  aria-describedby="submit-help"
                >
                  <span>Send Suggestion</span>
                </button>
                <div id="submit-help" className="sr-only">
                  Submit your resource suggestion to be reviewed for inclusion in the archive
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
