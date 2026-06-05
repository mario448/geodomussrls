"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/10 bg-warm/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-graphite" onClick={() => setOpen(false)}>
          GeoDomus <span className="text-forest">srls</span>
        </Link>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-graphite/10 lg:hidden"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-5 bg-graphite shadow-[0_6px_0_#101312]" />
        </button>
        <nav className="hidden items-center gap-5 text-sm text-graphite/70 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-forest">
              {item.label}
            </Link>
          ))}
          <Link href="/contatti" className="inline-flex min-h-10 items-center justify-center rounded-md bg-graphite px-4 font-bold text-white shadow-sm transition hover:bg-forest">
            Verifica fattibilità
          </Link>
        </nav>
      </div>
      {open ? (
        <nav className="grid gap-1 border-t border-graphite/10 bg-warm px-5 py-3 lg:hidden">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 text-graphite/75" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contatti" className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-graphite px-4 font-bold text-white" onClick={() => setOpen(false)}>
            Verifica fattibilità del progetto
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
