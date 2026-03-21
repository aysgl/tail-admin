# Config Dosyaları İncelemesi

Tüm konfigürasyon dosyalarının gerekli/gereksiz durumu.

## Proje config’leri

| Dosya                    | Açıklama                                                       | Durum                                   |
| ------------------------ | -------------------------------------------------------------- | --------------------------------------- |
| **tsconfig.json**        | Root TS config; tsconfig.app ve tsconfig.node’a referans verir | ✅ Gerekli — vue-tsc, Vite için         |
| **tsconfig.app.json**    | Uygulama kaynakları (src, storybook)                           | ✅ Gerekli                              |
| **tsconfig.node.json**   | Build ortamı (vite.config, eslint.config)                      | ✅ Gerekli                              |
| **vite.config.ts**       | Vite build, Nuxt UI, chunk stratejisi                          | ✅ Gerekli                              |
| **eslint.config.ts**     | ESLint flat config, Vue/TS/a11y kuralları                      | ✅ Gerekli                              |
| **commitlint.config.js** | Conventional commit kuralları                                  | ✅ Gerekli — CI’da commitlint çalışıyor |
| **.prettierrc.json**     | Prettier formatlama ayarları                                   | ✅ Gerekli                              |

## Editör / araç

| Dosya              | Açıklama                               | Durum                                         |
| ------------------ | -------------------------------------- | --------------------------------------------- |
| **.editorconfig**  | indent, charset, satır sonu            | ⚠️ Opsiyonel — takım tutarlılığı için faydalı |
| **.npmrc**         | `legacy-peer-deps=true`                | ⚠️ Bağımlılık çakışması varsa gerekli         |
| **.gitattributes** | LF, merge stratejileri (.md dosyaları) | ⚠️ Opsiyonel — merge çakışmalarını azaltır    |
| **.gitignore**     | İgnore kuralları                       | ✅ Gerekli                                    |

## Storybook (kullanıyorsanız)

| Dosya                     | Açıklama                                | Durum      |
| ------------------------- | --------------------------------------- | ---------- |
| **.storybook/main.ts**    | Storybook + Nuxt UI + Vite entegrasyonu | ✅ Gerekli |
| **.storybook/preview.ts** | Dekoratörler, a11y ayarları             | ✅ Gerekli |
| **.storybook/routes.ts**  | Storybook route mock’ları               | ✅ Gerekli |

## Git hooks

| Dosya                 | Açıklama                     | Durum                        |
| --------------------- | ---------------------------- | ---------------------------- |
| **.husky/pre-commit** | lint-staged çalıştırır       | ✅ Gerekli                   |
| **.husky/pre-push**   | Sadece uyarı mesajı gösterir | ⚠️ Opsiyonel — engelleme yok |

## Workspace (Cursor / VS Code)

| Dosya                       | Açıklama                          | Durum        |
| --------------------------- | --------------------------------- | ------------ |
| **.vscode/settings.json**   | Format on save, formatter, eslint | ⚠️ Opsiyonel |
| **.vscode/extensions.json** | Önerilen eklentiler               | ⚠️ Opsiyonel |

## Kaldırılmış / yok

| Dosya                  | Durum                                               |
| ---------------------- | --------------------------------------------------- |
| **postcss.config.js**  | Kaldırıldı — @nuxt/ui Tailwind’i Vite ile yönetiyor |
| **tailwind.config.js** | Yok — Nuxt UI + @tailwindcss/vite kullanıyor        |
| **.husky/commit-msg**  | Silinmiş (git status)                               |

## İnceleme Detayı (Gereksiz / Sadeleştirilen)

| Dosya                 | Değişiklik                                                                          |
| --------------------- | ----------------------------------------------------------------------------------- |
| **tsconfig.json**     | compilerOptions kaldırıldı — project references sadece tsconfig.app/node kullanıyor |
| **tsconfig.app.json** | `src/**/*.vue` kaldırıldı — `src/**/*` zaten .vue dahil tüm dosyaları kapsıyor      |
| **eslint.config.ts**  | Silinmiş dosyaya referans kaldırıldı (ESLINT-SUNUM-OZETI.md)                        |
| **.prettierrc.json**  | Varsayılan ayarlar kaldırıldı: useTabs, bracketSpacing, quoteProps, arrowParens     |

## Özet

- Tüm proje config’leri gerekli.
- Storybook kullanıyorsanız .storybook/ dosyaları gerekli.
- .editorconfig, .npmrc, .gitattributes, .vscode/ ve .husky/pre-push opsiyonel; ihtiyaca göre tutulabilir veya kaldırılabilir.
