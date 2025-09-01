import { Header } from "./components";
import Link from "next/link";

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
        <div className="pt-8 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4 leading-tight text-balance">
            The Essential Digital Library for Designers and Engineers
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6 pb-8">
          {/* Resources Categories */}
          <div className="lg:col-span-3">
            <h2 className="text-lg font-light text-foreground mb-4">
              Browse by category
            </h2>
            
            <div className="grid gap-3">
              {resourceCategories.map((category) => (
                <Link key={category.id} href={`/resources#${category.id}`}>
                  <div className="group max-w-xl flex items-center gap-3 p-4 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all duration-200">
                    <span className="text-xl">{category.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1 text-sm md:text-lg">
                        {category.name}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 transition-all duration-200">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/resources"
                className="text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors"
              >
                View all resources →
              </Link>
            </div>
          </div>

          {/* Submit Section */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-light text-foreground mb-4">
              Submit resource
            </h2>
            
            {/* Card */}
            <div className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] rounded-2xl p-8 border border-foreground/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10">
                  <svg className="w-5 h-5 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">Share a Resource</h3>
                  <p className="text-sm text-foreground/60">
                    Help grow our community collection
                  </p>
                </div>
              </div>
              
              <form className="space-y-5">
                <div className="relative">
                  <input
                    type="url"
                    placeholder="Paste a link..."
                    className="w-full px-5 py-4 bg-background/50 border border-foreground/20 rounded-xl text-base placeholder:text-foreground/40 focus:outline-none focus:border-foreground/40 focus:bg-background transition-all duration-200"
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
                  className="w-full px-5 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all duration-200 transform hover:scale-[1.02] text-base flex items-center justify-center gap-2"
                >
                  <span>Submit Resource</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              
              <div className="mt-6 pt-5 border-t border-foreground/10">
                <p className="text-sm text-foreground/50 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  I'll review and add it to the collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
