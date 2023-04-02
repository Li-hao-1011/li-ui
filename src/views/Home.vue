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
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>使用 Vue3</h3>
        <p>使用 Vue3 Setup API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>使用 TypeScript</h3>
        <p>源代码采用 TypeScript 编写</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light-idea"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码简单易懂</p>
      </li>
    </ul>
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
  // border-bottom-left-radius: 50% 40px;
  // border-bottom-right-radius: 50% 40px;
  clip-path: ellipse(80% 60% at 50% 40%);
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
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
