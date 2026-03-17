import type {
  Meta,
  StoryObj,
} from '@storybook/vue3'
import BaseButton from './BaseButton.vue'
import { expect, fn } from 'storybook/test'

/**
 * Interactions kullanımı (play + storybook/test):
 *
 * 1) fn(callback): Arg olarak geçirince (örn. onClick) tıklamada callback çalışır;
 *    play içinde expect(args.onClick).toHaveBeenCalled() ile doğrulayabilirsiniz.
 *
 * 2) play: async ({ args, canvas, userEvent }) => { ... }
 *    - canvas: Hikaye ifadesinin render edildiği DOM (canvas.getByRole, getByText vb.).
 *    - userEvent: Kullanıcı etkileşimleri (click, dblClick, type vb.) — hepsini await edin.
 *    - Tüm async adımları await ile yazın; böylece Interactions panelinde adım adım görünür.
 *
 * 3) expect(...).toHaveBeenCalled() / toHaveBeenCalledTimes(n): fn() ile verilen callback'leri test edin.
 *
 * 4) Canvas sorguları: getByRole('button', { name: /metin/i }), getByText('...') — hata mesajları daha anlaşılır olur.
 */
/** play() içinde gelen context (referans için); play parametresini Storybook kendi tipiyle verir. */
interface PlayContext {
  args: Record<string, unknown>
  canvas: {
    getByRole: (
      role: string,
      options?: { name?: RegExp | string },
    ) => HTMLElement
  }
  userEvent: {
    click: (element: HTMLElement) => Promise<void>
  }
}

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: false,
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: [
        'solid',
        'secondary',
        'outline',
        'ghost',
        'link',
      ],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'success',
        'error',
        'warning',
        'info',
      ],
    },
  },
}
export default meta

type Story = StoryObj<typeof BaseButton>

// setup() içinde args döndürülür; Controls değişince Storybook render'ı yeni args ile
// tekrar çağırır ve görünüm güncellenir.
const renderButton = (args: object) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: `<div class="flex flex-row gap-2 items-start">
    <BaseButton v-bind="{ ...args, size: 'sm' }">Button Small</BaseButton>
    <BaseButton v-bind="{ ...args, size: 'md' }">Button Medium</BaseButton>
    <BaseButton v-bind="{ ...args, size: 'lg' }">Button Large</BaseButton>
  </div>`,
})

export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    // fn(callback): tıklanınca callback çalışır (console.log) + play'de toHaveBeenCalled() kullanılabilir
    onClick: fn(() =>
      console.log('Button tıklandı'),
    ),
  },
  render: renderButton,
  parameters: {
    // Figma'dan design token almak: addon-designs sadece embed yapar, token çekmez.
    // Token akışı (Figma → main.css @theme): docs/figma-design-tokens.md
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/design/ZTj7EXIrc9PG1KKQhJA1Gd/TailAdmin---Free-Design-System-and-Dashboard-Kit-for-Tailwind-CSS--Community-?' +
        'node-id=1419-22371&t=3Wvvq9iDkfJv1w1q-0',
    },
    options: {
      light: { name: 'Light', value: '#ffffff' },
      dark: { name: 'Dark', value: '#000000' },
    },
    // play: Hikaye render olduktan sonra çalışan interaction testi
    play: async function (ctx: unknown) {
      const { args, canvas, userEvent } =
        ctx as unknown as PlayContext
      // Canvas üzerinden "Button" metnini içeren ilk butonu bul
      const button = canvas.getByRole('button', {
        name: /button small/i,
      })

      // Kullanıcı tıklamasını simüle et
      await userEvent.click(button)

      // onClick (fn() ile verildiği için) çağrılmış olmalı
      await expect(
        args.onClick,
      ).toHaveBeenCalled()
    },
  },
}

/** Çoklu tıklama: önce Small, sonra Medium; onClick iki kez çağrılmalı */
export const WithMultipleClicks: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play: async (ctx: unknown) => {
    const { args, canvas, userEvent } =
      ctx as unknown as PlayContext
    const small = canvas.getByRole('button', {
      name: /button small/i,
    })
    const medium = canvas.getByRole('button', {
      name: /button medium/i,
    })

    await userEvent.click(small)
    await userEvent.click(medium)

    await expect(
      args.onClick,
    ).toHaveBeenCalledTimes(2)
  },
}

export const Warning: Story = {
  args: {
    variant: 'solid',
    color: 'warning',
    size: 'md',
  },
  render: renderButton,
}

export const Error: Story = {
  args: {
    variant: 'solid',
    color: 'error',
    size: 'md',
  },
  render: renderButton,
}

export const Info: Story = {
  args: {
    variant: 'solid',
    color: 'info',
    size: 'md',
  },
  render: renderButton,
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'brand',
    size: 'md',
  },
  render: renderButton,
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'brand',
    size: 'md',
  },
  render: renderButton,
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    color: 'brand',
    size: 'md',
  },
  render: renderButton,
}

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'brand',
    size: 'md',
  },
  render: renderButton,
}

/** Disabled buton: play ile DOM'da disabled olduğu doğrulanır */
export const Disabled: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args: object) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `<BaseButton v-bind="args">Submit</BaseButton>`,
  }),
  play: async (ctx: unknown) => {
    const { canvas } =
      ctx as unknown as PlayContext
    const button = canvas.getByRole('button', {
      name: /submit/i,
    })
    await expect(
      (button as HTMLButtonElement).disabled,
    ).toBe(true)
  },
}
