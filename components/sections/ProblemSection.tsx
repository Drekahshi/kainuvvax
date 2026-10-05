import { problemContent } from "@/content/problem";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemSection() {
  return (
    <Section id="problem" tone="light">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-light">{problemContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {problemContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {problemContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {problemContent.cards.map((card, idx) => (
            <Reveal key={card.number} delay={idx * 0.08}>
              <Card tone="white" className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-green-100)] flex items-center justify-center font-mono-data font-semibold text-sm text-[var(--color-green-800)] mb-5 border border-[var(--color-green-200)]">
                    {card.number}
                  </div>
                  <h3 className="font-heading font-medium text-xl text-[var(--color-green-900)] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-ink-600)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Closing Highlight Box */}
        <Reveal delay={0.3}>
          <div className="rounded-2xl bg-white border border-[var(--color-green-200)] border-l-4 border-l-[var(--color-green-700)] p-6 md:p-8 shadow-sm">
            <p className="text-base md:text-lg font-medium text-[var(--color-green-900)]">
              {problemContent.closing}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
