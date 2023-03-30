<script setup lang="ts">
import ButtonUi from "../lib/ButtonUi.vue";
const onCLick = () => {
  console.log("你好");
};
const onFocus = () => {
  console.log("onFocus");
};
const onMouse = () => {
  console.log("onMouse");
};
</script>
<template>
  <div>
    <h2>示例1 theme</h2>
    <ButtonUi>你好 </ButtonUi>
    <ButtonUi theme="button">你好 </ButtonUi>
    <ButtonUi theme="link">你好 </ButtonUi>
    <ButtonUi theme="text">你好 </ButtonUi>
  </div>
  <div>
    <h2>示例2 size</h2>
    <div>
      <ButtonUi size="big">你好 </ButtonUi>
      <ButtonUi>你好 </ButtonUi>
      <ButtonUi size="small">你好 </ButtonUi>
    </div>
    <div>
      <ButtonUi size="big" theme="link">你好 </ButtonUi>
      <ButtonUi theme="link">你好 </ButtonUi>
      <ButtonUi size="small" theme="link">你好 </ButtonUi>
    </div>
    <div>
      <ButtonUi size="big" theme="text">你好 </ButtonUi>
      <ButtonUi theme="text">你好 </ButtonUi>
      <ButtonUi size="small" theme="text">你好 </ButtonUi>
    </div>
  </div>
  <div>
    <h2>示例3 level</h2>
    <div>
      <ButtonUi level="main">你好 </ButtonUi>
      <ButtonUi>你好 </ButtonUi>
      <ButtonUi level="danger">你好 </ButtonUi>
    </div>
    <div>
      <ButtonUi level="main" theme="link">你好 </ButtonUi>
      <ButtonUi theme="link">你好 </ButtonUi>
      <ButtonUi level="danger" theme="link">你好 </ButtonUi>
    </div>
    <div>
      <ButtonUi level="main" theme="text">你好 </ButtonUi>
      <ButtonUi theme="text">你好 </ButtonUi>
      <ButtonUi level="danger" theme="text">你好 </ButtonUi>
    </div>
  </div>
  <div>
    <h2>示例4 disabled</h2>
    <ButtonUi disabled>你好 </ButtonUi>
    <ButtonUi :disabled="true" theme="link">你好 </ButtonUi>
    <ButtonUi disabled theme="text">你好 </ButtonUi>
  </div>
</template>
