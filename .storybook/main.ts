import type { StorybookConfig } from '@storybook/vue3-vite'
import type { PluginOption } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
  ],
  framework: '@storybook/vue3-vite',
  async viteFinal(config) {
    // Play fonksiyonları çalışırken Vue DevTools'un app'e erişmesi (undefined) hataya yol açıyor.
    // 1) Vue DevTools eklentisini Storybook build'inden çıkar
    const isDevtoolsPlugin = (
      p: PluginOption,
    ): boolean => {
      if (
        typeof p === 'object' &&
        p !== null &&
        p &&
        'name' in p
      )
        return /vue-devtools|devtools-kit/i.test(
          String((p as { name?: string }).name),
        )
      return false
    }
    const flatten = (
      arr: PluginOption[],
    ): PluginOption[] =>
      arr.flatMap((item) =>
        Array.isArray(item)
          ? flatten(item)
          : [item],
      )
    const raw = flatten(
      (config.plugins ?? []) as PluginOption[],
    )
    const plugins = raw.filter(
      (p) => !isDevtoolsPlugin(p),
    )
    // 2) Tarayıcıda Vue devtools'un devre dışı kalması için define
    const define = {
      ...config.define,
      __VUE_PROD_DEVTOOLS__: 'false',
    }
    return { ...config, plugins, define }
  },
}
export default config
