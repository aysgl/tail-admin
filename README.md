# TailAdmin Vue - Free Vue.js Tailwind CSS Admin Dashboard Template

TailAdmin Vue is a free, open-source admin dashboard template **built on Vue.js**, popular and progressive JavaScript
framework, and **Tailwind CSS**. This **powerful combination** provides developers with an extensive library of
essential components, elements, and pages to launch a comprehensive and data-centric back-end, dashboard, or admin panel
solution for any Vue.js based web projects.

![TailAdmin Vue.js Dashboard Preview](./public/images/banner.png)

With TailAdmin Vue, you can leverage **Vue.js 3** features such as declarative rendering, component-based architecture,
Vue Router for routing, and Pinia for state management. It also utilizes the power of Tailwind CSS for rapid UI
development with its low-level utility classes and responsive design capabilities.

## Overview

TailAdmin provides essential UI components and layouts for building feature-rich, data-driven admin dashboards and control panels. It's built on:

- Vue 3.x (Vite)
- Tailwind CSS 4.x
- TypeScript

Tüm bağımlılıklar ve script'ler için `package.json` dosyasına bakın.

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

- **Node.js:** Minimum 22.x (Node 24 ile de uyumludur)
- **Paket yöneticisi:** `npm` kullanın — `package-lock.json` commit edilir, tutarlılık için yarn/pnpm karıştırmayın
- **IDE:** [VSCode](https://code.visualstudio.com/) veya [Cursor](https://cursor.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) önerilir (Vetur devre dışı)

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
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Production build:

   ```bash
   npm run build
   ```

#### Cache Temizleme ve Yeniden Kurulum

- **`npm run clean:cache`** — node_modules, dist, storybook-static, coverage, npm cache siler
- **`npm run clean:install`** — clean:cache + `npm install --legacy-peer-deps` ile temiz kurulum

> **Not:** @nuxt/ui peer dep uyumu için `--legacy-peer-deps` kullanılır. Cursor/VS Code açıkken `EPERM` hatası alırsanız IDE’yi kapatıp **Terminal.app**’den çalıştırın.

Tüm komutlar (`check:*`, `fix:*`, `storybook`, `stash` vb.) ve script lifecycle için [package.json.md](./package.json.md) ve [Config Dokümantasyonu & Tooling](#config-dokümantasyonu--tooling-) bölümüne bakın.

## Config Dokümantasyonu & Tooling ⚠️

Bu projedeki tüm yapılandırma dosyalarının dokümantasyonu. **Merge conflict yaşamamak için** config dokümanlarını güncellerken dikkatli olun.

### Config Dokümanları

| Dosya                                | Açıklama                           |
| ------------------------------------ | ---------------------------------- |
| [package.json.md](./package.json.md) | Paketler ve script lifecycle       |
| [COMMITLINT.md](./COMMITLINT.md)     | Commit mesajı kuralları ve formatı |
| [EDITORCONFIG.md](./EDITORCONFIG.md) | EditorConfig ayarları              |
| [ESLINT.md](./ESLINT.md)             | ESLint kuralları ve kullanımı      |
| [POSTCSS.md](./POSTCSS.md)           | PostCSS yapılandırması             |
| [PRETTIER.md](./PRETTIER.md)         | Prettier formatlama kuralları      |
| [STORYBOOK.md](./STORYBOOK.md)       | Storybook kurulumu ve kullanımı    |
| [TSCONFIG.md](./TSCONFIG.md)         | TypeScript yapılandırması          |
| [VITE.md](./VITE.md)                 | Vite build ve dev ayarları         |

### Takım Gereksinimleri

- **Node.js:** Minimum Node 22.x (Node 24 ile de uyumludur)
- **Paket yöneticisi:** `npm` kullanın — `package-lock.json` commit edilir, tutarlılık için yarn/pnpm karıştırmayın
- **IDE:** VSCode veya Cursor + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) önerilir (Vetur devre dışı)

### Frontend Tooling Akışı & Standartları 🚦

Aşağıdaki akış, bir geliştiricinin kod yazımından yayına alım sürecine kadar takip ettiği kalite kontrol adımlarını özetler:

| Aşama                           | Açıklama                                       | Araçlar                                                                                          |
| ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Geliştirme Aşaması**          | Kod editörü üzerinde real-time kontrol         | ESLint, Prettier, TypeScript                                                                     |
| **Lokal Onay (Git Commit)**     | Kodun depoya gönderilmeden önceki son filtresi | Husky (Git Hooks), lint-staged (sadece değişen dosyalar), commitlint (standart commit mesajları) |
| **Doğrulama (Git Push / PR)**   | Uzak sunucuda otomatik kontrol süreci          | CI Pipeline: Lint kontrolü, Tip kontrolü (Type-check) ve Build testi                             |
| **Final Onay ve Dokümantasyon** | Akran denetimi ve bileşen dokümantasyonu       | Code Review, Storybook (önerilir)                                                                |

#### Akış Diyagramı

```
Kod Yazımı → ESLint/Prettier (Editör) → Git Commit → Husky + lint-staged → commitlint
     → Git Push/PR → CI (Lint + Type-check + Build) → Code Review → Merge
```

#### Araç Seçimi (Tool Selection) 🚗

| Tool                    | Görev                          | Alternatif   | Neden Seçildi                                            |
| ----------------------- | ------------------------------ | ------------ | -------------------------------------------------------- |
| **ESLint**              | Kod kalitesi kontrolü          | Biome        | ESLint ekosistemi geniş, TypeScript + Vue desteği güçlü  |
| **Prettier**            | Kod formatlama                 | Rome         | Henüz olgun değil, Prettier yaygın ve stabil             |
| **Husky + lint-staged** | Commit öncesi kontrol          | -            | Sadece değişen dosyaları kontrol eder, performans yüksek |
| **Commitlint**          | Semantic commit                | -            | Otomatik changelog ve okunabilir Git history             |
| **Storybook**           | UI izolasyonu ve dokümantasyon | Styleguidist | Geniş ekosistem ve addon desteği (projeye eklenebilir)   |

#### Kullanım Detayları

**Geliştirme Aşaması**

- **check:\*** — kontrol (dosya değiştirmez): `check:lint`, `check:format`, `check:types`
- **fix:\*** — düzelt (dosyayı değiştirir): `fix:lint`, `fix:format` (prefix var, ayrı ayrı)

**Lokal Onay (Git Hooks)**

| Hook           | Ne yapar                                                                               |
| -------------- | -------------------------------------------------------------------------------------- |
| **pre-commit** | `lint-staged` — staged dosyalarda ESLint + Prettier                                    |
| **commit-msg** | Commit mesajı formatı kontrolü (commitlint)                                            |
| **pre-push**   | Commit mesajları kontrolü (**IDE commit'leri de yakalanır**) + lint/build hatırlatması |

**Geçerli commit tipleri:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Örnek commit mesajı:** `feat: kullanıcı giriş sayfası eklendi`

**Not:** IDE sadece script yolunu gösterebilir. Hata mesajı `COMMIT_ERROR.txt` dosyasına yazılır (proje kökünde, IDE'de görünür).

**Stash Sonrası Hatırlatma**

`npm run stash` veya `git stash` (stash:setup sonrası) kullandığınızda stash tamamlandıktan sonra hatırlatma gösterilir:

```bash
npm run stash
# veya git stash kullanmak için (bir kez): npm run stash:setup
```

Stash sonrası: `fix:format`, `fix:lint`, `check:types`, `build` sırasını çalıştırmanız hatırlatılır.

**CI Pipeline** (.github/workflows/ci.yml)

- Lint kontrolü
- Type-check (vue-tsc)
- Production build testi

**Önerilen IDE Ayarları** (.vscode/settings.json)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Conflict Önleme İpuçları

- Config değişikliği yapmadan önce `git pull` ile güncel olun
- Mümkünse config dokümanlarını tek kişi güncellemeye çalışın
- Merge sonrası `*.md` dosyalarını kontrol edin
