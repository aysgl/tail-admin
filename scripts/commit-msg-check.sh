#!/usr/bin/env sh

# Commit mesajı formatını kontrol et (--quiet: teknik çıktıyı gizle)
if ! npx --no -- commitlint --edit "$1" --quiet 2>/dev/null; then
  echo ""
  echo "Commit message does not follow Conventional Commits."
  echo "Example: feat: add feature | fix: fix bug | test: add tests"
  echo ""
  exit 1
fi
