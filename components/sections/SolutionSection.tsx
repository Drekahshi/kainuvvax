import { solutionContent } from "@/content/solution";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function SolutionSection() {
  return (
    <Section id="solution" tone="sand-200">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-light">{solutionContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {solutionContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {solutionContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 5 Solution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionContent.cards.map((card, idx) => (
            <Reveal key={card.number} delay={idx * 0.07}>
              <Card tone="white" className="h-full flex flex-col justify-between">
                <div>
                  <span className="block text-xs font-mono-data uppercase tracking-wider text-[var(--color-gold-700)] mb-3">
                    Card {card.number}
                  </span>
                  <h3 className="font-heading font-medium text-xl text-[var(--color-green-900)] mb-2">
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
      </Container>
    </Section>
  );
}
