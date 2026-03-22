import { nextTick } from 'vue'

const SCROLL_CONTAINER_ID =
  'main-scroll-container'

const scrollPositions = new Map<
  string,
  { top: number; left: number }
>()

function getScrollContainer(): Element | null {
  return (
    document.getElementById(
      SCROLL_CONTAINER_ID,
    ) ?? document.scrollingElement
  )
}

export function useScrollRestoration() {
  function saveScroll(routePath: string) {
    const el = getScrollContainer()
    if (!el) return
    scrollPositions.set(routePath, {
      top: el.scrollTop,
      left: el.scrollLeft,
    })
  }

  function restoreScroll(routePath: string) {
    const saved = scrollPositions.get(routePath)
    if (!saved) return

    void nextTick(() => {
      const tryRestore = () => {
        const el = document.getElementById(
          SCROLL_CONTAINER_ID,
        )
        if (el) {
          el.scrollTo({
            top: saved.top,
            left: saved.left,
            behavior: 'instant',
          })
          return
        }
        const fallback = document.scrollingElement
        if (fallback) {
          fallback.scrollTo({
            top: saved.top,
            left: saved.left,
            behavior: 'instant',
          })
        }
      }
      tryRestore()
      // Auth'dan main layout'a geçişte container henüz DOM'da olmayabilir
      requestAnimationFrame(() => tryRestore())
    })
  }

  return { saveScroll, restoreScroll }
}
