'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { siteConfig } from '@/site.config';

const locales = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/prodotti', label: t('prodotti') },
    { href: '/contatti', label: t('contatti') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 text-sm sm:flex">
            {locales.map((l, i) => (
              <span key={l.code} className="flex items-center gap-1">
                <Link
                  href={pathname}
                  locale={l.code}
                  className={locale === l.code ? 'font-semibold text-ink' : 'text-ink-soft hover:text-ink'}
                >
                  {l.label}
                </Link>
                {i < locales.length - 1 && <span className="text-line">/</span>}
              </span>
            ))}
          </div>

          <Link
            href="/contatti"
            className="hidden rounded-full bg-clay px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-clay-dark sm:inline-block"
          >
            {t('cta')}
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 text-ink md:hidden"
          >
            <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-line pt-3 text-sm">
              {locales.map((l) => (
                <Link
                  key={l.code}
                  href={pathname}
                  locale={l.code}
                  onClick={() => setMenuOpen(false)}
                  className={locale === l.code ? 'font-semibold text-ink' : 'text-ink-soft'}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
