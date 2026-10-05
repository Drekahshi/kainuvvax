"use client";

import { useState } from "react";
import { businessModelContent } from "@/content/businessModel";
import { cn } from "@/lib/utils";

export function CommissionExample() {
  const [amount, setAmount] = useState<number>(businessModelContent.commissionExample.grossSaleKSh);
  const [currency, setCurrency] = useState<"KSH" | "USD">("KSH");

  const creatorPercentage = businessModelContent.commissionExample.creatorPercentage;
  const platformPercentage = businessModelContent.commissionExample.commissionPercentage;

  const creatorPayout = Math.round((amount * creatorPercentage) / 100);
  const platformFee = Math.round((amount * platformPercentage) / 100);

  const formatMoney = (val: number) => {
    if (currency === "USD") {
      return "$" + Math.round(val / 130).toLocaleString();
    }
    return "KSh " + val.toLocaleString();
  };

  const presets = [
    { label: "KSh 10,000 (Artwork / Craft)", val: 10000 },
    { label: "KSh 50,000 (Nursery Batch)", val: 50000 },
    { label: "KSh 250,000 (Agroforestry Harvest)", val: 250000 },
    { label: "KSh 1,000,000 (Bulk CFA Pilot)", val: 1000000 },
  ];

  return (
    <div className="rounded-[20px] bg-white border border-[var(--color-green-200)] p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono-data uppercase tracking-wider text-[var(--color-gold-700)]">
            {businessModelContent.commissionExample.title}
          </span>
          <h4 className="font-heading font-medium text-xl text-[var(--color-green-900)] mt-1">
            Dynamic Payout &amp; Commission Simulator
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-[var(--color-green-100)] p-1 rounded-full self-start sm:self-auto border border-[var(--color-green-200)]">
          <button
            type="button"
            onClick={() => setCurrency("KSH")}
            className={cn(
              "px-3 py-1 text-xs font-mono-data rounded-full transition-all cursor-pointer",
              currency === "KSH"
                ? "bg-[var(--color-green-700)] text-white font-medium"
                : "text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)]"
            )}
          >
            KSh
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={cn(
              "px-3 py-1 text-xs font-mono-data rounded-full transition-all cursor-pointer",
              currency === "USD"
                ? "bg-[var(--color-green-700)] text-white font-medium"
                : "text-[var(--color-ink-600)] hover:text-[var(--color-ink-900)]"
            )}
          >
            USD
          </button>
        </div>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presets.map((p) => (
          <button
            key={p.val}
            type="button"
            onClick={() => setAmount(p.val)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-mono-data transition-colors border cursor-pointer",
              amount === p.val
                ? "bg-[var(--color-green-900)] text-[var(--color-lime-500)] border-[var(--color-green-900)]"
                : "bg-[var(--color-green-50)] text-[var(--color-ink-600)] border-[var(--color-green-200)] hover:border-[var(--color-green-700)]"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-medium text-[var(--color-ink-900)] mb-2">
          <span>Gross Transaction Value</span>
          <span className="font-mono-data text-base font-semibold text-[var(--color-green-700)]">
            {formatMoney(amount)}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="1000000"
          step="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2 bg-[var(--color-green-100)] rounded-lg appearance-none cursor-pointer accent-[var(--color-green-700)]"
          aria-label="Gross Transaction Value Slider"
        />
      </div>

      {/* Payout Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl bg-[var(--color-green-50)] border border-[var(--color-green-200)] p-4 border-l-4 border-l-[var(--color-green-700)]">
          <div className="text-xs font-mono-data uppercase tracking-wider text-[var(--color-green-700)] mb-1">
            Creator / CFA Direct Payout ({creatorPercentage}%)
          </div>
          <div className="font-mono-data text-2xl font-bold text-[var(--color-green-900)]">
            {formatMoney(creatorPayout)}
          </div>
          <div className="text-xs text-[var(--color-ink-600)] mt-1">
            Directly routed to the local artisan, grower or CFA custodian.
          </div>
        </div>

        <div className="rounded-xl bg-[var(--color-gold-100)]/40 border border-[var(--color-gold-500)]/30 p-4 border-l-4 border-l-[var(--color-gold-500)]">
          <div className="text-xs font-mono-data uppercase tracking-wider text-[var(--color-gold-700)] mb-1">
            KAI Nuvari Platform Commission ({platformPercentage}%)
          </div>
          <div className="font-mono-data text-2xl font-bold text-[var(--color-green-900)]">
            {formatMoney(platformFee)}
          </div>
          <div className="text-xs text-[var(--color-ink-600)] mt-1">
            Covers tamper-resistant verification &amp; data provenance.
          </div>
        </div>
      </div>

      {/* Visual Split Bar */}
      <div>
        <div className="h-3.5 w-full rounded-full bg-[var(--color-green-100)] flex overflow-hidden mb-2">
          <div
            className="h-full bg-[var(--color-green-700)] transition-all duration-300"
            style={{ width: `${creatorPercentage}%` }}
          />
          <div
            className="h-full bg-[var(--color-gold-500)] transition-all duration-300"
            style={{ width: `${platformPercentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono-data text-[var(--color-ink-600)]">
          <span>{creatorPercentage}% Creator / Producer</span>
          <span>{platformPercentage}% Platform Infrastructure</span>
        </div>
      </div>

      {/* Official Wording Block */}
      <div className="mt-6 pt-4 border-t border-[var(--color-green-200)] text-xs text-[var(--color-ink-600)] font-mono-data">
        {businessModelContent.commissionExample.label}
      </div>
    </div>
  );
}
