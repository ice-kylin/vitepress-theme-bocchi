<template>
  <div
    class="layout flex min-h-screen flex-col gap-y-8 bg-background text-onBackground"
  >
    <BHeader></BHeader>
    <BHero></BHero>
    <SectionDivider></SectionDivider>
    <BArticle></BArticle>
    <SectionDivider></SectionDivider>
    <BFooter></BFooter>
  </div>
</template>

<script lang="ts" setup>
import BFooter from "../components/footer/BFooter.vue";
import BHeader from "../components/header/BHeader.vue";
import BHero from "../components/hero/BHero.vue";
import BArticle from "../components/article/BArticle.vue";
import SectionDivider from "../components/utils/SectionDivider.vue";
</script>

<style scoped></style>
