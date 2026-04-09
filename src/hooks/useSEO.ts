import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  schema?: object | object[];
  noindex?: boolean;
  keywords?: string;
}

const BASE_URL = "https://www.glenorapharmaceutical.in";
const DEFAULT_OG_IMAGE = `${BASE_URL}/favicon.png`;
const SITE_NAME = "Glenora Pharmaceutical Pvt. Ltd.";

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
  noindex = false,
  keywords,
}: SEOProps) => {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    document.title = title;

    // ── Helper: upsert a <meta> tag ────────────────────────────────────────
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("property=")
          ? "property"
          : selector.includes("name=")
          ? "name"
          : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ── Helper: upsert a <link> tag ────────────────────────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Standard meta ──────────────────────────────────────────────────────
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // ── Robots ─────────────────────────────────────────────────────────────
    setMeta('meta[name="robots"]', noindex ? "noindex, nofollow" : "index, follow");

    // ── Canonical ──────────────────────────────────────────────────────────
    const canonicalUrl = canonical ?? `${BASE_URL}${window.location.pathname}`;
    setLink("canonical", canonicalUrl);

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:site_name"]', SITE_NAME);
    setMeta('meta[property="og:locale"]', "en_IN");

    // ── Twitter Card ───────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // ── JSON-LD Structured Data ────────────────────────────────────────────
    const SCHEMA_ID = "seo-schema-jsonld";
    const existingScript = document.getElementById(SCHEMA_ID);
    if (existingScript) existingScript.remove();

    if (schema) {
      const schemaArray = Array.isArray(schema) ? schema : [schema];
      const script = document.createElement("script");
      script.id = SCHEMA_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(
        schemaArray.length === 1 ? schemaArray[0] : schemaArray
      );
      document.head.appendChild(script);
    }

    // ── Cleanup on unmount ─────────────────────────────────────────────────
    return () => {
      const scriptEl = document.getElementById(SCHEMA_ID);
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, canonical, ogImage, ogType, schema, noindex, keywords]);
};
