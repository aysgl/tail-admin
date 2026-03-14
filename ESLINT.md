# ESLint Konfigürasyonu

Bu doküman, projedeki `eslint.config.ts` yapılandırmasını ve kullanılan eklentileri açıklar. ESLint 9+ **flat config** formatı kullanılır. Vue 3, TypeScript ve Prettier ile uyumlu bir kurulum sağlanır.

---

## 1. Konfigürasyon Özeti

| Özellik            | Değer                                         |
| ------------------ | --------------------------------------------- |
| **Config formatı** | Flat config (`eslint.config.ts`)              |
| **Lint edilen**    | `**/*.{ts,mts,tsx,vue}`                       |
| **Hariç tutulan**  | `dist`, `dist-ssr`, `coverage`                |
| **Formatlama**     | Prettier (ESLint format kuralları devre dışı) |

---

## 2. Dosya ve Dizin Kuralları

### `files` — Lint Edilen Dosyalar

```ts
files: ['**/*.{ts,mts,tsx,vue}']
```

- **`.ts`** — TypeScript dosyaları
- **`.mts`** — ESM TypeScript modülleri
- **`.tsx`** — TypeScript + JSX (React benzeri sözdizimi)
- **`.vue`** — Vue single-file component'leri

### `ignores` — Hariç Tutulan Dizinler

```ts
ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
```

| Dizin         | Açıklama                |
| ------------- | ----------------------- |
| `dist/**`     | Vite build çıktısı      |
| `dist-ssr/**` | SSR build çıktısı       |
| `coverage/**` | Test coverage raporları |

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

---

## 4. NPM Scriptleri

| Komut              | Açıklama                                                    |
| ------------------ | ----------------------------------------------------------- |
| `npm run lint`     | Tüm dosyalarda lint kontrolü (`--format stylish`)           |
| `npm run lint:fix` | Önce Prettier ile formatla, sonra ESLint `--fix` ile düzelt |
| `npm run format`   | Sadece Prettier ile formatla                                |

### Örnek Kullanım

```bash
# Sadece kontrol
npm run lint

# Otomatik düzeltme (format + lint fix)
npm run lint:fix

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

configureVueProject({ scriptLangs: ['ts', 'tsx'] })
```

Daha fazla bilgi: [eslint-config-typescript - Advanced Setup](https://github.com/vuejs/eslint-config-typescript/#advanced-setup)

---

## 7. Lint-Staged Entegrasyonu

`package.json` içindeki `lint-staged` ile commit öncesi otomatik lint ve format uygulanır:

```json
{
  "lint-staged": {
    "*.{ts,tsx,vue,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,scss,md}": ["prettier --write"]
  }
}
```

- **JS/TS/Vue:** Önce ESLint `--fix`, sonra Prettier
- **JSON/CSS/SCSS/MD:** Sadece Prettier

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
  eslint --fix  →  prettier --write
       ↓
  Commit (lint/format hatası yoksa)
```

Formatlama Prettier'a, kod kalitesi ve stil kuralları ESLint'e bırakılmıştır. İkisi birlikte çalışır; çakışma `skipFormatting` ile önlenir.
