<script setup lang="ts">
import { provide, ref } from "vue";

const menuVisible = ref(false);
provide("menuVisible", menuVisible);
</script>
<template>
  <RouterView />
</template>
