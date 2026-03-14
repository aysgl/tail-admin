#!/usr/bin/env node
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, 'commit-reminder.html')

const cmd = process.platform === 'win32'
  ? `start "" "${htmlPath}"`
  : process.platform === 'darwin'
    ? `open "${htmlPath}"`
    : `xdg-open "${htmlPath}"`

try {
  execSync(cmd, { stdio: 'ignore' })
} catch {
  // Tarayıcı açılamazsa sessizce devam et
}
