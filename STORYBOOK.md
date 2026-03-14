# Storybook Konfigürasyonu

Bu doküman, projedeki `.storybook/main.ts` dosyasını açıklar. Storybook, UI bileşenlerini izole ortamda geliştirmek ve dokümante etmek için kullanılır.

---

## 1. Konfigürasyon Özeti

| Özellik       | Değer                     |
| ------------- | ------------------------- | --- | --- | --- | ----- |
| **Dosya**     | `.storybook/main.ts`      |
| **Framework** | Vue 3 + Vite              |
| **Stories**   | `*.mdx`, `\*.stories.@(js | jsx | mjs | ts  | tsx)` |

---

## 2. Stories Deseni

```ts
stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)']
```

| Pattern                    | Açıklama                    |
| -------------------------- | --------------------------- | --- | --- | ----- | ---------------- |
| `../src/**/*.mdx`          | MDX dokümantasyon dosyaları |
| `../src/\*_/_.stories.@(js | jsx                         | mjs | ts  | tsx)` | Hikâye dosyaları |

---

## 3. Addon'lar

| Addon                         | Açıklama                                         |
| ----------------------------- | ------------------------------------------------ |
| `@chromatic-com/storybook`    | Chromatic (görsel regression testi) entegrasyonu |
| `@storybook/addon-vitest`     | Vitest ile hikâye testleri                       |
| `@storybook/addon-a11y`       | Erişilebilirlik (a11y) kontrolü                  |
| `@storybook/addon-docs`       | Otomatik dokümantasyon                           |
| `@storybook/addon-design`     | Tasarım araçları entegrasyonu                    |
| `@storybook/addon-onboarding` | Yeni kullanıcı tanıtımı                          |

---

## 4. Framework

```ts
framework: '@storybook/vue3-vite'
```

Vue 3 ve Vite ile Storybook çalışır. Vite build pipeline'ı kullanılır.

---

## 5. İlgili Dosyalar

| Dosya                        | Açıklama                       |
| ---------------------------- | ------------------------------ |
| `.storybook/main.ts`         | Ana Storybook config           |
| `.storybook/preview.ts`      | Global decorator, parametreler |
| `.storybook/tsconfig.json`   | Storybook TypeScript config    |
| `.storybook/vitest.setup.ts` | Vitest test kurulumu           |

---

## 6. Komutlar

| Komut                     | Açıklama                        |
| ------------------------- | ------------------------------- |
| `npm run storybook`       | Geliştirme sunucusu (port 6006) |
| `npm run build-storybook` | Statik Storybook build          |
| `npm run chromatic`       | Chromatic'e yükle (görsel test) |

---

## 7. Hikâye Dosyası Örneği

```ts
// src/components/ui/BaseButton.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button' },
}
```

---

## 8. Referanslar

- [Storybook for Vue 3](https://storybook.js.org/docs/vue/get-started/install)
- [Storybook Vitest Addon](https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon)
- [Chromatic](https://www.chromatic.com/)
