"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/tenant";

interface Props {
  amount: number;
  currency: string;
  period: string;
}

export default function PayRentButton({ amount, currency, period }: Props) {
  const [state, setState] = useState<"idle" | "confirm" | "processing" | "done">("idle");

  if (state === "done") {
    return (
      <div className="text-center sm:text-right">
        <div className="inline-block border border-white/20 px-8 py-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-1">
            Payment Submitted
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-lg text-white">
            Thank you
          </p>
        </div>
      </div>
    );
  }

  if (state === "confirm") {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">
          Confirm payment of {formatCurrency(amount, currency)} for {period}?
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setState("processing");
              setTimeout(() => setState("done"), 1800);
            }}
            className="flex-1 bg-white text-[#2C2416] text-[10px] tracking-[0.25em] uppercase px-6 py-3.5 hover:bg-[#F4F0E8] transition-colors"
          >
            Confirm Payment
          </button>
          <button
            onClick={() => setState("idle")}
            className="px-5 py-3.5 border border-white/30 text-white/60 text-[10px] tracking-[0.25em] uppercase hover:border-white/50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      disabled={state === "processing"}
      onClick={() => setState("confirm")}
      className="bg-white text-[#2C2416] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#F4F0E8] transition-colors disabled:opacity-50 whitespace-nowrap"
    >
      {state === "processing" ? "Processing…" : "Pay Now"}
    </button>
  );
}
