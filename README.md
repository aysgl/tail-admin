# TailAdmin Vue - Free Vue.js Tailwind CSS Admin Dashboard Template

TailAdmin Vue is a free, open-source admin dashboard template **built on Vue.js**, popular and progressive JavaScript
framework, and **Tailwind CSS**. This **powerful combination** provides developers with an extensive library of
essential components, elements, and pages to launch a comprehensive and data-centric back-end, dashboard, or admin panel
solution for any Vue.js based web projects.

![TailAdmin Vue.js Dashboard Preview](./banner.png)

With TailAdmin Vue, you can leverage **Vue.js 3** features such as declarative rendering, component-based architecture,
Vue Router for routing, and Pinia for state management. It also utilizes the power of Tailwind CSS for rapid UI
development with its low-level utility classes and responsive design capabilities.

## Overview

TailAdmin provides essential UI components and layouts for building feature-rich, data-driven admin dashboards and control panels. It's built on:

- Vue 3.x (Vite)
- Tailwind CSS 4.x
- TypeScript

### Quick Links

- [✨ Visit Website](https://tailadmin.com)
- [📄 Documentation](https://tailadmin.com/docs)
- [⬇️ Download](https://tailadmin.com/download)
- [🖌️ Figma Design File (Community Edition)](https://www.figma.com/community/file/1463141366275764364)
- [⚡ Get PRO Version](https://tailadmin.com/pricing)

### Demos

- [Free Version](https://free-vue-demo.tailadmin.com/)
- [Pro Version](https://vue-demo.tailadmin.com)

### Other Versions

- [HTML Version](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template)
- [Next.js Version](https://github.com/TailAdmin/free-nextjs-admin-dashboard)
- [React Version](https://github.com/TailAdmin/free-react-tailwind-admin-dashboard)
- [Angular Version](https://github.com/TailAdmin/free-angular-tailwind-dashboard)

## Installation

### Prerequisites

To get started with TailAdmin, ensure you have the following prerequisites installed and set up:

- Node.js 18.x or later (recommended to use Node.js 20.x or later)
- Recommended IDE Setup: [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

#### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Cloning the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/TailAdmin/vue-tailwind-admin-dashboard.git
```

> Windows Users: place the repository near the root of your drive if you face issues while cloning.

1. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

2. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

3. Production build:
    ```bash
    npm run build
    # or
    yarn build
    ```

## Feature Comparison

### Free Version

- 1 Unique Dashboard
- 50+ Dashboard UI components
- Basic Figma design files
- Community support

### Pro Version

- 7 Unique Dashboards: Analytics, Ecommerce, Marketing, CRM, Stocks (more coming soon)
- 500+ dashboard components and UI elements
- Complete Figma design file
- Email support

To learn more about pro version features and pricing, visit our [pricing page](https://tailadmin.com/pricing).

## Components

TailAdmin is a pre-designed starting point for building a web-based dashboard using Vue.js and Tailwind CSS. The template includes:

- Sophisticated and accessible sidebar
- Data visualization components
- Prebuilt profile management and 404 page
- Tables and Charts(Line and Bar)
- Authentication forms and input elements
- Alerts, Dropdowns, Modals, Buttons and more
- Can't forget Dark Mode 🕶️

All components are built with Vue and styled using Tailwind CSS for easy customization.

## Features

**💎 High-quality, Premium Modern Design:**
A thoughtfully designed dashboard template with a deep focus on UX/UI, already trusted and utilized by over 10K+ web apps worldwide.

**✨ Vue 3:**
Get enhanced performance with the latest Vue version.

**⚡ Vite Build System:**
Enjoy quick development with Vite, ensuring fast code compilation.

**🔀 Vue Router:**
Manage app navigation with ease using Vue Router for seamless transitions.

**💡 Reactive Utilities:**
Enhance component reactivity with @vueuse/core utilities.

**📊 Charting with ApexCharts:**
Visualize data with ApexCharts for beautiful analytics.

**🗺️ Vector Maps with JSVectorMap:**
Easily integrate interactive vector maps with JSVectorMap.

**🖌️ UI with Tailwind CSS:**
Frontend UI built on the powerful and versatile Tailwind CSS framework.

**💫 TypeScript Support:**
Write safer, maintainable code with TailAdmin Vue's TypeScript Support.

**✅ Linting and Formatting:**
Maintain a clean codebase with built-in linting and formatting.

**🗃️ State Management with Pinia:**
Handle your app's state with Pinia for clean, organized code.

## Frontend Tooling Akışı & Standartları 🚦

Aşağıdaki akış, bir geliştiricinin kod yazımından yayına alım sürecine kadar takip ettiği kalite kontrol adımlarını özetler.

### 1. Akış Tablosu

| Aşama                           | Açıklama                                       | Araçlar                                                                                          |
| ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Geliştirme Aşaması**          | Kod editörü üzerinde real-time kontrol         | ESLint, Prettier, TypeScript                                                                     |
| **Lokal Onay (Git Commit)**     | Kodun depoya gönderilmeden önceki son filtresi | Husky (Git Hooks), lint-staged (sadece değişen dosyalar), commitlint (standart commit mesajları) |
| **Doğrulama (Git Push / PR)**   | Uzak sunucuda otomatik kontrol süreci          | CI Pipeline: Lint kontrolü, Tip kontrolü (Type-check) ve Build testi                             |
| **Final Onay ve Dokümantasyon** | Akran denetimi ve bileşen dokümantasyonu       | Code Review, Storybook                                                                           |

### 2. Akış Diyagramı

```
Kod Yazımı → ESLint/Prettier (Editör) → Git Commit → Husky + lint-staged → commitlint
     → Git Push/PR → CI (Lint + Type-check + Build) → Code Review → Merge
```

### 3. Araç Seçimleri (Tool Selection) 🚗

| Tool                    | Görev                          | Alternatif   | Neden Seçildi                                            |
| ----------------------- | ------------------------------ | ------------ | -------------------------------------------------------- |
| **ESLint**              | Kod kalitesi kontrolü          | Biome        | ESLint ekosistemi geniş, TypeScript + Vue desteği güçlü  |
| **Prettier**            | Kod formatlama                 | Rome         | Henüz olgun değil, Prettier yaygın ve stabil             |
| **Husky + lint-staged** | Commit öncesi kontrol          | -            | Sadece değişen dosyaları kontrol eder, performans yüksek |
| **Commitlint**          | Semantic commit                | -            | Otomatik changelog ve okunabilir Git history             |
| **Storybook**           | UI izolasyonu ve dokümantasyon | Styleguidist | Geniş ekosistem ve addon desteği (projeye eklenebilir)   |

### 4. Konfigürasyon Dosyaları ⚙️

Projede kullanılan araçlar, belirli konfigürasyon dosyaları aracılığıyla yönetilir. Bu dosyalar ekip içinde kod kalitesi, formatlama, commit standartları ve IDE uyumluluğunu garanti eder.

| Dosya                  | Amaç                                                                               |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `eslint.config.ts`     | Kod kalitesi ve lint kurallarını tanımlar (Prettier çakışması için skipFormatting) |
| `.prettierrc`          | Kod formatlama standartlarını belirler                                             |
| `.editorconfig`        | IDE'ler arasında ortak kod stilini sağlar                                          |
| `.lintstagedrc`        | Commit öncesi sadece değişen dosyalarda çalışacak komutları tanımlar               |
| `commitlint.config.js` | Commit mesajlarının Conventional Commits standardına uymasını sağlar               |

#### 🧩 .editorconfig

IDE seviyesinde kod stilini standartlaştırır. Farklı geliştiriciler farklı editörler kullansa bile girinti, line ending ve encoding gibi ayarlar aynı kalır.

playground https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties

**Örnek Konfigürasyon:**

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

**Ayar Açıklamaları:**

| Ayar                       | Açıklama                                 |
| -------------------------- | ---------------------------------------- |
| `root = true`              | Bu dosyanın proje kökü olduğunu belirtir |
| `charset = utf-8`          | Dosya karakter kodlamasını belirler      |
| `indent_style = space`     | Girinti için boşluk kullanılır           |
| `indent_size = 2`          | Girinti genişliği 2 boşluktur            |
| `end_of_line = lf`         | Satır sonu karakteri Unix standardı (LF) |
| `insert_final_newline`     | Dosya sonunda yeni satır ekler           |
| `trim_trailing_whitespace` | Satır sonundaki boşlukları temizler      |

#### 🧹 .prettierrc

Kodun otomatik formatlanmasını sağlar. Kod stilinin ekip genelinde tutarlı kalmasını garanti eder.

**Prettier Komutları:**

| Komut                   | Açıklama                                                                     |
| ----------------------- | ---------------------------------------------------------------------------- |
| `prettier --write .`    | Tüm dosyaları formatlar                                                      |
| `prettier --write src/` | Belirtilen dizindeki dosyaları formatlar                                     |
| `prettier --check .`    | Dosyaların Prettier kurallarına uygunluğunu kontrol eder (değişiklik yapmaz) |

**Örnek Konfigürasyon:**

```json
{
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "printWidth": 200,
    "trailingComma": "all"
}
```

**Ayar Açıklamaları:**

| Ayar            | Açıklama                            |
| --------------- | ----------------------------------- |
| `semi`          | Satır sonu noktalı virgül kullanımı |
| `singleQuote`   | Tek tırnak kullanımı                |
| `tabWidth`      | Girinti genişliği                   |
| `printWidth`    | Maksimum satır uzunluğu             |
| `trailingComma` | Nesne ve array sonuna virgül ekleme |

<sup>`.prettierignore` ile dosya/dizin hariç tutulur. Tek dosya için: `checkIgnorePragma: true` + dosya başına `/** @noprettier */`</sup>

#### 🔍 ESLint (eslint.config.ts)

Kod kalitesi ve best practice kurallarını tanımlar. ESLint aşağıdaki hataları tespit eder:

- kullanılmayan değişkenler
- unreachable code
- yanlış async kullanım
- Vue/TypeScript best practice ihlalleri

**ESLint + Prettier çakışması:** `@vue/eslint-config-prettier` paketindeki `skipFormatting` kullanılarak formatlama kuralları ESLint'ten devre dışı bırakılır. Böylece formatlama sadece Prettier'a bırakılır, çakışma önlenir.

<sup>Config'te `ignores` ile dosya/dizin hariç tutulur. Tek dosya için dosya başına `/* eslint-disable */`; tek satır için `/* eslint-disable-next-line */`</sup>

**ESLint Komutları:**

| Komut                       | Açıklama                                  |
| --------------------------- | ----------------------------------------- |
| `eslint .`                  | Tüm dosyalarda lint kontrolü yapar        |
| `eslint . --fix`            | Otomatik düzeltilebilir hataları düzeltir |
| `eslint . --format stylish` | Okunabilir çıktı formatı (varsayılan)     |

**Örnek Konfigürasyon (eslint.config.ts):**

```ts
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
    // ... diğer config
    skipFormatting, // ← Prettier ile çakışan kuralları kapatır
)
```

#### 🚦 .lintstagedrc

Commit öncesinde sadece staged (değişmiş) dosyalar üzerinde kontrol çalıştırır.

**Örnek Konfigürasyon:**

```json
{
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"]
}
```

Bu yapı sayesinde:

- sadece değişen dosyalar lint edilir
- commit süresi kısa kalır
- gereksiz lint çalışmaları önlenir

#### 📝 commitlint.config.js

Commit mesajlarının Conventional Commits standardına uygun olmasını zorunlu kılar.

**Örnek Konfigürasyon:**

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
}
```

**Geçerli Commit Tipleri:**

| Tip        | Açıklama                 |
| ---------- | ------------------------ |
| `feat`     | yeni özellik             |
| `fix`      | hata düzeltme            |
| `docs`     | dokümantasyon            |
| `style`    | kod stili değişikliği    |
| `refactor` | refactor                 |
| `perf`     | performans iyileştirmesi |
| `test`     | test ekleme/güncelleme   |
| `chore`    | bakım işleri             |

**Örnek Commit:** `feat: kullanıcı giriş sayfası eklendi`

### 5. IDE Ayarları 🧑‍💻

**`.editorconfig` vs `.vscode/settings.json` farkı:**

| Dosya                   | Amaç                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| `.editorconfig`         | Temel stil kuralları (charset, indent, line ending) — editör bağımsız, tüm IDE'lerde çalışır |
| `.vscode/settings.json` | VS Code davranışı — format on save, hangi formatter kullanılacak                             |

İkisi farklı görevlere sahiptir. `.editorconfig` girinti ve satır sonu gibi temel kuralları tanımlar; `.vscode/settings.json` ise "kaydederken Prettier çalışsın" gibi IDE davranışlarını ayarlar.

**`.vscode/settings.json` repoda olmalı mı?** Ekip VS Code kullanıyorsa **evet** — repoda olması herkesin aynı ayarlarla (format on save, Prettier varsayılan) çalışmasını sağlar. Repoda sadece `.vscode/extensions.json` varsa, `settings.json` eklenebilir.

**Önerilen ayarlar (`.vscode/settings.json`):**

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

### 6. Kullanım Detayları

#### Tek Komut ile Build

`npm run build` komutu sırasıyla lint, type-check ve production build çalıştırır. Tek tek uğraşmaya gerek yok:

```bash
npm run build   # lint → type-check → vite build
```

#### Geliştirme Aşaması

- **ESLint**: `npm run lint` — Kod kalitesi kontrolü
- **ESLint + Prettier (fix)**: `npm run lint:fix` — Formatlama + lint düzeltmeleri
- **Prettier**: `npm run format` — Sadece formatlama (VSCode'da format on save önerilir)
- **TypeScript**: `npm run type-check` — Tip güvenliği kontrolü
- **Storybook**: `npm run storybook` — UI bileşen dokümantasyonu (port 6006)
- **Storybook Build**: `npm run build-storybook` — Storybook statik export

#### Lokal Onay (Git Hooks)

- **pre-commit**: `lint-staged` — Sadece staged dosyalarda ESLint + Prettier çalıştırır
- **commit-msg**: `commitlint` — Commit mesajının [Conventional Commits](https://www.conventionalcommits.org/) formatında olmasını zorunlu kılar (geçerli tipler ve örnek için yukarıdaki commitlint bölümüne bakınız)

#### CI Pipeline (.github/workflows/ci.yml)

- Lint kontrolü
- Type-check (vue-tsc)
- Production build testi
