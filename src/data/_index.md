# Data Klasoru Kurallari

Bu klasor, uygulama icindeki statik/veri kaynagi dosyalari icindir.

## Hızlı Okuma

- Amaç: mock/fixture/demo verilerini düzenli tutmak.
- Kural: `[feature]Data.ts` veya `[feature]Mock.ts` (camelCase).
- Örnek: `userData.ts`, `dashboardMock.ts`.

## Neler data klasorunde olmali?

- Mock veri setleri (`users.mock.ts`, `chart.mock.ts`)
- Seed/fixture benzeri gelistirme verileri
- API'ye bagli olmadan calisan demo icerikleri

## Neler data klasorunde olmamali?

- Is mantigi (composable/service katmanina tasinmali)
- UI bilesen kodu
- Global sabit anahtarlar (`src/constants` altina alinmali)

## Isimlendirme

- TypeScript dosyalari icin standart: `[feature][Type].ts` (camelCase)
- Data/mock icin `Type` degeri: `Data` veya `Mock`
- Ornek: `userData.ts`, `dashboardMock.ts`, `chartMock.ts`
- Veri tipleri ayri tanimlanmissa `types` ile iliski acik olmali.

## Kullanim Kurallari

- Veri olabildigince tipli olmali (`interface/type`).
- Buyuk mock dosyalarini feature'a gore bol.
- Ayni mock veriyi farkli dosyalarda kopyalama; ortak kaynaktan export et.

## Kaynaklar

- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — mock/fixture için tip tanımları
- [Martin Fowler: Test Data Builders](https://www.martinfowler.com/bliki/TestDataBuilder.html) — okunabilir test/fixture verisi (kavramsal)
