import {
  themeQuartz,
  iconSetQuartzBold,
} from 'ag-grid-community'
import type { ColGroupDef } from 'ag-grid-community'

/** Nuxt UI primary */
const ACCENT_COLOR =
  'color-mix(in srgb, var(--ui-color-primary-500) 20%, transparent)'

const baseParams = {
  accentColor: ACCENT_COLOR,
  borderColor:
    'color-mix(in srgb, var(--ui-color-neutral-600) 15%, transparent)',
  borderRadius: 4,
  columnBorder: false,
  fontFamily: 'inherit',
  foregroundColor: 'var(--ui-color-neutral-800)',
  headerBackgroundColor:
    'var(--ui-color-neutral-100)',
  headerFontFamily: 'inherit',
  headerRowBorder: true,
  iconSize: 14,
  rowBorder: true,
  wrapperBorder: true,
  wrapperBorderRadius: 8,
}
/** compact/relaxed için temel column def */
export const baseColumnDef = {
  resizable: true,
  filter: false,
  sortable: true,
}

/** advance için genişletilmiş column def - daha fazla interaktif özellik */
export const advanceColumnDef = {
  ...baseColumnDef,
  filter: true,
  editable: true,
  sortable: true,
  suppressMovable: false,
  enableRowGroup: true,
  enablePivot: true,
  enableValue: true,
  minWidth: 80,
  flex: 1,
}

/** compact/relaxed için default column group def */
export const baseColGroupDef: Partial<ColGroupDef> =
  {
    marryChildren: true,
  }

/** advance için default column group def - column groups desteği */
export const advanceColGroupDef: Partial<ColGroupDef> =
  {
    marryChildren: true,
    openByDefault: true,
  }

const baseTheme = themeQuartz.withPart(
  iconSetQuartzBold,
)

/** table-compact - Yoğun, sıkı */
export const tableThemeCompact =
  baseTheme.withParams({
    ...baseParams,
    //rowHeight: 36,
    //headerHeight: 36,
    spacing: 8,
    cellHorizontalPaddingScale: 1,
    headerVerticalPaddingScale: 0.8,
    rowVerticalPaddingScale: 1,
    columnHoverColor: ACCENT_COLOR,
    headerCellHoverBackgroundColor: ACCENT_COLOR,
    rowHoverColor: ACCENT_COLOR,
  })

/** table-relaxed - Rahat, sakin görünüm */
export const tableThemeRelaxed =
  baseTheme.withParams({
    ...baseParams,
    rowHeight: 56,
    headerHeight: 56,
    spacing: 8,
    cellHorizontalPaddingScale: 0.9,
    headerVerticalPaddingScale: 0.9,
    rowVerticalPaddingScale: 0.9,
    columnHoverColor: ACCENT_COLOR,
    headerCellHoverBackgroundColor: ACCENT_COLOR,
    rowHoverColor: ACCENT_COLOR,
  })

/** table-advance - Gelişmiş, interaktif */
export const tableThemeAdvance =
  baseTheme.withParams({
    ...baseParams,
    rowHeight: 50,
    headerHeight: 50,
    spacing: 6,
    cellHorizontalPaddingScale: 0.75,
    headerVerticalPaddingScale: 0.75,
    rowVerticalPaddingScale: 0.75,
    columnHoverColor: ACCENT_COLOR,
    headerCellHoverBackgroundColor: ACCENT_COLOR,
    rowHoverColor: ACCENT_COLOR,
  })
