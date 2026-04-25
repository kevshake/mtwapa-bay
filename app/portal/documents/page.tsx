import type { Metadata } from "next";
import { documents, formatDate } from "@/lib/tenant";
import type { TenantDocument } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Documents — Mtwapa Bay Portal",
};

const TYPE_CONFIG: Record<TenantDocument["type"], { label: string; icon: string }> = {
  lease: { label: "Lease", icon: "◻" },
  invoice: { label: "Invoice", icon: "◇" },
  receipt: { label: "Receipt", icon: "◈" },
  notice: { label: "Notice", icon: "◬" },
  report: { label: "Report", icon: "◱" },
  certificate: { label: "Certificate", icon: "◆" },
};

const TYPE_ORDER: TenantDocument["type"][] = [
  "lease", "certificate", "notice", "report", "receipt", "invoice",
];

function groupByType(docs: TenantDocument[]) {
  const groups: Record<string, TenantDocument[]> = {};
  for (const type of TYPE_ORDER) {
    const group = docs.filter((d) => d.type === type);
    if (group.length > 0) groups[type] = group;
  }
  return groups;
}

export default function DocumentsPage() {
  const groups = groupByType(documents);

  return (
    <div className="px-6 sm:px-10 py-10 max-w-3xl">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA] mb-2">
          Portal
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2C2416]">
          Documents
        </h1>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-px bg-[#E8DFD0] mb-10">
        {[
          ["Total Files", String(documents.length)],
          ["Last Updated", "1 Apr 2026"],
          ["Storage", "11.4 MB"],
        ].map(([label, value]) => (
          <div key={label} className="bg-[#F4F0E8] px-5 py-4">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#8A9BAA] mb-1">
              {label}
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-xl text-[#2C2416]">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Grouped documents */}
      <div className="space-y-8">
        {Object.entries(groups).map(([type, docs]) => {
          const config = TYPE_CONFIG[type as TenantDocument["type"]];
          return (
            <div key={type}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#8A9BAA]">{config.icon}</span>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA]">
                  {config.label}
                </p>
              </div>
              <div className="space-y-px">
                {docs.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 bg-white/40 px-5 py-4 hover:bg-white/60 transition-colors group"
                  >
                    <span className="text-[#2C2416]/30 text-lg flex-shrink-0">
                      {config.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#2C2416] truncate">{doc.name}</p>
                      <p className="text-[10px] text-[#2C2416]/40 mt-0.5">
                        {formatDate(doc.date)} · {doc.size}
                      </p>
                    </div>
                    <a
                      href={doc.url}
                      className="flex-shrink-0 text-[9px] tracking-[0.2em] uppercase text-[#1A4A5A] border border-[#1A4A5A]/30 px-3 py-2 opacity-0 group-hover:opacity-100 hover:bg-[#1A4A5A] hover:text-white hover:border-[#1A4A5A] transition-all"
                      aria-label={`Download ${doc.name}`}
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <p className="mt-10 text-[10px] text-[#2C2416]/35 leading-relaxed">
        If you require a document that is not listed here, please contact your Mtwapa Bay advisor at{" "}
        <a href="mailto:hello@mtwapabay.com" className="text-[#1A4A5A] hover:opacity-70 transition-opacity">
          hello@mtwapabay.com
        </a>
        .
      </p>
    </div>
  );
}
