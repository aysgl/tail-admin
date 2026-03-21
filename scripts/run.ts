#!/usr/bin/env node
/**
 * Storybook tarzı kutu çıktısı ile komut çalıştırır.
 * Kullanım: npx tsx scripts/run.ts "Başlık" "komut"
 *
 * Örnek: npx tsx scripts/run.ts "Lint" "eslint . --format stylish"
 */
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
)

const green = '\x1b[32m'
const red = '\x1b[31m'
const reset = '\x1b[0m'

const [title, ...cmdParts] = process.argv.slice(2)
const command = cmdParts.join(' ')

if (!title || !command) {
  console.error(
    'Kullanım: npx tsx scripts/run.ts "Başlık" "komut"',
  )
  process.exit(1)
}

console.log(`\n┌  ${title}\n│`)

const hint: Record<string, string> = {
  'Type check': '◇  vue-tsc çalışıyor…',
  Lint: '◇  eslint çalışıyor…',
  Format: '◇  prettier --check çalışıyor…',
  'Format fix': '◇  prettier --write çalışıyor…',
}
if (hint[title])
  console.log(`│  ${hint[title]}\n│`)

const child = spawn(command, {
  shell: true,
  cwd: root,
  stdio: 'inherit',
  env: process.env,
})

child.on('close', (code) => {
  const ok = code === 0
  if (ok) {
    console.log(
      `└  ${green}✓ ${title} tamamlandı${reset}\n`,
    )
  } else {
    console.log(
      `└  ${red}✗ ${title} başarısız (çıkış: ${code})${reset}\n`,
    )
  }
  process.exit(code ?? 1)
})
