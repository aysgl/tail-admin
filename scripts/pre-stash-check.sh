#!/bin/sh
# Stash yapar, sonrasında hatırlatma gösterir
# Kullanım: npm run stash  veya  ./scripts/pre-stash-check.sh [git stash argümanları]
# stash:setup ile alias kullanılıyorsa recursion önlenir

git -c alias.stash= stash "$@"
exit_code=$?

if [ $exit_code -eq 0 ]; then
  echo ""
  echo "⚠️  Stash tamamlandı. Geri döndüğünüzde: npm run lint:fix && npm run lint && npm run type-check && npm run build"
  echo ""
fi

exit $exit_code
