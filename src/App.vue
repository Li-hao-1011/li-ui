<script setup lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

const width = document.documentElement.clientWidth;

const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>
<template>
  <RouterView />
</template>
