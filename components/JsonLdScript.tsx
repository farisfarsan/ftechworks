// Generic structured-data emitter for route-specific schema (Service,
// FAQPage, BreadcrumbList) that JsonLd.tsx (root Organization + WebSite)
// doesn't cover.
export default function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }) }}
    />
  );
}
