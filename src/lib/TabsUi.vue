<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watchEffect } from "vue";
import Tab from "./TabUi.vue";
const props = defineProps({
  selected: { type: String, required: true },
});
const emits = defineEmits(["update:selected"]);
interface DefaultProps {
  type: unknown;
  props: { name: String; title: String };
}
const slots = useSlots();
const defaults = slots.default?.() as unknown as Array<DefaultProps>;
defaults.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error("Tabs 的子组件必须是 Tab");
  }
});
const current = computed(() =>
  defaults.find((tag) => tag.props.name === props.selected)
);

const tabProps = defaults.map((tag) => ({
  title: tag.props.title,
  name: tag.props.name,
}));
const select = (name: String) => {
  emits("update:selected", name);
};

const selectedItem = ref<HTMLDivElement | null>(null);
const indicator = ref<HTMLDivElement | null>(null);
const container = ref<HTMLDivElement | null>(null);
const selectedChange = () => {
  const { width, left: selectedLeft } =
    selectedItem.value!.getBoundingClientRect();
  const { left: navLeft } = container.value!.getBoundingClientRect();
  const left = selectedLeft - navLeft;
  indicator.value!.style.left = left + "px";
  indicator.value!.style.width = width + "px";
};
onMounted(() => {
  watchEffect(selectedChange);
});
</script>
<template>
  <div class="liui-tabs">
    <div class="liui-tabs-nav" ref="container">
      <div
        class="liui-tabs-nav-item"
        :class="{ selected: props.name === selected }"
        v-for="(props, i) in tabProps"
        :key="i"
        :ref="
          (el) => {
            if (props.name === selected) selectedItem = el as HTMLDivElement;
          }
        "
        @click="select(props.name)"
      >
        {{ props.title }}
      </div>
      <div ref="indicator" class="liui-tabs-nav-indicator"></div>
    </div>
    <div class="liui-tabs-content">
      <!-- 使用 css display 控制显示和隐藏 -->
      <!-- <component
        class="liui-tabs-content-item"
        v-for="(c, i) in defaults"
        :is="c"
        :class="{ selected: c.props.name === selected }"
        :key="i"
      /> -->
      <!-- 通过计算属性得到选择的组件再渲染 -->
      <component
        class="liui-tabs-content-item selected"
        :is="current"
        :key="current"
      ></component>
    </div>
  </div>
</template>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.liui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
