<template>
  <div class="flex h-12 items-center justify-center">
    <Switch @click="theme.toggleDarkMode" :selected="theme.darkMode">
      <template #on>
        <Moon class="h-4 w-4"></Moon>
      </template>
      <template #off>
        <Sun class="h-4 w-4"></Sun>
      </template>
    </Switch>
  </div>
</template>

<script lang="ts" setup>
import Switch from "../m3/Switch.vue";
import Sun from "../icons/Sun.vue";
import Moon from "../icons/Moon.vue";
import { themeStore } from "../../store/index";

const theme = themeStore();
</script>

<style scoped></style>
