"use client";

const NAV_OFFSET = 68;

function scrollToTarget(target: HTMLElement) {
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

// Guards against late-arriving content (slow-loading video/images, fonts
// swapping) shifting the page after the initial jump, which otherwise
// leaves the anchor landing in the wrong spot with no way to notice.
// Re-checks a few times in the following second and nudges back into
// place if it drifted — cancels itself the moment the user touches the
// page, so it never fights a scroll the user actually intended.
function settleScroll(id: string) {
  let cancelled = false;
  function cancel() {
    cancelled = true;
  }
  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchmove", cancel, { passive: true, once: true });

  [150, 400, 900].forEach((delay) => {
    setTimeout(() => {
      if (cancelled) return;
      const target = document.getElementById(id);
      if (!target) return;
      const expected = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      if (Math.abs(window.scrollY - expected) > 40) {
        window.scrollTo({ top: expected, behavior: "smooth" });
      }
    }, delay);
  });

  setTimeout(() => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchmove", cancel);
  }, 1000);
}

export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  scrollToTarget(target);
  settleScroll(id);
}

// Run once per page on mount. Covers navigating in from a different page
// via a link like "/#contact" — the browser's own hash-jump has no fixed-nav
// offset and no protection against post-jump layout shift, which is exactly
// the "landed past where I expected" symptom this corrects for.
export function scrollToHashOnLoad() {
  if (typeof window === "undefined" || !window.location.hash) return;
  const id = window.location.hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  scrollToTarget(target);
  settleScroll(id);
}
