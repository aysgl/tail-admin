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

Aşağıdaki akış, bir geliştiricinin kod yazımından yayına alım sürecine kadar takip ettiği kalite kontrol adımlarını özetler:

| Aşama                           | Açıklama                                       | Araçlar                                                                                          |
| ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Geliştirme Aşaması**          | Kod editörü üzerinde real-time kontrol         | ESLint, Prettier, TypeScript                                                                     |
| **Lokal Onay (Git Commit)**     | Kodun depoya gönderilmeden önceki son filtresi | Husky (Git Hooks), lint-staged (sadece değişen dosyalar), commitlint (standart commit mesajları) |
| **Doğrulama (Git Push / PR)**   | Uzak sunucuda otomatik kontrol süreci          | CI Pipeline: Lint kontrolü, Tip kontrolü (Type-check) ve Build testi                             |
| **Final Onay ve Dokümantasyon** | Akran denetimi ve bileşen dokümantasyonu       | Code Review, Storybook (önerilir)                                                                |

### Akış Diyagramı

```
Kod Yazımı → ESLint/Prettier (Editör) → Git Commit → Husky + lint-staged → commitlint
     → Git Push/PR → CI (Lint + Type-check + Build) → Code Review → Merge
```

### Araç Seçimi (Tool Selection) 🚗

| Tool                    | Görev                          | Alternatif   | Neden Seçildi                                            |
| ----------------------- | ------------------------------ | ------------ | -------------------------------------------------------- |
| **ESLint**              | Kod kalitesi kontrolü          | Biome        | ESLint ekosistemi geniş, TypeScript + Vue desteği güçlü  |
| **Prettier**            | Kod formatlama                 | Rome         | Henüz olgun değil, Prettier yaygın ve stabil             |
| **Husky + lint-staged** | Commit öncesi kontrol          | -            | Sadece değişen dosyaları kontrol eder, performans yüksek |
| **Commitlint**          | Semantic commit                | -            | Otomatik changelog ve okunabilir Git history             |
| **Storybook**           | UI izolasyonu ve dokümantasyon | Styleguidist | Geniş ekosistem ve addon desteği (projeye eklenebilir)   |

### Kullanım Detayları

#### Geliştirme Aşaması

- **ESLint**: `npm run lint` — Kod kalitesi ve stil kuralları
- **Prettier**: `npm run format` — Otomatik formatlama (VSCode'da format on save önerilir)
- **TypeScript**: `npm run type-check` — Tip güvenliği kontrolü

#### Lokal Onay (Git Hooks)

- **pre-commit**: `lint-staged` — Sadece staged dosyalarda ESLint + Prettier çalıştırır
- **commit-msg**: `commitlint` — Commit mesajının [Conventional Commits](https://www.conventionalcommits.org/) formatında olmasını zorunlu kılar

**Geçerli commit tipleri:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Örnek commit mesajı:** `feat: kullanıcı giriş sayfası eklendi`

- **pre-commit**: Commit öncesi tarayıcıda checklist sayfası açılır (IDE dahil her yerde çalışır).
- **pre-push**: Push öncesi hatırlatma — `npm run lint` ve `npm run build` çalıştırdığınızdan emin olun.

#### Stash Öncesi Kontrol

`git stash` kullanmadan önce lint, format ve build çalıştırıldığından emin olmak için:

```bash
npm run stash
```

veya `git stash` komutunu bu uyarıyla kullanmak için (bir kez çalıştırın):

```bash
npm run stash:setup
```

Bundan sonra `git stash` yazdığınızda otomatik uyarı gelir:

- **[y]** Evet, devam et
- **[n]** Hayır, iptal et
- **[r]** Hayır, önce lint:fix + build çalıştır, sonra stash yap

#### CI Pipeline (.github/workflows/ci.yml)

- Lint kontrolü
- Type-check (vue-tsc)
- Production build testi

### Önerilen IDE Ayarları (.vscode/settings.json)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Update Logs

### Version 2.0.2 - [December 30, 2025]

#### Enhancements

- Added date range picker to Statistics Chart component.
- Improved responsive design for chart header.

### Version 2.0.1 - [February 27, 2025]

#### Update Overview

- Upgraded to Tailwind CSS v4 for better performance and efficiency.
- Updated class usage to match the latest syntax and features.
- Replaced deprecated class and optimized styles.

#### Next Steps

- Run npm install or yarn install to update dependencies.
- Check for any style changes or compatibility issues.
- Refer to the Tailwind CSS v4 [Migration Guide](https://tailwindcss.com/docs/upgrade-guide) on this release. if needed.
- This update keeps the project up to date with the latest Tailwind improvements. 🚀

### Version 2.0.0 - [February 2025]

Major update with Vue 3 migration and comprehensive redesign.

#### Major Improvements

- Complete migration to Vue 3 Composition API
- Updated to Vue Router 4
- Enhanced user interface with new Vue 3 components
- Improved performance with Vue 3's virtual DOM
- Better accessibility and responsive design

#### New Features

- Redesigned dashboards (Ecommerce, Analytics, Marketing, CRM)
- Collapsible sidebar with Vue 3 integration
- Enhanced navigation with Vue Router 4
- Real-time chat functionality
- Full-featured calendar with drag-and-drop
- Advanced table components
- Updated data visualization with ApexCharts

#### Breaking Changes

- Requires Vue 3 and Vue Router 4
- Chart components migrated to ApexCharts for Vue 3
- Modified routing implementation
- Updated component APIs for Vue 3 compatibility

[Read more](https://tailadmin.com/docs/update-logs/vue) on this release.

### Version 1.0.2 - [June 19, 2024]

#### Issues

- Fix Mobile Menu Hamburger Icon issue.

### Version 1.0.1 - [Feb 08, 2024]

#### Enhancements

- Make it functional [Multiselect Dropdown/Form Elements].
- Delete SelectGroup Components then create a SelectGroup folder and create two files under this
  folder SelectGroupOne.vue SelectGroupTwo.vue [Select Group/Form Elements & Layout].
- Update style.css file.

### Version 1.0.0 - Initial Release - [Jan 22, 2024]

- Initial release of TailAdmin Vue.
