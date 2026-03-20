import type { BreadcrumbItem } from '@nuxt/ui'
import { computed } from 'vue'

/**
 * Generates breadcrumb items for page headers.
 * Pattern: Home > [Headline] > Title
 * Headline is included only when it differs from title (e.g. Tables > Basic Tables).
 */
export function usePageBreadcrumb(
  headline: string,
  title: string,
) {
  return computed<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', to: '/' },
    ]
    if (headline && headline !== title) {
      items.push({ label: headline })
    }
    items.push({ label: title })
    return items
  })
}
