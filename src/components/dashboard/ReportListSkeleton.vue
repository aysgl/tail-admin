<template>
  <div
    class="report-list-skeleton flex w-full flex-col divide-y divide-muted"
  >
    <div
      v-for="i in 4"
      :key="i"
      class="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
    >
      <div class="min-w-0 flex-1">
        <div
          class="h-4 w-3/4 max-w-[180px] animate-pulse rounded bg-accented"
        />
        <div class="mt-2 flex items-center gap-2">
          <div
            class="h-5 w-16 animate-pulse rounded-full bg-accented"
          />
          <div
            class="h-3 w-20 animate-pulse rounded bg-accented"
          />
        </div>
      </div>
      <div class="flex gap-2">
        <div
          class="size-9 animate-pulse rounded-md bg-accented"
        />
        <div
          class="size-9 animate-pulse rounded-md bg-accented"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.report-list-skeleton {
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
