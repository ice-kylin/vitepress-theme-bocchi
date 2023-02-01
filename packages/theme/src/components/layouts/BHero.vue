<template>
  <div class="flex px-16 max-w-6xl mx-auto my-12 items-center space-x-16">
    <img
      alt="hero"
      class="max-w-[50%] rounded-3xl"
      src="../../assets/images/flower-bg.webp"
    />
    <div class="grow">
      <div class="my-10">
        <p class="font-art text-5xl grabient-text leading-loose">
          icekylin's blog
        </p>
      </div>
      <Links></Links>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Links from "../components/Links.vue";
</script>

<style scoped></style>
