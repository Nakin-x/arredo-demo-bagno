import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Eyebrow from '@/components/Eyebrow';
import { homeProductImages } from '@/data/productImages';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const hero = await getTranslations('hero');
  const exportT = await getTranslations('export');
  const products = await getTranslations('products');
  const process = await getTranslations('process');
  const ctaBand = await getTranslations('ctaBand');

  const productItems = products.raw('items') as { name: string; description: string }[];
  const processSteps = process.raw('steps') as { title: string; description: string }[];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-clay-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <Eyebrow>{hero('eyebrow')}</Eyebrow>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
              {hero('title')}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
              {hero('subtitle')}
            </p>
            <Link
              href="/prodotti"
              className="mt-9 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay-dark"
            >
              {hero('cta')}
            </Link>
          </div>

          <img
            src="/images/hero.jpg"
            alt="Showroom Terracqua"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* EXPORT BAND */}
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
            {exportT('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            {exportT('description')}
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>{products('eyebrow')}</Eyebrow>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
          {products('title')}
        </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  {productItems.map((item, i) => (
                    <div key={item.name} className="overflow-hidden rounded-2xl border border-line bg-paper">
                      <img
                        src={homeProductImages[i]}
                        alt={item.name}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="p-8">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                          {item.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>{process('eyebrow')}</Eyebrow>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
            {process('title')}
          </h2>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-clay pt-4">
                <span className="text-sm text-ink-soft/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
          {ctaBand('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
          {ctaBand('description')}
        </p>
        <Link
          href="/contatti"
          className="mt-8 inline-block rounded-full bg-clay px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-clay-dark"
        >
          {ctaBand('cta')}
        </Link>
      </section>
    </>
  );
}
