# Package.json Paket Açıklamaları

Bu dokümanda projedeki tüm paketlerin kısa açıklamaları ve gerekli/gereksiz durumları belirtilmiştir.

---

## Dependencies (Üretim Bağımlılıkları)

| Paket                         | Açıklama                                                             | Gerekli mi?                                                                    |
| ----------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **@fullcalendar/core**        | Takvim bileşeninin çekirdeği                                         | ✅ Gerekli - Piyasada daha iyi alternatif yok                                  |
| **@fullcalendar/daygrid**     | Günlük/haftalık takvim görünümü                                      | ✅ Gerekli                                                                     |
| **@fullcalendar/interaction** | Takvimde tıklama, sürükle-bırak etkileşimleri                        | ✅ Gerekli                                                                     |
| **@fullcalendar/timegrid**    | Saat bazlı takvim görünümü                                           | ✅ Gerekli                                                                     |
| **@fullcalendar/vue3**        | FullCalendar'ın Vue 3 entegrasyonu                                   | ✅ Gerekli                                                                     |
| **@popperjs/core**            | Popover/popper pozisyonlama (v-calendar bağımlılığı)                 | ✅ Gerekli                                                                     |
| **ag-charts-vue3**            | Grafik ve chart kütüphanesi (ag-charts-community Vue 3 entegrasyonu) | ✅ Gerekli                                                                     |
| **dropzone**                  | Dosya yükleme (drag & drop) bileşeni                                 | ⚠️ Opsiyonel - Piyasada daha iyi alternatif yok, dosya yükleme varsa tutulmalı |
| **v-calendar**                | Tarih/saat seçici (date picker) - Nuxt UI ile uyumlu                 | ✅ Gerekli - İleride Nuxt UI kullanılacak                                      |
| **jsvectormap**               | Harita görselleştirme (dünya haritası vb.)                           | ⚠️ Opsiyonel - Piyasada daha iyi alternatif yok, harita varsa tutulmalı        |
| **vue**                       | Vue.js framework                                                     | ✅ Gerekli                                                                     |
| **vue-router**                | Vue sayfa yönlendirme (routing)                                      | ✅ Gerekli                                                                     |

---

## DevDependencies (Geliştirme Bağımlılıkları)

### Build & Derleme

| Paket                      | Açıklama                                             | Gerekli mi?                                        |
| -------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| **vite**                   | Hızlı build aracı ve dev server                      | ✅ Gerekli                                         |
| **@vitejs/plugin-vue**     | Vite için Vue SFC desteği                            | ✅ Gerekli                                         |
| **@vitejs/plugin-vue-jsx** | Vue JSX/TSX desteği                                  | ⚠️ Opsiyonel - JSX kullanmıyorsanız kaldırılabilir |
| **vue-tsc**                | Vue + TypeScript type checking                       | ✅ Gerekli                                         |
| **typescript**             | TypeScript derleyicisi                               | ✅ Gerekli                                         |
| **jiti**                   | Runtime TypeScript/ESM loader (Vite config vb. için) | ✅ Gerekli                                         |

### Styling

| Paket                    | Açıklama                         | Gerekli mi? |
| ------------------------ | -------------------------------- | ----------- |
| **tailwindcss**          | Utility-first CSS framework      | ✅ Gerekli  |
| **@tailwindcss/postcss** | Tailwind v4 PostCSS entegrasyonu | ✅ Gerekli  |

### Linting & Formatting

| Paket                                 | Açıklama                          | Gerekli mi?                                       |
| ------------------------------------- | --------------------------------- | ------------------------------------------------- |
| **eslint**                            | Kod kalitesi ve stil kontrolü     | ✅ Gerekli                                        |
| **eslint-plugin-vue**                 | Vue için ESLint kuralları         | ✅ Gerekli                                        |
| **eslint-plugin-vuejs-accessibility** | Vue erişilebilirlik kuralları     | ⚠️ Opsiyonel - A11y önemsenmiyorsa kaldırılabilir |
| **prettier**                          | Kod formatlama                    | ✅ Gerekli                                        |
| **@vue/eslint-config-prettier**       | ESLint + Prettier uyumluluğu      | ✅ Gerekli                                        |
| **@vue/eslint-config-typescript**     | Vue + TypeScript ESLint kuralları | ✅ Gerekli                                        |

### Git Hooks & Commit

| Paket                               | Açıklama                                 | Gerekli mi?                                                          |
| ----------------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| **husky**                           | Git hooks yönetimi (pre-commit vb.)      | ⚠️ Opsiyonel - Hook kullanmayacaksanız kaldırılabilir                |
| **lint-staged**                     | Sadece staged dosyalarda lint çalıştırma | ⚠️ Opsiyonel - Husky ile birlikte kullanılır                         |
| **@commitlint/cli**                 | Commit mesajı format kontrolü            | ⚠️ Opsiyonel - Strict commit kuralları istemiyorsanız kaldırılabilir |
| **@commitlint/config-conventional** | Conventional commit kuralları            | ⚠️ Opsiyonel - Commitlint ile birlikte                               |

### Storybook (Bileşen Dokümantasyonu)

| Paket                        | Açıklama                                  | Gerekli mi?                                                     |
| ---------------------------- | ----------------------------------------- | --------------------------------------------------------------- |
| **storybook**                | Bileşen geliştirme ve dokümantasyon aracı | ⚠️ Opsiyonel - Bileşen kataloğu kullanmıyorsanız kaldırılabilir |
| **@storybook/vue3-vite**     | Storybook Vue3 + Vite entegrasyonu        | ⚠️ Opsiyonel                                                    |
| **@storybook/addon-docs**    | Storybook dokümantasyon eklentisi         | ⚠️ Opsiyonel                                                    |
| **@storybook/addon-a11y**    | Erişilebilirlik test eklentisi            | ⚠️ Opsiyonel                                                    |
| **@storybook/addon-designs** | Tasarım mockup eklentisi                  | ⚠️ Opsiyonel                                                    |
| **storybook-vue3-router**    | Vue Router mock'u Storybook için          | ⚠️ Opsiyonel                                                    |
| **chromatic**                | Storybook görsel regression testi (CI)    | ⚠️ Opsiyonel - Genelde CI'da kullanılır                         |

### Diğer

| Paket                        | Açıklama                             | Gerekli mi?                                |
| ---------------------------- | ------------------------------------ | ------------------------------------------ |
| **@types/node**              | Node.js TypeScript tip tanımları     | ✅ Gerekli                                 |
| **@types/dropzone**          | Dropzone TypeScript tip tanımları    | ✅ Gerekli (dropzone kullanıyorsanız)      |
| **@tsconfig/node22**         | Node 22 için önerilen tsconfig       | ✅ Gerekli                                 |
| **@vue/tsconfig**            | Vue projeleri için önerilen tsconfig | ✅ Gerekli                                 |
| **vite-plugin-vue-devtools** | Vue DevTools tarayıcı eklentisi      | ⚠️ Opsiyonel - Geliştirme kolaylığı sağlar |

---

## Özet: Kaldırılabilecek Paketler

Eğer projeyi sadeleştirmek isterseniz, aşağıdakileri kaldırmayı düşünebilirsiniz:

1. **Storybook** (7 paket) - Bileşen dokümantasyonu kullanmıyorsanız
2. **dropzone** + **@types/dropzone** - Dosya yükleme özelliği yoksa
3. **jsvectormap** - Harita bileşeni kullanılmıyorsa (daha iyi alternatif yok, gerekirse tutulmalı)
4. **Husky, lint-staged, commitlint** (4 paket) - Git hook'ları istemiyorsanız
5. **@vitejs/plugin-vue-jsx** - JSX/TSX kullanmıyorsanız
6. **eslint-plugin-vuejs-accessibility** - Erişilebilirlik kuralları istemiyorsanız
7. **chromatic** - Görsel regression testi yapmayacaksanız

---

## Not

Paket kaldırırken:

- `package.json`'dan silin
- `npm install` veya `npm prune` çalıştırın
- İlgili paketi kullanan kodları da kaldırın/güncelleyin
