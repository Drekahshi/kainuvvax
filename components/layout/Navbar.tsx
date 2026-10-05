"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sectionIds = ["problem", "solution", "methodology", "products", "business-model", "dao", "partner"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 h-16 md:h-[72px] flex items-center border-b",
          isScrolled
            ? "bg-[var(--color-sand-100)]/95 backdrop-blur-md border-[var(--color-sand-300)] shadow-sm"
            : "bg-[var(--color-sand-100)]/85 backdrop-blur-sm border-[var(--color-sand-300)]/40"
        )}
      >
        <div className="mx-auto max-w-[1200px] w-full px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="KAI Nuvari Home"
          >
            <div className="w-9 h-9 rounded-full bg-[var(--color-green-700)] text-[var(--color-sand-100)] flex items-center justify-center font-heading font-semibold text-lg group-hover:bg-[var(--color-green-800)] transition-colors">
              K
            </div>
            <span className="font-heading font-semibold text-xl tracking-tight text-[var(--color-green-900)]">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {siteConfig.navLinks.slice(0, 6).map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--color-green-700)] relative py-1",
                    isActive
                      ? "text-[var(--color-green-700)] font-semibold"
                      : "text-[var(--color-ink-600)]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-green-700)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Partner CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Button href="#partner" size="sm" variant="primary" tone="on-light">
              Partner With Us
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg text-[var(--color-green-900)] hover:bg-[var(--color-sand-200)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open Mobile Menu"
            aria-expanded={isMobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer (Full-Height Sheet from Right) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden flex justify-end animate-in fade-in duration-200"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="w-[85vw] max-w-sm h-full bg-[var(--color-sand-100)] border-l border-[var(--color-sand-300)] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--color-sand-300)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-green-700)] text-[var(--color-sand-100)] flex items-center justify-center font-heading font-semibold text-base">
                    K
                  </div>
                  <span className="font-heading font-semibold text-lg text-[var(--color-green-900)]">
                    {siteConfig.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)] min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-6">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-[var(--color-ink-900)] hover:bg-[var(--color-sand-200)] min-h-[48px] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[var(--color-sand-300)]">
              <Button
                href="#partner"
                className="w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
