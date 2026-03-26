# Views Kurallari

Bu klasor, router tarafindan yuklenen **sayfa** bilesenlerini icerir.

## Hızlı Okuma

- Amaç: route seviyesindeki sayfaları düzenli tutmak.
- Kural: `PascalCase + View.vue`.
- İstisna notu: `[feature][Type].ts` yalnızca TypeScript dosyaları içindir.

## Ne olmali?

- Route seviyesinde sayfalar (dashboard, auth, pages, demo)
- Sayfaya ozel layout kullanimi (route `meta.layout` ile)

## Ne olmamali?

- Kucuk UI parcalari (components altina tasinmali)
- API cagrisi detaylari (service katmani)
- Tekrar eden state/behavior (composable katmani)

## Yapilandirma

- Klasorleme feature'a gore: `Dashboard/`, `Auth/`, `Tables/`, `Profile/`, `Demo/`
- Dosya adlari `PascalCase` ve `*View.vue` suffix:
  - `EcommerceView.vue`, `SigninView.vue`

## Not: Ortak Pattern ile iliski

- `[feature][Type].ts` (camelCase) kurali TypeScript dosyalari icindir.
- `views` altindaki Vue sayfa dosyalari bu kurala istisna olarak `PascalCase + View.vue` seklinde kalir.

## Sayfa icinde ornek katmanlama

- Sayfa: composable kullanir (loading/error/state)
- Composable: service cagirir
- Service: HTTP/GraphQL konusur ve veriyi normalize eder

## Kaynaklar

- [Vue Router: Route Meta Fields](https://router.vuejs.org/guide/advanced/meta.html) — `meta.layout`, title, guard işaretleri
- [Vue: Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html) — sayfa bileşen yapısı
- [Vue: Composition API - Setup](https://vuejs.org/api/composition-api-setup.html) — sayfa içi mantık düzeni
