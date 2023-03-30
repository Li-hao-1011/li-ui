<script setup lang="ts">
import { readonly } from "vue";
const props = defineProps({
  value: {
    type: Boolean,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
    validator(value: string) {
      return ["large", "default", "small"].includes(value);
    },
  },
});
const emits = defineEmits(["update:value"]);

const switchSize = readonly({
  large: "14px",
  default: "18px",
  small: "24px",
});

const toggle = () => {
  emits("update:value", !props.value);
};
</script>
<template>
  <button
    class="liui-switch"
    :disabled="props.disabled"
    @click="toggle"
    :class="{ 'liui-checked': props.value, 'liui-disabled': props.disabled }"
  >
    <!-- <span></span> -->
  </button>
</template>

<style lang="scss">
$h: v-bind("switchSize[props.size]");
$h2: calc(#{$h} - 4px);
.liui-switch {
  height: $h;
  width: calc(#{$h} * 2);
  border: none;
  background: grey;
  border-radius: calc(#{$h} / 2);
  position: relative;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.liui-checked {
    background: blue;
    &::after {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &.liui-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc(#{$h2} / 2);
    transition: left 250ms;
  }
}
</style>
