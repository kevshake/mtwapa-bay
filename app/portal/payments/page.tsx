import type { Metadata } from "next";
import {
  currentLease,
  paymentHistory,
  formatCurrency,
  formatDate,
} from "@/lib/tenant";
import PayRentButton from "@/components/PayRentButton";

export const metadata: Metadata = {
  title: "Rent Payments — Mtwapa Bay Portal",
};

const STATUS_STYLES: Record<string, string> = {
  paid: "bg-[#1A4A5A]/10 text-[#1A4A5A]",
  pending: "bg-[#C4704A]/10 text-[#C4704A]",
  overdue: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<string, string> = {
  paid: "Paid",
  pending: "Due",
  overdue: "Overdue",
};

export default function PaymentsPage() {
  const nextPayment = paymentHistory.find((p) => p.status === "pending");
  const paidTotal = paymentHistory
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="px-6 sm:px-10 py-10 max-w-3xl">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
          Portal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
          Rent Payments
        </h1>
      </div>

      {/* Next payment card */}
      {nextPayment && (
        <div className="bg-[#2C2416] text-[#E8DFD0] p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Payment Due
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-white mb-2">
                {formatCurrency(nextPayment.amount, nextPayment.currency)}
              </p>
              <p className="text-white/50 text-sm">
                {nextPayment.period} · Due {formatDate(nextPayment.dueDate)}
              </p>
            </div>
            <PayRentButton amount={nextPayment.amount} currency={nextPayment.currency} period={nextPayment.period} />
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 mb-1">
                Monthly Rent
              </p>
              <p className="text-white/80 text-sm">
                {formatCurrency(currentLease.monthlyRent, currentLease.currency)}
              </p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 mb-1">
                Total Paid (YTD)
              </p>
              <p className="text-white/80 text-sm">
                {formatCurrency(paidTotal, currentLease.currency)}
              </p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 mb-1">
                Deposit Held
              </p>
              <p className="text-white/80 text-sm">
                {formatCurrency(currentLease.depositPaid, currentLease.currency)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Payment history */}
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-5">
          Payment History
        </p>

        <div className="space-y-px">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-3 text-[9px] tracking-[0.2em] uppercase text-[#8A9BAA]">
            <span>Period</span>
            <span className="hidden sm:block">Reference</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          {paymentHistory.map((payment) => (
            <div
              key={payment.id}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center bg-white/40 px-5 py-4 hover:bg-white/60 transition-colors"
            >
              <div>
                <p className="text-sm text-[#2C2416]">{payment.period}</p>
                <p className="font-[family-name:var(--font-playfair)] text-[#2C2416]/70 text-sm mt-0.5">
                  {formatCurrency(payment.amount, payment.currency)}
                </p>
              </div>
              <p className="hidden sm:block text-[10px] text-[#2C2416]/35 font-mono">
                {payment.reference ?? "—"}
              </p>
              <p className="text-[11px] text-[#2C2416]/50">
                {payment.paidDate ? formatDate(payment.paidDate) : formatDate(payment.dueDate)}
              </p>
              <span
                className={`text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${STATUS_STYLES[payment.status]}`}
              >
                {STATUS_LABELS[payment.status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bank details */}
      <div className="mt-10 p-6 bg-[#E8DFD0]">
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-4">
          Bank Transfer Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            ["Account Name", "Mtwapa Bay Properties Ltd"],
            ["Bank", "Equity Bank Kenya"],
            ["Account No.", "0020168220811"],
            ["Branch", "Nyali Branch, Mombasa"],
            ["Swift Code", "EQBLKENA"],
            ["Reference", "Your Name + Unit"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#2C2416]/40 mb-0.5">
                {label}
              </p>
              <p className="text-[#2C2416]/80 font-mono text-xs">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
