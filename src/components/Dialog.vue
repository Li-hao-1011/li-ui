<script setup lang="ts">
import DialogUi from "../lib/DialogUi.vue";
import Button from "../lib/ButtonUi.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
const visible = ref(false);
const f1 = () => {
  return false;
};
const f2 = () => {};
const showDialog = () => {
  openDialog({ title: "直接打开Dialog标题", content: "直接打开Dialog" });
};
</script>
<template>
  <div>
    <h2>示例1：使用Dialog组件</h2>
    <DialogUi
      v-model:visible="visible"
      :close-on-click-overlay="false"
      :ok="f1"
      :cancel="f2"
      title="自定义标题"
    >
      <template v-slot:title>
        <strong>加粗标签</strong>
      </template>
      <template #content>
        <div>hi1</div>
        <div>hi2</div>
        <div>hi3</div>
      </template>
    </DialogUi>
    <Button
      @click="
        () => {
          visible = !visible;
        }
      "
      >打开dialog</Button
    >
  </div>
  <div>
    <h2>示例2：使用openDialog</h2>
    <Button level="main" @click="showDialog">直接打开Dialog</Button>
  </div>
</template>
