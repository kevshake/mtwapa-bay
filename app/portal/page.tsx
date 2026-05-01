import Image from "next/image";
import Link from "next/link";
import {
  currentLease,
  paymentHistory,
  maintenanceRequests,
  documents,
  formatCurrency,
  formatDate,
} from "@/lib/tenant";

export default function PortalDashboard() {
  const nextPayment = paymentHistory.find((p) => p.status === "pending");
  const openRequests = maintenanceRequests.filter(
    (r) => r.status === "open" || r.status === "in_progress"
  );
  const leaseEnd = new Date(currentLease.endDate);
  const today = new Date();
  const daysToExpiry = Math.ceil(
    (leaseEnd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="px-6 sm:px-10 py-10 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
          Welcome Back
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
          Good morning, James
        </h1>
          <p className="text-[#2C2416]/50 text-sm mt-1">
            {today.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
      </div>

      {/* Property hero card */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden mb-8 bg-[#E8DFD0]">
        <Image
          src={currentLease.propertyImage}
          alt={currentLease.propertyName}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2416]/70 via-[#2C2416]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
            Your Residence
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-white mb-0.5">
            {currentLease.propertyName}
          </h2>
          <p className="text-white/60 text-sm">{currentLease.unit}</p>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/15 backdrop-blur-sm text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1.5">
            {currentLease.status === "active" ? "Active Lease" : "Expiring Soon"}
          </span>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8DFD0] mb-8">
        {/* Next payment */}
        <div className="bg-[#F4F0E8] p-6">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA] mb-3">
            Next Payment
          </p>
          {nextPayment ? (
            <>
              <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-1">
                {formatCurrency(nextPayment.amount, nextPayment.currency)}
              </p>
              <p className="text-[10px] text-[#2C2416]/45">
                Due {formatDate(nextPayment.dueDate)}
              </p>
              <span className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase bg-[#C4704A] text-white px-2.5 py-1">
                Due
              </span>
            </>
          ) : (
            <p className="text-sm text-[#2C2416]/50">All paid</p>
          )}
        </div>

        {/* Lease expiry */}
        <div className="bg-[#F4F0E8] p-6">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA] mb-3">
            Lease Expiry
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-1">
            {daysToExpiry}d
          </p>
          <p className="text-[10px] text-[#2C2416]/45">
            {formatDate(currentLease.endDate)}
          </p>
          <span className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase bg-[#1A4A5A] text-white px-2.5 py-1">
            Active
          </span>
        </div>

        {/* Open requests */}
        <div className="bg-[#F4F0E8] p-6">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA] mb-3">
            Open Requests
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-1">
            {openRequests.length}
          </p>
          <p className="text-[10px] text-[#2C2416]/45">Maintenance tickets</p>
          {openRequests.length > 0 && (
            <span className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase bg-[#E8DFD0] text-[#2C2416] px-2.5 py-1">
              In Progress
            </span>
          )}
        </div>

        {/* Documents */}
        <div className="bg-[#F4F0E8] p-6">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#8A9BAA] mb-3">
            Documents
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-1">
            {documents.length}
          </p>
          <p className="text-[10px] text-[#2C2416]/45">Files available</p>
          <span className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase bg-[#E8DFD0] text-[#2C2416] px-2.5 py-1">
            Up to date
          </span>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Link
          href="/portal/payments"
          className="group flex items-center gap-4 bg-[#2C2416] text-[#E8DFD0] p-6 hover:bg-[#1A4A5A] transition-colors duration-300"
        >
          <span className="text-2xl">◇</span>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#E8DFD0]/50 mb-0.5">
              Action
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-lg">
              Pay Rent
            </p>
          </div>
          <span className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity">→</span>
        </Link>

        <Link
          href="/portal/maintenance"
          className="group flex items-center gap-4 bg-[#E8DFD0] text-[#2C2416] p-6 hover:bg-[#2C2416] hover:text-[#E8DFD0] transition-colors duration-300"
        >
          <span className="text-2xl">◬</span>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2416]/40 group-hover:text-[#E8DFD0]/50 mb-0.5 transition-colors">
              Report
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-lg">
              Maintenance Issue
            </p>
          </div>
          <span className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity">→</span>
        </Link>

        <Link
          href="/portal/documents"
          className="group flex items-center gap-4 bg-[#E8DFD0] text-[#2C2416] p-6 hover:bg-[#2C2416] hover:text-[#E8DFD0] transition-colors duration-300"
        >
          <span className="text-2xl">◱</span>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2416]/40 group-hover:text-[#E8DFD0]/50 mb-0.5 transition-colors">
              Access
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-lg">
              Documents
            </p>
          </div>
          <span className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity">→</span>
        </Link>
      </div>

      {/* Recent activity */}
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-5">
          Recent Activity
        </p>
        <div className="space-y-px">
          {paymentHistory
            .filter((p) => p.status === "paid")
            .slice(0, 2)
            .map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between bg-white/40 px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#1A4A5A] text-lg">◇</span>
                  <div>
                    <p className="text-sm text-[#2C2416]">
                      Rent paid — {p.period}
                    </p>
                    <p className="text-[10px] text-[#2C2416]/40">
                      {p.paidDate ? formatDate(p.paidDate) : ""}
                    </p>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-[#2C2416]">
                  {formatCurrency(p.amount, p.currency)}
                </p>
              </div>
            ))}

          {maintenanceRequests.slice(0, 2).map((r) => (
            <div
              key={r.id}
              className="flex items-center justify-between bg-white/40 px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#C4704A] text-lg">◬</span>
                <div>
                  <p className="text-sm text-[#2C2416]">{r.title}</p>
                  <p className="text-[10px] text-[#2C2416]/40">
                    {formatDate(r.submittedDate)}
                  </p>
                </div>
              </div>
              <span
                className={`text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 ${
                  r.status === "in_progress"
                    ? "bg-[#E8DFD0] text-[#2C2416]"
                    : "bg-[#F4F0E8] text-[#2C2416]/50"
                }`}
              >
                {r.status === "in_progress" ? "In Progress" : "Resolved"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
