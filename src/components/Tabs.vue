<script setup lang="ts">
import { ref } from "vue";
import Tabs from "../lib/TabsUi.vue";
import Tab from "../lib/TabUi.vue";
const x = ref("tab2");
</script>
<template>
  <div>
    <tabs v-model:selected="x">
      <tab name="tab1" title="导航一">内容一</tab>
      <tab name="tab2" title="导航二很长很长很长很长很长很长">内容二</tab>
    </tabs>
  </div>
</template>
