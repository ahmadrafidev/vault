import type { ContentItem } from "./types";

export const toolsData: ContentItem[] = [
  {
    id: "figma",
    title: "Figma",
    description: "The collaborative interface design tool for teams to create, prototype, and handoff designs.",
    link: "https://www.figma.com",
    category: "tools",
    tags: ["design", "prototyping", "collaboration", "ui/ux"],
    type: "resource",
    resourceType: "tool",
  },
  {
    id: "framer",
    title: "Framer",
    description: "Interactive design tool for creating high-fidelity prototypes with advanced animations and interactions.",
    link: "https://www.framer.com",
    category: "tools",
    tags: ["prototyping", "animation", "interactive design", "react"],
    type: "resource",
    resourceType: "tool",
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Frontend cloud platform for static sites and serverless functions with instant deployments.",
    link: "https://vercel.com",
    category: "tools",
    tags: ["deployment", "hosting", "serverless", "cdn"],
    type: "resource",
    resourceType: "tool",
  },
  {
    id: "notion",
    title: "Notion",
    description: "All-in-one workspace for notes, docs, and project management with powerful customization.",
    link: "https://www.notion.so",
    category: "tools",
    tags: ["productivity", "documentation", "project management", "collaboration"],
    type: "resource",
    resourceType: "tool",
  },
];
