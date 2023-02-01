<template>
  <div class="layout min-h-screen text-onBackground bg-background">
    <BHeader></BHeader>
    <BHero></BHero>
    <div>
      <article class="max-w-6xl m-auto px-16">
        <BMarkdown>
          <Content />
        </BMarkdown>
      </article>
    </div>
    <BFooter></BFooter>
  </div>
</template>

<script lang="ts" setup>
import BFooter from "../components/layouts/BFooter.vue";
import BHeader from "../components/layouts/BHeader.vue";
import BHero from "../components/layouts/BHero.vue";
import BMarkdown from "../components/layouts/BMarkdown.vue";
import { Content } from "vitepress";
</script>

<style></style>
