# Router Kurallari

Bu klasor, route tanimlari ve navigation ile ilgili yardimci kodlari tutar.

## Hızlı Okuma

- Amaç: route + guard + navigation tanımlarını tek yerde tutmak.
- Kural: TS dosyalarında `[feature][Type].ts` (camelCase).
- Örnek: `routerConfig.ts`, `navigationConfig.ts`, `authGuard.ts`.

## Dosyalar

- `index.ts`: route listesi + global guard'lar (title, scroll, auth)
- `navigation.ts`: menu/search gibi navigation verisi ve helper'lari

## Dosya Adi Patterni

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- Router klasoru icin tipik dosyalar:
  - `routerConfig.ts`
  - `navigationConfig.ts`
  - `authGuard.ts`

## Route tanimi standardi

- Her route `name` ve `meta.title` icermeli.
- `meta.layout` standardi:
  - `main`: dashboard layout
  - `auth`: auth sayfalari
  - `none`: layout yok (404 vb.)
- View importlari lazy olmali:
  - `component: () => import('../views/...')`

## Guard kurallari

- Document title tek yerden yonetilmeli (router guard).
- Scroll restore gibi cross-cutting davranislar `router` seviyesinde kalmali.
- Auth/permission gerekirse `meta` uzerinden isaretle (or. `meta.requiresAuth`).

## Navigation ile iliski

- `navigation.ts` route path'lerini tek bir yerde toplar; route degisince navigation da guncellenmeli.
- Tekrarlayan path string'leri icin `src/constants` altinda sabitler dusunulebilir.
