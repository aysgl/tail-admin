/** AG Charts için - tek import ile theme, background, colors, withOpacity */
function withOpacity(
  rgba: string,
  alpha: number,
): string {
  return rgba.replace(/[\d.]+\)$/, `${alpha})`)
}

const primary = 'rgba(99, 102, 241, 1)'
const gray = 'rgba(107, 114, 128, 1)'

export const chart = {
  theme: {
    baseTheme: 'ag-default' as const,
    params: {
      foregroundColor: withOpacity(gray, 0.85),
    },
  },
  background: { fill: 'transparent' as const },
  colors: {
    primary,
    success: 'rgba(34, 197, 94, 1)',
    warning: 'rgba(245, 158, 11, 1)',
    error: 'rgba(239, 68, 68, 1)',
    gray,
    neutral: 'rgba(255, 255, 255, 1)',
  },
  withOpacity,
}
