# Vite Konfigürasyonu

Bu doküman, projedeki `vite.config.ts` dosyasını açıklar. Vite, Vue 3 projesi için build aracı ve dev sunucusu olarak kullanılır. [Vite](https://vite.dev/) dokümantasyonuna dayanır.

## İçindekiler

1. [Konfigürasyon Özeti](#1-konfigürasyon-özeti)
2. [Plugins](#2-plugins)
3. [Build Ayarları](#3-build-ayarları)
4. [Resolve Alias](#4-resolve-alias)
5. [İlgili Komutlar](#5-ilgili-komutlar)
6. [Referanslar](#6-referanslar)

---

## 1. Konfigürasyon Özeti

| Özellik              | Değer                |
| -------------------- | -------------------- |
| **Dosya**            | `vite.config.ts`     |
| **Framework**        | Vue 3                |
| **Path alias**       | `@` → `./src`        |
| **Build sourcemap**  | `false` (production) |
| **Chunk size uyarı** | Varsayılan (500 kB)  |

---

## 2. Plugins

### `@vitejs/plugin-vue`

Vue 3 SFC (Single File Component) desteği. `.vue` dosyalarını derler.

### `vite-plugin-vue-devtools`

Vue DevTools entegrasyonu. Geliştirme sırasında component ağacı, state vb. için tarayıcı eklentisi ile uyumlu.

### `@nuxt/ui/vite`

Nuxt UI bileşen kütüphanesi. Özelleştirmeler: `primary: indigo`, `success: green`, pageCard ve card variant stilleri.

---

## 3. Build Ayarları

### sourcemap

```ts
build: {
  sourcemap: false,
  // ...
}
```

Production build'de kaynak haritası oluşturulmaz (daha küçük bundle).

### manualChunks

Kod bölme stratejisi; büyük kütüphaneler ayrı chunk'larda toplanır:

| Chunk          | Paketler                                                 |
| -------------- | -------------------------------------------------------- |
| `vue-vendor`   | vue, vue-router                                          |
| `charts`       | ag-charts-vue3, ag-charts-community                      |
| `ag-grid`      | ag-grid-vue3, ag-grid-community                          |
| `ui-libs`      | v-calendar                                               |
| `fullcalendar` | @fullcalendar/core, daygrid, interaction, timegrid, vue3 |

### chunkSizeWarningLimit

Belirtilmedi — Vite varsayılanı (500 kB) kullanılır; chunk boyutu aşıldığında uyarı verir.

---

## 4. Resolve Alias

```ts
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '#build/ui.css': fileURLToPath(new URL('./node_modules/@nuxt/ui/.nuxt/ui.css', import.meta.url))
  }
}
```

| Alias           | Hedef                                | Açıklama                              |
| --------------- | ------------------------------------ | ------------------------------------- |
| `@`             | `./src`                              | Kaynak kod import'ları için           |
| `#build/ui.css` | `node_modules/@nuxt/ui/.nuxt/ui.css` | Nuxt UI CSS fallback (.nuxt-ui yoksa) |

- **Örnek:** `import X from '@/components/X.vue'`

---

## 5. İlgili Komutlar

| Komut               | Açıklama                                             |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Geliştirme sunucusu (Vite)                           |
| `npm run build`     | check:format + check:lint + check:types + Vite build |
| `npm run storybook` | Storybook geliştirme sunucusu                        |

---

## 6. Referanslar

- [Vite Config](https://vite.dev/config/)
- [@vitejs/plugin-vue](https://github.com/vuejs/vite-plugin-vue)
- [Nuxt UI](https://ui.nuxt.com/)
