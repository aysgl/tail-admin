#!/usr/bin/env node
/**
 * Proje cache temizleme.
 * - clean:cache → sadece node_modules içi cache + build çıktıları (hızlı)
 * - clean:install → node_modules sil + npm install (tam yeniden kurulum)
 *
 * @see https://vite.dev/config/shared-options.html#cachedir
 */
import { rmSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const green = '\x1b[32m'
const dim = '\x1b[2m'
const reset = '\x1b[0m'

const root = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
)
const isReinstall = process.argv.includes(
  '--reinstall',
)

const cacheDirs = [
  'dist',
  'dist-ssr',
  'node_modules/.vite',
  'node_modules/.cache',
  'storybook-static',
  'coverage',
  '.nuxt-ui',
]

const reinstallDirs = [
  ...cacheDirs,
  'node_modules',
]
const dirs = isReinstall
  ? reinstallDirs
  : cacheDirs
let cleaned = 0

function remove(path: string): boolean {
  const full = join(root, path)
  if (!existsSync(full)) return false

  if (path === 'node_modules') {
    try {
      execSync('npx --yes rimraf node_modules', {
        cwd: root,
        stdio: 'pipe',
      })
      return true
    } catch {
      try {
        const cmd =
          process.platform === 'win32'
            ? `rd /s /q "${full}"`
            : `rm -rf "${full}"`
        execSync(cmd, { cwd: root })
        return true
      } catch {
        throw new Error(
          "node_modules silinemedi. Cursor/IDE kapatıp Terminal.app'den tekrar deneyin.",
        )
      }
    }
  }

  try {
    rmSync(full, { recursive: true, force: true })
    return true
  } catch {
    throw new Error(`${path} silinemedi`)
  }
}

try {
  console.log(
    `\n${isReinstall ? 'Tam yeniden kurulum' : 'Cache'} temizleniyor:\n`,
  )

  for (const path of dirs) {
    const full = join(root, path)
    if (existsSync(full)) {
      remove(path)
      console.log(`  ${green}✓${reset} ${path}`)
      cleaned++
    } else {
      console.log(
        `  ${dim}·${reset} ${path} (yok)`,
      )
    }
  }

  console.log(
    `\n${green}✓ Temizlendi.${reset} ${cleaned} öğe silindi.`,
  )

  if (isReinstall) {
    console.log(
      `  npm install ile yeniden yükleme yapılıyor...\n`,
    )
  } else {
    console.log('')
  }
} catch (err) {
  const message =
    err instanceof Error
      ? err.message
      : String(err)
  console.error(
    `\n\x1b[31m✗ Hata: ${message}\x1b[0m\n`,
  )
  process.exit(1)
}
