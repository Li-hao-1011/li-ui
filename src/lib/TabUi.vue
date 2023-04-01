<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
});
</script>
<template>
  <div><slot></slot></div>
</template>
