# Krajobraźnia by Paulina Kuklińska

Nowoczesny szkielet strony internetowej w `Next.js`, `TypeScript`, `Tailwind CSS` i `Framer Motion` dla marki projektowania ogrodów i przestrzeni zielonych.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Po uruchomieniu otwórz `http://localhost:3000`.

## Gdzie edytować treści

- Dane kontaktowe i SEO: `data/siteConfig.ts`
- Oferta usług: `data/services.ts`
- Realizacje: `data/projects.ts`
- Opinie: `data/testimonials.ts`
- Teksty o pracowni: `data/about.ts`
- Etapy współpracy: `data/process.ts`

## Gdzie podmienić zdjęcia i logo

- Logo: `public/logo/`
- Hero: `public/images/hero/`
- Sekcja o pracowni: `public/images/about/`
- Realizacje: `public/images/projects/`

## Struktura stron

- `/`
- `/oferta`
- `/realizacje`
- `/o-pracowni`
- `/kontakt`

## Weryfikacja

```bash
npm run lint
npm run build
```
