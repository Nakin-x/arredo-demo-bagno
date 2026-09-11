# Terracqua — demo vetrina multilingua

Progetto dimostrativo (settore: ceramica per il bagno), stessa base tecnica
del sito Plaster ma stack di contenuti e identità visiva a sé: 3 lingue
(IT/EN/DE), palette calda/terracotta, font serif per i titoli.

## Sviluppo in locale

```bash
npm install
npm run dev
```

## Build statica

```bash
npm run build
```

Output in `out/`.

## Personalizzare

- **`site.config.ts`** — nome, dominio, contatti (ora "Terracqua", placeholder)
- **`messages/it.json`, `en.json`, `de.json`** — tutti i testi, stessa struttura di chiavi
- **Form contatti** (`app/[locale]/contatti/page.tsx`) — sostituisci l'URL Formspree placeholder
- **Palette** — variabili `--color-clay`, `--color-paper` ecc. in `app/globals.css`

## Pubblicare

Stesso identico procedimento usato per il sito Plaster: repo GitHub separato
per questo progetto -> import su Vercel -> dominio `.vercel.app` gratuito
(o dominio vero se vuoi renderla una demo definitiva).

## Note

- Il footer include un link "Questo è un progetto dimostrativo realizzato da
  Plaster" che punta a plaster-studio.it — aggiornalo se cambi la struttura
  del sito principale.
- Nessuna foto reale inserita: aggiungi immagini prodotto in `public/images/`
  quando le hai, per ora il layout regge anche senza.
