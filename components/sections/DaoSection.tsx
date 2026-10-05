import { daoContent } from "@/content/dao";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function DaoSection() {
  return (
    <Section id="dao" tone="sand-200">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.14em] font-mono-data text-[var(--color-gold-700)]">
                {daoContent.eyebrow}
              </span>
              <Tag status={daoContent.tag} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {daoContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {daoContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 3 Governance Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {daoContent.columns.map((col, idx) => (
            <Reveal key={col.title} delay={idx * 0.08}>
              <Card tone="white" className="h-full flex flex-col justify-between">
                <div>
                  <span className="block text-xs font-mono-data uppercase tracking-wider text-[var(--color-gold-700)] mb-3">
                    0{idx + 1} · Tier
                  </span>
                  <h3 className="font-heading font-medium text-xl text-[var(--color-green-900)] mb-3">
                    {col.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-ink-600)] leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Governance Principle Line */}
        <Reveal delay={0.3}>
          <div className="text-center pt-8 border-t border-[var(--color-sand-300)]">
            <blockquote className="font-heading italic text-xl md:text-2xl text-[var(--color-green-800)]">
              &ldquo;{daoContent.principle}&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
