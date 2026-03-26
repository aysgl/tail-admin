/**
 * ESLint Flat Config — Vue 3 + TypeScript + Prettier + GraphQL
 *
 * Paketler:
 *   eslint-plugin-vue              → Vue kuralları (.vue dosyaları)
 *   @vue/eslint-config-typescript  → TypeScript kuralları
 *   @vue/eslint-config-prettier   → Prettier ile çakışmayı önler
 *   @graphql-eslint/eslint-plugin  → .graphql dosyaları (şema ile lint)
 *
 * Erişilebilirlik: Storybook addon-a11y ile kontrol edilir.
 */
import graphqlPlugin from '@graphql-eslint/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import noBusinessLogicInComponent from './eslint-rules/no-business-logic-in-component.js'

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
    name: 'app/nuxt-ui-required',
    files: ['**/*.vue'],
    rules: {
      'vue/no-restricted-html-elements': [
        'error',
        {
          element: 'input',
          message: 'Nuxt UI kullan: <UInput>',
        },
        {
          element: 'textarea',
          message: 'Nuxt UI kullan: <UTextarea>',
        },
        {
          element: 'select',
          message: 'Nuxt UI kullan: <USelect>',
        },
        {
          element: 'button',
          message: 'Nuxt UI kullan: <UButton>',
        },
        {
          element: 'a',
          message: 'Nuxt UI kullan: <ULink>',
        },
        {
          element: 'form',
          message: 'Nuxt UI kullan: <UForm>',
        },
      ],
    },
  },
  // Genel TS/JS: max 80 satır, complexity 15
  {
    name: 'app/no-duplicate-logic',
    rules: {
      'no-duplicate-imports': 'error',
      'max-lines-per-function': [
        'warn',
        {
          max: 80,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      complexity: ['warn', { max: 15 }],
      'vue/require-explicit-emits': 'warn',
      'vue/require-prop-types': 'warn',
      'vue/require-default-prop': 'warn',
    },
  },
  // Evrensel best practices
  {
    name: 'app/best-practices',
    rules: {
      'prefer-const': 'error',
      eqeqeq: ['warn', 'always'],
      'no-return-await': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-floating-promises':
        'warn',
      '@typescript-eslint/prefer-nullish-coalescing':
        'warn',
      '@typescript-eslint/no-unnecessary-type-assertion':
        'warn',
    },
  },
  // Vue macro ve string stil
  {
    name: 'app/vue-macros-and-strings',
    files: ['**/*.vue'],
    rules: {
      'vue/define-macros-order': [
        'warn',
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: true,
        },
      ],
      'vue/prefer-template': 'warn',
    },
  },
  // Vue component'lerde daha sıkı: max 50 satır, complexity 10
  {
    name: 'app/vue-stricter-complexity',
    files: ['**/*.vue'],
    rules: {
      'max-lines-per-function': [
        'warn',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      complexity: ['warn', { max: 10 }],
    },
  },
  // Custom: component'te doğrudan API çağrısı → composable'a taşı
  {
    name: 'app/no-business-logic-in-component',
    files: ['**/*.vue'],
    plugins: {
      local: {
        rules: {
          'no-business-logic-in-component':
            noBusinessLogicInComponent,
        },
      },
    },
    rules: {
      'local/no-business-logic-in-component':
        'warn',
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
  // GraphQL dosyaları — TS/JS kuralları devre dışı (farklı parser)
  {
    name: 'app/graphql',
    files: ['**/*.graphql', '**/*.gql'],
    languageOptions: {
      parser: graphqlPlugin.parser,
      parserOptions: {
        graphQLConfig: {
          schema:
            'https://graphqlzero.almansi.me/api',
          documents: ['src/graphql/**/*.graphql'],
        },
      },
    },
    plugins: {
      '@graphql-eslint': graphqlPlugin,
    },
    rules: {
      ...graphqlPlugin.configs[
        'flat/operations-recommended'
      ].rules,
      '@typescript-eslint/no-floating-promises':
        'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-nullish-coalescing':
        'off',
      '@typescript-eslint/no-unnecessary-type-assertion':
        'off',
    },
  },
  skipFormatting,
)
