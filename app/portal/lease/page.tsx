import Image from "next/image";
import type { Metadata } from "next";
import { currentLease, formatCurrency, formatDate } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "My Lease — Mtwapa Bay Portal",
};

function InfoRow({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-4 border-b border-[#E8DFD0] last:border-0">
      <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA] sm:w-44 flex-shrink-0">
        {label}
      </p>
      {children ?? <p className="text-sm text-[#2C2416]">{value}</p>}
    </div>
  );
}

export default function LeasePage() {
  const leaseEnd = new Date(currentLease.endDate);
  const leaseStart = new Date(currentLease.startDate);
  const totalMonths =
    (leaseEnd.getFullYear() - leaseStart.getFullYear()) * 12 +
    (leaseEnd.getMonth() - leaseStart.getMonth());
  const totalValue = currentLease.monthlyRent * totalMonths;

  const today = new Date();
  const elapsed =
    (today.getTime() - leaseStart.getTime()) /
    (leaseEnd.getTime() - leaseStart.getTime());
  const progressPct = Math.min(100, Math.round(elapsed * 100));

  return (
    <div className="px-6 sm:px-10 py-10 max-w-3xl">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
          Portal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
          My Lease
        </h1>
      </div>

      {/* Property image */}
      <div className="relative w-full h-52 overflow-hidden mb-8 bg-[#E8DFD0]">
        <Image
          src={currentLease.propertyImage}
          alt={currentLease.propertyName}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 700px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-0.5">
            {currentLease.propertyName}
          </p>
          <p className="text-white/60 text-sm">{currentLease.propertyAddress}</p>
        </div>
      </div>

      {/* Lease progress */}
      <div className="bg-[#E8DFD0] p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA]">
            Lease Progress
          </p>
          <p className="text-[10px] text-[#2C2416]/60">{progressPct}% complete</p>
        </div>
        <div className="w-full h-1 bg-[#2C2416]/10 mb-4">
          <div
            className="h-full bg-[#1A4A5A]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-[#2C2416]/45">
          <span>{formatDate(currentLease.startDate)}</span>
          <span>{formatDate(currentLease.endDate)}</span>
        </div>
      </div>

      {/* Lease details */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-4">
          Lease Details
        </p>
        <div className="bg-white/40">
          <InfoRow label="Tenant" value={currentLease.tenantName} />
          <InfoRow label="Property" value={currentLease.propertyName} />
          <InfoRow label="Unit" value={currentLease.unit} />
          <InfoRow label="Address" value={currentLease.propertyAddress} />
          <InfoRow label="Commencement" value={formatDate(currentLease.startDate)} />
          <InfoRow label="Expiry" value={formatDate(currentLease.endDate)} />
          <InfoRow label="Term" value={`${totalMonths} months`} />
          <InfoRow label="Status">
            <span className="inline-block text-[9px] tracking-[0.2em] uppercase bg-[#1A4A5A]/10 text-[#1A4A5A] px-2.5 py-1">
              {currentLease.status === "active" ? "Active" : "Expiring Soon"}
            </span>
          </InfoRow>
        </div>
      </div>

      {/* Financial summary */}
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-4">
          Financial Summary
        </p>
        <div className="grid grid-cols-2 gap-px bg-[#E8DFD0]">
          {[
            ["Monthly Rent", formatCurrency(currentLease.monthlyRent, currentLease.currency)],
            ["Security Deposit", formatCurrency(currentLease.depositPaid, currentLease.currency)],
            ["Total Contract Value", formatCurrency(totalValue, currentLease.currency)],
            ["Currency", currentLease.currency],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#F4F0E8] p-5">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#8A9BAA] mb-2">
                {label}
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-lg text-[#2C2416]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Landlord contact */}
      <div className="bg-[#2C2416] text-[#E8DFD0] p-6">
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-4">
          Your Landlord
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-xl text-white mb-1">
          {currentLease.landlord}
        </p>
        <a
          href={`mailto:${currentLease.landlordContact}`}
          className="text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          {currentLease.landlordContact}
        </a>
        <p className="mt-4 text-[10px] text-white/30 leading-relaxed">
          For lease amendments, renewal discussions, or any tenancy matters, please contact your advisor directly.
        </p>
      </div>
    </div>
  );
}
