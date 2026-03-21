import {
  computed,
  ref,
  onMounted,
  onUnmounted,
} from 'vue'

const NEUTRAL_FALLBACKS: Record<number, string> =
  {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e4e7ec',
    300: '#d0d5dd',
    400: '#98a2b3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#1d2939',
    900: '#101828',
  }

/** Herhangi bir CSS rengini (hex, rgb, oklch, hsl vb.) rgba(opacity) yapar. opacity 0–1. */
function withOpacity(
  color: string,
  opacity: number,
): string {
  const rgb = parseToRgb(color)
  if (!rgb) return color
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
}

function parseToRgb(
  color: string,
): { r: number; g: number; b: number } | null {
  const c = color.trim()
  let r: number
  let g: number
  let b: number
  const rgbMatch = c.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/,
  )
  if (rgbMatch) {
    r = parseInt(rgbMatch[1], 10)
    g = parseInt(rgbMatch[2], 10)
    b = parseInt(rgbMatch[3], 10)
    return { r, g, b }
  }
  const rgbSpaceMatch = c.match(
    /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)/,
  )
  if (rgbSpaceMatch) {
    r = parseInt(rgbSpaceMatch[1], 10)
    g = parseInt(rgbSpaceMatch[2], 10)
    b = parseInt(rgbSpaceMatch[3], 10)
    return { r, g, b }
  }
  const hex = c.replace(/^#/, '')
  if (
    hex.length === 6 &&
    /^[0-9a-fA-F]+$/.test(hex)
  ) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
    return { r, g, b }
  }
  if (
    hex.length === 3 &&
    /^[0-9a-fA-F]+$/.test(hex)
  ) {
    r = parseInt(hex[0] + hex[0], 16)
    g = parseInt(hex[1] + hex[1], 16)
    b = parseInt(hex[2] + hex[2], 16)
    return { r, g, b }
  }
  if (typeof document !== 'undefined') {
    const el = document.createElement('div')
    el.style.color = c
    el.style.position = 'absolute'
    el.style.visibility = 'hidden'
    document.body.appendChild(el)
    const computed = getComputedStyle(el).color
    document.body.removeChild(el)
    const m = computed.match(
      /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/,
    )
    if (m) return { r: +m[1], g: +m[2], b: +m[3] }
  }
  return null
}

const PRIMARY_FALLBACKS: Record<number, string> =
  {
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
  }

function readChartColorsFromRoot() {
  const isSSR = typeof document === 'undefined'
  const root = isSSR
    ? null
    : getComputedStyle(document.documentElement)
  const get = (
    varName: string,
    fallback: string,
  ) =>
    root?.getPropertyValue(varName).trim() ||
    fallback

  const shade = (
    type: 'primary' | 'neutral',
    n: number,
  ) => {
    const fallbacks =
      type === 'primary'
        ? PRIMARY_FALLBACKS
        : NEUTRAL_FALLBACKS
    return (
      get(
        `--ui-color-${type === 'primary' ? 'primary' : 'neutral'}-${n}`,
        '',
      ) ||
      fallbacks[n] ||
      (type === 'neutral' ? '#667085' : '#818cf8')
    )
  }

  const primary = shade('primary', 500)
  const success = get(
    '--ui-color-success-500',
    '#22c55e',
  )
  const info = get(
    '--ui-color-info-500',
    '#3b82f6',
  )
  const warning = get(
    '--ui-color-warning-500',
    '#f59e0b',
  )
  const error = get(
    '--ui-color-error-500',
    '#dc2626',
  )

  const colorful = [
    success,
    info,
    warning,
    error,
  ] as [string, string, string, string]

  const COLOR_FALLBACKS = {
    primary: PRIMARY_FALLBACKS[500] as string,
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#3b82f6',
  } as const
  /** getValues("primary") → solid | getValues("primary", 0.3) → primary/30 */
  const getValuesResolved = (
    name:
      | 'primary'
      | 'success'
      | 'warning'
      | 'error'
      | 'info',
    opacity?: number,
  ) => {
    const base =
      name === 'primary'
        ? primary
        : { success, warning, error, info }[name]
    const colorHex = parseToRgb(base)
      ? base
      : COLOR_FALLBACKS[name]
    if (opacity !== undefined && opacity < 1)
      return withOpacity(colorHex, opacity)
    return base
  }
  const muted = [
    primary,
    getValuesResolved('primary', 0.4),
    getValuesResolved('primary', 0.3),
    getValuesResolved('primary', 0.2),
  ] as [string, string, string, string]

  return {
    primary,
    primaryLight:
      shade('primary', 400) ||
      shade('primary', 300),
    gray200: shade('neutral', 200),
    gray300: shade('neutral', 300),
    gray500: shade('neutral', 500),
    gray800: shade('neutral', 800),
    error,
    warning,
    success,
    info,
    chartPaletteMuted: muted,
    chartPaletteColorful: colorful,
    getGrayShade: (n: number) =>
      shade('neutral', n),
    /** Herhangi bir rengi opacity ile rgba'ya çevirir (0–1 arası) */
    withOpacity: (
      color: string,
      opacity: number,
    ) => withOpacity(color, opacity),
    /** Tek API: getColor('primary', 300) | getColor('warning', 500) */
    getColor: (
      name:
        | 'primary'
        | 'neutral'
        | 'error'
        | 'warning'
        | 'success'
        | 'info',
      n: number = 500,
    ) => {
      if (name === 'primary')
        return shade('primary', n)
      if (name === 'neutral')
        return shade('neutral', n)
      const fallbacks: Record<string, string> = {
        error: '#dc2626',
        warning: '#f59e0b',
        success: '#22c55e',
        info: '#3b82f6',
      }
      return get(
        `--ui-color-${name}-${n}`,
        fallbacks[name] ?? '#64748b',
      )
    },
    /** getValues("primary") → solid | getValues("primary", 0.3) → primary/30 */
    getValues: getValuesResolved,
  }
}

export function useChartTheme() {
  const isDark = ref(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains(
        'dark',
      ),
  )
  const chartColors = ref(
    readChartColorsFromRoot(),
  )
  let observer: MutationObserver | null = null

  const checkDark = () => {
    isDark.value =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains(
        'dark',
      )
    chartColors.value = readChartColorsFromRoot()
  }

  onMounted(() => {
    checkDark()
    observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  })

  onUnmounted(() => observer?.disconnect())

  return {
    chartTheme: computed(() =>
      isDark.value
        ? 'ag-default-dark'
        : 'ag-default',
    ),
    isDark,
    chartColors,
    chartBackground: 'transparent' as const,
  }
}
