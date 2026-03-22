#!/usr/bin/env node
/**
 * Storybook tarzı kutu çıktısı ile komut çalıştırır.
 * Alt süreç çıktıları │ ile sarılarak kutu içinde gösterilir.
 *
 * Kullanım: npx tsx scripts/run.ts "Başlık" "komut"
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
  'Vite build': '◇  vite build çalışıyor…',
}
if (hint[title])
  console.log(`│  ${hint[title]}\n│`)

function prefixLines(
  stream: NodeJS.ReadableStream,
): void {
  let buffer = ''
  const onData = (chunk: Buffer | string) => {
    buffer += chunk.toString()
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines)
      process.stdout.write(
        line.length > 0 ? `│  ${line}\n` : '│\n',
      )
  }
  stream.on('data', onData)
  stream.on('end', () => {
    if (buffer.trim().length > 0)
      process.stdout.write(`│  ${buffer}\n`)
  })
}

const child = spawn(command, {
  shell: true,
  cwd: root,
  stdio: ['inherit', 'pipe', 'pipe'],
  env: process.env,
})

prefixLines(child.stdout)
prefixLines(child.stderr)

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
