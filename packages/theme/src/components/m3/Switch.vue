<template>
  <div
    class="relative box-border inline-block h-8 w-[52px] select-none appearance-none rounded-full"
    :class="selected ? 'bg-primary' : 'bg-surfaceVariant'"
    @click="toggle"
  >
    <div
      class="absolute top-1 h-6 w-6 select-none appearance-none rounded-full bg-clip-content outline-none"
      :class="selected ? 'right-1 bg-onPrimary' : 'left-1 bg-outline'"
      type="checkbox"
    >
      <div
        class="flex h-6 w-6 items-center justify-center"
        :class="selected ? 'text-onPrimaryContainer' : 'text-onPrimary'"
      >
        <div v-show="selected">
          <slot name="on"></slot>
        </div>
        <div v-show="!selected">
          <slot name="off"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from "vue";

const props = defineProps<{ selected: boolean }>();

let selected = toRef(props, "selected");

function toggle() {
  selected.value = !selected;
}
</script>

<style scoped></style>
