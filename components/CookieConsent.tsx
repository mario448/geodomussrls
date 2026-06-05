"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CookieChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

const STORAGE_KEY = "geodomus_cookie_preferences_v1";

function saveChoice(choice: Omit<CookieChoice, "necessary" | "savedAt">) {
  const payload: CookieChoice = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    savedAt: new Date().toISOString()
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("geodomus-cookie-consent", { detail: payload }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as CookieChoice;
      setAnalytics(Boolean(parsed.analytics));
      setMarketing(Boolean(parsed.marketing));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    saveChoice({ analytics: true, marketing: true });
    setVisible(false);
  }

  function rejectOptional() {
    saveChoice({ analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setVisible(false);
  }

  function saveCustom() {
    saveChoice({ analytics, marketing });
    setVisible(false);
  }

  return (
    <>
      {!visible && (
        <button
          type="button"
          onClick={() => {
            setSettingsOpen(true);
            setVisible(true);
          }}
          className="fixed bottom-4 left-4 z-40 rounded-md border border-graphite/15 bg-white px-4 py-3 text-sm font-semibold text-graphite shadow-soft"
        >
          Preferenze privacy
        </button>
      )}

      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite/10 bg-white px-5 py-5 shadow-[0_-24px_80px_rgba(0,0,0,.18)] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-forest">Privacy e cookie</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-graphite">Gestisci le preferenze cookie</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-graphite/65">
                Usiamo cookie tecnici necessari al funzionamento del sito e alla memorizzazione delle preferenze. Cookie statistici o marketing saranno attivati solo con consenso esplicito.
                Puoi rifiutare i cookie non necessari e modificare la scelta in qualsiasi momento.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="/privacy-policy" className="text-forest underline underline-offset-4">
                  Privacy policy
                </Link>
                <Link href="/cookie-policy" className="text-forest underline underline-offset-4">
                  Cookie policy
                </Link>
              </div>

              {settingsOpen && (
                <div className="mt-5 grid gap-3 rounded-lg bg-warm p-4">
                  <label className="flex gap-3 text-sm leading-6 text-graphite/72">
                    <input type="checkbox" checked disabled className="mt-1" />
                    <span>
                      <strong className="block text-graphite">Cookie tecnici</strong>
                      Sempre attivi per sicurezza, funzionamento del sito e salvataggio delle preferenze.
                    </span>
                  </label>
                  <label className="flex gap-3 text-sm leading-6 text-graphite/72">
                    <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1" />
                    <span>
                      <strong className="block text-graphite">Cookie statistici</strong>
                      Non installati al momento. Questa preferenza è pronta per eventuali strumenti analytics futuri.
                    </span>
                  </label>
                  <label className="flex gap-3 text-sm leading-6 text-graphite/72">
                    <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="mt-1" />
                    <span>
                      <strong className="block text-graphite">Cookie marketing</strong>
                      Non installati al momento. Verranno attivati solo se configurati e se hai espresso consenso.
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <button type="button" onClick={acceptAll} className="min-h-12 rounded-md bg-graphite px-5 font-semibold text-white">
                Accetta tutti
              </button>
              <button type="button" onClick={rejectOptional} className="min-h-12 rounded-md border border-graphite/15 px-5 font-semibold text-graphite">
                Rifiuta non necessari
              </button>
              <button type="button" onClick={() => setSettingsOpen((value) => !value)} className="min-h-12 rounded-md border border-graphite/15 px-5 font-semibold text-graphite">
                {settingsOpen ? "Nascondi preferenze" : "Personalizza"}
              </button>
              {settingsOpen && (
                <button type="button" onClick={saveCustom} className="min-h-12 rounded-md bg-forest px-5 font-semibold text-white">
                  Salva preferenze
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
