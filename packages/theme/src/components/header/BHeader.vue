<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 w-full bg-surface/80 px-4 backdrop-blur md:px-16"
  >
    <!--  py-2  -->
    <div class="m-auto max-w-7xl">
      <div class="flex gap-x-1">
        <LeadingIcon></LeadingIcon>
        <Headline></Headline>
        <TrailingIcon></TrailingIcon>
        <DarkModeSwitch></DarkModeSwitch>
      </div>
    </div>
  </header>
  <div class="h-4"></div>
</template>

<script lang="ts" setup>
import Headline from "./Headline.vue";
import TrailingIcon from "./TrailingIcon.vue";
import LeadingIcon from "./LeadingIcon.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
</script>

<style scoped></style>
