import type { Metadata } from "next";
import { maintenanceRequests, formatDate } from "@/lib/tenant";
import MaintenanceForm from "@/components/MaintenanceForm";

export const metadata: Metadata = {
  title: "Maintenance — Mtwapa Bay Portal",
};

const STATUS_CONFIG: Record<string, { label: string; style: string }> = {
  open: { label: "Open", style: "bg-[#C4704A]/10 text-[#C4704A]" },
  in_progress: { label: "In Progress", style: "bg-[#1A4A5A]/10 text-[#1A4A5A]" },
  resolved: { label: "Resolved", style: "bg-[#E8DFD0] text-[#2C2416]/60" },
  closed: { label: "Closed", style: "bg-[#E8DFD0] text-[#2C2416]/40" },
};

const PRIORITY_DOT: Record<string, string> = {
  urgent: "bg-red-500",
  high: "bg-[#C4704A]",
  medium: "bg-[#1A4A5A]",
  low: "bg-[#8A9BAA]",
};

const CATEGORY_LABELS: Record<string, string> = {
  plumbing: "Plumbing",
  electrical: "Electrical",
  hvac: "HVAC",
  structural: "Structural",
  appliances: "Appliances",
  other: "Other",
};

export default function MaintenancePage() {
  const active = maintenanceRequests.filter(
    (r) => r.status === "open" || r.status === "in_progress"
  );
  const history = maintenanceRequests.filter(
    (r) => r.status === "resolved" || r.status === "closed"
  );

  return (
    <div className="px-6 sm:px-10 py-10 max-w-3xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
            Portal
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
            Maintenance
          </h1>
        </div>
      </div>

      {/* Submit form (client component) */}
      <MaintenanceForm />

      {/* Active requests */}
      {active.length > 0 && (
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-4">
            Active Requests
          </p>
          <div className="space-y-px">
            {active.map((request) => {
              const status = STATUS_CONFIG[request.status];
              return (
                <div key={request.id} className="bg-white/40 p-5 sm:p-6">
                  <div className="flex items-start gap-3 justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span
                        className={`mt-1.5 flex-shrink-0 w-2 h-2 rounded-full ${PRIORITY_DOT[request.priority]}`}
                      />
                      <div>
                        <p className="text-sm text-[#2C2416] font-medium">
                          {request.title}
                        </p>
                        <p className="text-[10px] text-[#2C2416]/40 mt-0.5">
                          {CATEGORY_LABELS[request.category]} ·{" "}
                          Submitted {formatDate(request.submittedDate)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${status.style}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2C2416]/55 leading-relaxed ml-5">
                    {request.description}
                  </p>
                  {request.assignedTo && (
                    <p className="text-[10px] text-[#1A4A5A] mt-3 ml-5">
                      Assigned to: {request.assignedTo}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Resolved history */}
      {history.length > 0 && (
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-4">
            Resolved
          </p>
          <div className="space-y-px">
            {history.map((request) => {
              const status = STATUS_CONFIG[request.status];
              return (
                <div key={request.id} className="bg-white/25 px-5 py-4">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span
                        className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${PRIORITY_DOT[request.priority]} opacity-40`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm text-[#2C2416]/70 truncate">
                          {request.title}
                        </p>
                        <p className="text-[10px] text-[#2C2416]/35">
                          {CATEGORY_LABELS[request.category]} ·{" "}
                          {request.resolvedDate
                            ? `Resolved ${formatDate(request.resolvedDate)}`
                            : formatDate(request.submittedDate)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${status.style}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
