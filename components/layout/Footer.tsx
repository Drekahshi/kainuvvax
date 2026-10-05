import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[var(--color-green-950)] text-[var(--color-sand-100)]/70 py-16 border-t border-[var(--border-inverse)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border-inverse)]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[var(--color-lime-500)] text-[var(--color-green-900)] flex items-center justify-center font-heading font-bold text-base">
                K
              </div>
              <span className="font-heading font-semibold text-xl text-[var(--color-sand-100)] tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-[var(--color-sand-100)]/70 max-w-sm leading-relaxed">
              Sustainable blockchain fintech and real-world asset infrastructure for the green economy.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-mono-data text-[var(--color-lime-500)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-sand-100)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Ecosystem */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-mono-data text-[var(--color-lime-500)] mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-sand-100)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="inline-flex items-center gap-1 text-xs font-mono-data text-[var(--color-gold-500)]">
                  Avalanche C-Chain Connected
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-data text-[var(--color-sand-100)]/50">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-4">
            <span>Trust · Verification · Provenance</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
