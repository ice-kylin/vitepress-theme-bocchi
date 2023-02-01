<template>
  <div class="layout min-h-screen text-onBackground bg-background">
    <BHeader></BHeader>
    <BHero></BHero>
    <BArticle></BArticle>
    <BFooter></BFooter>
  </div>
</template>

<script lang="ts" setup>
import BFooter from "../components/footer/BFooter.vue";
import BHeader from "../components/header/BHeader.vue";
import BHero from "../components/hero/BHero.vue";
import BArticle from "../components/article/BArticle.vue";
</script>

<style></style>
