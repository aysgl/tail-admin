import { ref, onMounted } from 'vue'

/**
 * Manages page loading state with a simulated delay.
 * Commonly used in dashboard views for skeleton/loading states.
 *
 * @param delayMs - Delay in milliseconds before setting loading to false. Default: 1500
 * @returns pageLoading ref (Ref<boolean>)
 */
export function usePageLoading(delayMs = 1500) {
  const pageLoading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      pageLoading.value = false
    }, delayMs)
  })

  return { pageLoading }
}
