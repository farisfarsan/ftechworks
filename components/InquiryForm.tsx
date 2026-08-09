"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { ripple } from "@/lib/ripple";
import { WA_LINK } from "@/components/WhatsAppFloat";
import { FORMSPREE_ENDPOINT } from "@/lib/siteConfig";

type Field = "name" | "email" | "phone" | "service" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

function validateField(field: Field, value: string): string {
  const v = value.trim();
  switch (field) {
    case "name":
      return v ? "" : "Enter your name.";
    case "email":
      if (!v) return "Enter your email.";
      return EMAIL_RE.test(v) ? "" : "Enter a valid email address.";
    case "phone":
      if (!v) return "";
      return PHONE_RE.test(v) ? "" : "Enter a valid phone number.";
    case "service":
      return v ? "" : "Select a service.";
    case "message":
      if (!v) return "Tell us a little about the project.";
      return v.length >= 10 ? "" : "A few more details would help (10+ characters).";
  }
}

export default function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function onBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const field = e.currentTarget.name as Field;
    setErrors((prev) => ({ ...prev, [field]: validateField(field, e.currentTarget.value) }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const values = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      service: String(f.get("service") ?? ""),
      message: String(f.get("message") ?? ""),
    };

    const nextErrors: Errors = {};
    (Object.keys(values) as Field[]).forEach((field) => {
      const err = validateField(field, values[field]);
      if (err) nextErrors[field] = err;
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _gotcha: String(f.get("_gotcha") ?? "") }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="c-form c-form-success" role="status">
        <h3>Message sent.</h3>
        <p>We reply within 12 hours with honest advice and a clear plan.</p>
      </div>
    );
  }

  return (
    <form className="c-form" id="inquiryForm" onSubmit={onSubmit} noValidate>
      <p style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Leave this field blank
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="c-form-row">
        <div className="c-field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            onBlur={onBlur}
          />
          {errors.name && (
            <span className="c-field-err" id="cf-name-err" role="alert">
              {errors.name}
            </span>
          )}
        </div>
        <div className="c-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            onBlur={onBlur}
          />
          {errors.email && (
            <span className="c-field-err" id="cf-email-err" role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>
      <div className="c-form-row">
        <div className="c-field">
          <label htmlFor="cf-phone">Phone (optional)</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+1 234 567 8900"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
            onBlur={onBlur}
          />
          {errors.phone && (
            <span className="c-field-err" id="cf-phone-err" role="alert">
              {errors.phone}
            </span>
          )}
        </div>
        <div className="c-field">
          <label htmlFor="cf-service">Service</label>
          <select
            id="cf-service"
            name="service"
            defaultValue=""
            required
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "cf-service-err" : undefined}
            onBlur={onBlur}
          >
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
          {errors.service && (
            <span className="c-field-err" id="cf-service-err" role="alert">
              {errors.service}
            </span>
          )}
        </div>
      </div>
      <div className="c-field">
        <label htmlFor="cf-message">Tell us about your project</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="What are you trying to build?"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          onBlur={onBlur}
        />
        {errors.message && (
          <span className="c-field-err" id="cf-message-err" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="c-form-submit"
        onClick={ripple}
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"} <span>→</span>
      </button>
      {status === "error" && (
        <p className="c-form-err-note" role="alert">
          Something went wrong sending that. Try again, or{" "}
          <a href={WA_LINK} target="_blank" rel="noopener">
            message us on WhatsApp
          </a>{" "}
          instead.
        </p>
      )}
      <p className="c-form-note">We reply within 12 hours.</p>
    </form>
  );
}
