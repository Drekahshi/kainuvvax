export type StatusTag = "building" | "pilot" | "later" | "future";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  navLinks: NavLink[];
  footerLinks: FooterLink[];
  copyright: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineMain: string;
  headlineAccent: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  nodes: {
    number: string;
    title: string;
    description: string;
  }[];
}

export interface ProblemCard {
  number: string;
  title: string;
  description: string;
}

export interface ProblemContent {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: ProblemCard[];
  closing: string;
}

export interface SolutionCard {
  number: string;
  title: string;
  description: string;
}

export interface SolutionContent {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: SolutionCard[];
}

export interface MethodologyRole {
  step: number;
  name: string;
  role: string;
  description: string;
  inputs?: string;
  outputs?: string;
}

export interface MethodologyContent {
  eyebrow: string;
  heading: string;
  lead: string;
  roles: MethodologyRole[];
  lifecycleStages: string[];
  principles: {
    title: string;
    description: string;
  }[];
  pilotNote: {
    title: string;
    description: string;
    tag: string;
  };
}

export interface ProductItem {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  status: StatusTag;
}

export interface ProductsContent {
  eyebrow: string;
  heading: string;
  lead: string;
  items: ProductItem[];
  mutedCard: {
    title: string;
    description: string;
    status: StatusTag;
  };
}

export interface RevenueStream {
  title: string;
  description: string;
  status?: StatusTag;
}

export interface BusinessModelContent {
  eyebrow: string;
  heading: string;
  lead: string;
  streams: RevenueStream[];
  commissionExample: {
    title: string;
    grossSaleKSh: number;
    creatorPayoutKSh: number;
    commissionKSh: number;
    creatorPercentage: number;
    commissionPercentage: number;
    label: string;
  };
  disclaimer: string;
}

export interface DaoContent {
  eyebrow: string;
  tag: StatusTag;
  heading: string;
  lead: string;
  columns: {
    title: string;
    description: string;
  }[];
  principle: string;
}

export interface TechItem {
  title: string;
  description: string;
}

export interface TechnologyContent {
  eyebrow: string;
  heading: string;
  lead: string;
  items: TechItem[];
}
