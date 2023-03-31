<script setup lang="ts">
import Button from "./ButtonUi.vue";
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "标题",
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});
const emits = defineEmits(["update:visible", "ok", "cancel"]);
const onClose = () => {
  emits("update:visible", false);
};
const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    onClose();
  }
};
const onCancel = () => {
  props.cancel?.();
};
const onOk = () => {
  if (props.ok?.() !== false) {
    onClose();
  }
};
</script>

<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="liui-dialog-overlay" @click="onClickOverlay"></div>
      <div class="liui-dialog-wrapper">
        <div class="liui-dialog">
          <header>
            <slot name="title">{{ title }}</slot>
            <span class="liui-dialog-close" @click="onClose"></span>
          </header>
          <main>
            <slot name="content"> </slot>
          </main>
          <footer>
            <Button @click="onCancel">Cancel</Button>
            <Button level="main" @click="onOk">OK</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.liui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
