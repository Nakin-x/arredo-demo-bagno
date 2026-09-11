import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en', 'de'],
  defaultLocale: 'it',
});

export type Locale = (typeof routing.locales)[number];
