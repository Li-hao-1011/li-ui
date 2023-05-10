<script setup lang="ts">
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

const emit = defineEmits<{
  (e: "update:value", visible: boolean): void;
}>();
const toggle = () => {
  emit("update:value", !props.value);
};
</script>
<template>
  <button
    class="liui-switch"
    @click="toggle"
    :class="{ 'liui-checked': props.value, 'liui-disabled': props.disabled }"
    :disabled="props.disabled"
  >
    <span></span>
  </button>
</template>
<style lang="scss">
@use "sass:math";
</style>
<style lang="scss">
// @use "sass:math";

$h: 22px;
$h2: $h - 4px;

.liui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all 250ms;
  }

  &.liui-checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.liui-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  &.liui-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
}
</style>
