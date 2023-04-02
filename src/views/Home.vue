<script setup lang="ts">
import TopNav from "../components/TopNav.vue";
</script>

<template>
  <div class="liui-topnav-banner">
    <top-nav></top-nav>
    <div class="banner">
      <h1>LI UI</h1>
      <h2>一个基于Vue3的UI组件库</h2>
      <p class="actions">
        <a href="https://github.com/Li-hao-1011">GitHub</a>
        <RouterLink to="/doc">开始</RouterLink>
      </p>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light-idea"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 20px;
$color: #00b0a8;
.liui-topnav-banner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  > .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;
    > .actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: $green;
        color: #fff;
        display: inline-block;
        border-radius: $border-radius;
        padding: 8px 24px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  .features {
    > svg {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
