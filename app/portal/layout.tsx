import type { Metadata } from "next";
import PortalNav from "@/components/PortalNav";

export const metadata: Metadata = {
  title: "Tenant Portal — Mtwapa Bay",
  description: "Manage your tenancy, rent payments, and maintenance requests.",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F0E8] flex flex-col lg:flex-row">
      <PortalNav />
      <main className="flex-1 min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  );
}
