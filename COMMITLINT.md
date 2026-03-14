# Commitlint Konfigürasyonu

Bu doküman, projedeki `commitlint.config.js` dosyasını açıklar. Commitlint, commit mesajlarının [Conventional Commits](https://www.conventionalcommits.org/) standardına uygun olmasını sağlar. Husky ile birlikte commit öncesi çalışır.

---

## 1. Konfigürasyon Özeti

| Özellik | Değer |
| ------- | ----- |
| **Dosya** | `commitlint.config.js` |
| **Base** | `@commitlint/config-conventional` |
| **Başlık uzunluğu** | 100 karakter |

---

## 2. Commit Formatı

```
<type>(<scope>): <subject>

<body>
<footer>
```

- **type:** Zorunlu, izin verilen listeden
- **scope:** Opsiyonel (örn. `feat(auth)`)
- **subject:** Zorunlu, kısa açıklama

---

## 3. İzin Verilen type Değerleri

| type | Açıklama |
| ---- | -------- |
| `feat` | Yeni özellik |
| `fix` | Bug düzeltmesi |
| `docs` | Dokümantasyon |
| `style` | Kod formatı (mantık değişikliği yok) |
| `refactor` | Refaktör |
| `perf` | Performans |
| `test` | Test |
| `chore` | Build, config, bağımlılık vb. |

---

## 4. Kurallar

### `type-enum`

- **Seviye:** `2` (hata)
- **Koşul:** `always`
- **Değerler:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- **Açıklama:** `type` yalnızca bu değerlerden biri olabilir

### `header-max-length`

- **Seviye:** `2` (hata)
- **Değer:** `100`
- **Açıklama:** Commit başlığı (ilk satır) en fazla 100 karakter

### `subject-case`

- **Seviye:** `2` (hata)
- **Koşul:** `never`
- **Yasaklanan:** `start-case`, `pascal-case`, `upper-case`
- **Açıklama:** Subject büyük harfle başlamamalı, PascalCase veya UPPER_CASE olmamalı; küçük harf tercih edilir

---

## 5. Örnek Commit Mesajları

```bash
# Geçerli
git commit -m "feat: add user profile page"
git commit -m "fix(auth): resolve login redirect loop"
git commit -m "docs: update ESLINT.md"
git commit -m "chore: upgrade vue to 3.5"

# Geçersiz (type yanlış)
git commit -m "feature: add button"  # feat olmalı

# Geçersiz (subject-case)
git commit -m "feat: Add User Profile"  # Add yerine add
```

---

## 6. Husky Entegrasyonu

`package.json` içinde:

```json
"prepare": "husky"
```

Husky, `commit-msg` hook'unda commitlint'i çalıştırır. Geçersiz commit mesajı durumunda commit iptal edilir.

---

## 7. Evrensel Kurallar Rehberi

[commitlint Rules](https://commitlint.js.org/reference/rules.html) referansında birçok kural tanımı bulunur. En sık kullanılanlar ve kullanım nedenleri:

### En Sık Kullanılan Kurallar

| Kural | Amaç | Neden Kullanılır |
| ----- | ---- | ---------------- |
| **type-enum** | İzin verilen commit tiplerini belirler | Conventional Commits temeli; CHANGELOG ve semver için |
| **header-max-length** | Başlık uzunluğunu sınırlar (örn. 72, 100) | Git arayüzünde okunabilirlik; GitHub/GitLab'da satır taşmasını önler |
| **subject-case** | Subject'in büyük/küçük harf formatını kontrol eder | Tutarlı format; `lower-case` en yaygın tercih |
| **type-empty** | `type` boş olamaz | `type: feat` formatını zorunlu kılar |
| **subject-empty** | Subject boş olamaz | `feat:` gibi eksik açıklamaları engeller |

### Sık Kullanılan Ek Kurallar

| Kural | Amaç | Örnek |
| ----- | ---- | ----- |
| **header-full-stop** | Başlık sonunda nokta yasak | `feat: login ekle.` → ❌ |
| **body-leading-blank** | Body'den önce boş satır zorunlu | Body ile header arasında ayrım |
| **footer-leading-blank** | Footer'dan önce boş satır | Breaking changes için |
| **scope-enum** | İzin verilen scope listesi | `feat(auth):` veya `feat(api):` |
| **scope-empty** | Scope zorunlu mu | `never` = her zaman scope gerekir |

### Daha Az Kullanılan Kurallar

| Kural | Amaç | Ne Zaman Kullanılır |
| ----- | ---- | ------------------- |
| **body-max-length** | Body uzunluğu sınırı | Çok uzun açıklamaları engellemek |
| **body-max-line-length** | Satır uzunluğu sınırı | Markdown/format tutarlılığı |
| **signed-off-by** | DCO imzası zorunlu | Linux kernel, bazı open source projeler |
| **references-empty** | Issue referansı zorunlu | `Closes #123` gibi referanslar |
| **breaking-change-exclamation-mark** | `!` ile breaking change işareti | `feat!:` formatı |

### Önerilen Minimal Set

Çoğu proje için yeterli olan kurallar:

- `type-enum`
- `header-max-length`
- `subject-case`
- `header-full-stop` (opsiyonel)
- `body-leading-blank` (opsiyonel, body kullanılıyorsa)

`@commitlint/config-conventional` bu kuralların çoğunu varsayılan olarak içerir: `type-enum`, `type-case`, `type-empty`, `scope-enum`, `subject-case`, `subject-empty`, `subject-full-stop`, `header-max-length`, `header-min-length`, `body-leading-blank`, `footer-leading-blank`.

---

## 8. Referanslar

- [Commitlint](https://commitlint.js.org/)
- [Commitlint Rules](https://commitlint.js.org/reference/rules.html)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
