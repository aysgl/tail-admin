<template>
  <div
    class="chart-skeleton-overlay flex w-full flex-col gap-0 overflow-hidden rounded-lg bg/95 px-4 py-6"
  >
    <!-- Skeleton legend -->
    <div
      class="mb-4 flex gap-4 border-b border-muted pb-4"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="h-4 flex-1 animate-pulse rounded bg-accented"
        :style="{
          maxWidth:
            i === 1
              ? '100px'
              : i === 2
                ? '80px'
                : '60px',
        }"
      />
    </div>

    <!-- Bar chart skeleton -->
    <template v-if="variant === 'bar'">
      <div
        class="flex flex-1 items-end gap-2 py-4"
        style="min-height: 200px"
      >
        <div
          v-for="i in 8"
          :key="i"
          class="flex-1 animate-pulse rounded-t bg-accented"
          :style="{
            height: `${20 + (i % 5) * 15}%`,
            minHeight: '40px',
          }"
        />
      </div>
      <div
        class="mt-2 flex justify-between gap-2 border-t border-muted pt-3"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="h-3 w-10 animate-pulse rounded bg-accented"
        />
      </div>
    </template>

    <!-- Line/Area chart skeleton -->
    <template
      v-else-if="
        variant === 'line' || variant === 'area'
      "
    >
      <div
        class="chart-skeleton-line-wrapper relative flex flex-1 items-center justify-center py-4 text-muted"
        style="min-height: 200px"
      >
        <svg
          class="h-full w-full animate-pulse"
          viewBox="0 0 400 140"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="chartSkeletonAreaGrad"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stop-color="currentColor"
                stop-opacity="0.5"
              />
              <stop
                offset="100%"
                stop-color="currentColor"
                stop-opacity="0.15"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#chartSkeletonAreaGrad)"
            d="M 0 100 Q 50 80, 100 90 T 200 70 T 300 50 T 400 30 L 400 140 L 0 140 Z"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 0 100 Q 50 80, 100 90 T 200 70 T 300 50 T 400 30"
          />
        </svg>
      </div>
      <div
        class="mt-2 flex justify-between gap-2 border-t border-muted pt-3"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="h-3 w-10 animate-pulse rounded bg-accented"
        />
      </div>
    </template>

    <!-- Donut chart skeleton -->
    <template v-else-if="variant === 'donut'">
      <div
        class="flex flex-1 flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8"
        style="min-height: 200px"
      >
        <div
          class="relative flex items-center justify-center"
        >
          <div
            class="size-32 animate-pulse rounded-full border-[12px] border-muted"
          />
          <div
            class="absolute size-20 animate-pulse rounded-full bg"
          />
          <div
            class="absolute h-6 w-12 animate-pulse rounded bg-accented"
          />
        </div>
        <div class="flex flex-col gap-3">
          <div
            v-for="i in 4"
            :key="i"
            class="flex items-center gap-2"
          >
            <div
              class="size-4 animate-pulse rounded-full bg-accented"
            />
            <div
              class="h-4 animate-pulse rounded bg-accented"
              :style="{
                width: `${60 + i * 15}px`,
              }"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'bar' | 'line' | 'area' | 'donut'
  }>(),
  { variant: 'bar' },
)
</script>

<style scoped>
.chart-skeleton-overlay {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
