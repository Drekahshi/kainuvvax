import { BusinessModelContent } from "@/types/content";

export const businessModelContent: BusinessModelContent = {
  eyebrow: "05 · Business Model",
  heading: "How KAI Nuvari makes money.",
  lead:
    "A sustainable, transparent business model rooted in software access, verified services and ecosystem enablement.",
  streams: [
    {
      title: "Subscriptions",
      description:
        "Organizations, CFAs and enterprises pay for platform access and advanced management features.",
    },
    {
      title: "Marketplace commissions",
      description:
        "A disclosed commission on successful sales. Rates are configured transparently per product category.",
    },
    {
      title: "Verification services",
      description:
        "Fees for ground verification, provenance certification and data processing.",
    },
    {
      title: "Infrastructure services",
      description:
        "Enterprise data access, sustainability analytics and API integrations.",
    },
    {
      title: "Future regulated services",
      description:
        "Offered only through proper licensing or established institutional partnerships.",
      status: "later",
    },
  ],
  commissionExample: {
    title: "Commission Illustration",
    grossSaleKSh: 10000,
    creatorPayoutKSh: 9000,
    commissionKSh: 1000,
    creatorPercentage: 90,
    commissionPercentage: 10,
    label: "Artwork sale: KSh 10,000 → Creator receives KSh 9,000 | KAI Nuvari commission KSh 1,000",
  },
  disclaimer: "*Payments are handled through licensed payment providers, not by KAI Nuvari directly.",
};
