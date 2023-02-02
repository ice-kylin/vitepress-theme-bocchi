<template>
  <div class="p-4 md:px-16">
    <div
      class="mx-auto flex max-w-7xl flex-wrap items-center gap-y-4 md:flex-nowrap md:gap-x-16"
    >
      <div
        class="hero-img h-[50vh] w-full rounded-3xl md:h-[80vh] md:w-7/12"
      ></div>
      <div class="grow">
        <p
          class="mb-3 font-art text-3xl leading-loose text-onSurface md:mb-6 md:text-5xl"
        >
          icekylin's blog
        </p>
        <Links></Links>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Links from "../utils/Links.vue";
</script>

<style scoped>
.hero-img {
  background-image: url("../../assets/images/flower-bg.webp");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
}
</style>
