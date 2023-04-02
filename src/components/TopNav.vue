<script setup lang="ts">
import { inject, Ref } from "vue";
defineProps({
  toggleMenuButton: {
    type: Boolean,
    default: false,
  },
});

const menuVisible = inject<Ref<Boolean>>("menuVisible");
const toggleMenu = () => {
  menuVisible !== undefined && (menuVisible.value = !menuVisible.value);
};
</script>
<template>
  <div class="topnav">
    <routerLink to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-kl"></use>
      </svg>
    </routerLink>
    <ul class="menu">
      <li>
        <routerLink to="/doc">文档</routerLink>
      </li>
    </ul>
    <span v-if="toggleMenuButton" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>

<style lang="scss" scoped>
$color: #00b0a8;
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: $color;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
