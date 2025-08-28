import { Header } from "../components";

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-6">
              Videos
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Curated video content about design engineering, user experience, and creative processes
            </p>

            <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
              <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base">
                I'm building an amazing collection of design engineering videos. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
