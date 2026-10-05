import { technologyContent } from "@/content/technology";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function TechnologySection() {
  return (
    <Section id="technology" tone="light">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-light">{technologyContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {technologyContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {technologyContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 4 Technology Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologyContent.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.07}>
              <Card tone="white" className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-medium text-xl text-[var(--color-green-900)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-ink-600)] leading-relaxed">
                    {item.description}
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
