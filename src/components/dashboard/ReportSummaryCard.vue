<template>
  <UPageCard
    variant="outline"
    class="h-full">
    <template v-if="loading">
      <div
        class="h-12 w-12 animate-pulse rounded-xl bg-accented" />
      <div class="mt-4">
        <div
          class="h-5 w-24 animate-pulse rounded bg-accented" />
        <div
          class="mt-2 h-4 w-32 animate-pulse rounded bg-accented" />
        <div
          class="mt-3 h-8 w-20 animate-pulse rounded bg-accented" />
      </div>
      <div
        class="mt-4 h-9 w-28 animate-pulse rounded-md bg-accented" />
    </template>
    <template v-else>
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl"
        :class="
          color === 'primary'
            ? 'bg-primary/15'
            : color === 'success'
              ? 'bg-success/15'
              : color === 'warning'
                ? 'bg-warning/15'
                : 'bg-muted'
        ">
        <UIcon
          :name="icon"
          class="size-6"
          :class="
            color === 'primary'
              ? 'text-primary'
              : color === 'success'
                ? 'text-success'
                : color === 'warning'
                  ? 'text-warning'
                  : 'text-highlighted'
          " />
      </div>
      <div class="mt-4">
        <h3
          class="text-lg font-semibold text-highlighted">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-muted">
          {{ description }}
        </p>
        <p
          class="mt-3 text-2xl font-bold text-highlighted">
          {{ value }}
        </p>
      </div>
      <UButton
        class="mt-4"
        color="primary"
        variant="outline"
        size="sm"
        trailing-icon="i-lucide-arrow-right">
        View Report
      </UButton>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    value: string
    icon: string
    color?:
      | 'primary'
      | 'success'
      | 'warning'
      | 'neutral'
    loading?: boolean
  }>(),
  { color: 'neutral', loading: false },
)
</script>
