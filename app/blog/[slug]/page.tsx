import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/Motion";
import { blogPosts, getPost } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.headings
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article className="px-5 pb-20 pt-10 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-forest">Approfondimento GeoDomus</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-9 text-graphite/65">{post.excerpt}</p>
        </FadeIn>
        <FadeIn className="prose-geodomus mx-auto mt-14 max-w-4xl">
          {post.headings.map((heading, index) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {post.body.slice(index * 2, index * 2 + 2).map((paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </section>
          ))}
          {post.body.slice(post.headings.length * 2).map((paragraph) => (
            <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </FadeIn>
      </article>
      <CTA title="Vuoi passare dalla lettura al progetto?" text="GeoDomus trasforma obiettivi energetici e abitativi in una soluzione tecnica concreta." />
    </main>
  );
}
