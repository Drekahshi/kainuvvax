import { MethodologyContent } from "@/types/content";

export const methodologyContent: MethodologyContent = {
  eyebrow: "03 · Methodology",
  heading: "From a planted tree to a trusted record.",
  lead: "Each tree has a journey. We keep that journey verifiable at every step.",
  roles: [
    {
      step: 1,
      name: "JazaMiti",
      role: "Starting Point",
      description:
        "The starting point. A tree is planted and registered. The tree's identity begins here.",
      inputs: "Species taxonomy, initial GPS coordinates, planting timestamp, seedling nursery ID.",
      outputs: "Registered persistent Tree ID & foundational nursery metadata.",
    },
    {
      step: 2,
      name: "CFA",
      role: "Ground Custodian",
      description:
        "Boots-on-the-ground custodian. Verifies planting and monitors the tree over time.",
      inputs: "Time-stamped photo evidence, growth measurements, survival status records, community observer signatures.",
      outputs: "Signed ground verification evidence logs with GPS polygon verification.",
    },
    {
      step: 3,
      name: "KAI Nuvari",
      role: "Trust & Provenance",
      description:
        "Carries the tree's journey forward: lifecycle, provenance and trust layer.",
      inputs: "Continuous verification inputs, growth milestones, health audits, event history.",
      outputs: "Dynamic on-chain Asset Provenance Record with zero speculative hype.",
    },
    {
      step: 4,
      name: "GTCI",
      role: "Commodity Mapping",
      description:
        "The Green Tree Commodities Initiative maps verified trees to commodities and ecosystem value.",
      inputs: "Tree yield capacity, non-timber forest products (bark, fruits, seeds, honey), fair-trade verification.",
      outputs: "Evidence-based indicative commodity pricing & off-taker market linkage.",
    },
    {
      step: 5,
      name: "Avalanche",
      role: "Integrity Rails",
      description:
        "Integrity and transaction infrastructure underneath the records.",
      inputs: "State transition hashes, settlement rules, governance votes, identity proofs.",
      outputs: "Immutable on-chain verification without high gas costs or environmental overhead.",
    },
  ],
  lifecycleStages: [
    "Seedling",
    "Planted tree",
    "Surviving tree",
    "Productive tree",
    "Verified output",
  ],
  principles: [
    {
      title: "Evidence over time",
      description: "Value is updated when evidence supports it, not just because time has passed.",
    },
    {
      title: "Three kinds of value, kept separate",
      description:
        "Indicative market value, actual market value and any future financial value are never mixed.",
    },
    {
      title: "No premature financial claims",
      description:
        "Verified trees become measurable commodities and records first, not investment products.",
    },
  ],
  pilotNote: {
    title: "Pilot in design.",
    description: "Starting with a CFA nursery and a species such as avocado.",
    tag: "Pilot in design",
  },
};
