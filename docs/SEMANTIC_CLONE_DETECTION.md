# Semantic Clone Detection Araçları

Bu doküman, **aynı mantığı farklı söz dizimiyle yazan** kodları bulan (semantic clone) araçları özetler. `jscpd` gibi token bazlı araçlardan farklı olarak AST (Abstract Syntax Tree) tabanlı analiz yaparlar.

---

## Önerilen Araçlar

### 1. similarity-ts (Öncelikli Öneri)

**Tip:** AST tabanlı, yapısal benzerlik (Tree Similarity of Edit Distance)

| Özellik       | Değer                                                       |
| ------------- | ----------------------------------------------------------- |
| **Dil**       | TypeScript, JavaScript, JSX, TSX                            |
| **Kurulum**   | `cargo install similarity-ts` (Rust gerekli)                |
| **Vue SFC**   | `.vue` desteklenmiyor; sadece `.ts`, `.tsx`, `.js`, `.jsx`  |
| **Algoritma** | APTED, TSED (değişken/fonksiyon adı farklarını tolere eder) |

**Örnek:**

```bash
# Proje genelinde benzer fonksiyonları bul
similarity-ts src/

# Eşik ayarla (0–1, varsayılan 0.8)
similarity-ts --threshold 0.85

# Kod parçalarını göster
similarity-ts --print

# Sadece belirli dizin
similarity-ts src/components/
```

**Artıları:**

- Renamed functions/variables desteği (Options API vs Composition API tarzı farkları yakalayabilir)
- Hızlı, Rust tabanlı
- `sortArray` ↔ `orderArray` gibi farklı isimli ama benzer yapıdaki fonksiyonları bulur

**Eksileri:**

- Rust kurulumu gerekir
- `.vue` dosyalarını doğrudan taramaz (script blokları için ayrı işlem gerekir)

---

### 2. jsinspect

**Tip:** AST tabanlı, yapısal benzerlik

| Özellik            | Değer                           |
| ------------------ | ------------------------------- |
| **Dil**            | ES6, JSX, Flow (TypeScript yok) |
| **Kurulum**        | `npm install -g jsinspect`      |
| **Vue SFC**        | Desteklenmiyor                  |
| **Son güncelleme** | ~2017 (bakım yok)               |

**Semantic benzerlik için önemli seçenekler:**

```bash
# Identifier’ları yok say (değişken/fonksiyon adları)
jsinspect -I

# Literal’ları yok say (string, number vb.)
jsinspect -L

# İkisi birden → sadece yapıya bak
jsinspect -I -L -t 20 src/

# Minimum node sayısı (varsayılan 30)
jsinspect -t 50 --ignore "test" src/
```

**Artıları:**

- `-I -L` ile sadece yapısal benzerlik
- NPM ile kurulum kolay

**Eksileri:**

- Eski, Vue/TS desteği yok
- Babylon tabanlı, modern sözdizimiyle sınırlı

---

### 3. astdiff (shcv)

**Tip:** AST diff, structural fingerprinting

| Özellik      | Değer                               |
| ------------ | ----------------------------------- |
| **Dil**      | JavaScript                          |
| **Kurulum**  | Rust projesi, `cargo build`         |
| **Kullanım** | İki dosya veya commit karşılaştırma |

Daha çok refactoring doğrulama ve diff için. Proje genelinde clone taraması odaklı değil.

---

### 4. Araştırma / Deneysel Araçlar

| Araç                              | Dil      | Açıklama                                      |
| --------------------------------- | -------- | --------------------------------------------- |
| **Amain**                         | Python   | AST + Markov chain, semantic clone            |
| **TreeCen**                       | Python   | AST + tree graph, merkezilik analizi          |
| **Semantic-Code-Clone-Detection** | Python   | CFG, live-variable analizi; **sadece Python** |
| **Rator**                         | Akademik | Tree encoding, Type 4 clone tespiti           |

Bunlar çoğunlukla Python ve akademik kullanım için. Vue/TS projelerinde pratik entegrasyon zor.

---

## Vue Projesi İçin Önerilen Akış

Projeniz Vue 3 + TypeScript + `.vue` SFC kullandığı için:

### Seçenek A: similarity-ts + script extraction

1. Vue dosyalarındaki `<script>` bloklarını `.ts` dosyalarına çıkar
2. `similarity-ts src/` çalıştır

Örnek script çıkarma (tek seferlik):

```bash
# Örnek: vue SFC'lerden script çıkar (basit bir script ile)
# Sonra similarity-ts çalıştır
```

### Seçenek B: jsinspect sadece `.ts` / `.js` dosyalarında

Script kısmı ayrı `.ts` dosyalarında olan composables, utils vb. için:

```bash
jsinspect -I -L -t 25 src/composables src/utils src/**/*.ts
```

### Seçenek C: jscpd + sıkı eşik

Token bazlı kalsa da, yüksek eşikle anlamlı tekrarları azaltmak için:

```bash
npx jscpd src --min-lines 15 --min-tokens 80
```

---

## Semantic vs Syntactic Karşılaştırma

| Kriter                                                   | jscpd (syntactic)    | similarity-ts / jsinspect (semi-semantic) |
| -------------------------------------------------------- | -------------------- | ----------------------------------------- |
| Aynı HTML/component yapısı                               | Bulur                | Genelde bulmaz (.vue desteği yok)         |
| `topla()` vs `computeSum()` aynı mantık                  | Bulmaz               | Bulabilir                                 |
| Options API vs Composition API aynı iş                   | Bulmaz               | Kısmen bulabilir (yapı benzerliği)        |
| `array.filter(x => x > 0)` vs `array.filter(n => n > 0)` | Bulur (token benzer) | Bulur (yapı aynı)                         |

**Gerçek semantic clone** (aynı iş, tamamen farklı yazım) için akademik/LLM tabanlı yöntemler gerekir; pratik araçlar sınırlı.

---

## Hızlı Başlangıç

**Rust kuruluysa:**

```bash
cargo install similarity-ts
similarity-ts src/ --print
```

**Sadece npm:**

```bash
npx jsinspect -I -L -t 25 src/
```

**jscpd ile daha az false positive:**

```bash
npx jscpd src --min-lines 15 --min-tokens 80
```
