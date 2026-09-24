"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = "G-2BZNKCBQCQ";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/**
 * GA4 + praćenje klikova na telefon, WhatsApp i e-mail (event delegation,
 * pokriva sve linkove na sajtu).
 */
export function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const location = window.location.pathname;

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_location: location });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href, page_location: location });
      } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) {
        trackEvent("whatsapp_click", { link_url: href, page_location: location });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
