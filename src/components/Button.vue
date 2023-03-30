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
    <h1>Button</h1>
    <ButtonUi>你好 </ButtonUi>
    <br />
    <ButtonUi theme="button">你好 </ButtonUi>
    <br />
    <ButtonUi theme="link">你好 </ButtonUi>
    <br />
    <ButtonUi theme="text">你好 </ButtonUi>
  </div>
</template>
