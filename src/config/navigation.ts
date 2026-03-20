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
        icon: 'i-lucide-layout-grid',
        to: '/ecommerce',
        type: 'trigger',
        defaultOpen:
          route.path.startsWith('/ecommerce') ||
          route.path.startsWith('/analytics') ||
          route.path.startsWith('/sales') ||
          route.path.startsWith('/reports'),
        active:
          route.path === '/' ||
          route.path.startsWith('/ecommerce') ||
          route.path.startsWith('/analytics') ||
          route.path.startsWith('/sales') ||
          route.path.startsWith('/reports'),
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
        icon: 'i-lucide-table',
        to: '/compact-tables',
        type: 'trigger',
        defaultOpen:
          route.path.startsWith(
            '/compact-tables',
          ) ||
          route.path.startsWith(
            '/relaxed-tables',
          ) ||
          route.path.startsWith(
            '/advance-tables',
          ),
        active:
          route.path.startsWith(
            '/compact-tables',
          ) ||
          route.path.startsWith(
            '/relaxed-tables',
          ) ||
          route.path.startsWith(
            '/advance-tables',
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
            icon: 'i-lucide-table-2',
          },
          {
            label: 'Advance Tables',
            to: '/advance-tables',
            icon: 'i-lucide-table-2',
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
        icon: 'i-lucide-file-text',
        to: '/blank',
        type: 'trigger',
        defaultOpen:
          route.path === '/blank' ||
          route.path === '/not-found',
        active:
          route.path === '/blank' ||
          route.path === '/not-found',
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
        ],
      },
      {
        label: 'Charts',
        icon: 'i-lucide-pie-chart',
        to: '/line-chart',
        type: 'trigger',
        defaultOpen:
          route.path.startsWith('/line-chart') ||
          route.path.startsWith('/bar-chart'),
        active:
          route.path.startsWith('/line-chart') ||
          route.path.startsWith('/bar-chart'),
        children: [
          {
            label: 'Line Chart',
            to: '/line-chart',
            icon: 'i-lucide-trending-up',
          },
          {
            label: 'Bar Chart',
            to: '/bar-chart',
            icon: 'i-lucide-bar-chart-3',
          },
        ],
      },
      {
        label: 'Authentication',
        icon: 'i-lucide-plug',
        to: '/signin',
        type: 'trigger',
        defaultOpen:
          route.path.startsWith('/signin') ||
          route.path.startsWith('/signup'),
        active:
          route.path.startsWith('/signin') ||
          route.path.startsWith('/signup'),
        children: [
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
