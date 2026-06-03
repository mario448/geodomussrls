import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/Motion";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog SEO su case in legno, fotovoltaico e biomassa",
  description:
    "Approfondimenti GeoDomus su case prefabbricate in legno, fotovoltaico, biomassa ed efficienza energetica in Friuli Venezia Giulia.",
  path: "/blog",
  keywords: ["case prefabbricate FVG", "fotovoltaico Udine", "riscaldamento a biomassa Udine", "efficienza energetica FVG"]
});

export default function BlogPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="px-5 pb-20 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Blog SEO</p>
            <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">Guide tecniche per costruire e riqualificare meglio.</h1>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <FadeIn key={post.slug} className="rounded-lg border border-graphite/10 bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-4 leading-7 text-graphite/65">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex font-semibold text-forest">
                  Leggi articolo
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
