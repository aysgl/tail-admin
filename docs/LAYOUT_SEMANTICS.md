# Nuxt UI Layout Semantik Kuralları

Referans: [Nuxt Dashboard Template](https://dashboard-template.nuxt.dev/) | [GitHub](https://github.com/nuxt-ui-templates/dashboard)

## Layout Hiyerarşisi (Root / Main / Auth)

```
App.vue
└── UApp
    └── RootLayout (route.meta.layout'a göre layout seçer)
        ├── layout: 'main'     → MainLayout (sidebar + header + content)
        ├── layout: 'auth'     → AuthLayout (UMain + UPage + UPageBody)
        └── layout: 'none'     → Doğrudan RouterView (404 vb.)
```

**Route meta:** `router/index.ts` içinde her route için `meta: { layout: 'main' | 'auth' | 'none' }` tanımlı. Varsayılan: `main`.

| Layout   | Kullanım                                                 |
| -------- | -------------------------------------------------------- |
| **main** | Dashboard sayfaları (sidebar, navbar, footer)            |
| **auth** | Auth sayfaları (Signin, Signup) – tam ekran, sidebar yok |
| **none** | 404, standalone sayfalar – layout wrapper yok            |

## Resmi Template Yapısı (nuxt-ui-templates/dashboard)

```
UDashboardGroup unit="rem"
├── UDashboardSidebar (id="default", collapsible, resizable)
│   ├── #header: TeamsMenu (logo/team selector)
│   ├── #default: UDashboardSearchButton + UNavigationMenu (2 grup: ana nav + footer nav)
│   └── #footer: UserMenu
├── UDashboardSearch :groups="groups"     → Global command palette (⌘K)
├── <slot />                             → Sayfa içeriği (her sayfa kendi UDashboardPanel kullanır)
└── NotificationsSlideover               → Global bildirim overlay
```

**Önemli:** Layout'ta UDashboardPanel yok; her sayfa kendi `UDashboardPanel` + `UDashboardNavbar` yapısını kullanır.

## UPageAside vs UContentNavigation

| Bileşen                | Kullanım                                                                  | Gereksinim                                                    |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **UPageAside**         | Sidebar container – sticky aside, `#top` / `default` / `#bottom` slotları | UPage'in `left` veya `right` slotunda                         |
| **UContentNavigation** | Accordion-style nav                                                       | **@nuxt/content** gerekli – Vue+Vite projede **kullanılamaz** |
| **UNavigationMenu**    | Link listesi, `NavigationMenuItem[]`                                      | Projede **kullanılıyor**                                      |

## MainLayout Yapısı

```
UDashboardGroup
├── UDashboardSidebar (toggle-side="left")
│   ├── #header: Logo (collapsed durumuna göre)
│   └── default: UNavigationMenu
└── UDashboardPanel
    ├── #header: UDashboardNavbar
    │   ├── #leading: Toggle (mobil sidebar aç/kapa)
    │   ├── title: "TailAdmin"
    │   └── #right: SearchBar, UColorModeSelect, NotificationMenu, UserMenu
    ├── #body: Sayfa içeriği (slot)
    └── #footer: Footer
```

## Template vs Bizim Yapı

| Özellik              | Resmi Template                                | Bizim                                |
| -------------------- | --------------------------------------------- | ------------------------------------ |
| **UDashboardPanel**  | Sayfa içinde (her sayfa kendi)                | Layout'ta tek panel                  |
| **UDashboardSearch** | UDashboardSearch (global ⌘K)                  | SearchBar (UModal + UCommandPalette) |
| **Sidebar**          | collapsible, resizable, unit="rem"            | collapsible/resizable yok            |
| **Sidebar #header**  | TeamsMenu                                     | Logo                                 |
| **Sidebar #footer**  | UserMenu                                      | -                                    |
| **Nav grupları**     | 2 UNavigationMenu (ana + footer)              | Tek UNavigationMenu                  |
| **useDashboard**     | Sayfalarda (isNotificationsSlideoverOpen vb.) | -                                    |
