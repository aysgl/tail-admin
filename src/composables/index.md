# Composable(Hooks) Adlandirma Kurali

https://vuejs.org/guide/reusability/composables.html

## Hızlı Okuma

- Amaç: tekrar kullanılabilir Vue mantığını standartlaştırmak.
- Kural: `use[Feature].ts` (camelCase) ve export adı dosya adıyla aynı.
- Örnek: `useAnalytics.ts` -> `useAnalytics()`.

## Ortak Dosya Adi Patterni

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- Composable ozel durumu: dosya `use` ile baslar.
- Pattern: `use[Feature].ts`

## Isimlendirme

- Her composable `use` prefix ile baslar.
- Sonraki kisim davranisi acikca anlatir.
- Dosya adi ve export adi ayni olmalidir.

## Ornekler

- `useAuth.ts` -> `export function useAuth() {}`
- `useAnalytics.ts` -> `export function useAnalytics() {}`
- `useTableFilters.ts` -> `export function useTableFilters() {}`

## Tasarim Kurallari

- Tek sorumluluk ilkesine uy.
- TypeScript tiplerini acik tanimla (`interface`, `type`, donus tipi).
- Tekrarlayan mantik varsa yeni composable acmadan once mevcut composable'lari genisletmeyi degerlendir.
