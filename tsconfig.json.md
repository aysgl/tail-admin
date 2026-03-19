# TypeScript Konfigürasyonu

Bu doküman, projedeki TypeScript config dosyalarını açıklar. Proje **project references** kullanır;
ana `tsconfig.json` birden fazla alt projeye referans verir.

---

## 1. Dosya Yapısı

| Dosya                      | Amaç                                             |
| -------------------------- | ------------------------------------------------ |
| `tsconfig.json`            | Ana config, referansları toplar                  |
| `tsconfig.app.json`        | Uygulama kaynak kodu (`src/`)                    |
| `tsconfig.node.json`       | Node ortamı (Vite, ESLint, vb. config dosyaları) |
| `.storybook/tsconfig.json` | Storybook config                                 |

---

## 2. tsconfig.json (Ana)

Ana config dosyası `files` ve `include` ile doğrudan dosya içermez; sadece referansları tanımlar.

### compilerOptions

Her seçeneğin ne yaptığı ve neden kullanıldığı:

- **`target`** (`ES2022`)

  - **Ne yapar:** Üretilen JS'in hangi ES sürümüne göre yazılacağını belirler.
  - **Neden:** Modern tarayıcılar ES2022 desteklediği için; class fields, top-level await vb.
    kullanılabilir.
  - **Olası değerler:** `ES3`, `ES5`, `ES6`/`ES2015`, `ES2016`–`ES2024`, `ESNext`
  - **Karar:** Tarayıcı desteği vs. modern özellikler. Eski tarayıcı → ES5/ES2020. Yeni proje →
    ES2022/ES2024.

- **`useDefineForClassFields`** (`true`)

  - **Ne yapar:** Class field'larının ES2022 tarzında davranmasını sağlar.
  - **Neden:** Yeni standartla uyum için; `declare` edilmiş field'lar artık gerçekten tanımlanır.

- **`module`** (`ESNext`)

  - **Ne yapar:** Modül sistemini (import/export) ESNext olarak ayarlar.
  - **Neden:** Vite gibi araçlar ESM kullandığı için; derleme çıktısı ESM formatında olur.
  - **Olası değerler:** `CommonJS`, `ES6`/`ES2015`, `ES2020`, `ES2022`, `ESNext`,
    `Node16`/`NodeNext`
  - **Karar:** Bundler projesi → `ESNext`. Node.js ESM → `nodenext`. Node.js CJS → `CommonJS`.

- **`lib`** (`["ES2022", "DOM", "DOM.Iterable"]`)

  - **Ne yapar:** Hangi tip tanımlarının kullanılacağını belirler.
  - **Neden:** ES2022 API'leri + DOM API'leri (`document`, `window`, vb.) için tip desteği sağlar.
  - **Olası değerler:** `ES5`, `ES2015`–`ES2024`, `ESNext`, `DOM`, `DOM.Iterable`, `WebWorker`,
    `ScriptHost`
  - **Karar:** Genelde `target` ile uyumlu tut. `target`'tan yüksek `lib` → yeni API tipleri,
    polyfill gerekebilir.

- **`skipLibCheck`** (`true`)

  - **Ne yapar:** `.d.ts` dosyalarının tip kontrolünden geçirilmesini kapatır.
  - **Neden:** `node_modules` içindeki tip dosyalarını kontrol etmez; derleme hızlanır ve üçüncü
    parti paket hatalarından etkilenmezsin.

- **`moduleResolution`** (`bundler`)

  - **Ne yapar:** Modül çözümleme stratejisini "bundler" moduna alır.
  - **Neden:** Vite/Webpack gibi araçlarla uyumlu; `package.json` `exports` alanını doğru
    yorumlar.
  - **Olası değerler:** `bundler`, `node16`/`nodenext`, `node10`/`node`, `classic`
    (kullanılmamalı)
  - **Karar:** Vite/Webpack → `bundler`. Node.js ESM → `nodenext`. Eski Node → `node10`.

- **`allowImportingTsExtensions`** (`true`)

  - **Ne yapar:** `.ts` uzantılı dosyalardan import etmeye izin verir.
  - **Neden:** `isolatedModules` ile birlikte kullanılır; her modül kendi uzantısıyla import
    edilir.

- **`resolveJsonModule`** (`true`)

  - **Ne yapar:** JSON dosyalarının `import` ile yüklenmesine izin verir.
  - **Neden:** `import data from './data.json'` gibi kullanımlar için gerekir.

- **`isolatedModules`** (`true`)

  - **Ne yapar:** Her dosyanın tek başına derlenebilir olmasını zorunlu kılar.
  - **Neden:** Babel, esbuild, Vite gibi araçlar dosya bazlı derleme yaptığı için; `const enum`
    vb. kısıtlamalar getirir.

- **`noEmit`** (`true`)

  - **Ne yapar:** TypeScript'in JS dosyası üretmesini kapatır.
  - **Neden:** Sadece tip kontrolü yapılır; asıl derlemeyi Vite yapar.

- **`jsx`** (`preserve`)

  - **Ne yapar:** JSX'i olduğu gibi bırakır, JS'e çevirmez.
  - **Neden:** Vue/Vite kendi JSX işleyicisini kullandığı için; dönüşümü TypeScript yapmaz.
  - **Olası değerler:** `preserve`, `react`, `react-jsx`, `react-jsxdev`, `react-native`
  - **Karar:** Vue/Vite → `preserve`. React 17+ → `react-jsx`. React Native → `react-native`.

- **`strict`** (`true`)

  - **Ne yapar:** Tüm sıkı tip kontrollerini açar.
  - **Neden:** `null`/`undefined` hatalarını azaltır, tip güvenliğini artırır.

- **`noUnusedLocals`** (`true`)

  - **Ne yapar:** Kullanılmayan yerel değişkenleri hata sayar.
  - **Neden:** Gereksiz kod ve olası hataları azaltır.

- **`noUnusedParameters`** (`true`)

  - **Ne yapar:** Kullanılmayan fonksiyon parametrelerini hata sayar.
  - **Neden:** Temiz API ve callback kullanımı sağlar.

- **`noFallthroughCasesInSwitch`** (`true`)

  - **Ne yapar:** `switch` içinde `break` unutulduğunda hata verir.
  - **Neden:** Yanlışlıkla bir sonraki `case`'e düşmeyi engeller.

- **`baseUrl`** (`"."`)

  - **Ne yapar:** Path alias'ların kök dizinini belirler.
  - **Neden:** `paths` ile birlikte `@/` gibi kısa import yolları kullanmak için.

- **`paths`** (`"@/*": ["src/*"]`)
  - **Ne yapar:** `@/` ile `src/` arasında eşleme yapar.
  - **Neden:** `import X from '@/components/X.vue'` gibi kısa import'lar için.

### files ve references

- **`files: []`** — Ana config dosyada hiç dosya tanımlanmaz; tüm dosyalar `references` ile verilen
  alt projelerde (`tsconfig.app.json`, `tsconfig.node.json`, `.storybook/tsconfig.json`) tanımlıdır.
- **`references`** — Proje referansları kullanılır; her alt proje kendi `include`/`exclude`
  ayarlarıyla kendi dosyalarını derler. Böylece uygulama, Node config'leri ve Storybook ayrı ayrı
  derlenir.

### references

```json
"references": [
  { "path": "./tsconfig.node.json" },
  { "path": "./tsconfig.app.json" },
  { "path": "./.storybook/tsconfig.json" }
]
```

Alt projeler: Node config'ler, uygulama kodu, Storybook.

---

## 3. tsconfig.app.json (Uygulama)

Uygulama kaynak kodu için kullanılır.

### extends

```json
"extends": "@vue/tsconfig/tsconfig.dom.json"
```

- **Ne yapar:** Başka bir config dosyasından ayarları devralır.
- **Neden:** Vue projeleri için önerilen DOM ortamı ayarlarını kullanır.
- **Olası değerler:** `./tsconfig.base.json`, `@vue/tsconfig/tsconfig.dom.json`,
  `@tsconfig/vite-react/tsconfig.json` vb. (Node.js path çözümlemesi)
- **Karar:** Vue → `@vue/tsconfig/tsconfig.dom.json`. React → `@vitejs/tsconfig` veya benzeri. Özel
  base → `./tsconfig.base.json`.

### include / exclude

- **`include`** (`["env.d.ts", "src/**/*", "src/**/*.vue"]`)

  - **Ne yapar:** Derlenecek dosya pattern'lerini belirler.
  - **Neden:** Uygulama kaynak kodu + env tipleri dahil edilir.
  - **Olası değerler:** Glob pattern dizisi (`**/*`, `src/**/*.ts`, `src/**/*.vue` vb.)
  - **Karar:** Kaynak dizin yapına göre. Vue → `.vue` dahil. Test hariç tutulabilir.

- **`exclude`** (`["src/**/__tests__/*"]`)
  - **Ne yapar:** `include` sonucundan çıkarılacak pattern'leri belirler.
  - **Neden:** Test dosyaları ayrı config veya Vitest ile işlenir.
  - **Olası değerler:** Glob pattern dizisi (`node_modules`, `dist`, `**/__tests__/*` vb.)
  - **Karar:** Derlenmemesi gereken dizinler. Varsayılan `node_modules` zaten hariç.

### compilerOptions

- **`incremental`** (`true`)

  - **Ne yapar:** Önceki derleme sonucunu cache'ler, sadece değişen dosyaları yeniden derler.
  - **Neden:** `type-check` ve IDE tip kontrolü çok daha hızlı çalışır.
  - **Olası değerler:** `true`, `false`
  - **Karar:** Büyük proje → `true`. Küçük proje veya CI'da temiz build → `false` da olabilir.

- **`tsBuildInfoFile`** (`./node_modules/.tmp/tsconfig.app.tsbuildinfo`)

  - **Ne yapar:** Artımlı derleme cache dosyasının konumunu belirler.
  - **Neden:** Cache `node_modules` içinde tutulur; git'e karışmaz.
  - **Olası değerler:** Herhangi bir dosya yolu (`.tsbuildinfo` uzantılı)
  - **Karar:** Git'e girmemesi için `node_modules` veya `.tmp` altı. Varsayılan: `outDir` yanında.

- **`paths`** (`"@/*": ["./src/*"]`)
  - **Ne yapar:** `@/` ile `src/` arasında eşleme yapar.
  - **Neden:** Ana config'teki path alias'ı uygulama projesine özelleştirir.
  - **Olası değerler:** `{ "alias/*": ["./gerçek/yol/*"] }` formatında obje.
  - **Karar:** `baseUrl` ile uyumlu. Vite `resolve.alias` ile aynı olmalı.

---

## 4. tsconfig.node.json (Node)

Vite, ESLint, Vitest vb. Node ortamında çalışan config dosyaları için kullanılır.

### extends

```json
"extends": "@tsconfig/node22/tsconfig.json"
```

Node 22 hedefli temel ayarlar.

### include

```json
[
  "vite.config.*",
  "vitest.config.*",
  "eslint.config.*"
]
```

Bu pattern'lere uyan dosyalar Node projesine dahildir.

### compilerOptions

- **`noEmit`** (`true`)

  - **Ne yapar:** TypeScript'in JS dosyası üretmesini kapatır.
  - **Neden:** Config dosyaları zaten Vite/ESLint tarafından çalıştırılır; sadece tip kontrolü
    gerekir.

- **`composite`** (`true`)

  - **Ne yapar:** Bu projeyi project references zincirine dahil eder.
  - **Neden:** Ana `tsconfig.json` bu projeyi referans olarak kullanabilir.

- **`module`** (`ESNext`)

  - **Ne yapar:** Modül sistemini ESNext (ESM) olarak ayarlar.
  - **Neden:** Vite, ESLint vb. ESM kullandığı için.

- **`moduleResolution`** (`Bundler`)

  - **Ne yapar:** Modül çözümleme stratejisini bundler moduna alır.
  - **Neden:** Config dosyaları Vite ile yüklendiği için.

- **`types`** (`["node"]`)

  - **Ne yapar:** Sadece Node.js tip tanımlarını yükler.
  - **Neden:** DOM tipleri gerekmez; `process`, `__dirname` vb. için Node tipleri yeterli.

- **`allowSyntheticDefaultImports`** (`true`)
  - **Ne yapar:** `export default` olmayan modüllerden `import X from 'mod'` yazmaya izin verir.
  - **Neden:** Eski CommonJS paketlerinden default import yaparken hata vermez.

---

## 5. .storybook/tsconfig.json

Storybook config ve addon'ları için.

- **`extends`** (`../tsconfig.json`)

  - **Ne yapar:** Ana config'teki tüm ayarları devralır.

- **`include`** (`./**/*`)

  - **Ne yapar:** `.storybook/` altındaki tüm dosyaları kapsar.

- **`composite`**

  - **Ne yapar:** Project references'e dahil eder.
  - **Neden:** Ana `tsconfig.json` Storybook'u da tip kontrolüne alır.

- **`noEmit`**

  - **Ne yapar:** JS çıktısı üretmez.
  - **Neden:** Storybook kendi build sürecini kullanır.

- **`tsBuildInfoFile`**
  - **Ne yapar:** Artımlı derleme cache konumunu belirler.
  - **Neden:** Storybook tip kontrolü hızlanır.

---

## 6. Path Alias Kullanımı

Tüm uygulama config'lerinde `@` → `src/`:

```ts
import Component from '@/components/Component.vue'
import { useStore } from '@/stores/store'
```

Vite `vite.config.ts` içinde aynı alias tanımlı; derleme ve çalışma zamanı uyumludur.

---

## 7. type-check Komutu

```bash
npm run type-check
```

`vue-tsc --build` çalıştırır; tüm referans projeleri derlenir ve tip hataları raporlanır.

---

## 8. Proje Tipine Göre Özet

| Proje tipi           | target               | module          | moduleResolution |
| -------------------- | -------------------- | --------------- | ---------------- |
| **Vue/Vite web app** | ES2022               | ESNext          | bundler          |
| **React + Vite**     | ES2022               | ESNext          | bundler          |
| **Node.js ESM**      | ESNext               | nodenext        | nodenext         |
| **Node.js CommonJS** | ES2020               | CommonJS        | node10           |
| **npm kütüphanesi**  | En düşük desteklenen | node18/nodenext | nodenext         |

- [TypeScript TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
