# Services Kurallari

Bu klasor, dis sistemlerle (API, storage, third-party) konusan katmandir.

## Hızlı Okuma

- Amaç: ağ/harici entegrasyon kodunu UI'dan ayırmak.
- Kural: `[feature]Service.ts` (camelCase).
- Örnek: `authService.ts`, `productService.ts`.

## Ne olmali?

- HTTP istekleri (REST/GraphQL)
- Veri mapleme ve response normalize etme
- Uygulamaya ozel hata donusumu

## Ne olmamali?

- Vue state yonetimi (`ref`, `computed`)
- UI tarafi kosullar ve buton/ekran mantigi
- Tekrarlayan query/filter durum yonetimi (composable katmanina)

## Isimlendirme

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- Service dosyalari icin `Type` degeri: `Service`
- Ornek: `authService.ts`, `productService.ts`, `postsService.ts`
- Fonksiyon adlari fiil ile baslar: `fetchPosts`, `createPost`, `deletePost`
- Export edilen API tek bir obje veya named function olabilir; proje genelinde tutarli sec

## Hata ve tip kurali

- Girdi/cikti tipleri acik olmali (`interface` / `type`)
- `unknown` hatalari normalize ederek disari ver
- Servis, UI'ya ham `Response` degil, anlamli domain veri donmeli

## Kullanim

- View/Component dogrudan `fetch` cagrisi yapmaz; service veya composable uzerinden gider.
- Composable, service cagrip loading/error/state yonetir.
