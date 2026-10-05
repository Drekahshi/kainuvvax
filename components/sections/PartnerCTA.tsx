"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const partnerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["cfa", "producer", "partner", "other"], {
    errorMap: () => ({ message: "Please select your role" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected"),
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

export function PartnerCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      role: undefined,
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: PartnerFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setServerError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <Section id="partner" tone="forest-gradient">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="on-dark">Get Involved</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--color-sand-100)] leading-tight mb-6">
                Build the trusted green economy with us.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-[var(--color-sand-100)]/85 leading-relaxed mb-8">
                Conservation groups, producers, creators and ecosystem partners are invited to get involved and shape this infrastructure together.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="rounded-[20px] bg-[var(--color-green-950)]/60 border border-[var(--border-inverse)] p-6 space-y-3">
                <span className="text-xs uppercase tracking-wider font-mono-data text-[var(--color-lime-500)] block">
                  Who can partner
                </span>
                <ul className="space-y-2 text-sm text-[var(--color-sand-100)]/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime-500)]" />
                    <span>Community Forest Associations (CFAs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime-500)]" />
                    <span>Tree growers, nurseries &amp; agroforestry farmers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime-500)]" />
                    <span>Artisans &amp; local creative producers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime-500)]" />
                    <span>Ecosystem, technology &amp; research partners</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-[24px] bg-white text-[var(--color-ink-900)] p-8 md:p-10 shadow-2xl border border-[var(--color-green-200)]">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-green-100)] text-[var(--color-green-700)] flex items-center justify-center mx-auto border border-[var(--color-green-200)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-medium text-2xl text-[var(--color-green-900)]">
                      Message Received!
                    </h3>
                    <p className="text-sm md:text-base text-[var(--color-ink-600)] max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your details and get in touch within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 inline-flex text-xs font-mono-data uppercase tracking-wider text-[var(--color-green-700)] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Honeypot field (hidden from users) */}
                    <input
                      type="text"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="pName"
                        className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-green-900)] mb-1.5 font-medium"
                      >
                        Full Name *
                      </label>
                      <input
                        id="pName"
                        type="text"
                        placeholder="Your name"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-green-200)] bg-[var(--color-green-50)] text-sm text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] transition-all focus:bg-white"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-[var(--color-danger)] mt-1 font-mono-data">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="pOrg"
                        className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-green-900)] mb-1.5 font-medium"
                      >
                        Organization
                      </label>
                      <input
                        id="pOrg"
                        type="text"
                        placeholder="e.g. Kakamega Forest CFA / Green Farm"
                        {...register("organization")}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-green-200)] bg-[var(--color-green-50)] text-sm text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] transition-all focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="pEmail"
                        className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-green-900)] mb-1.5 font-medium"
                      >
                        Email Address *
                      </label>
                      <input
                        id="pEmail"
                        type="email"
                        placeholder="you@organization.com"
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-green-200)] bg-[var(--color-green-50)] text-sm text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] transition-all focus:bg-white"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-[var(--color-danger)] mt-1 font-mono-data">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Role Select */}
                    <div>
                      <label
                        htmlFor="pRole"
                        className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-green-900)] mb-1.5 font-medium"
                      >
                        I am a… *
                      </label>
                      <select
                        id="pRole"
                        {...register("role")}
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-green-200)] bg-[var(--color-green-50)] text-sm text-[var(--color-ink-900)] transition-all cursor-pointer focus:bg-white"
                        aria-invalid={!!errors.role}
                        aria-describedby={errors.role ? "role-error" : undefined}
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        <option value="cfa">Community Forest Association (CFA) / CBO</option>
                        <option value="producer">Producer, tree grower or creator</option>
                        <option value="partner">Partner or investor</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.role && (
                        <p id="role-error" className="text-xs text-[var(--color-danger)] mt-1 font-mono-data">
                          {errors.role.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="pMsg"
                        className="block text-xs uppercase tracking-wider font-mono-data text-[var(--color-green-900)] mb-1.5 font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="pMsg"
                        rows={4}
                        placeholder="Tell us about your organization or how you would like to collaborate..."
                        {...register("message")}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-green-200)] bg-[var(--color-green-50)] text-sm text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] transition-all resize-none focus:bg-white"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "msg-error" : undefined}
                      />
                      {errors.message && (
                        <p id="msg-error" className="text-xs text-[var(--color-danger)] mt-1 font-mono-data">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {serverError && (
                      <div className="p-3 rounded-xl bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/20 text-xs font-mono-data text-[var(--color-danger)]">
                        {serverError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      variant="primary"
                      tone="on-light"
                      className="w-full cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending securely...</span>
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
