import type { NavigationMenuItem } from '@nuxt/ui'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

function toPath(
  to: string | { path?: string } | undefined,
): string {
  return typeof to === 'string'
    ? to
    : (to?.path ?? '')
}

const NAV_TRIGGER_VALUES = {
  dashboard: 'nav-dashboard',
  tables: 'nav-tables',
  pages: 'nav-pages',
} as const

function pathMatchesPrefix(
  path: string,
  prefixes: string[],
): boolean {
  return prefixes.some((p) => path.startsWith(p))
}

function pathMatchesOne(
  path: string,
  paths: string[],
): boolean {
  return paths.some(
    (p) => path === p || path.startsWith(p),
  )
}

const DASHBOARD_PREFIXES = [
  '/ecommerce',
  '/analytics',
  '/sales',
  '/reports',
]
const TABLES_PREFIXES = [
  '/compact-tables',
  '/relaxed-tables',
  '/advance-tables',
]
const PAGES_PATHS = [
  '/blank',
  '/not-found',
  '/signin',
  '/signup',
]

export function getOpenSectionsForPath(
  path: string,
): string[] {
  const sections: string[] = []
  if (pathMatchesPrefix(path, DASHBOARD_PREFIXES))
    sections.push(NAV_TRIGGER_VALUES.dashboard)
  if (pathMatchesPrefix(path, TABLES_PREFIXES))
    sections.push(NAV_TRIGGER_VALUES.tables)
  if (pathMatchesOne(path, PAGES_PATHS))
    sections.push(NAV_TRIGGER_VALUES.pages)
  return sections
}

function flattenNavItems(
  items: NavigationMenuItem[],
): {
  label: string
  value: string
  to: string
}[] {
  const result: {
    label: string
    value: string
    to: string
  }[] = []
  for (const item of items) {
    const path = toPath(item.to)
    if (path && item.label) {
      result.push({
        label: item.label,
        value: item.label.toLowerCase(),
        to: path,
      })
    }
    if (item.children) {
      for (const child of item.children) {
        const childPath = toPath(child.to)
        if (childPath && child.label) {
          result.push({
            label: child.label,
            value: child.label.toLowerCase(),
            to: childPath,
          })
        }
      }
    }
  }
  return result
}

export function useSearchGroups() {
  const { items } = useNavigationItems()
  return computed(() => [
    {
      id: 'navigation',
      label: 'Navigation',
      items: flattenNavItems(items.value),
    },
  ])
}

export function useNavigationItems() {
  const route = useRoute()

  const items = computed<NavigationMenuItem[]>(
    () => [
      {
        label: 'Dashboard',
        value: 'nav-dashboard',
        icon: 'i-lucide-layout-grid',
        to: '/ecommerce',
        type: 'trigger',
        defaultOpen: pathMatchesPrefix(
          route.path,
          DASHBOARD_PREFIXES,
        ),
        active:
          route.path === '/' ||
          pathMatchesPrefix(
            route.path,
            DASHBOARD_PREFIXES,
          ),
        children: [
          {
            label: 'Ecommerce',
            to: '/ecommerce',
            icon: 'i-lucide-shopping-cart',
          },
          {
            label: 'Analytics',
            to: '/analytics',
            icon: 'i-lucide-bar-chart-3',
          },
          {
            label: 'Sales',
            to: '/sales',
            icon: 'i-lucide-trending-up',
          },
          {
            label: 'Reports',
            to: '/reports',
            icon: 'i-lucide-file-text',
          },
        ],
      },
      {
        label: 'Calendar',
        icon: 'i-lucide-calendar',
        to: '/calendar',
        active: route.path === '/calendar',
      },
      {
        label: 'User Profile',
        icon: 'i-lucide-user-circle',
        to: '/profile',
        active: route.path === '/profile',
      },
      {
        label: 'Tables',
        value: 'nav-tables',
        icon: 'i-lucide-table',
        to: '/compact-tables',
        type: 'trigger',
        defaultOpen: pathMatchesPrefix(
          route.path,
          TABLES_PREFIXES,
        ),
        active: pathMatchesPrefix(
          route.path,
          TABLES_PREFIXES,
        ),
        children: [
          {
            label: 'Compact Tables',
            to: '/compact-tables',
            icon: 'i-lucide-table-2',
          },
          {
            label: 'Relaxed Tables',
            to: '/relaxed-tables',
            icon: 'i-lucide-table-properties',
          },
          {
            label: 'Advance Tables',
            to: '/advance-tables',
            icon: 'i-lucide-table-cells-split',
          },
        ],
      },
      {
        label: 'Form',
        icon: 'i-lucide-file-input',
        to: '/form-elements',
        active: route.path === '/form-elements',
      },
      {
        label: 'Pages',
        value: 'nav-pages',
        icon: 'i-lucide-file-text',
        to: '/blank',
        type: 'trigger',
        defaultOpen: pathMatchesOne(
          route.path,
          PAGES_PATHS,
        ),
        active: pathMatchesOne(
          route.path,
          PAGES_PATHS,
        ),
        children: [
          {
            label: 'Blank Page',
            to: '/blank',
            icon: 'i-lucide-file',
          },
          {
            label: 'Not Found',
            to: '/not-found',
            icon: 'i-lucide-alert-circle',
          },
          {
            label: 'Signin',
            to: '/signin',
            icon: 'i-lucide-log-in',
          },
          {
            label: 'Signup',
            to: '/signup',
            icon: 'i-lucide-user-plus',
          },
        ],
      },
    ],
  )

  return { items }
}
