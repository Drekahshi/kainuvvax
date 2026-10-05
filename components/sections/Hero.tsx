import { heroContent } from "@/content/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProvenanceLine } from "@/components/graphics/ProvenanceLine";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-green-900)] text-[var(--color-sand-100)] pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-[var(--border-inverse)]">
      {/* Background Subtle Gradient & Provenance Line */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#174026_0%,#0C2818_70%)] opacity-80" />
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-30">
        <ProvenanceLine variant="hero" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="on-dark">{heroContent.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-[var(--color-sand-100)] mb-6">
              {heroContent.headlineMain}{" "}
              <em className="italic text-[var(--color-lime-500)] font-normal">
                {heroContent.headlineAccent}
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[var(--color-sand-100)]/85 max-w-2xl leading-relaxed mb-8">
              {heroContent.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Button
                href={heroContent.ctaPrimary.href}
                size="lg"
                variant="primary"
                tone="on-dark"
              >
                {heroContent.ctaPrimary.label}
              </Button>
              <Button
                href={heroContent.ctaSecondary.href}
                size="lg"
                variant="secondary"
                tone="on-dark"
              >
                {heroContent.ctaSecondary.label}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 4-Node Data Flow Visualization */}
        <Reveal delay={0.4}>
          <div className="pt-8 border-t border-[var(--border-inverse)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {heroContent.nodes.map((node) => (
                <div
                  key={node.number}
                  className="rounded-2xl bg-[var(--color-green-950)]/70 border border-[var(--border-inverse)] p-6 backdrop-blur-sm hover:border-[var(--color-lime-500)]/40 transition-colors"
                >
                  <span className="block text-xs font-mono-data uppercase tracking-wider text-[var(--color-gold-500)] mb-2">
                    {node.number}
                  </span>
                  <h3 className="font-heading font-medium text-lg text-[var(--color-sand-100)] mb-2">
                    {node.title}
                  </h3>
                  <p className="text-sm text-[var(--color-sand-100)]/75 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
