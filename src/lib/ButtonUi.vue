<script lang="ts">
import { computed } from "vue";

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  setup(props, context) {
    const { theme, size, level } = props;
    const {} = context.attrs;
    const classes = computed(() => ({
      [`liui-theme-${theme}`]: theme,
      [`liui-size-${size}`]: size,
      [`liui-level-${level}`]: level,
    }));
    return { size, classes };
  },
};
</script>
<template>
  <button
    class="liui-button"
    :disabled="disabled"
    :class="classes"
    v-bind="$attrs"
  >
    <span v-if="loading" class="liui-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.liui-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.liui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.liui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.liui-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.liui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.liui-theme-button {
    &.liui-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.liui-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.liui-theme-link {
    &.liui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.liui-theme-text {
    &.liui-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.liui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.liui-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.liui-theme-link,
  &.liui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .liui-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue transparent transparent transparent;
    border-style: solid;
    border-width: 2px;
    animation: liui-spin 1s infinite linear;
  }
}
@keyframes liui-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
