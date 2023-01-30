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
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  background-color: v-bind('light.surface1');
  box-sizing: border-box;
}

.footer-wrapper {
  max-width: 1152px;
  margin: auto;
  padding: 16px;
}

.info {
  font-family: Pacifico, sans-serif;
  color: v-bind('light.onSurface');
}
</style>
