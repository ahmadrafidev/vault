import { Header } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Header */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16">
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
              The Essential Digital Library for Design and Engineering
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8">
              A Curated Gems for Design and Code
            </p>
          </div>
        </div>

        {/* Content */}
        <div id="content">
          {/* Submit Form */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-6 sm:p-8 border border-foreground/10">
              <h3 className="text-lg sm:text-xl font-medium text-foreground mb-4">
                Found something cool?
              </h3>
              <p className="text-foreground/70 mb-6 max-w-lg mx-auto text-sm sm:text-base">
                I update this vault regularly with new discoveries. If you have recommendations or want to chat about design, feel free to reach out!
              </p>
              <form className="max-w-md mx-auto space-y-4">
                <input
                  type="url"
                  placeholder="Paste a link..."
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-sm placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors text-sm"
                >
                  <p className="text-sm md:text-base">Submit Resource</p>
                </button>
              </form>
              <p className="text-xs text-foreground/50 mt-3">
                I'll review and add it to the collection
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
