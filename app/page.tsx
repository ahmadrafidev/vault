import Link from "next/link";
import { ChevronRight, PlayCircle, FileText, Users, MoreHorizontal, Wrench } from "lucide-react";

import { Header } from "@/src/components";
import { getCategoriesByPriority, getCategoryMetadata } from "@/src/data";
import { getIcon } from "@/src/utils/icon-utils";
import { FeaturedResources } from "@/src/components/ui/featured-resources";

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
        className="max-w-5xl mx-auto px-4 md:px-6"
        role="main"
        aria-labelledby="main-heading"
      >
        <div className="pt-8 py-6 md:py-8 text-start max-w-lg">
          <h1
            id="main-heading"
            className="text-2xl md:text-4xl font-medium tracking-tight text-foreground mb-4 leading-tight"
          >
            The Essential Archive for Designers and Engineers
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-8">
          {/* Resources Categories */}
          <section aria-labelledby="categories-heading">
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
                className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground/70 transition-all duration-200 hover:translate-x-0.5 group font-medium focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-sm"
                aria-label="View all resources in the archive"
              >
                <span>View all resources</span>
                <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* Featured Resources */}
          <section aria-labelledby="featured-heading">
            <h2
              id="featured-heading"
              className="text-base md:text-lg font-medium text-foreground mb-1 sm:mb-2 md:mb-4"
            >
              Featured Resources
            </h2>

            {/* Card */}
            <div className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] rounded-xl p-6 border border-foreground/10 backdrop-blur-sm">
              <FeaturedResources />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
