# Package.json Paket Açıklamaları

Bu dokümanda projedeki tüm paketlerin kısa açıklamaları ve script lifecycle (ne zaman, hangi sırada çalışır) belirtilmiştir.

## İçindekiler

1. [NPM Komutları](#npm-komutları)
2. [Script Lifecycle](#script-lifecycle)
3. [Dependencies (Üretim Bağımlılıkları)](#dependencies-üretim-bağımlılıkları)
4. [DevDependencies (Geliştirme Bağımlılıkları)](#devdependencies-geliştirme-bağımlılıkları)
5. [Özet: Opsiyonel Paketler](#özet-opsiyonel-paketler)

## NPM Komutları

| Komut               | Açıklama                                                         |
| ------------------- | ---------------------------------------------------------------- |
| **dev**             | Geliştirme sunucusunu başlatır (`vite`)                          |
| **build**           | Lint + type-check + production build (hata varsa build durur)    |
| **check:lint**      | ESLint kontrolü (sadece kontrol, dosya değiştirmez)              |
| **check:format**    | Prettier ile kontrol                                             |
| **check:types**     | TypeScript tip kontrolü (`vue-tsc`)                              |
| **fix:lint**        | ESLint `--fix` ile otomatik düzeltme                             |
| **fix:format**      | Prettier ile otomatik düzeltme                                   |
| **clean:cache**     | node_modules, dist, storybook-static, coverage, npm cache siler  |
| **clean:install**   | clean:cache + `npm install --legacy-peer-deps` ile temiz kurulum |
| **prepare**         | Husky kurulumu (npm install sonrası otomatik çalışır)            |
| **storybook**       | Storybook dev sunucusu (port 6006)                               |
| **build:storybook** | Storybook statik build                                           |
| **build:chromatic** | Storybook build + Chromatic'e yükle (görsel regression)          |

## Script Lifecycle

### Pattern (eylem:hedef)

Prefix'li script'ler **eylem:hedef** sırasını izler:

| Prefix   | Eylem   | Örnek           |
| -------- | ------- | --------------- |
| `check:` | Kontrol | check:lint      |
| `fix:`   | Düzelt  | fix:format      |
| `build:` | Derle   | build:storybook |
| `clean:` | Temizle | clean:cache     |

### Lifecycle akışı

| Aşama                | Ne yapılır                                                      | Script'ler                                           |
| -------------------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| **1. Kurulum**       | `npm install` sonrası Husky otomatik devreye girer              | `prepare`                                            |
| **2. Geliştirme**    | Uygulamayı çalıştırırsınız                                      | `dev`                                                |
| **3. Kod düzeltme**  | Format ve lint hatalarını giderirsiniz (sıra önerilir)          | `fix:format` → `fix:lint`                            |
| **4. Kontrol**       | Düzeltmeden önce/sonra doğrulama                                | `check:format`, `check:lint`, `check:types`          |
| **5. Build**         | Production build (her check geçmeli)                            | `check:format` → `check:lint` → `check:types` → vite |
| **6. Storybook**     | Bileşen dokümantasyonu: dev server, statik build veya Chromatic | `storybook`, `build:storybook`, `build:chromatic`    |
| **7. Sorun giderme** | Cache veya kurulum sorunlarında                                 | `clean:cache` veya `clean:install`                   |

**Build sırası:** `build` script'i `check:format && check:lint && check:types` zincirini çalıştırır; biri hata verirse vite build atlanır.

### Tetikleyiciler

Script'ler genelde manuel (`npm run ...`) çalışır. Aşağıdakiler **otomatik** tetiklenir:

| Ne zaman?        | Ne olur?                                                                    |
| ---------------- | --------------------------------------------------------------------------- |
| **npm install**  | `prepare` script'i çalışır; Husky Git hooks'ları kurar.                     |
| **git commit**   | pre-commit hook: lint-staged (prettier + eslint) + `check:types`.           |
| **git push**     | pre-push hook: `build` çalışır; hata varsa push engellenir.                 |
| **CI** (PR/push) | commitlint, check:format, check:lint, check:types, build sırasıyla çalışır. |

**lint-staged:** Config (script değil); Husky `npx lint-staged` ile çalıştırır. `*.{ts,tsx,vue,js,jsx,mts,mjs}` için prettier + eslint; `*.{json,css,md}` için sadece prettier.

## Dependencies (Üretim Bağımlılıkları)

| Paket                         | Açıklama                                                  |
| ----------------------------- | --------------------------------------------------------- |
| **vue**                       | Vue.js framework                                          |
| **vue-router**                | Vue sayfa yönlendirme (routing)                           |
| **@nuxt/ui**                  | UI bileşenleri + Tailwind entegrasyonu (styling)          |
| **@popperjs/core**            | Popover/popper pozisyonlama (v-calendar peer dependency)  |
| **v-calendar**                | Tarih seçici; Nuxt UI DatePicker bunu kullanır (peer dep) |
| **@fullcalendar/core**        | Takvim bileşeninin çekirdeği                              |
| **@fullcalendar/daygrid**     | Günlük/haftalık takvim görünümü                           |
| **@fullcalendar/interaction** | Tarih tıklama, tarih aralığı seçimi, event tıklama        |
| **@fullcalendar/timegrid**    | Saat bazlı takvim görünümü                                |
| **@fullcalendar/vue3**        | FullCalendar'ın Vue 3 entegrasyonu                        |
| **ag-charts-vue3**            | Grafik ve chart kütüphanesi (Vue 3 entegrasyonu)          |
| **ag-grid-vue3**              | Gelişmiş tablo/grid bileşeni (Vue 3 entegrasyonu)         |

## DevDependencies (Geliştirme Bağımlılıkları)

### Build & Derleme

| Paket                  | Açıklama                                        |
| ---------------------- | ----------------------------------------------- |
| **vite**               | Hızlı build aracı ve dev server                 |
| **@vitejs/plugin-vue** | Vite için Vue SFC desteği                       |
| **vue-tsc**            | Vue + TypeScript type checking                  |
| **typescript**         | TypeScript derleyicisi                          |
| **jiti**               | Runtime TypeScript/ESM loader (Vite config vb.) |

### Styling & İkonlar

| Paket                    | Açıklama                                       |
| ------------------------ | ---------------------------------------------- |
| **tailwindcss**          | Utility-first CSS framework (Nuxt UI peer dep) |
| **@iconify-json/lucide** | Lucide ikon seti (Iconify)                     |

### Linting & Formatting

| Paket                                 | Açıklama                                      |
| ------------------------------------- | --------------------------------------------- |
| **eslint**                            | Kod kalitesi ve stil kontrolü                 |
| **eslint-plugin-vue**                 | Vue için ESLint kuralları                     |
| **eslint-plugin-vuejs-accessibility** | Vue erişilebilirlik kuralları (a11y)          |
| **prettier**                          | Kod formatlama                                |
| **@vue/eslint-config-prettier**       | ESLint + Prettier uyumluluğu                  |
| **@vue/eslint-config-typescript**     | Vue + TypeScript ESLint kuralları             |
| **globals**                           | ESLint ortam değişkenleri (browser, node vb.) |

### Git Hooks & Commit

Commit geçmişinin takibi ve anlaşılır olması için zorunludur.

| Paket                               | Açıklama                                 |
| ----------------------------------- | ---------------------------------------- |
| **husky**                           | Git hooks yönetimi (pre-commit vb.)      |
| **lint-staged**                     | Sadece staged dosyalarda lint çalıştırma |
| **@commitlint/cli**                 | Commit mesajı format kontrolü            |
| **@commitlint/config-conventional** | Conventional commit kuralları            |

### Storybook (Bileşen Dokümantasyonu)

| Paket                        | Açıklama                                  |
| ---------------------------- | ----------------------------------------- |
| **storybook**                | Bileşen geliştirme ve dokümantasyon aracı |
| **@storybook/vue3-vite**     | Storybook Vue3 + Vite entegrasyonu        |
| **@storybook/addon-docs**    | Storybook dokümantasyon eklentisi         |
| **@storybook/addon-a11y**    | Erişilebilirlik test eklentisi            |
| **@storybook/addon-designs** | Tasarım mockup eklentisi                  |
| **storybook-vue3-router**    | Vue Router mock'u Storybook için          |
| **chromatic**                | Storybook görsel regression testi (CI)    |

### Diğer

| Paket                        | Açıklama                             |
| ---------------------------- | ------------------------------------ |
| **@types/node**              | Node.js TypeScript tip tanımları     |
| **@vue/tsconfig**            | Vue projeleri için önerilen tsconfig |
| **vite-plugin-vue-devtools** | Vue DevTools tarayıcı eklentisi      |

## Özet: Opsiyonel Paketler

Aşağıdakiler ihtiyaca göre kullanılabilir; projede zorunlu değildir:

| #   | Paket(ler)              | Ne zaman opsiyonel?                     |
| --- | ----------------------- | --------------------------------------- |
| 1   | **Storybook** (7 paket) | Bileşen dokümantasyonu kullanmıyorsanız |
| 2   | **chromatic**           | Görsel regression testi yapmayacaksanız |
