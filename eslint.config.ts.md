# ESLint Konfigürasyonu

Bu doküman, projedeki `eslint.config.ts` yapılandırmasını ve kullanılan eklentileri açıklar. ESLint 9+ **flat config** formatı kullanılır. Vue 3, TypeScript ve Prettier ile uyumlu bir kurulum sağlanır.

## İçindekiler

1. [Konfigürasyon Özeti](#1-konfigürasyon-özeti)
2. [Dosya ve Dizin Kuralları](#2-dosya-ve-dizin-kuralları)
3. [Eklentiler ve Kurallar](#3-eklentiler-ve-kurallar)
4. [NPM Scriptleri](#4-npm-scriptleri)
5. [Kural Devre Dışı Bırakma](#5-kural-devre-dışı-bırakma)
6. [Gelişmiş Kurulum (Opsiyonel)](#6-gelişmiş-kurulum-opsiyonel)
7. [Lint-Staged Entegrasyonu](#7-lint-staged-entegrasyonu)
8. [IDE Desteği](#8-ide-desteği)
9. [Özet Akış](#9-özet-akış)

---

## 1. Konfigürasyon Özeti

| Özellik            | Değer                                                        |
| ------------------ | ------------------------------------------------------------ |
| **Config formatı** | Flat config (`eslint.config.ts`)                             |
| **Lint edilen**    | `**/*.{ts,mts,js,mjs,vue}`                                   |
| **Hariç tutulan**  | `dist`, `dist-ssr`, `coverage`, `storybook-static`, `*.d.ts` |
| **Formatlama**     | Prettier (ESLint format kuralları devre dışı)                |

---

## 2. Dosya ve Dizin Kuralları

### `files` — Lint Edilen Dosyalar

```ts
files: ['**/*.{ts,mts,js,mjs,vue}']
```

- **`.ts`** — TypeScript dosyaları
- **`.mts`** — ESM TypeScript modülleri
- **`.js`** — JavaScript dosyaları (örn. `commitlint.config.js`)
- **`.mjs`** — ESM JavaScript modülleri (projede kullanılmıyor)
- **`scripts/*.ts`** — CLI script'ler (`run.ts`, `clean.ts`) — tsx ile çalıştırılır
- **`.vue`** — Vue single-file component'leri

**Not:** `.tsx` projede kullanılmıyor; Vue SFC kullanıldığı için dahil edilmedi. TSX kullanımı planlanıyorsa pattern'e eklenebilir.

### `ignores` — Hariç Tutulan Dizinler ve Dosyalar

```ts
ignores: [
  '**/dist/**',
  '**/dist-ssr/**',
  '**/coverage/**',
  '**/storybook-static/**',
  '**/*.d.ts',
]
```

| Pattern               | Açıklama                           |
| --------------------- | ---------------------------------- |
| `dist/**`             | Vite build çıktısı                 |
| `dist-ssr/**`         | SSR build çıktısı                  |
| `coverage/**`         | Test coverage raporları            |
| `storybook-static/**` | Storybook build çıktısı            |
| `*.d.ts`              | Tip tanım dosyaları (env.d.ts vb.) |

---

## 3. Eklentiler ve Kurallar

### `eslint-plugin-vue`

Vue 3 için resmi ESLint eklentisi. Template, script ve style bloklarını analiz eder.

- **Kullanılan preset:** `pluginVue.configs['flat/essential']`
- **Kapsam:** Vue best practices, template syntax, component yapısı
- **Dokümantasyon:** [eslint-plugin-vue](https://eslint.vuejs.org/)

### `@vue/eslint-config-typescript`

Vue + TypeScript projeleri için önerilen TypeScript kuralları.

- **Kullanılan preset:** `vueTsConfigs.recommended`
- **Kapsam:** TypeScript tip güvenliği, `no-unused-vars`, `no-explicit-any` vb.
- **Dokümantasyon:** [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)

### `@vue/eslint-config-prettier` (skipFormatting)

Prettier ile çakışan ESLint format kurallarını devre dışı bırakır. Formatlama **sadece Prettier** tarafından yapılır.

- **Kullanılan:** `skipFormatting`
- **Amaç:** ESLint ↔ Prettier çakışmasını önlemek
- **Not:** `eslint-config-prettier` benzeri davranış; format kuralları ESLint'te kapalı

### `eslint-plugin-vuejs-accessibility` (a11y)

Erişilebilirlik kuralları. Recommended preset'e ek olarak özelleştirilmiş kurallar:

- **app/vue-a11y-extended:** `no-aria-hidden-on-focusable`, `no-onchange`, `no-role-presentation-on-focusable`
- **app/vue-a11y-label-has-for:** `label-has-for` ve `form-control-has-label` (özel seçeneklerle)

### Projeye Özel Kurallar

| Kural bloğu                     | Kurallar                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **app/vue-style-rules**         | `vue/multi-word-component-names`, `vue/component-name-in-template-casing` (PascalCase), `vue/block-order` (template → script → style) |
| **app/no-console**              | `no-console: warn` — console kullanımına uyarı                                                                                        |
| **app/scripts-console-allowed** | `scripts/**/*.ts` için `no-console: off` — CLI script'lerde console kullanımı serbest                                                 |

---

## 4. NPM Scriptleri

| Komut                  | Açıklama                                          |
| ---------------------- | ------------------------------------------------- |
| `npm run check:lint`   | Tüm dosyalarda lint kontrolü (`--format stylish`) |
| `npm run fix:lint`     | ESLint `--fix` ile otomatik düzeltme              |
| `npm run check:format` | Sadece Prettier ile kontrol                       |
| `npm run fix:format`   | Prettier ile formatla                             |

### Örnek Kullanım

```bash
# Sadece kontrol
npm run check:lint

# Otomatik düzeltme (format + lint)
npm run fix:format && npm run fix:lint

# Belirli dosya veya dizin
npx eslint src/views --fix
npx eslint src/App.vue --format stylish
```

---

## 5. Kural Devre Dışı Bırakma

### Dosya Başına

```ts
/* eslint-disable */
```

Tüm ESLint kurallarını o dosya için kapatır.

### Tek Satır

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData()
```

Belirli bir kuralı sadece bir sonraki satır için kapatır.

### Belirli Kurallar

```ts
/* eslint-disable @typescript-eslint/no-explicit-any, vue/multi-word-component-names */
```

Sadece belirtilen kuralları kapatır.

### Blok İçinde

```ts
/* eslint-disable no-console */
console.log('debug')
/* eslint-enable no-console */
```

Belirli bir blokta kuralları geçici olarak kapatır.

---

## 6. Gelişmiş Kurulum (Opsiyonel)

`.vue` dosyalarında `ts` dışında `tsx` gibi ek script dilleri kullanmak için:

```ts
import { configureVueProject } from '@vue/eslint-config-typescript'

configureVueProject({
  scriptLangs: ['ts', 'tsx'],
})
```

Daha fazla bilgi: [eslint-config-typescript - Advanced Setup](https://github.com/vuejs/eslint-config-typescript/#advanced-setup)

---

## 7. Lint-Staged Entegrasyonu

`package.json` içindeki `lint-staged` ile commit öncesi otomatik lint ve format uygulanır:

```json
{
  "lint-staged": {
    "*.{ts,tsx,vue,js,jsx,mts,mjs}": [
      "prettier --write",
      "eslint --fix --no-warn-ignored"
    ],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

- **JS/TS/Vue:** Önce Prettier ile format, sonra ESLint `--fix`
- **JSON/CSS/MD:** Sadece Prettier

---

## 8. IDE Desteği

VS Code için önerilen eklenti: `dbaeumer.vscode-eslint`

`.vscode/extensions.json` içinde tanımlıdır. Kurulum sonrası dosya kaydedildiğinde veya manuel olarak lint uyarıları gösterilir.

---

## 9. Özet Akış

```
Dosya değişikliği
       ↓
  Husky (pre-commit)
       ↓
  Lint-staged
       ↓
  prettier --write  →  eslint --fix
       ↓
  Commit (lint/format hatası yoksa)
```

Formatlama Prettier'a, kod kalitesi ve stil kuralları ESLint'e bırakılmıştır. İkisi birlikte çalışır; çakışma `skipFormatting` ile önlenir.
