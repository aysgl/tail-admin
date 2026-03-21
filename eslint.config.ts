/**
 * ESLint Flat Config — Vue 3 + TypeScript + Prettier
 *
 * Paketler:
 *   eslint-plugin-vue              → Vue kuralları (.vue dosyaları)
 *   eslint-plugin-vuejs-accessibility → Erişilebilirlik (a11y)
 *   @vue/eslint-config-typescript   → TypeScript kuralları
 *   @vue/eslint-config-prettier    → Prettier ile çakışmayı önler
 */
import pluginVue from 'eslint-plugin-vue'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,js,mjs,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/storybook-static/**',
      '**/*.d.ts',
    ],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  // Vue erişilebilirlik (a11y) – alt-text, form-label, aria-*, key-events vb.
  ...pluginVueA11y.configs['flat/recommended'],
  {
    name: 'app/vue-a11y-extended',
    rules: {
      'vuejs-accessibility/no-aria-hidden-on-focusable':
        'error',
      'vuejs-accessibility/no-onchange': 'error',
      'vuejs-accessibility/no-role-presentation-on-focusable':
        'error',
    },
  },
  {
    name: 'app/vue-a11y-label-has-for',
    rules: {
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          required: { some: ['nesting', 'id'] },
          allowChildren: true,
        },
      ],
      'vuejs-accessibility/form-control-has-label':
        'error',
    },
  },
  {
    name: 'app/vue-style-rules',
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
      ],
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
    },
  },
  {
    name: 'app/no-console',
    rules: {
      'no-console': 'warn',
    },
  },
  // CLI script'leri terminale yazdırır; console kullanımı beklenir
  {
    name: 'app/scripts-console-allowed',
    files: ['scripts/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  skipFormatting,
)
