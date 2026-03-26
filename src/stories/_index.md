# Stories (Storybook) Kurallari

Bu klasor, Storybook dokumantasyonu ve orneklerini tutar.

## Hızlı Okuma

- Amaç: bileşenleri izole ve dokümante şekilde göstermek.
- Kural: story dosyaları `*.stories.ts(x)`, MDX dosyaları `*.mdx`.
- Not: story içi yardımcı TS dosyaları `[feature][Type].ts` (camelCase).

## Ne icin var?

- UI bilesenlerini izole sekilde gormek
- Ornek varyantlar (props/slot) ve dokumantasyon
- Regression kontrolu (gorsel degisimleri fark etmek)

## Dosya kurali

- Stories dosyalari `*.stories.ts` / `*.stories.tsx` seklinde adlandirilir.
- MDX dokumantasyonu `*.mdx` olabilir (`Welcome.mdx` gibi).
- Story dosyasi govdesindeki TypeScript helper dosyalari gerekiyorsa
  `[feature][Type].ts` (camelCase) patterni kullanilir.
  - Ornek: `buttonStoryData.ts`, `chartStoryMock.ts`

## Nereye koymaliyiz?

- Genel dokumantasyon: `src/stories/`
- Feature/page story gerekiyorsa ilgili view yaninda da olabilir
  - ornek: `src/views/Dashboard/Ecommerce.stories.ts`
- Tercih: UI bilesen story'leri `src/components` altinda bilesene yakin konumda tutmak.

## Icerik standardi

- Bir story tek bir bileseni hedeflemeli.
- Ornekler gercek kullanim senaryosunu yansitmali (Nuxt UI ile uyumlu).

## Kaynaklar

- [Storybook for Vue](https://storybook.js.org/docs/get-started/frameworks/vue3-vite) — Vue 3 + Vite kurulumu ve API
- [Storybook: Writing Stories](https://storybook.js.org/docs/writing-stories) — `args`, variantlar, dokümantasyon
- [storybook-vue3-router](https://github.com/NickMcBurney/storybook-vue3-router) — router entegrasyonu (projede dev dependency)
