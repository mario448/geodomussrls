import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-24 text-xs text-graphite/50 lg:px-8">
      <ol className="flex flex-wrap gap-2">
        <li><Link href="/" className="hover:text-forest">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} className="before:mr-2 before:content-['/']">
            {item.href ? <Link href={item.href} className="hover:text-forest">{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
