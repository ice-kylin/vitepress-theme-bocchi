<template>
  <header class="bg-surface/80 p-2 sticky top-0 w-full backdrop-blur z-50">
    <div class="max-w-6xl m-auto flex">
      <span class="font-art grabient-text leading-loose grow"
        >icekylin's blog</span
      >
      <div class="flex space-x-3 text-onSurfaceVariant items-center">
        <Translate></Translate>
        <VDivide class="h-4"></VDivide>
        <Github></Github>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Github from "../icons/Github.vue";
import Translate from "../icons/Translate.vue";
import VDivide from "../utils/VDivide.vue";
</script>

<style></style>
