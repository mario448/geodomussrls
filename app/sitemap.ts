import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

const routes = [
  "",
  "/case-prefabbricate-legno-udine",
  "/fotovoltaico-udine-fvg",
  "/riscaldamento-biomassa-udine",
  "/soluzioni-integrate",
  "/chi-siamo",
  "/contatti",
  "/blog"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
