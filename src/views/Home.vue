<script setup lang="ts">
import TopNav from "../components/TopNav.vue";
</script>

<template>
  <top-nav></top-nav>
  <div class="banner">
    <h1>LI-UI</h1>
    <h2>一个基于Vue3的UI组件库</h2>
    <p class="actions">
      <a href="https://github.com/Li-hao-1011">GitHub</a>
      |
      <RouterLink to="/doc">开始</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h / 2);
      padding: 0 8px;
    }
  }
}
</style>
