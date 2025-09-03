"use client";

import { useState } from "react";
import { PlayCircle, FileText, Users } from "lucide-react";
import { Header } from "../components";

const resourceCategories = [
  {
    id: "videos",
    name: "Videos",
    description: "Curated video content about design engineering, user experience, and creative processes",
    icon: <PlayCircle className="w-5 h-5" />,
  },
  {
    id: "articles",
    name: "Articles",
    description: "Thought-provoking articles on design and engineering principles, trends, and insights",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: "people",
    name: "People",
    description: "Inspiring designers, engineers, creators, and innovators shaping the future of design",
    icon: <Users className="w-5 h-5" />,
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="py-6 md:py-8">
          {/* Hero Section */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-3">
              Resources
            </h1>
            <p className="text-foreground/60 max-w-2xl leading-relaxed text-base">
              Discover curated content to fuel your design engineering journey
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-4 md:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <nav className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground/[0.04] p-1 border border-foreground/[0.08]">
                {[
                  { id: "videos", label: "Videos", count: "0" },
                  { id: "articles", label: "Articles", count: "0" },
                  { id: "people", label: "People", count: "0" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-foreground/60 hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    {tab.label}
                    <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                      activeTab === tab.id 
                        ? "bg-foreground/10 text-foreground/70" 
                        : "bg-foreground/5 text-foreground/40"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
              
              {/* Optional: Action buttons area like GitHub/Vercel */}
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-foreground/[0.12] bg-background hover:bg-foreground/[0.04] hover:text-foreground h-9 px-3">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                  </svg>
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {resourceCategories.map((category) => (
              <div
                key={category.id}
                className={`${
                  activeTab === category.id ? "block" : "hidden"
                } transition-all duration-300 ease-out`}
              >
                {/* Content Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Empty state card */}
                  <div className="col-span-full">
                    <div className="flex flex-col items-center justify-center py-12 px-6 border-2 border-dashed border-foreground/[0.1] rounded-lg">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/[0.04] mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No {category.name.toLowerCase()} yet
                      </h3>
                      <p className="text-foreground/60 text-sm text-center max-w-sm mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-foreground/40">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>Coming soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
