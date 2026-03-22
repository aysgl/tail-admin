import type { UserRow } from '@/data/tableUsers'

const SEARCH_FIELDS: (keyof UserRow)[] = [
  'name',
  'role',
  'project',
  'status',
  'budget',
  'date',
]

export function filterByQuickText(
  rows: UserRow[],
  text: string,
): UserRow[] {
  if (!text?.trim()) return rows
  const q = text.toLowerCase().trim()
  return rows.filter((r) =>
    SEARCH_FIELDS.some((f) => {
      const val = r[f]
      return typeof val === 'string'
        ? val.toLowerCase().includes(q)
        : Array.isArray(val)
          ? false
          : val !== null &&
            String(val).toLowerCase().includes(q)
    }),
  )
}

export function filterByFilterModel(
  rows: UserRow[],
  filterModel: unknown,
): UserRow[] {
  if (
    !filterModel ||
    typeof filterModel !== 'object'
  )
    return rows
  const model = filterModel as Record<
    string,
    {
      filterType?: string
      type?: string
      filter?: string
    }
  >
  return rows.filter((row) => {
    for (const [field, filter] of Object.entries(
      model,
    )) {
      if (!filter || typeof filter !== 'object')
        continue
      if (
        filter.filterType === 'text' &&
        filter.filter
      ) {
        const val = String(
          (row as Record<string, unknown>)[
            field
          ] ?? '',
        )
        if (
          filter.type === 'equals' &&
          val !== filter.filter
        )
          return false
        if (
          filter.type === 'contains' &&
          !val
            .toLowerCase()
            .includes(filter.filter.toLowerCase())
        )
          return false
      }
    }
    return true
  })
}

export function filterByDateRange(
  rows: UserRow[],
  range: { start?: Date; end?: Date },
): UserRow[] {
  if (!range?.start && !range?.end) return rows
  const start = range.start?.getTime() ?? 0
  const end =
    range.end?.getTime() ??
    Number.MAX_SAFE_INTEGER
  return rows.filter((r) => {
    if (!r.date?.trim()) return true
    const d = new Date(r.date).getTime()
    return Number.isNaN(d)
      ? true
      : d >= start && d <= end
  })
}
