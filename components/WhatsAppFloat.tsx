"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WA_LINK } from "@/lib/siteConfig";

/* Floating WhatsApp shortcut. It fades out while the contact section is on
   screen, where its own WhatsApp button already sits (and the float would
   otherwise cover it on phones). */
export default function WhatsAppFloat() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      tabIndex={hide ? -1 : 0}
      className={cn(
        "fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-6px_rgb(37_211_102/.6)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 sm:bottom-6 sm:right-5 sm:h-14 sm:w-14",
        hide && "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <svg viewBox="0 0 24 24" className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.496.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.243c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.867zm8.413-18.281A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.393z"
        />
      </svg>
    </a>
  );
}

export { WA_LINK };
