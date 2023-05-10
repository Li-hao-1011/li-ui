<script setup lang="ts">
import { ref } from "vue";
import SwitchUi from "../lib/SwitchUi.vue";
const bool = ref(true);
const bool1 = ref(true);
</script>
<template>
  <div class="switch">
    <p>disabled: false</p>
    <SwitchUi v-model:value="bool1" disabled />
  </div>
  <div class="switch">
    <p>disabled: true</p>
    <SwitchUi :value="bool" @update:value="bool = $event" />
  </div>
</template>
<style lang="scss" scoped></style>
