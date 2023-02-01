<template>
  <header
    class="px-4 md:px-16 bg-surface/80 sticky top-0 w-full backdrop-blur z-50"
  >
    <!-- py-2 -->
    <div class="max-w-7xl m-auto py-1">
      <div class="flex gap-x-1">
        <LeadingIcon></LeadingIcon>
        <Headline></Headline>
        <TrailingIcon></TrailingIcon>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Headline from "./Headline.vue";
import TrailingIcon from "./TrailingIcon.vue";
import LeadingIcon from "./LeadingIcon.vue";
</script>

<style></style>
