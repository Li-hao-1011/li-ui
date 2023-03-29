<script setup lang="ts">
import { ref } from "vue";
import SwitchUi from "../lib/SwitchUi.vue";
const bool = ref(false);
</script>
<template>
  <div class="switch">
    <p>size: large | disabled: false</p>
    <SwitchUi v-model:value="bool" disabled size="large" />
  </div>
  <div class="switch">
    <p>size: default | disabled: true</p>
    <SwitchUi :value="bool" @update:value="bool = $event" />
  </div>
  <div class="small">
    <p>size: large | disabled: false</p>
    <SwitchUi v-model:value="bool" disabled size="small" />
  </div>
</template>
<style lang="scss" scoped></style>
