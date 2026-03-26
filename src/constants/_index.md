# Constants Kurallari

Bu klasor, uygulama genelinde degismeyen sabit degerler icindir.

## Hızlı Okuma

- Amaç: değişmeyen anahtar/sabitleri merkezi tutmak.
- Kural: `[feature]Constants.ts` veya `[feature]Keys.ts` (camelCase).
- Örnek: `routeConstants.ts`, `authKeys.ts`.

## Neler constants olmali?

- Enum benzeri deger listeleri (`STATUS`, `ROLE`, `THEME` gibi)
- Rota anahtarlari, localStorage key'leri, query key sabitleri
- Tekrar eden ama runtime'da degismeyen UI/config sabitleri

## Neler constants olmamali?

- API'den gelen dinamik veri
- Ortama gore degisen degerler (`.env` kullan)
- Is mantigiyla hesaplanan degerler (fonksiyon/composable icine tasinmali)

## Isimlendirme

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- `constants` icin `Type` degeri: `Constants` veya `Keys`
- Ornek: `authKeys.ts`, `routeConstants.ts`, `storageKeys.ts`
- Export sabitleri `UPPER_SNAKE_CASE`: `AUTH_TOKEN_KEY`
- Ilgili sabitleri ayni dosyada grupla; alakasiz sabitleri tek dosyada toplama

## Tip Guvenligi

- Mumkunse `as const` kullan.
- Gerekirse union type turet:
- `const STATUSES = ['active', 'inactive'] as const`
- `type Status = (typeof STATUSES)[number]`

## Kaynaklar

- [TypeScript: `const` assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) — `as const` ve sabit türetimleri
- [TypeScript: Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) — union ve sabit listeler
