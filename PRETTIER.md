# Prettier Tüm Seçenekler

Bu doküman, [Prettier Options](https://prettier.io/docs/options) dokümantasyonuna dayanarak tüm
konfigürasyon seçeneklerini özetler. Seçenekler dört **grupta** toplanır: formatlama, dil/dosya
türü, pragma/kontrol ve API/CLI özel seçenekler.

---

## 1. Formatlama Seçenekleri (Proje Standardı)

Aşağıdaki değerler proje standardı kabul edilir. `.prettierrc.json` bu tabloya göre tutulur.

### `printWidth`

- **Proje Standardı:** `100`
- **Varsayılan:** `80`
- **Değerler:** sayı (karakter)
- **Açıklama:** Satır uzunluğu limiti

### `tabWidth`

- **Proje Standardı:** `4`
- **Varsayılan:** `2`
- **Değerler:** sayı
- **Açıklama:** Girinti genişliği (.editorconfig ile uyumlu)

### `useTabs`

- **Proje Standardı:** `false`
- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Boşluk kullan (tab değil)

### `semi`

- **Proje Standardı:** `false`
- **Varsayılan:** `true`
- **Değerler:** `true`, `false`
- **Açıklama:** Noktalı virgül kullanılmaz

### `singleQuote`

- **Proje Standardı:** `true`
- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Dize sabitleri tek tırnak (')

### `quoteProps`

- **Proje Standardı:** varsayılan (`as-needed`)
- **Varsayılan:** `as-needed`
- **Değerler:** `as-needed`, `consistent`, `preserve`
- **Açıklama:** Obje key'lerinde tırnak gerektiğinde

### `jsxSingleQuote`

- **Proje Standardı:** `true`
- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** JSX'te tek tırnak

### `trailingComma`

- **Proje Standardı:** `none`
- **Varsayılan:** `all`
- **Değerler:** `all`, `es5`, `none`
- **Açıklama:** Son öğeden sonra virgül

### `bracketSpacing`

- **Proje Standardı:** `true`
- **Varsayılan:** `true`
- **Değerler:** `true`, `false`
- **Açıklama:** Obje literal'lerinde `{ foo: bar }` boşluklu

### `bracketSameLine`

- **Proje Standardı:** `false`
- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** HTML/JSX kapanış `>` ayrı satırda

### `arrowParens`

- **Proje Standardı:** `always`
- **Varsayılan:** `always`
- **Değerler:** `always`, `avoid`
- **Açıklama:** Ok fonksiyonlarında `(x) => x` parantezli

### `singleAttributePerLine`

- **Proje Standardı:** `true`
- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** HTML/Vue/JSX'te her attribute ayrı satırda

### `endOfLine`

- **Proje Standardı:** `lf`
- **Varsayılan:** `lf`
- **Değerler:** `lf`, `crlf`, `cr`, `auto`
- **Açıklama:** Satır sonu Unix (LF)

---

## 2. Dil / Dosya Türü Seçenekleri

Parser seçimi ve dil özelinde davranışlar. Genelde otomatik çıkarım yeterlidir; özel durumlarda bu
seçeneklere ihtiyaç olur.

### `parser`

- **Varsayılan:** otomatik
- **Değerler:** `babel`, `babel-ts`, `typescript`, `css`, `scss`, `json`, `markdown`, `vue`, `html`,
  `yaml`, ...
- **Açıklama:** Kullanılacak parser

### `embeddedLanguageFormatting`

- **Varsayılan:** `auto`
- **Değerler:** `auto`, `off`
- **Açıklama:** Dosya içindeki gömülü kodun (örn. Markdown'daki JS) formatlanması

### `htmlWhitespaceSensitivity`

- **Varsayılan:** `css`
- **Değerler:** `css`, `strict`, `ignore`
- **Açıklama:** HTML'de boşluk hassasiyeti

### `proseWrap`

- **Varsayılan:** `preserve`
- **Değerler:** `always`, `never`, `preserve`
- **Açıklama:** Markdown metin satırlarının sarılması

### `vueIndentScriptAndStyle`

- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Vue dosyalarında `<script>` ve `<style>` içeriğini girintile

---

## 3. Deneysel Seçenekler

Henüz varsayılan davranışa alınmamış, gelecekte değişebilecek seçenekler.

### `**experimentalTernaries**`

- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Yeni ternary operatör formatı (soru işareti koşuldan sonra)

### `experimentalOperatorPosition`

- **Varsayılan:** `end`
- **Değerler:** `start`, `end`
- **Açıklama:** Satır sarma sırasında operatörün konumu

---

## 4. Pragma / Kontrol Seçenekleri

Hangi dosyaların formatlanacağını veya atlanacağını belirleyen seçenekler. `@prettier`, `@format`,
`@noprettier`, `@noformat` gibi yorumlarla birlikte kullanılır.

### `requirePragma`

- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Sadece `@prettier` veya `@format` içeren dosyaları formatla

### `insertPragma`

- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** Formatlanan dosyalara `@format` pragma ekle

### `checkIgnorePragma`

- **Varsayılan:** `false`
- **Değerler:** `true`, `false`
- **Açıklama:** `@noprettier` / `@noformat` içeren dosyaları atla

---

## 5. Eklentiler ve Override'lar

### plugins

Prettier varsayılan olarak JS, Vue, JSON vb. formatlarını destekler. Tailwind CSS class sıralaması
gibi özel sözdizimleri için eklentiler kullanılır.

```json
{
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

### overrides

Farklı dosya türleri için farklı ayarlar tanımlanabilir (örn. Markdown için daha uzun satır, JSON
için farklı girinti).

```json
{
    "overrides": [
        { "files": "*.md", "options": { "printWidth": 120 } },
        { "files": "*.json", "options": { "tabWidth": 4 } }
    ]
}
```

---

## 6. API/CLI Özel Seçenekler

Bu seçenekler config dosyasında değil, her format çağrısında API veya CLI argümanı olarak verilir.
Proje genelinde sabit değil, çağrıya özeldir.

### filepath

Parser'ı dosya uzantısından otomatik seçer. Config'te olmamasının nedeni: config proje genelinde
geçerli, `filepath` ise "şu an hangi dosya formatlanıyor?" bilgisi — her çağrıda değişir. Özellikle
stdin ile içerik verildiğinde gerekir; Prettier dosyayı okumadığı için uzantıyı bilemez.

```bash
cat Component.vue | prettier --stdin-filepath Component.vue
```

```js
await prettier.format(text, { filepath: 'src/App.vue' })
```

### rangeStart / rangeEnd

Dosyanın sadece belirli karakter aralığını formatlar. Editörde "seçili alanı formatla" bu API'yi
kullanır. Karakter indeksi 0'dan başlar; `rangeStart` dahil, `rangeEnd` hariç. Aralık, tam bir
ifade/statement içerecek şekilde genişletilir.

```js
await prettier.format(text, { rangeStart: 50, rangeEnd: 200, filepath: 'file.js' })
```

### cursorOffset

Format sonrası imlecin nerede kalacağını hesaplar. Editör entegrasyonları için kullanılır; format
yapınca imleç kaybolmasın diye. `formatWithCursor` API'si ile kullanılır: girişte format öncesi
konum, çıkışta format sonrası konum döner.

```js
const { formatted, cursorOffset } = await prettier.formatWithCursor('  const x=1', {
    cursorOffset: 10,
    parser: 'babel'
})
// formatted: 'const x = 1;\n'
// cursorOffset: 12  ← imleç "1"den sonra kalır
```

---
