<template>
  <div class="px-4 md:px-16">
    <article class="max-w-7xl m-auto my-8">
      <BMarkdown>
        <Content />
      </BMarkdown>
    </article>
  </div>
</template>

<script lang="ts" setup>
import BMarkdown from "./BMarkdown.vue";
import { Content } from "vitepress";
</script>

<style scoped></style>
