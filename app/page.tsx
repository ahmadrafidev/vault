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
        <div className="grid lg:grid-cols-3 gap-6 pb-8">
          {/* Resources Categories */}
          <div className="lg:col-span-2">
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
          <div>
            <h2 className="text-lg font-light text-foreground mb-4">
              Submit resource
            </h2>
            <p className="text-foreground/60 mb-4 text-sm">
              Share resources you think others would find valuable
            </p>
            
            <form className="space-y-3">
              <input
                type="url"
                placeholder="Paste a link..."
                className="w-full px-3 py-2 bg-background border border-foreground/20 rounded-lg text-sm placeholder:text-foreground/40 focus:outline-none focus:border-foreground/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors text-sm"
              >
                Submit
              </button>
            </form>
            
            <p className="text-xs text-foreground/40 mt-3">
              I'll review and add it to the collection
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
