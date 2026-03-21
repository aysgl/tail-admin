<template>
  <defs>
    <filter
      :id="`filter0_${prefix}`"
      x="7.42383"
      y="6.2373"
      width="5.36841"
      height="20.5263"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood
        flood-opacity="0"
        result="BackgroundImageFix"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.5" />
      <feGaussianBlur stdDeviation="0.5" />
      <feComposite
        in2="hardAlpha"
        operator="out"
      />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
      />
    </filter>
    <filter
      :id="`filter1_${prefix}`"
      x="13.7422"
      y="12.9727"
      width="5.36841"
      height="13.7895"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood
        flood-opacity="0"
        result="BackgroundImageFix"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.5" />
      <feGaussianBlur stdDeviation="0.5" />
      <feComposite
        in2="hardAlpha"
        operator="out"
      />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
      />
    </filter>
    <filter
      :id="`filter2_${prefix}`"
      x="20.0547"
      y="8.76172"
      width="5.36841"
      height="18"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood
        flood-opacity="0"
        result="BackgroundImageFix"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.5" />
      <feGaussianBlur stdDeviation="0.5" />
      <feComposite
        in2="hardAlpha"
        operator="out"
      />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
      />
    </filter>
  </defs>
</template>

<script setup lang="ts">
defineProps<{
  prefix: string
}>()
</script>
