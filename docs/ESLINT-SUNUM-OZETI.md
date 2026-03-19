# ESLint Kurulumu — Sunum Özeti (2 dk)

## Paketler ve Rolleri

| Paket                                 | Rol             | Tek cümle                                          |
| ------------------------------------- | --------------- | -------------------------------------------------- |
| **eslint**                            | Motor           | Lint çalıştıran ana araç                           |
| **eslint-plugin-vue**                 | Vue kuralları   | `.vue` dosyaları için Vue best practices           |
| **eslint-plugin-vuejs-accessibility** | Erişilebilirlik | `button`, `label`, `alt` vb. a11y kontrolleri      |
| **@vue/eslint-config-typescript**     | TypeScript      | Tip güvenliği, `no-unused-vars` vb.                |
| **@vue/eslint-config-prettier**       | Prettier uyumu  | ESLint format kurallarını kapatır, çakışmayı önler |

---

## Akış (Sunumda Göster)

```
┌─────────────────────────────────────────────────────────────┐
│  ESLint Config (eslint.config.ts)                           │
├─────────────────────────────────────────────────────────────┤
│  1. Hangi dosyalar?     → *.ts, *.tsx, *.vue                │
│  2. Vue kuralları       → eslint-plugin-vue (essential)     │
│  3. TypeScript kuralları→ @vue/eslint-config-typescript     │
│  4. Erişilebilirlik     → eslint-plugin-vuejs-accessibility │
│  5. Prettier çakışması  → skipFormatting (format ESLint'ta) │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Commit öncesi (Husky + lint-staged)                         │
│  eslint --fix  →  prettier --write  →  Commit                │
└─────────────────────────────────────────────────────────────┘
```

---

## Özet Cümle (Sunumda Söylenecek)

> **"5 paket var: ESLint motoru, Vue kuralları, erişilebilirlik, TypeScript ve Prettier uyumu. Hepsi tek config dosyasında; commit öncesi otomatik çalışıyor."**

---

## Komutlar

| Komut              | Ne yapar                     |
| ------------------ | ---------------------------- |
| `npm run lint`     | Kontrol et                   |
| `npm run lint:fix` | Prettier + ESLint ile düzelt |
| `npm run format`   | Sadece Prettier              |
