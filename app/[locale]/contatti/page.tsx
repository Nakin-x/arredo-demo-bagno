import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Eyebrow from '@/components/Eyebrow';
import { siteConfig } from '@/site.config';

export default async function ContattiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contatti');

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t('description')}</p>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
              {t('directTitle')}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block font-[family-name:var(--font-display)] text-lg font-semibold text-clay"
            >
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="mt-1 block text-sm text-ink-soft">
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="flex flex-col gap-5 rounded-2xl border border-line bg-paper-dim p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink">{t('formName')}</label>
            <input id="name" name="name" type="text" required
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-clay" />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium text-ink">{t('formCompany')}</label>
            <input id="company" name="company" type="text"
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-clay" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink">{t('formEmail')}</label>
            <input id="email" name="email" type="email" required
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-clay" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink">{t('formMessage')}</label>
            <textarea id="message" name="message" rows={5} required
              className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-clay" />
          </div>
          <button type="submit"
            className="mt-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay-dark">
            {t('formSubmit')}
          </button>
        </form>
      </div>
    </section>
  );
}
