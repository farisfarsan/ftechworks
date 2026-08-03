"use client";

import { useRef } from "react";
import { ripple } from "@/lib/ripple";

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Hi Team Ftechworks! I'd like to discuss a project.",
      "",
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "—"}`,
      `Service: ${f.get("service")}`,
      `Budget: ${f.get("budget")}`,
      "",
      "Project details:",
      String(f.get("message") ?? ""),
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/919061894005?text=${msg}`, "_blank");
  }

  return (
    <form className="c-form" id="inquiryForm" ref={formRef} onSubmit={onSubmit}>
      <div className="c-form-row">
        <div className="c-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="c-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div className="c-form-row">
        <div className="c-field">
          <label htmlFor="cf-phone">Phone (optional)</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
        </div>
        <div className="c-field">
          <label htmlFor="cf-service">Service</label>
          <select id="cf-service" name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Web App Development</option>
            <option>Mobile App Development</option>
            <option>Website Design &amp; Build</option>
            <option>AI Chatbot Integration</option>
            <option>AI Document Processing</option>
            <option>AI-Powered Features</option>
            <option>MVP Build (End-to-End)</option>
            <option>Branding &amp; Logo Design</option>
            <option>Video Editing</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="c-field">
        <label htmlFor="cf-budget">Expected budget</label>
        <select id="cf-budget" name="budget" defaultValue="" required>
          <option value="" disabled>
            Select a range
          </option>
          <option>Under $1,000</option>
          <option>$1,000 – $5,000</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="c-field">
        <label htmlFor="cf-message">Tell us about your project</label>
        <textarea id="cf-message" name="message" placeholder="What are you trying to build?" required />
      </div>
      <button type="submit" className="c-form-submit" onClick={ripple}>
        Send Inquiry via WhatsApp <span>→</span>
      </button>
    </form>
  );
}
