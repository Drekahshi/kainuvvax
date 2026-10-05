import { ProductsContent } from "@/types/content";

export const productsContent: ProductsContent = {
  eyebrow: "04 · Product Ecosystem",
  heading: "Products built for the green economy.",
  lead:
    "Transparent tools designed for community organizations, tree growers, creators and enterprise partners.",
  items: [
    {
      id: "conservation-data",
      title: "Conservation Data & Verification",
      summary: "Structured, verified records of conservation activity.",
      bullets: [
        "Nurseries, inventories and species tracking",
        "Planting records and ongoing survival auditing",
        "Evidence management (geotags, photos, notes)",
      ],
      status: "building",
    },
    {
      id: "jazamiti-records",
      title: "JazaMiti Records",
      summary: "The starting registry for trees.",
      bullets: [
        "Tree identity, location and initial planting registration",
        "Project and site association",
        "CFA ongoing verification and monitoring onward",
      ],
      status: "building",
    },
    {
      id: "gtci",
      title: "Green Tree Commodities Initiative",
      summary: "Connects verified tree-based production to markets.",
      bullets: [
        "Maps fruit, nuts, seeds and non-timber tree products",
        "Evidence-based indicative and actual commodity valuation",
        "Transparent links to buyers and market off-takers",
      ],
      status: "pilot",
    },
    {
      id: "creative-works",
      title: "Creative Works",
      summary: "Marketplace and provenance for local art and crafts.",
      bullets: [
        "Creator attribution and digital provenance certificates",
        "Fair trade verification for local artisans",
        "Authenticity records secured on-chain",
      ],
      status: "later",
    },
  ],
  mutedCard: {
    title: "Sustainable Finance",
    description:
      "Infrastructure connecting verified activity to appropriate financial opportunities, developed through proper licensing. No returns are promised.",
    status: "later",
  },
};
