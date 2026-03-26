# Lib Kurallari

Bu klasor, uygulama icinde tekrar kullanilan **kucuk, saf (pure)** yardimci fonksiyonlar icindir.

## Hızlı Okuma

- Amaç: framework bağımsız yardımcı fonksiyonları toplamak.
- Kural: `[feature]Util.ts` veya `[feature]Helper.ts` (camelCase).
- Örnek: `validationUtil.ts`, `dateHelper.ts`.

## Ne olmali?

- UI'dan bagimsiz util'ler (formatlama, parse, guard fonksiyonlari)
- Kucuk ve test edilebilir islevler
- Framework bagimliligi olmayan kod (mumkunse)

## Ne olmamali?

- API cagrilari (service katmanina)
- Vue state (`ref`, `computed`) ve lifecycle bagimliliklari (composable/bilesen)
- Router/nav konfigleri (router klasorune)

## Isimlendirme

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- `lib` icin `Type` degeri: `Util` veya `Helper`
- Ornek: `validationUtil.ts`, `dateHelper.ts`, `stringUtil.ts`
- Fonksiyon adlari amacini anlatmali: `formatDate`, `isNonEmptyString`

## Pratik kural

- Bir fonksiyon 2+ yerde kullaniliyorsa `lib`'e cek.
- Domain-ozel agac (or. posts) icin `services` veya feature klasorunu tercih et.

## Kaynaklar

- [TypeScript Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html) — imzalar ve generics
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — saf JS yardımcıları için referans
