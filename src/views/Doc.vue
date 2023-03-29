<script setup lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";

const menuVisible = inject<Ref<Boolean>>("menuVisible");
</script>

<template>
  <top-nav />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>{{ menuVisible }}</li>

        <li><RouterLink to="/doc/switch">Switch 组件</RouterLink></li>
        <li><RouterLink to="/doc/button">Button 组件</RouterLink></li>
        <li><RouterLink to="/doc/dialog">Dialog 组件</RouterLink></li>
        <li><RouterLink to="/doc/Tabs">Tabs 组件</RouterLink></li>
      </ol>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;

  z-index: 1;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
