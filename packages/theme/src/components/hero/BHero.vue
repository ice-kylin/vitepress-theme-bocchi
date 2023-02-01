<template>
  <div class="px-4 md:px-16">
    <div
      class="flex max-w-7xl mx-auto my-8 items-center gap-4 md:gap-16 flex-wrap md:flex-nowrap"
    >
      <div class="hero-img w-full md:w-7/12 rounded-3xl"></div>
      <div class="grow">
        <div class="mb-10">
          <p class="font-art text-5xl text-onSurface leading-loose">
            icekylin's blog
          </p>
        </div>
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
  background-size: cover;
  background-position: right;
  background-image: url("../../assets/images/flower-bg.webp");
  background-repeat: no-repeat;
  height: 80vh;
}
</style>
