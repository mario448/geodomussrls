import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "it_IT",
      type: "website",
      images: [{ url: "/images/villa-geodomus-hero-v3.jpg", width: 1774, height: 887, alt: site.name }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/villa-geodomus-hero-v3.jpg"]
    }
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: "Friuli Venezia Giulia",
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url
    },
    url: `${site.url}${path}`
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  const list = [{ label: "Home", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href ?? ""}`
    }))
  };
}
