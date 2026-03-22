export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Yeni özellik
        'fix', // Bug düzeltmesi
        'docs', // Dokümantasyon
        'style', // Kod formatı (mantık değişikliği yok)
        'refactor', // Refaktör
        'perf', // Performans
        'test', // Test
        'build', // Build, Vite, bağımlılık değişiklikleri
        'ci', // CI/CD (GitHub Actions vb.)
        'chore', // Genel bakım, config
        'revert', // Git revert mesajları
      ],
    ],
    'header-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],
    'subject-case': [
      2,
      'never',
      ['start-case', 'pascal-case', 'upper-case'],
    ],
  },
}
