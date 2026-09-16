import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Eyebrow from '@/components/Eyebrow';
import { catalogProductImages } from '@/data/productImages';

export default async function ProdottiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('prodotti');
  const items = t.raw('items') as { name: string; description: string }[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <Eyebrow>{t('eyebrow')}</Eyebrow>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t('intro')}</p>
      </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.name} className="overflow-hidden rounded-2xl border border-line bg-paper">
            <img
              src={catalogProductImages[i]}
              alt={item.name}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                {item.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
