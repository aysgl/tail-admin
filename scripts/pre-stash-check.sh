#!/bin/sh
# Stash öncesi uyarı: lint, format, build çalıştırıldı mı kontrolü
# Kullanım: npm run stash  veya  ./scripts/pre-stash-check.sh [git stash argümanları]

# Değişiklik var mı kontrol et (--quiet: değişiklik yoksa 0 döner)
if git diff --quiet 2>/dev/null && git diff --cached --quiet 2>/dev/null; then
  echo "ℹ️  Stash edilecek değişiklik yok."
  exit 0
fi

echo ""
echo "⚠️  STASH UYARISI"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Lint, format ve build komutlarını çalıştırdınız mı?"
echo ""
echo "  [y] Evet, devam et (stash yap)"
echo "  [n] Hayır, iptal et"
echo "  [r] Hayır, önce çalıştır (lint:fix + build) sonra stash yap"
echo ""
printf "  Seçiminiz (y/n/r): "
read -r choice

case "$choice" in
  [yY]|[yY][eE][sS])
    # alias.stash= ile recursion önlenir (git alias kullanılıyorsa)
    exec git -c alias.stash= stash "$@"
    ;;
  [nN]|[nN][oO])
    echo ""
    echo "  Stash iptal edildi."
    exit 1
    ;;
  [rR])
    echo ""
    echo "  📦 lint:fix ve build çalıştırılıyor..."
    npm run lint:fix && npm run build
    if [ $? -eq 0 ]; then
      echo ""
      echo "  ✅ Kontroller tamamlandı. Stash yapılıyor..."
      # alias.stash= ile recursion önlenir (git alias kullanılıyorsa)
      exec git -c alias.stash= stash "$@"
    else
      echo ""
      echo "  ❌ Lint veya build hata verdi. Stash yapılmadı."
      exit 1
    fi
    ;;
  *)
    echo ""
    echo "  Geçersiz seçim. Stash iptal edildi."
    exit 1
    ;;
esac
