<template>
  <footer class="bg-surface">
    <div class="max-w-6xl m-auto p-16">
      <HDivider class="mb-4"></HDivider>
      <div class="text-onSurfaceVariant">
        <div>
          <p
            class="info-title font-art text-lg grabient-text leading-loose my-3"
          >
            icekylin's blog
          </p>
          <p class="text-xs">Themes from bocchi, made with ❤️ by icekylin.</p>
        </div>
        <div></div>
      </div>
      <div class=""></div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import HDivider from "../utils/HDivider.vue";

export default defineComponent({
  components: { HDivider },
});
</script>

<style scoped></style>
