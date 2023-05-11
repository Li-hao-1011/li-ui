<script setup lang="ts">
import ButtonUi from "../lib/ButtonUi.vue";
</script>
<template>
  <div>
    <h2>示例1：theme</h2>
    <ButtonUi>普通按钮</ButtonUi>
    <ButtonUi theme="link">链接按钮</ButtonUi>
    <ButtonUi theme="text">文本按钮</ButtonUi>
  </div>
  <div>
    <h2>示例2：size</h2>
    <div>
      <ButtonUi size="big">大大大</ButtonUi>
      <ButtonUi>正常</ButtonUi>
      <ButtonUi size="small">小小小</ButtonUi>
    </div>
    <div>
      <ButtonUi size="big" theme="link">大大大 </ButtonUi>
      <ButtonUi theme="link">正常</ButtonUi>
      <ButtonUi size="small" theme="link">小小小</ButtonUi>
    </div>
    <div>
      <ButtonUi size="big" theme="text">大大大 </ButtonUi>
      <ButtonUi theme="text">正常</ButtonUi>
      <ButtonUi size="small" theme="text">小小小</ButtonUi>
    </div>
  </div>
  <div>
    <h2>示例3：level</h2>
    <div>
      <ButtonUi level="main">主要按钮</ButtonUi>
      <ButtonUi>普通按钮</ButtonUi>
      <ButtonUi level="danger">危险按钮</ButtonUi>
    </div>
    <div>
      <ButtonUi level="main" theme="link">主要链接按钮</ButtonUi>
      <ButtonUi theme="link">普通链接按钮</ButtonUi>
      <ButtonUi level="danger" theme="link">危险链接按钮</ButtonUi>
    </div>
    <div>
      <ButtonUi level="main" theme="text">主要文本按钮</ButtonUi>
      <ButtonUi theme="text">普通文本按钮</ButtonUi>
      <ButtonUi level="danger" theme="text">危险文本按钮</ButtonUi>
    </div>
  </div>
  <div>
    <h2>示例4：disabled</h2>
    <ButtonUi disabled>禁用按钮</ButtonUi>
    <ButtonUi :disabled="true" theme="link">禁用链接按钮</ButtonUi>
    <ButtonUi disabled theme="text">禁用文本按钮</ButtonUi>
  </div>
  <div>
    <h2>示例5：loading</h2>
    <ButtonUi loading>加载中</ButtonUi>
    <ButtonUi>加载完成</ButtonUi>
  </div>
</template>
