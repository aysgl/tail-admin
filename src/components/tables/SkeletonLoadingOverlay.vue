<template>
  <div
    class="skeleton-loading-overlay flex w-full flex-col gap-0 overflow-hidden rounded-lg bg-default/95 px-4 py-6"
  >
    <!-- Skeleton header -->
    <div
      class="mb-4 flex gap-4 border-b border-default pb-4"
    >
      <div
        v-for="i in 5"
        :key="i"
        class="h-4 flex-1 animate-pulse rounded bg-muted"
        :style="{
          maxWidth:
            i === 1
              ? '180px'
              : i === 2
                ? '120px'
                : '80px',
        }"
      />
    </div>
    <!-- Skeleton rows -->
    <div
      v-for="row in 5"
      :key="row"
      class="flex items-center gap-4 py-3"
    >
      <!-- User column -->
      <div
        class="flex min-w-0 flex-1 items-center gap-3"
      >
        <div
          class="size-8 shrink-0 animate-pulse rounded-full bg-muted"
        />
        <div class="flex flex-col gap-2">
          <div
            class="h-4 w-24 animate-pulse rounded bg-muted"
          />
          <div
            class="h-3 w-16 animate-pulse rounded bg-muted"
          />
        </div>
      </div>
      <!-- Project column -->
      <div
        class="h-4 w-28 animate-pulse rounded bg-muted"
      />
      <!-- Team column -->
      <div class="flex -space-x-2">
        <div
          v-for="i in 3"
          :key="i"
          class="size-8 animate-pulse rounded-full border-2 border-white bg-muted dark:border-gray-800"
        />
      </div>
      <!-- Status column -->
      <div
        class="h-6 w-16 animate-pulse rounded-full bg-muted"
      />
      <!-- Budget column -->
      <div
        class="h-4 w-12 animate-pulse rounded bg-muted"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// AG Grid loading overlay component - receives params from grid
</script>

<style scoped>
.skeleton-loading-overlay {
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
