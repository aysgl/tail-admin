# Component - Bileşen İsimlendirme Kuralları

Vue [Style Guide](https://vuejs.org/style-guide/rules-strongly-recommended.html/) ile uyumlu, tutarlı isimlendirme.

## Hızlı Okuma

- Amaç: `.vue` dosyalarında okunabilir ve tutarlı isimlendirme.
- Kural: Bileşen dosyaları `PascalCase.vue`.
- İstisna notu: `[feature][Type].ts` kuralı TypeScript dosyaları içindir.

## Çok kelimeli isim (zorunlu)

- Tüm bileşen dosyaları **en az iki kelime** olmalıdır (tek kelime HTML etiketleriyle karışır).
- Örnek: `UserCard.vue`, `BaseButton.vue` — `Card.vue`, `Button.vue` değil.

## Önekler ve roller

### Base / App (temel UI)

- Ağır iş mantığı taşımayan, çoğunlukla görünüm / yeniden kullanılabilir parçalar.
- Örnek: `BaseButton.vue`, `BaseInput.vue`, `BaseModal.vue`
- `App` öneki genelde kök düzeyi, uygulamaya özgü kabuk bileşenler için kullanılabilir.

### The (tek örnek)

- Proje veya büyük bir bölgede **yalnızca bir kez** kullanılan ana yapı parçaları.
- Örnek: `TheHeader.vue`, `TheSidebar.vue`, `TheFooter.vue`

### Özellik tabanlı (feature)

- Aynı domain / özellik altında toplanan bileşenler **ortak önekle** başlamalıdır; dosya listesinde yan yana düşer.
- Örnek: `UserCard.vue`, `UserList.vue`, `UserProfileDetail.vue`

## Dosya adı ve kullanım

- Dosya adı **PascalCase** ve `.vue` uzantılı.
- Şablonda ve `<script setup>` içindeki bileşen adı, dosya adıyla uyumlu olmalıdır.
- Not: `[feature][Type].ts` (camelCase) kuralı TypeScript dosyaları içindir; `.vue` bileşenlerde PascalCase korunur.

## Nuxt UI ile birlikte

- Hazır primitive'ler (`UButton`, `UModal` vb.) varken aynı işi yapan ikinci bir `Base*` katmanı oluşturma; gerekirse ince bir wrapper veya slot ile projeye özelle.
