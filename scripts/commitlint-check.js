#!/usr/bin/env node
/**
 * Commit mesajı kontrolü — commitlint wrapper, anlaşılır hata mesajı verir
 */
import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'

const msgPath = process.argv[2]
if (!msgPath) process.exit(0)

try {
  execSync('npx', ['--no', 'commitlint', '--edit', msgPath], { stdio: 'pipe' })
} catch {
  let written = '(bilinmiyor)'
  try {
    if (msgPath) written = readFileSync(msgPath, 'utf8').split('\n')[0] || '(boş)'
  } catch {}
  const err = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ TİP HATASI: Commit mesajı formatı hatalı
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   Yazdığınız: ${written}
   Doğru format: tip: açıklama (iki noktadan sonra boşluk zorunlu)
   Örnekler: feat: yeni özellik | test: unit testleri eklendi
   Geçerli tipler: feat, fix, docs, style, refactor, perf, test, chore
   Açıklama en az 3 karakter
`
  console.error(err)
  try {
    writeFileSync('.git/COMMIT_ERROR.txt', err, 'utf8')
  } catch {}
  process.exit(1)
}
