# EditorConfig

Bu doküman, projedeki `.editorconfig` dosyasını açıklar. EditorConfig, farklı editörler ve IDE'ler arasında tutarlı kod stili sağlamak için kullanılır. [EditorConfig](https://editorconfig.org/) standardına uygundur.

---

## 1. Konfigürasyon Özeti

| Özellik        | Değer                                   |
| -------------- | --------------------------------------- |
| **Dosya**      | `.editorconfig`                         |
| **Hedef**      | `*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}` |
| **Girinti**    | 2 boşluk (space)                        |
| **Satır sonu** | LF (Unix)                               |

---

## 2. Aktif Seçenekler

### `root = true`

Bu dosyadan sonra üst dizinlerdeki `.editorconfig` dosyaları yok sayılır. Proje kökü bu dosyadır.

### `charset`

- **Değer:** `utf-8`
- **Açıklama:** Dosya karakter seti

### `indent_size`

- **Değer:** `2`
- **Açıklama:** Girinti genişliği (karakter sayısı)
- **Not:** Prettier `tabWidth: 4` kullanıyor; EditorConfig editör varsayılanı, Prettier formatlama sırasında kendi ayarını uygular.

### `indent_style`

- **Değer:** `space`
- **Değerler:** `space`, `tab`
- **Açıklama:** Boşluk kullan (tab değil)

### `end_of_line`

- **Değer:** `lf`
- **Değerler:** `lf`, `crlf`, `cr`
- **Açıklama:** Unix satır sonu (LF)

### `insert_final_newline`

- **Değer:** `true`
- **Açıklama:** Dosya sonuna boş satır ekle

### `trim_trailing_whitespace`

- **Değer:** `true`
- **Açıklama:** Satır sonundaki gereksiz boşlukları kaldır

---

## 3. Hedef Dosya Deseni

```ini
[*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}]
```

| Uzantı | Açıklama            |
| ------ | ------------------- |
| `.js`  | JavaScript          |
| `.jsx` | JSX                 |
| `.mjs` | ESM JavaScript      |
| `.cjs` | CommonJS JavaScript |
| `.ts`  | TypeScript          |
| `.tsx` | TypeScript + JSX    |
| `.mts` | ESM TypeScript      |
| `.cts` | CommonJS TypeScript |
| `.vue` | Vue SFC             |

---

## 4. Yorum Satırında Olan Seçenekler

Dosyada yorum olarak listelenen, editör desteğine göre kullanılabilecek seçenekler:

| Seçenek                           | Açıklama                                                                 |
| --------------------------------- | ------------------------------------------------------------------------ |
| `quote_type`                      | Tırnak tercihi: `single`, `double`, `auto`                               |
| `c_include_path`                  | C/C++ include yolları                                                    |
| `java_class_path`                 | Java CLASSPATH                                                           |
| `curly_bracket_next_line`         | Süslü parantez stili                                                     |
| `spaces_around_operators`         | Operatör etrafında boşluk                                                |
| `spaces_around_brackets`          | Parantez etrafında boşluk                                                |
| `indent_brace_style`              | Süslü parantez stili (K&R, Allman, vb.)                                  |
| `wildcard_import_limit`           | Wildcard import limiti                                                   |
| `continuation_indent_size`        | Devam satırı girintisi                                                   |
| `line_comment`, `block_comment_*` | Yorum karakterleri                                                       |
| `max_line_length`                 | Satır uzunluğu (çoğu editör desteklemez; Prettier `printWidth` kullanın) |

---

## 5. Prettier ile İlişki

- **Girinti:** EditorConfig `indent_size: 2`, Prettier `tabWidth: 4` kullanıyor. Proje formatlaması Prettier ile yapıldığı için kaynak kodda 4 boşluk uygulanır. EditorConfig, editörün varsayılan girintisini belirler; Prettier kaydettiğinde kendi ayarını uygular.
- **Satır sonu, son satır, boşluk:** Her ikisi de LF, final newline ve trim trailing whitespace konusunda uyumludur.

---

## 6. IDE Desteği

EditorConfig, VS Code, WebStorm, Sublime Text, Vim ve birçok editörde varsayılan veya eklenti ile desteklenir. Proje dizininde `.editorconfig` olduğunda editör bu ayarları otomatik uygular.
