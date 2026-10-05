import { businessModelContent } from "@/content/businessModel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CommissionExample } from "@/components/sections/CommissionExample";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessModel() {
  return (
    <Section id="business-model" tone="green-50">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-light">{businessModelContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {businessModelContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {businessModelContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 5 Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {businessModelContent.streams.map((stream, idx) => (
            <Reveal key={stream.title} delay={idx * 0.06}>
              <Card tone="white" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-heading font-medium text-xl text-[var(--color-green-900)]">
                      {stream.title}
                    </h3>
                    {stream.status && <Tag status={stream.status} className="shrink-0" />}
                  </div>
                  <p className="text-sm md:text-base text-[var(--color-ink-600)] leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Visual Commission Example */}
        <Reveal delay={0.3}>
          <div className="mb-6">
            <CommissionExample />
          </div>
        </Reveal>

        {/* Payment Partner Note */}
        <Reveal delay={0.4}>
          <p className="text-xs text-[var(--color-ink-400)] italic text-center">
            {businessModelContent.disclaimer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
