import {
  computed,
  ref,
  onMounted,
  onUnmounted,
} from 'vue'

/**
 * Returns AG Charts theme based on current color mode.
 * Watches html.dark class (Nuxt UI / Tailwind pattern).
 * Use with chart options: { theme: chartTheme, ... }
 */
export function useChartTheme() {
  const isDark = ref(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains(
        'dark',
      ),
  )

  const checkDark = () => {
    isDark.value =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains(
        'dark',
      )
  }

  let observer: MutationObserver | null = null

  onMounted(() => {
    checkDark()
    observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  const chartTheme = computed(() =>
    isDark.value
      ? 'ag-default-dark'
      : 'ag-default',
  )

  return { chartTheme, isDark }
}
