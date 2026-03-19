# PostCSS Konfigürasyonu

Bu doküman, projedeki `postcss.config.js` dosyasını açıklar. PostCSS, CSS işleme pipeline'ı sağlar. Bu projede özellikle Tailwind CSS v4 için kullanılır.

---

## 1. Konfigürasyon Özeti

| Özellik      | Değer                  |
| ------------ | ---------------------- |
| **Dosya**    | `postcss.config.js`    |
| **Plugin**   | `@tailwindcss/postcss` |
| **Tailwind** | v4 (CSS-first config)  |

---

## 2. Mevcut Konfigürasyon

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

`@tailwindcss/postcss` Tailwind CSS v4 için PostCSS eklentisidir. Ek seçenek gerekmez; varsayılan ayarlar yeterlidir.

---

## 3. Tailwind v4 Farkı

Tailwind CSS v4'te:

- **Ayrı `tailwind.config.js` yok** — tema ve değişkenler `@theme` ile CSS içinde tanımlanır (`src/assets/main.css`)
- **PostCSS eklentisi** — `@tailwindcss/postcss` gerekli
- **`@import 'tailwindcss'`** — CSS dosyasında Tailwind import edilir

---

## 4. CSS Pipeline

```
main.css
    ↓
PostCSS (@tailwindcss/postcss)
    ↓
Tailwind directive'leri işlenir, utility class'lar üretilir
    ↓
Vite (build)
```

---

## 5. Ek PostCSS Eklentileri

Autoprefixer, cssnano vb. eklemek için:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    // cssnano: {}  // production minify
  },
}
```

Bu projede Vite zaten CSS işleme ve minify yaptığı için ek eklenti gerekmez.

---

## 6. Referanslar

- [Tailwind CSS v4 - PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
- [PostCSS](https://postcss.org/)
