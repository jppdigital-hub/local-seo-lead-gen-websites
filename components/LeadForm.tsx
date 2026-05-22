"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const payload = {
        ...form,
        source: typeof window !== "undefined" ? window.location.href : "",
        timestamp: new Date().toISOString(),
        market: `${siteConfig.niche} - ${siteConfig.city}, ${siteConfig.state}`,
      };

      if (siteConfig.leadWebhookUrl) {
        await fetch(siteConfig.leadWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Request received!</h3>
        <p className="text-green-700 leading-relaxed">
          A local junk removal pro serving {siteConfig.city} will contact you directly with a free quote.
        </p>
        <p className="text-green-600 text-sm mt-3">
          No obligation until you agree to a price.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(423) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="service">
          What do you need removed?
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
        >
          <option value="">— Select a service —</option>
          {siteConfig.services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other / Multiple Items">Other / Multiple Items</option>
        </select>
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Describe what you need hauled (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="e.g. Old couch and mattress in the garage, needs same-day pickup"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />
        </div>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please email us at {siteConfig.contactEmail}.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-4 rounded-full text-lg transition-colors"
      >
        {status === "sending" ? "Sending…" : "Get My Free Quote →"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        No obligation. Free referral service.
      </p>
    </form>
  );
}
