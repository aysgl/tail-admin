# Package.json Paket Açıklamaları

Bu dokümanda projedeki tüm paketlerin kısa açıklamaları belirtilmiştir.

## İçindekiler

- [Package.json Paket Açıklamaları](#packagejson-paket-açıklamaları)
  - [İçindekiler](#i̇çindekiler)
  - [Scripts (NPM Komutları)](#scripts-npm-komutları)
  - [lint-staged](#lint-staged)
  - [Dependencies (Üretim Bağımlılıkları)](#dependencies-üretim-bağımlılıkları)
  - [DevDependencies (Geliştirme Bağımlılıkları)](#devdependencies-geliştirme-bağımlılıkları)
    - [Build \& Derleme](#build--derleme)
    - [Styling \& İkonlar](#styling--i̇konlar)
    - [Linting \& Formatting](#linting--formatting)
    - [Git Hooks \& Commit](#git-hooks--commit)
    - [Storybook (Bileşen Dokümantasyonu)](#storybook-bileşen-dokümantasyonu)
    - [Diğer](#diğer)
  - [Özet: Kaldırılabilecek Paketler](#özet-kaldırılabilecek-paketler)
  - [Not](#not)

## Scripts (NPM Komutları)

| Komut               | Açıklama                                                          |
| ------------------- | ----------------------------------------------------------------- |
| **dev**             | Geliştirme sunucusunu başlatır (`vite`)                           |
| **build**           | Lint + type-check + production build (hata varsa build durur)     |
| **type-check**      | TypeScript tip kontrolü (`vue-tsc`)                               |
| **lint**            | ESLint kontrolü (sadece kontrol, dosya değiştirmez)               |
| **lint:fix**        | Prettier + ESLint ile format ve lint hatalarını otomatik düzeltir |
| **format**          | Sadece Prettier ile formatlama                                    |
| **prepare**         | Husky kurulumu (npm install sonrası otomatik çalışır)             |
| **storybook**       | Storybook dev sunucusu (port 6006)                                |
| **build-storybook** | Storybook statik build                                            |
| **chromatic**       | Storybook görsel regression testi (CI için)                       |

## lint-staged

Commit öncesi sadece staged dosyalarda çalışan komutlar (Husky pre-commit ile):

| Dosya türü              | Komutlar                           |
| ----------------------- | ---------------------------------- |
| `*.{ts,tsx,vue,js,jsx}` | `prettier --write`, `eslint --fix` |
| `*.{json,css,md}`       | `prettier --write`                 |

## Dependencies (Üretim Bağımlılıkları)

| Paket                         | Açıklama                                                  |
| ----------------------------- | --------------------------------------------------------- |
| **@fullcalendar/core**        | Takvim bileşeninin çekirdeği                              |
| **@fullcalendar/daygrid**     | Günlük/haftalık takvim görünümü                           |
| **@fullcalendar/interaction** | Takvimde tıklama, sürükle-bırak etkileşimleri             |
| **@fullcalendar/timegrid**    | Saat bazlı takvim görünümü                                |
| **@fullcalendar/vue3**        | FullCalendar'ın Vue 3 entegrasyonu                        |
| **@nuxt/ui**                  | UI bileşenleri + Tailwind entegrasyonu (styling)          |
| **@popperjs/core**            | Popover/popper pozisyonlama (v-calendar peer dependency)  |
| **ag-charts-vue3**            | Grafik ve chart kütüphanesi (Vue 3 entegrasyonu)          |
| **ag-grid-vue3**              | Gelişmiş tablo/grid bileşeni (Vue 3 entegrasyonu)         |
| **v-calendar**                | Tarih seçici; Nuxt UI DatePicker bunu kullanır (peer dep) |
| **vue**                       | Vue.js framework                                          |
| **vue-router**                | Vue sayfa yönlendirme (routing)                           |

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

| Paket                                 | Açıklama                             |
| ------------------------------------- | ------------------------------------ |
| **eslint**                            | Kod kalitesi ve stil kontrolü        |
| **eslint-plugin-vue**                 | Vue için ESLint kuralları            |
| **eslint-plugin-vuejs-accessibility** | Vue erişilebilirlik kuralları (a11y) |
| **prettier**                          | Kod formatlama                       |
| **@vue/eslint-config-prettier**       | ESLint + Prettier uyumluluğu         |
| **@vue/eslint-config-typescript**     | Vue + TypeScript ESLint kuralları    |

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

## Özet: Kaldırılabilecek Paketler

Projeyi sadeleştirmek isterseniz aşağıdakileri kaldırmayı düşünebilirsiniz:

| #   | Paket(ler)              | Ne zaman kaldırılır?                    |
| --- | ----------------------- | --------------------------------------- |
| 1   | **Storybook** (7 paket) | Bileşen dokümantasyonu kullanmıyorsanız |
| 2   | **chromatic**           | Görsel regression testi yapmayacaksanız |

## Not

Paket kaldırırken:

1. `package.json`'dan silin
2. `npm install` çalıştırın
3. İlgili paketi kullanan kodları da kaldırın/güncelleyin
