import { productsContent } from "@/content/products";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ProductGrid() {
  return (
    <Section id="products" tone="light">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-light">{productsContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-green-900)] leading-tight mb-6">
              {productsContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-ink-600)] leading-relaxed">
              {productsContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {productsContent.items.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08}>
              <Card
                tone={item.status === "later" ? "muted" : "green-50"}
                className="h-full flex flex-col justify-between border-[var(--color-green-200)]"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <h3 className="font-heading font-medium text-2xl text-[var(--color-green-900)]">
                      {item.title}
                    </h3>
                    <Tag status={item.status} />
                  </div>
                  <p className="text-base font-medium text-[var(--color-ink-900)] mb-5">
                    {item.summary}
                  </p>
                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-ink-600)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-700)] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* 5th Muted Card: Sustainable Finance */}
        <Reveal delay={0.3}>
          <div className="rounded-[20px] bg-[var(--color-green-100)]/60 border border-dashed border-[var(--color-green-300)] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-medium text-lg text-[var(--color-green-900)] mb-1">
                {productsContent.mutedCard.title}
              </h4>
              <p className="text-sm text-[var(--color-ink-600)] leading-relaxed max-w-2xl">
                {productsContent.mutedCard.description}
              </p>
            </div>
            <Tag status={productsContent.mutedCard.status} className="shrink-0" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
