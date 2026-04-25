"use client";

import { useState } from "react";

const CATEGORIES = [
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "hvac", label: "HVAC / Air Conditioning" },
  { value: "structural", label: "Structural" },
  { value: "appliances", label: "Appliances" },
  { value: "other", label: "Other" },
];

const PRIORITIES = [
  { value: "low", label: "Low — Non-urgent" },
  { value: "medium", label: "Medium — Needs attention" },
  { value: "high", label: "High — Significant impact" },
  { value: "urgent", label: "Urgent — Immediate attention needed" },
];

export default function MaintenanceForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "medium",
    description: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setForm({ title: "", category: "", priority: "medium", description: "" });
    }, 2500);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-[#2C2416] text-[#F4F0E8] text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#1A4A5A] transition-colors"
      >
        Submit New Request
      </button>
    );
  }

  return (
    <div className="bg-white/40 p-6 sm:p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A9BAA]">
          New Maintenance Request
        </p>
        <button
          onClick={() => setOpen(false)}
          className="text-[#2C2416]/40 hover:text-[#2C2416] transition-colors text-lg"
        >
          ✕
        </button>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#2C2416] mb-2">
            Request Submitted
          </p>
          <p className="text-sm text-[#2C2416]/50">
            Our maintenance team will be in touch within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2416]/40 mb-2">
              Issue Title
            </label>
            <input
              required
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-transparent border border-[#E8DFD0] px-4 py-3.5 text-sm text-[#2C2416] placeholder:text-[#2C2416]/25 focus:outline-none focus:border-[#1A4A5A] transition-colors"
              placeholder="Brief description of the issue"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2416]/40 mb-2">
                Category
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-[#F4F0E8] border border-[#E8DFD0] px-4 py-3.5 text-sm text-[#2C2416] focus:outline-none focus:border-[#1A4A5A] transition-colors appearance-none"
              >
                <option value="" disabled>
                  Select category
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2416]/40 mb-2">
                Priority
              </label>
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
                className="w-full bg-[#F4F0E8] border border-[#E8DFD0] px-4 py-3.5 text-sm text-[#2C2416] focus:outline-none focus:border-[#1A4A5A] transition-colors appearance-none"
              >
                {PRIORITIES.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2416]/40 mb-2">
              Description
            </label>
            <textarea
              required
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full bg-transparent border border-[#E8DFD0] px-4 py-3.5 text-sm text-[#2C2416] placeholder:text-[#2C2416]/25 focus:outline-none focus:border-[#1A4A5A] transition-colors resize-none"
              placeholder="Please describe the issue in detail, including when it started and any relevant context…"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#2C2416] text-[#F4F0E8] text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#1A4A5A] transition-colors"
            >
              Submit Request
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[10px] tracking-[0.25em] uppercase text-[#2C2416]/40 px-4 py-4 hover:text-[#2C2416] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
