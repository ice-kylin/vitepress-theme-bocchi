<template>
  <div class="layout min-h-screen bg-background text-onBackground">
    <BHeader></BHeader>
    <div>
      <article class="max-w-6xl m-auto">
        <BMarkdown>
          <Content/>
        </BMarkdown>
      </article>
    </div>
    <BFooter></BFooter>
  </div>
</template>

<script setup lang="ts">
import BFooter from "../components/BFooter.vue";
import BHeader from "../components/BHeader.vue";
import BMarkdown from "../components/BMarkdown.vue";
import {Content} from "vitepress";</script>

<style>

</style>
