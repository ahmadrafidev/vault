"use client";

import { useState } from "react";
import { Header } from "../components";

const resourceCategories = [
  {
    id: "videos",
    name: "Videos",
    description: "Curated video content about design engineering, user experience, and creative processes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "articles",
    name: "Articles",
    description: "Thought-provoking articles on design and engineering principles, trends, and insights",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "people",
    name: "People",
    description: "Inspiring designers, engineers, creators, and innovators shaping the future of design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <div className="bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
              Resources
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
              Discover curated content to fuel your design engineering journey. From insightful videos and articles to inspiring profiles of industry leaders.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="bg-foreground/5 rounded-md px-1 py-0.5 border border-foreground/10">
              <div className="flex space-x-0.5">
                {[
                  { id: "videos", label: "Videos" },
                  { id: "articles", label: "Articles" },
                  { id: "people", label: "People" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">

            {activeTab === "videos" && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                  <div className="flex justify-center mb-6">
                    <div className="text-foreground/60">
                      {resourceCategories.find(cat => cat.id === "videos")?.icon}
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                    Videos
                  </h2>
                  <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
                    Curated video content about design engineering, user experience, and creative processes
                  </p>
                  <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                    <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                      Coming Soon
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      I'm building an amazing collection of design engineering videos. Check back soon!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "articles" && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                  <div className="flex justify-center mb-6">
                    <div className="text-foreground/60">
                      {resourceCategories.find(cat => cat.id === "articles")?.icon}
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                    Articles
                  </h2>
                  <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
                    Thought-provoking articles on design and engineering principles, trends, and insights
                  </p>
                  <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                    <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                      Coming Soon
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      I'm curating a thoughtful collection of design engineering articles. Check back soon!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "people" && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                  <div className="flex justify-center mb-6">
                    <div className="text-foreground/60">
                      {resourceCategories.find(cat => cat.id === "people")?.icon}
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                    People
                  </h2>
                  <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
                    Inspiring designers, engineers, creators, and innovators shaping the future of design
                  </p>
                  <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 sm:p-12 border border-foreground/10">
                    <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                      Coming Soon
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      I'm collecting profiles of amazing designers and engineers. Check back soon!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
