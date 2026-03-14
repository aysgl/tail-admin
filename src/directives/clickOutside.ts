import type { Directive } from 'vue'

const clickOutsideEventKey = '__vue_click_outside__'

export const clickOutside: Directive = {
    mounted(el: HTMLElement, binding) {
        const handler = (event: MouseEvent) => {
            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event)
            }
        }
        ;(
            el as HTMLElement & {
                [key: string]: unknown
            }
        )[clickOutsideEventKey] = handler
        document.addEventListener('click', handler)
    },
    unmounted(el: HTMLElement) {
        const handler = (
            el as HTMLElement & {
                [key: string]: unknown
            }
        )[clickOutsideEventKey]
        document.removeEventListener('click', handler as EventListener)
    }
}
