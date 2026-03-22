import type { BreadcrumbItem } from '@nuxt/ui'
import {
  computed,
  toValue,
  type MaybeRefOrGetter,
} from 'vue'

/**
 * UBreadcrumb (Nuxt UI) için items üretir.
 * Pattern: Home > [Headline] > Title (headline ≠ title ise)
 */
export function getBreadcrumbItems(
  headline: string,
  title: string,
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Home', to: '/' },
  ]
  if (headline && headline !== title) {
    items.push({ label: headline })
  }
  items.push({ label: title })
  return items
}

export function usePageBreadcrumb(
  headline: MaybeRefOrGetter<string>,
  title: MaybeRefOrGetter<string>,
) {
  return computed<BreadcrumbItem[]>(() =>
    getBreadcrumbItems(
      toValue(headline),
      toValue(title),
    ),
  )
}
