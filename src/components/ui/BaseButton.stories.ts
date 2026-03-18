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
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template:
      '<BaseButton v-bind="args">Button</BaseButton>',
  }),
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

export const play: Story['play'] = async (
  ctx: unknown,
) => {
  const { args, canvas, userEvent } =
    ctx as unknown as PlayContext
  const small = canvas.getByRole('button', {
    name: /button small/i,
  })
  const medium = canvas.getByRole('button', {
    name: /button medium/i,
  })
  const large = canvas.getByRole('button', {
    name: /button large/i,
  })

  await userEvent.click(small)
  await userEvent.click(medium)
  await userEvent.click(large)

  await expect(
    args.onClick,
  ).toHaveBeenCalledTimes(3)
}

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
  play,
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
  },
}

export const Warning: Story = {
  args: {
    variant: 'solid',
    color: 'warning',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Error: Story = {
  args: {
    variant: 'solid',
    color: 'error',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Info: Story = {
  args: {
    variant: 'solid',
    color: 'info',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'brand',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'brand',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    color: 'brand',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'brand',
    size: 'md',
    onClick: fn(),
  },
  render: renderButton,
  play,
}
