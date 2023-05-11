<script setup lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";

const menuVisible = inject<Ref<Boolean>>("menuVisible");
</script>
<template>
  <div class="layout">
    <top-nav toggle-menu-button />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li><RouterLink to="/doc/intro">文档介绍</RouterLink></li>
          <li><RouterLink to="/doc/start">开始</RouterLink></li>
          <li><RouterLink to="/doc/install">安装</RouterLink></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li><RouterLink to="/doc/switch">Switch 组件</RouterLink></li>
          <li><RouterLink to="/doc/button">Button 组件</RouterLink></li>
          <li><RouterLink to="/doc/dialog">Dialog 组件</RouterLink></li>
          <li><RouterLink to="/doc/Tabs">Tabs 组件</RouterLink></li>
          <li><RouterLink to="/doc/more">敬请期待..</RouterLink></li>
        </ol>
      </aside>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;

  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 2;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-indent: 1rem;
      }
      .router-link-active {
        background: #fff;
        text-decoration: none;
      }
    }
  }
}
main {
  overflow: auto;
  z-index: 1;
}
</style>
