import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/site.config';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">{t('tagline')}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
              {t('linksTitle')}
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/prodotti" className="text-ink-soft hover:text-ink">
                {tNav('prodotti')}
              </Link>
              <Link href="/contatti" className="text-ink-soft hover:text-ink">
                {tNav('contatti')}
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
              {t('contactTitle')}
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-ink-soft">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-ink">{siteConfig.phone}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {t('rights')}</p>
          <a
            href="https://plaster-studio.it"
            className="italic underline decoration-line underline-offset-2 hover:text-ink"
          >
            {t('demoNotice')}
          </a>
        </div>
      </div>
    </footer>
  );
}
