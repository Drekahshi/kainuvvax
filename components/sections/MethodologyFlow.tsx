"use client";

import { useState } from "react";
import { methodologyContent } from "@/content/methodology";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LifecycleStrip } from "@/components/graphics/LifecycleStrip";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function MethodologyFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const activeRole = methodologyContent.roles.find((r) => r.step === activeStep) || methodologyContent.roles[0];

  const handleKeyDown = (e: React.KeyboardEvent, currentStep: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = currentStep >= 5 ? 1 : currentStep + 1;
      setActiveStep(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = currentStep <= 1 ? 5 : currentStep - 1;
      setActiveStep(prev);
    }
  };

  return (
    <Section id="methodology" tone="dark">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow tone="on-dark">{methodologyContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[clamp(2rem,4vw,3.25rem)] font-medium text-[var(--color-sand-100)] leading-tight mb-6">
              {methodologyContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--color-sand-100)]/85 leading-relaxed">
              {methodologyContent.lead}
            </p>
          </Reveal>
        </div>

        {/* 5-Step Stepper & Nodes */}
        <div className="mb-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            role="tablist"
            aria-label="5-Step Methodology Flow"
          >
            {methodologyContent.roles.map((item) => {
              const isActive = item.step === activeStep;

              return (
                <button
                  key={item.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-current={isActive ? "step" : undefined}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStep(item.step)}
                  onKeyDown={(e) => handleKeyDown(e, item.step)}
                  className={cn(
                    "text-left p-5 rounded-[20px] border transition-all duration-200 cursor-pointer focus:outline-none",
                    isActive
                      ? "bg-[var(--color-green-800)] border-[var(--color-lime-500)] shadow-lg translate-y-[-2px]"
                      : "bg-[var(--color-green-950)]/70 border-[var(--border-inverse)] hover:border-[var(--color-lime-500)]/40 hover:bg-[var(--color-green-950)]"
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-mono-data font-semibold text-xs",
                        isActive
                          ? "bg-[var(--color-lime-500)] text-[var(--color-green-900)]"
                          : "bg-[var(--color-green-900)] text-[var(--color-sand-100)]/80"
                      )}
                    >
                      {item.step}
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[var(--color-lime-500)] animate-pulse" />
                    )}
                  </div>

                  <h3 className="font-heading font-medium text-lg text-[var(--color-sand-100)] mb-1">
                    {item.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-mono-data text-[var(--color-gold-500)] mb-2">
                    {item.role}
                  </div>
                  <p className="text-xs text-[var(--color-sand-100)]/70 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Panel */}
          <div className="mt-6 rounded-[20px] bg-[var(--color-green-950)] border border-[var(--color-lime-500)]/30 p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-inverse)] mb-6">
              <div>
                <span className="text-xs font-mono-data uppercase tracking-wider text-[var(--color-lime-500)]">
                  Step {activeRole.step} Deep-Dive Specification
                </span>
                <h4 className="font-heading font-medium text-2xl text-[var(--color-sand-100)] mt-1">
                  {activeRole.name} — {activeRole.role}
                </h4>
              </div>
              <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono-data uppercase tracking-wider bg-[var(--color-lime-500)]/15 text-[var(--color-lime-500)] border border-[var(--color-lime-500)]/30">
                Active Protocol Layer
              </span>
            </div>

            <p className="text-base text-[var(--color-sand-100)]/90 leading-relaxed mb-6">
              {activeRole.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[var(--color-green-900)]/80 border border-[var(--border-inverse)] p-4">
                <span className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-sand-100)]/50 mb-1">
                  Input Telemetry
                </span>
                <p className="text-sm font-medium text-[var(--color-sand-100)]">
                  {activeRole.inputs}
                </p>
              </div>
              <div className="rounded-xl bg-[var(--color-green-900)]/80 border border-[var(--border-inverse)] p-4">
                <span className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-sand-100)]/50 mb-1">
                  Verified Output
                </span>
                <p className="text-sm font-medium text-[var(--color-sand-100)]">
                  {activeRole.outputs}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifecycle Strip */}
        <div className="mb-12">
          <LifecycleStrip stages={methodologyContent.lifecycleStages} />
        </div>

        {/* 3 Plain-Language Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {methodologyContent.principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[20px] bg-[var(--color-green-950)]/70 border border-[var(--border-inverse)] p-6 md:p-8"
            >
              <h4 className="font-heading font-medium text-lg text-[var(--color-sand-100)] mb-3">
                {principle.title}
              </h4>
              <p className="text-sm text-[var(--color-sand-100)]/75 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pilot Teaser Card */}
        <div className="rounded-[20px] bg-[var(--color-lime-500)]/10 border border-[var(--color-lime-500)]/30 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <strong className="text-base text-[var(--color-sand-100)] font-semibold mr-2">
              {methodologyContent.pilotNote.title}
            </strong>
            <span className="text-sm text-[var(--color-sand-100)]/80">
              {methodologyContent.pilotNote.description}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono-data uppercase tracking-wider bg-[var(--color-lime-500)] text-[var(--color-green-900)] font-semibold shrink-0">
            {methodologyContent.pilotNote.tag}
          </span>
        </div>
      </Container>
    </Section>
  );
}
