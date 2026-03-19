# Vite Konfigürasyonu

Bu doküman, projedeki `vite.config.ts` dosyasını açıklar. Vite, Vue 3 projesi için build aracı ve dev sunucusu olarak kullanılır. [Vite](https://vite.dev/) dokümantasyonuna dayanır.

---

## 1. Konfigürasyon Özeti

| Özellik        | Değer                           |
| -------------- | ------------------------------- |
| **Dosya**      | `vite.config.ts`                |
| **Framework**  | Vue 3                           |
| **Path alias** | `@` → `./src`                   |
| **Test**       | Vitest + Storybook + Playwright |

---

## 2. Plugins

### `@vitejs/plugin-vue`

Vue 3 SFC (Single File Component) desteği. `.vue` dosyalarını derler.

### `@vitejs/plugin-vue-jsx`

Vue 3 için JSX/TSX desteği. `defineComponent` ile JSX yazımı sağlar.

### `vite-plugin-vue-devtools`

Vue DevTools entegrasyonu. Geliştirme sırasında component ağacı, state vb. için tarayıcı eklentisi ile uyumlu.

---

## 3. Resolve Alias

```ts
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

- **`@`** → `./src` dizinine işaret eder
- **Örnek:** `import X from '@/components/X.vue'`

---

## 4. Test Konfigürasyonu (Vitest)

### Proje Yapısı

Vitest `projects` kullanır; Storybook hikâyeleri için ayrı bir proje tanımlı:

```ts
test: {
  projects: [
    {
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(
            dirname,
            '.storybook',
          ),
        }),
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
        },
        setupFiles: [
          '.storybook/vitest.setup.ts',
        ],
      },
    },
  ]
}
```

### Özellikler

| Özellik             | Değer                        | Açıklama                |
| ------------------- | ---------------------------- | ----------------------- |
| `name`              | `storybook`                  | Proje adı               |
| `browser.enabled`   | `true`                       | Tarayıcı ortamında test |
| `browser.headless`  | `true`                       | Görünmez tarayıcı       |
| `browser.provider`  | `playwright`                 | Playwright kullanımı    |
| `browser.instances` | `chromium`                   | Chromium tarayıcısı     |
| `setupFiles`        | `.storybook/vitest.setup.ts` | Test öncesi kurulum     |

### Storybook Test Entegrasyonu

`@storybook/addon-vitest` ile Storybook hikâyeleri Vitest projesi olarak çalıştırılır. Hikâyeler `*.stories.*` dosyalarında tanımlanır.

---

## 5. İlgili Komutlar

| Komut                | Açıklama                   |
| -------------------- | -------------------------- |
| `npm run dev`        | Geliştirme sunucusu (Vite) |
| `npm run build`      | Lint + type-check + build  |
| `npm run build-only` | Sadece Vite build          |
| `npm run preview`    | Build çıktısını önizleme   |

---

## 6. Referanslar

- [Vite Config](https://vite.dev/config/)
- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [Vitest](https://vitest.dev/)
- [Storybook Vitest Addon](https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon)
