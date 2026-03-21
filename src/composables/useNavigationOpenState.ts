import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const STORAGE_KEY = 'nav-open-sections'

const TRIGGER_VALUES = {
  dashboard: 'nav-dashboard',
  tables: 'nav-tables',
  pages: 'nav-pages',
} as const

function getStoredSections(): string[] | null {
  if (typeof window === 'undefined') return null
  try {
    const raw =
      sessionStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function getOpenSectionsFromRoute(
  path: string,
): string[] {
  const sections: string[] = []
  if (
    path.startsWith('/ecommerce') ||
    path.startsWith('/analytics') ||
    path.startsWith('/sales') ||
    path.startsWith('/reports')
  ) {
    sections.push(TRIGGER_VALUES.dashboard)
  }
  if (
    path.startsWith('/compact-tables') ||
    path.startsWith('/relaxed-tables') ||
    path.startsWith('/advance-tables')
  ) {
    sections.push(TRIGGER_VALUES.tables)
  }
  if (
    path === '/blank' ||
    path === '/not-found' ||
    path.startsWith('/signin') ||
    path.startsWith('/signup')
  ) {
    sections.push(TRIGGER_VALUES.pages)
  }
  return sections
}

function toArray(
  val: string | string[] | undefined,
): string[] {
  if (val == null) return []
  return Array.isArray(val) ? val : [val]
}

export function useNavigationOpenState() {
  const route = useRoute()

  const stored = getStoredSections()
  const openSections = ref<string[]>(
    stored && stored.length > 0
      ? stored
      : getOpenSectionsFromRoute(route.path),
  )

  watch(
    openSections,
    (val) => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(val),
        )
      }
    },
    { deep: true },
  )

  return {
    openSections,
    handleModelUpdate: (
      val: string | string[] | undefined,
    ) => {
      openSections.value = toArray(val)
    },
  }
}
