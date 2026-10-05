import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { daoContent } from "@/content/dao";

export default function DaoPage() {
  return (
    <div className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Eyebrow tone="on-light">{daoContent.eyebrow}</Eyebrow>
            <Tag status={daoContent.tag} />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-green-900)]">
            {daoContent.heading}
          </h1>
          <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
            {daoContent.lead}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {daoContent.columns.map((col, idx) => (
              <div
                key={col.title}
                className="p-6 rounded-2xl bg-white border border-[var(--color-sand-300)] space-y-3"
              >
                <span className="text-xs font-mono-data uppercase text-[var(--color-gold-700)]">
                  0{idx + 1} · Tier
                </span>
                <h3 className="font-heading font-medium text-lg text-[var(--color-green-900)]">
                  {col.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-600)]">
                  {col.description}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="pt-8 border-t border-[var(--color-sand-300)] font-heading italic text-xl text-[var(--color-green-800)] text-center">
            &ldquo;{daoContent.principle}&rdquo;
          </blockquote>

          <div className="pt-6 text-center">
            <Button href="/" variant="secondary" tone="on-light">
              ← Return to Main Page
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
