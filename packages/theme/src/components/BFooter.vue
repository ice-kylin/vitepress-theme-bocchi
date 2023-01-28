<template>
  <footer>
    <div class="footer-wrapper">
      <div class="info-wrapper">
        <div class="info">
          <p>vitepress-theme-bocchi</p>
        </div>
        <div class="media"></div>
      </div>
      <div class="links-wrapper"></div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {themeStore} from "../store";
import {storeToRefs} from "pinia";

const {lightScheme: light} = storeToRefs(themeStore());
</script>

<style scoped>
footer {
  background-color: v-bind('light.surface1');
}
</style>
