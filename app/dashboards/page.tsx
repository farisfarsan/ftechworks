import ServicePageLayout from "@/components/ServicePageLayout";
import DashboardDemo from "@/components/demos/DashboardDemo";
import { BASE_FAQS } from "@/lib/content";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Dashboards & Business Software",
  "Custom dashboards, admin panels and internal tools: expiry alerts, billing, school CRM and healthcare booking systems built around how your business works.",
  "/dashboards"
);

export default function DashboardsPage() {
  return (
    <ServicePageLayout
      path="/dashboards"
      eyebrow="Dashboards & Business Software"
      title="Software that runs your day-to-day."
      subtitle="Custom dashboards, admin panels and internal tools: expiry alerts, billing, CRM and booking systems built around how your business actually works."
      intro={[
        "Spreadsheets, reminders and paperwork only scale so far. We build the software that replaces them: one dashboard where your team sees what is due, what is billed, who is booked and what needs attention next.",
        "Each system is designed around your own workflow rather than a generic template, with role-based access for staff and admins, clear reports, and automatic alerts so nothing slips through the cracks.",
      ]}
      services={[
        {
          title: "Expiry & Renewal Alerts",
          desc: "Automatic reminders before licences, subscriptions, contracts and documents lapse, so renewals are handled in time and never missed.",
          tags: ["Reminders", "Scheduling", "Notifications"],
        },
        {
          title: "Billing & Invoicing",
          desc: "Create invoices, track payments and run reports from one place, with recurring billing for clients who pay on a schedule.",
          tags: ["Invoices", "Payments", "Reports"],
        },
        {
          title: "School CRM",
          desc: "Manage admissions, attendance and fees in one system, with simple communication channels between the school and parents.",
          tags: ["Admissions", "Attendance", "Parent communication"],
        },
        {
          title: "Healthcare Booking",
          desc: "Appointment scheduling for clinics and practices, with staff calendars and automatic patient reminders to reduce missed visits.",
          tags: ["Appointments", "Calendars", "Reminders"],
        },
        {
          title: "Admin Panels & Internal Tools",
          desc: "Custom back-office tools for the way your team already works: data tables, approvals, role-based access and reporting.",
          tags: ["Admin", "Roles", "Reports"],
        },
      ]}
      deliverables={[
        "Custom dashboards and admin panels built around your workflow",
        "Automated expiry, renewal and reminder alerts",
        "Billing, invoicing and payment tracking",
        "CRM and booking systems for schools and clinics",
        "Role-based access for staff and administrators",
        "Reports and analytics in one place",
        "Full documentation, unit tests and a deployment guide",
        "Two weeks of post-launch support",
      ]}
      stack={["React", "Next.js", "Python", "FastAPI", "Database"]}
      faqs={[
        {
          q: "What kinds of dashboards and business software do you build?",
          a: "Custom dashboards, admin panels and internal tools: expiry and renewal alerts, billing and invoicing, school CRM systems, healthcare booking, and back-office tools shaped around how your team already works.",
        },
        {
          q: "Can the system send automatic reminders and alerts?",
          a: "Yes. Expiry and renewal alerts, appointment reminders and follow-ups can be set up to fire automatically, so your team no longer has to track dates by hand.",
        },
        {
          q: "Can you build a CRM for a school or a booking system for a clinic?",
          a: "Yes. We build school CRM systems covering admissions, attendance and parent communication, and appointment booking for clinics with staff calendars and patient reminders.",
        },
        {
          q: "Will it replace our spreadsheets?",
          a: "That is the usual goal. We map how you work today, then build one system that replaces the scattered spreadsheets, reminders and paperwork.",
        },
        ...BASE_FAQS,
      ]}
      demo={<DashboardDemo />}
      ctaTitle="Need software built around your business?"
      ctaBody="Tell us how you work today. We reply within 12 hours with honest advice and a clear plan."
    />
  );
}
