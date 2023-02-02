<template>
  <Icons>
    <Icon>
      <Translate></Translate>
    </Icon>
    <VDivide class="h-4"></VDivide>
    <Icon>
      <Github></Github>
    </Icon>
  </Icons>
</template>

<script lang="ts" setup>
import Github from "../icons/Github.vue";
import VDivide from "../utils/VDivide.vue";
import Translate from "../icons/Translate.vue";
import Icons from "./HeaderIcon.vue";
import Icon from "./Icon.vue";
</script>

<style scoped></style>
