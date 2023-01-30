<template>
  <div class="layout">
    <div class="footer-wrapper">
      <BFooter></BFooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import BFooter from "../components/BFooter.vue";

import {themeStore} from "../store";
import {storeToRefs} from "pinia";

const {lightScheme: light} = storeToRefs(themeStore());
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: v-bind('light.background');
}
</style>
