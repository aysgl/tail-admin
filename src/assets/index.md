# Assets Kurallari

Bu dosya, `src/assets` icindeki statik varliklar icin kisa ekip standardidir.

## Hızlı Okuma

- Amaç: görsel/css dosyalarını düzenli ve optimize tutmak.
- Kural: dosya adları `kebab-case` (asset dosyaları için TS pattern uygulanmaz).
- Örnek: `home-hero.webp`, `user-avatar-default.png`.

## Klasorleme

- `images/` : sayfa veya ozellik gorselleri
- `icons/` : SVG ikonlar
- `styles/` : ortak CSS parcaciklari (proje duzenine gore)
- Kokte sadece global dosyalar kalmali (`main.css` gibi)

## Isimlendirme

- Dosya adlari `kebab-case` olmali.
- Anlamli ve baglamli isimler kullan (`user-avatar-default.png` gibi).
- Suffix kullanimi net olmali (`-icon`, `-bg`, `-banner`).

## Format Tercihleri

- Ikonlar icin once `svg`.
- Fotograf agirlikli gorsellerde `webp` tercih et.
- Transparan alan gerekiyorsa `png` kullan.
- Gereksiz buyuk dosyalari optimize etmeden ekleme.

## Kullanim

- Vite import ile kullan: `import heroImage from '@/assets/images/home-hero.webp'`
- Ayni asset birden fazla yerde kullaniliyorsa tek dosya uzerinden paylas.
- Farkli klasorlerde ayni varligi kopyalama (duplicate logic/asset olusmasin).
