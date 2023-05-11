<script setup lang="ts">
import { ref } from "vue";
import SwitchUi from "../lib/SwitchUi.vue";
const bool = ref(true);
const bool1 = ref(true);
const bool2 = ref(false);
</script>
<template>
  <div class="switch">
    <h3>示例1：disabled: false</h3>
    <SwitchUi v-model:value="bool1" disabled />
    <br />
    <SwitchUi v-model:value="bool2" disabled />
  </div>
  <div class="switch">
    <h3>示例2：disabled: true</h3>
    <SwitchUi :value="bool" @update:value="bool = $event" />
  </div>
</template>
<style lang="scss" scoped></style>
