<script setup lang="ts">
import { provide, ref } from "vue";

const width = document.documentElement.clientWidth;

const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);
</script>
<template>
  <RouterView />
</template>
